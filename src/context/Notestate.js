// Importing necessary dependencies from external libraries
import { useToast } from "@chakra-ui/react";
import Notecontext from "./Notecontext";
import { useState } from "react";

// Creating a component to manage the state and actions related to orders
const Notestate = (props) => {
  // Using the 'useToast' hook from Chakra UI for displaying notifications
  const toast = useToast();

  // Function to display toast notifications with the given message and status
  const showtoast = (msg, status) => {
    return (
      toast({
        description: msg,
        status: status,
        duration: 5000,
        isClosable: true,
      })
    );
  };

  // Initializing the 'order' state with an empty array
  const initialorders = [];
  const [order, setorder] = useState(initialorders);

  // Function to fetch orders from the server
  const getorders = async () => {
    // Fetching orders from the server using a GET request
    const response = await fetch(`http://localhost:5000/foodapp/items/fetchitems`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });

    // Parsing the response as JSON and updating the 'order' state
    const items = await response.json();
    setorder(items);
  };

  // Function to add an order to the cart
  let addorder = async (itemname, tag, price, img) => {
    // Checking if the user is logged in before adding an item to the cart
    if (!localStorage.getItem('token')) {
      showtoast('First, you need to login for ordering items', 'warning');
    } else {
      // Filtering the current order to check if the item is already in the cart
      let checkinglist = order.filter((orderlist) => {
        return itemname === orderlist.itemname;
      });

      // If the item is not in the cart, making a POST request to add it
      if (checkinglist.length === 0) {
        const response = await fetch(`http://localhost:5000/foodapp/items/additems`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
          },
          body: JSON.stringify({ itemname, price, img, tag, quantity: 1 })
        });
        let orders = await response.json();
        setorder(order.concat(orders));
        showtoast('Item Added In The Cart', 'success');
      } else {
        showtoast('Item Already Added In The Cart', 'warning');
      }
    }
  };

  // Function to update the quantity of an item in the cart
  const change = async (sign, id, itemname) => {
    // Updating the quantity locally and displaying a toast notification
    const updatedorder = order.map(o => {
      // eslint-disable-next-line
      if (o.itemname === itemname) {
        o.quantity = parseInt(o.quantity);
        if (sign === '+') {
          showtoast('Item Quantity Incremented In The Cart', 'success');
          return { ...o, 'quantity': o.quantity + 1 };
        } else if (sign === '-') {
          o.quantity > 1 ? showtoast('Item Quantity Decremented In The Cart', 'success') :
            showtoast('Item Quantity Can\'t be Decremented In The Cart', 'warning');
          return { ...o, "quantity": o.quantity > 1 ? o.quantity - 1 : o.quantity };
        }
      } else {
        return o;
      }
    });

    // Filtering the updated order to get the specific item
    let updatelist = updatedorder.filter((orderlist) => {
      return id === orderlist._id;
    });

    // Making a PUT request to update the item quantity on the server
    // eslint-disable-next-line
    const response = await fetch(`http://localhost:5000/foodapp/items/updateitem/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ quantity: updatelist[0].quantity })
    });

    // Updating the local 'order' state with the modified order
    setorder(updatedorder);
  };

  // Function to clear the entire cart
  const clearorder = async() => {
    // Filtering out items with negative prices (indicating they are not part of the order)
    const response = await fetch(`http://localhost:5000/foodapp/items/clearitems`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify(order)
    });

    const emptyorder = order.filter(o => {
      return o.price < 0;
    });
    setorder(emptyorder);
    showtoast('Cart is Cleared', 'success');
  };

  // Function to delete a specific item from the cart
  let deleteorder = async (id) => {
    // Making a DELETE request to remove the item from the server
    // eslint-disable-next-line
    const response = await fetch(`http://localhost:5000/foodapp/items/deleteitem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });

    // Filtering out the deleted item from the local 'order' state
    const delorder = order.filter((o) => {
      return o._id !== id;
    });
    setorder(delorder);
    showtoast('Item Removed Successfully', 'success');
  };

  // Providing the state and actions to components using the 'Notecontext' provider
  return (
    <Notecontext.Provider value={{ order, getorders, addorder, change, clearorder, deleteorder, showtoast }}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
