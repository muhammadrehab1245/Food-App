import { useToast } from "@chakra-ui/react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const toast = useToast()

  const showtoast=(msg,status)=>{
    return (
      toast({
        description: msg,
        status: status,
        duration: 5000,
        isClosable: true,
      })
    )
  }

  const initialorders = [];
  const [order, setorder] = useState(initialorders);
  let addorder =  (name, tag, price,img,id) => {
   
let orders={
  _id:parseInt(id),
    "name":name,
    "tag":tag,
    "price":price,
    "img":img,
    "quantity":1
}
let checkinglist=order.filter((orderlist)=>{
  return orders._id===orderlist._id
})

if (checkinglist.length===0) {
  setorder(order.concat(orders));
showtoast('Item Added In The Cart','success')
}

else{
  showtoast('Item Already Added In The Cart','warning')
}
  };

  const change=(sign,id)=>{
      // eslint-disable-next-line
  const updatedorder=order.map(o=>{
    if (o._id===parseInt(id)) {
      if (sign==='+') {
        showtoast('Item Quantity Incremented In The Cart','success')
        return { ...o, 'quantity': o.quantity + 1 };
      }
      else if(sign==='-'){
        o.quantity>1?showtoast('Item Quantity Decremented In The Cart','success'):showtoast('Item Quantity Can"t be Decremented In The Cart','warning')
        return {...o,"quantity":o.quantity>1?o.quantity-1:o.quantity}
      }
    }
    else{
      return o;
    }
  })
  setorder(updatedorder)

}

  const clearorder=()=>{
const emptyorder=order.filter(o=>{
  return o.price<0
})
    setorder(emptyorder)
    showtoast('Cart is Cleared','success')
  }
  

  let deleteorder =(id) => {
  
    const delorder = order.filter((o) => {
      return o._id !== parseInt(id);
    });
    setorder(delorder);
    showtoast('Item Removed Successfully','success')
  };
  return (
    <Notecontext.Provider value={{ order, addorder ,change,clearorder, deleteorder,}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
