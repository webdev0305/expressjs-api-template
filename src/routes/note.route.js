const router = require('express').Router()

const {getAll, getById, create, updateById, deleteById} = require('../controllers/note.controller')

const {CreateSchema} = require('../models/note.model')
const parseSchema = require('../middlewares/parseSchema')

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', [parseSchema(CreateSchema)], create)
router.put('/:id', [parseSchema(CreateSchema)], updateById)
router.delete('/:id', deleteById)

module.exports = router