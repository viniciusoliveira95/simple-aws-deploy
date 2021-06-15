import express from 'express'

const app = express()
const PORT = 8000

app.get('/', (req, res) => res.send('Simple Express + TypeScript Server is woking on version 1.1.2'))

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
