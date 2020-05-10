const express = require('express')
const router = express.Router()

const { models } = require('../models/schems')
const Record = models.find({})

router.get('/', function (req, res) {
  Record.exec((err, data) => {
    if (err) throw err
    res.render('index', { title: 'Complete Record', Set: data })
  })
})

//get form
router.get('/insert', (req, res) => {
  res.render('insert', { title: 'Create New' })
})
//post the form
router.post('/', (req, res) => {
  const box = new models({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    street: req.body.street,
    Date: Date.now(),
    status: true
  })
  box.save((err, data) => {
    if (err) throw err
    res.redirect('/')
  })
})

router.get('/del/:id', function (req, res) {
  let id = req.params.id
  let del = models.findByIdAndDelete(id)
  del.exec((err, data) => {
    if (err) throw err
    res.redirect('/')
  })
})
router.get('/edit/:id', function (req, res) {
  let id = req.params.id
  let edit = models.findById(id)
  edit.exec((err, data) => {
    if (err) throw err
    res.render('update', { Set: data })
  })
})

router.post('/editer', (req, res) => {
  let block = models.findByIdAndUpdate(
     req.body.id ,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      street: req.body.street,
      Date: Date.now(),
      status: true
    }
  )
  block.exec((err, data) => {
    if (err) throw err
    res.redirect('/')
  })
})

module.exports = router
