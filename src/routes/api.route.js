const router = require('express').Router()

const {getAll, getById} = require('../controllers/api.controller')

router.get('/', getAll)
router.post('/:id', getById)

module.exports = router