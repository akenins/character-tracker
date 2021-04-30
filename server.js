const express = require('express')

const app = express()

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the D&D Character Builder API' })
)

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/characters', require('./routes/characters'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
