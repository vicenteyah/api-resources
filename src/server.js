'use strict'
require('dotenv').config()
const app = require('./app')
const connectDb = require('./mongodb')
const { appConfig , dbConfig } = require('./config')


async function init (appConfig ,dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port,()=>{
            console.log(`server running on ${appConfig.host}:${appConfig.port}`)
        })
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

init(appConfig,dbConfig)
