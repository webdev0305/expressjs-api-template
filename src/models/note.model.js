const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const {z} = require('zod')

const target = 'note'

module.exports = {
    getAll: async () => await prisma[target].findMany(),
    getManyByTitle: async title => await prisma[target].findMany({where: {title: {contains: title}}}),
    getByTitle: async title => await prisma[target].findUnique({where: {title}}),
    getById: async id => await prisma[target].findUnique({where: {id}}),

    create: async data => await prisma[target].create({data}),

    deleteByTitle: async title => await prisma[target].delete({where: {title}}),
    deleteById: async id => await prisma[target].delete({where: {id}}),

    update: async (where, data) => await prisma[target].update({where, data}),
    updateByTitle: async (title, data) => {
        return await prisma[target].update({where: {title}, data})
    },
    updateById: async (id, data) => await prisma[target].update({where: {id}, data}),

    CreateSchema: z.object({
        id: z.string().min(1).max(255).optional(),
        title: z.string().min(1).max(255).optional(),
        description: z.string().min(0).max(255).optional()
    }).strip(),
}