const request = require('supertest')
const app = require('../app')


/**
 * 
 * Testing GET http reqs for producs
 */
describe("GET /v2/products", ()=>{
    it('respond with json a list of products', done => {
        request(app)
            .get('/v2/products')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
     })
})

describe("GET /v2/product/:id", () => {
    const id = '5ffdde0d1e9fd52153e30186'
    const notExist = '600257a550ad8a45ccca33d6'
    it('responde with json containing a single product', done => {
        request(app)
            .get(`/v2/product/${id}`)
            .set('Accept','application/json')
            .expect('Content-Type',/json/)
            .expect(200,done)
    })

    it('respond with json "item not found" when the product doesnt exists', done =>{
        request(app)
            .get(`/v2/product/${notExist}`)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200)
            .expect('{"message":"item not found"}')
            .end( err => {
                if(err) done(err)
                done()
            })
    })
})

/**
 *  Testing POST http request for products schema
 */

 describe("POST /v2/product",()=>{
    it('respond with json 201 created', done => {
        const data = {
            name : 'product test',
            size :15,
            unitaryPrice: 1000,
            description: 'testing post with mocha'
        }
        request(app)
           .post('/v2/product')
           .send(data)
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(201)
           .end( err => {
               if(err) dene(err)
               done()
           })
    })
 })