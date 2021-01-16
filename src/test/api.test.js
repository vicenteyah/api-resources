const request = require('supertest')
const app = require('../app')



/**
 * Testing get http for products schema
 * 
 */
describe("GET /v2/products", () => {
    it('respond with json a list of products', done => {
        request(app)
            .get('/v2/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe("GET /v2/product/:id", () => {

    const _id = '5ffdde0d1e9fd52153e30186'
    const notExist = '5ffddfaa7bd6db2afe3f61a1'

    it('respond with json containing a single product', done => {
        request(app)
            .get(`/v2/product/${_id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    it('respond with json "item not found"  when the product doesnt exists', done => {
        request(app)
        .get(`/v2/product/${notExist}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect('{"message":"item not found"}')
        .end(err=>{
           if(err) return done(err)
           done()
        })
    })
})

/**
 * Testing POST http request for product schema
 * 
 */

describe("POST /v2/product", () => {
    it('respond with 201 created', done =>{
        const data = {
            name: 'product test',
            size: 1300,
            unitaryPrice: 10,
            description:'testing post with mocha'
        }
        request(app)
           .post('/v2/product')
           .send(data)
           .set('Accept','application/json')
           .expect('Content-Type', /json/)
           .expect(201)
           .end(err => {
               if(err) return done(err)
               done()
           })
    })
})



