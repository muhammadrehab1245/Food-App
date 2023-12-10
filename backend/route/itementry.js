const express = require('express');

// Creating a router object to define routes
const router = express.Router(); 

// Importing middleware to identify and authenticate users
const identifyuser = require('../middleware/identify');

// Importing the 'cartitem' model for handling cart items
const cartitem = require('../models/cartitem');

// Route to fetch items from the cart for the authenticated user
router.get('/fetchitems', identifyuser, async (req, res) => {
    const itemfinding = new Promise(async (resolve, reject) => { 
        try {
            // Finding items in the cart for the authenticated user
            const items = await cartitem.find({ user: req.user.id });
            resolve(items);
        } catch (e) {
            reject(e.message);
        }
    });

    itemfinding
        .then((value) => {
            res.json(value);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

// Route to add items to the cart for the authenticated user
router.post('/additems', identifyuser, async (req, res) => {
    const itemadding = new Promise(async (resolve, reject) => {   
        try {
            // Extracting item details from the request body
            const { itemname, price, img, quantity, tag } = req.body;
            // Creating a new cart item
            const item = new cartitem({
                itemname, price, img, quantity, tag, user: req.user.id
            });
            // Saving the new item to the database
            const itemSaved = await item.save();
            resolve(itemSaved);
        } catch (e) {
            console.log(e.message);
            reject(e.message);
        }
    });

    itemadding
        .then((value) => {
            res.json(value);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

// Route to update the quantity of an item in the cart for the authenticated user
router.put('/updateitem/:id', identifyuser, async (req, res) => {
    const { quantity } = req.body;
    const itemupdating = new Promise(async (resolve, reject) => { 
        let updateditem = {};
        if (quantity) {
            updateditem.quantity = quantity;
        }
        let item = await cartitem.findById(req.params.id);
        if (!item) {
            reject({ msg: "Not Found", msgcode: 404 });
        } else {
            if (item.user.toString() !== req.user.id) {
                reject({ msg: 'Not Allowed', msgcode: 401 });
            } else {
                // Updating the item's quantity in the database
                item = await cartitem.findByIdAndUpdate(req.params.id, { $set: updateditem }, { new: true });
                resolve(item);
            }
        }
    });

    itemupdating
        .then((value) => {
            res.json({ value });
        })
        .catch((e) => {
            res.status(e.msgcode).send(e.msg);
        });
});

// Route to delete an item from the cart for the authenticated user
router.delete('/deleteitem/:id', identifyuser, async (req, res) => {
    const itemdeleting = new Promise(async (resolve, reject) => { 
        try {
            let item = await cartitem.findById(req.params.id);
            if (!item) {
                reject({ msg: "Item not found", msgcode: 404 });
            } else {
                if (item.user.toString() !== req.user.id) {
                    reject({ msg: 'Not Allowed', msgcode: 405 });
                } else {
                    // Deleting the item from the database
                    item = await cartitem.findByIdAndDelete(req.params.id);
                    resolve({ "Success": "Item has been deleted", item: item });
                }
            }
        } catch (e) {
            reject({ msg: e.message, msgcode: 500 });
        }
    });

    itemdeleting
        .then((value) => {
            res.json(value);
        })
        .catch((e) => {
            res.status(e.msgcode).send(e.msg);
        });
});
router.delete('/clearitems', identifyuser, async (req, res) => {
    const clearingorder = new Promise(async (resolve, reject) => { 
  
        try {
          for (let items in req.body) {
            await cartitem.findByIdAndDelete(req.body[items]._id);
             } 
             resolve("Cart is cleared")
        } catch (e) {
            reject({ msg: e.message, msgcode: 500 });
        } 
    });

    clearingorder
        .then((value) => {
            res.json(value);
        })
        .catch((e) => {
            res.status(e.msgcode).send(e.msg);
        }); 
});
// Export for routing
module.exports = router;