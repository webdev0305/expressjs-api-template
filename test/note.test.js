const supertest = require('supertest');
const {app, server} = require('../src/app')

const api = supertest(app)

describe('testing api', () => {
    const testNote = {
        'id': 'test note id',
        'title': 'test note title',
        'description': 'test note description'
    }

    test('create test note', async () => {
        await api
            .post('/api/note')
            .send(testNote)
            .expect(201)
            .expect('Content-Type', /application\/json/)
    })

    test('get test note', async () => {
        const res = await api.get(`/api/note/${testNote.id}`)

        let data =  res.body.data
        delete data['createdAt']

        expect(data).toEqual(testNote)
    })

    test('updating test note', async () => {
        await api
            .put(`/api/note/${testNote.id}`)
            .send({title: 'note test title updated'})
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('delete test note', async () => {
        await api
            .delete(`/api/note/${testNote.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
})

afterAll(() => {
    server.close()
})