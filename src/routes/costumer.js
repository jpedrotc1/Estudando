const CostumerModel = require('../models/costumer.model')
const express = require('express')
const router = express.Router()

//Criando um novo costumer
router.post('/costumer', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request baiou')
    }

    // const user = {
    //     name: 'firstName lastname',
    //     email: 'email@gmail.com'
    // }
    const model = new CostumerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/costumer', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL param email')
    }
    
    CostumerModel.findOne({
        email: req.query.email
    })

    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })
})

router.put('/costumer', (req,res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL param email')
    }
    
    CostumerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })

})

router.delete('/costumer', (req,res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL param email')
    }
    
    CostumerModel.findOneAndRemove({
        email: req.query.email
    })

    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.stats(500).json(err)
    })
})



module.exports = router