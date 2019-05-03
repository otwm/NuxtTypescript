import express from 'express'

const app = express()

app.get('/', (_, res) => {
    res.send('test')
})

app.listen(3001, () => {
    console.log('test')
})