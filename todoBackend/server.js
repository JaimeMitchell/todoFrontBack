const express = require('express')
require('dotenv').config() //init dotenv
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoConfig = require('./config/mongoConfig')
const todosRouter = require('./routes/todosRouter')
const contactsRouter = require('./routes/contactsRouter')
const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')
const authRouterCont = require('./routes/authRouterCont')
const app = express()
const PORT = 4000

//*MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
//* ROUTERS 
app.use('/todos', todosRouter)
// app.use('/contacts', contactsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)
// app.use('/authContacts',authRouterCont)
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is up'
    })
})
app.listen(PORT, () => {
    console.log(`PORT running on ${PORT}`)
    mongoConfig()
})