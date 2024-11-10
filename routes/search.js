const express = require('express')
const router = express.Router()
const searchController = require('../controllers/searchController')

router.route('/').post(searchController.search)

module.exports = router
