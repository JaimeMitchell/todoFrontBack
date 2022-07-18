const { json } = require('express')
const express = require('express')

//  * Create a Router
const router = express.Router()
const contactsModel = require('../models/contactsSchema')


//* GET CONTACTS
router.get('/', async (req, res) => {
    try {
        const contacts = await contactsModel.find()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
    }
})

// CREATE CONTACTS

router.post('/', async (req, res) => {
    const contactsData = req.body //getting the data from the request]
    // send back the response
    try {
        const contacts = await contactsModel.create(contactsData) //create the contacts in the DB
        console.log(contactsData)
        // send back the response
        res.status(201).json(contacts)
        //    res.status(201).json({data: contacts})
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad request')

    }
})
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const contacts = await contactsModel.findById(id)
        res.status(204).json(contacts)
    }
    catch (error) {
        console.log(error)
    }
})

//UPDATE CONTACT
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newContactsData = req.body
    try {
        //find contact by id
        const contact = await contactsModel.findByIdAndUpdate(id, newContactsData, { new: true })
        res.status(200).json({ msg: 'Contact was updated' })
    }
    catch (error) {
        console.log(error)
    }
})

//DELETE A CONTACT
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const users = await usersModel.findByIdAndDelete(id)
        res.status(200).json({ msg: 'User was deleted!' })
    }
    catch (error) {
        console.log(error)
    }
})


module.exports = router