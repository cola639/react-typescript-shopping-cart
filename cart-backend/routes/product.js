const express = require('express')
const productList = require('../static/list.json')
const router = express.Router()

router.get('/productList', async (req, res) => {
  response = {
    code: 200,
    productList
  }
  res.send(response)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  let detail
  productList.forEach((item, index) => {
    if (item.id === Number(id)) {
      return (detail = item)
    }
  })

  const response = {
    code: 200,
    product: detail
  }

  res.send(response)
})

module.exports = router
