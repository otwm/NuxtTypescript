import express from 'express'
import People from './people'

const app = express()

app.get('/', (_, res) => {
    res.send('Hello nuxt typescript')
})

app.get('/api/people', (_, res) => {
    console.log('--people--')
    res.json(People)
})

app.listen(3001, () => {
    console.log('test')
})