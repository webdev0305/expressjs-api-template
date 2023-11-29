const Note = [
    {
        type: "xlsx",
        data: "1"
    },
    {
        type: "xlsx",
        data: "2"
    },
]

const getAll = async (req = request, res = response) => {
    try {
        const data = Note

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

        const data = Note[id]

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
}