import express from 'express'

const app = express()

app.use('/t', (req, res, next) => {
  next(new Error('e test'))
  // res.json({ a: 1})
})

app.use(function (err, req, res, _) {
  console.log('error')
  res.json({ e: 'error' })
})
export default app
