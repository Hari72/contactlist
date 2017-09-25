const express = require("express");
const router = express.Router();

const Contact = require("../models/contacts.js");

// Retrieving the contacts
router.get("/contacts", (req, res, next) => {
  Contact.find(function(err, contacts) {
    res.json(contacts);
  });
});

// adding a contact
router.post("/contact", (req, res, next) => {
  let contact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number
  });

  contact.save((err, contacts)=> {
    if(err) {
      res.json({msg: "Failed to add contact"});
    } else {
      res.json({msg: "Contact added successfully"});
    }
  });
});

// deleting a contact
router.delete("/contact/:id", (req, res, next) => {
  Contact.remove({_id:req.params.id}, function(err, result){
    if(err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
