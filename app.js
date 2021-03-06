if (process.env.NODE_ENV === 'development') {
   require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes/index')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)
app.use('/', errorHandler)

app.listen(port, () => {
   console.log(`connected with love and gawl in port ${port}`);
})