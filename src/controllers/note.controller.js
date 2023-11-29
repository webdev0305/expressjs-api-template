const Note = require('../models/note.model')

const getAll = async (req = request, res = response) => {
    try {
        const data = await Note.getAll()

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: {error}
        })
    }
}

const getById = async (req = request, res = response) => {
    try {
        const {id} = req.params

        const data = await Note.getById(id)

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: {error}
        })
    }
}

const create = async (req = request, res = response) => {
    try {
        const data = await Note.create(req.body)

        res.status(201).json({
            status: 'Created',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: {error}
        })
    }
}

const updateById = async (req = request, res = response) => {
    try {
        const {id} = req.params

        const data = await Note.updateById(id, req.body)

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: {error}
        })
    }
}

const deleteById = async (req = request, res = response) => {
    try {
        const {id} = req.params

        const data = await Note.deleteById(id)

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: {error}
        })
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}