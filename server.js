const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the D&D Character Builder API' })
)

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/characters', require('./routes/characters'))
app.use('/api/ability-scores', require('./routes/abilityScores'))
app.use('/api/alignments', require('./routes/alignments'))
app.use('/api/classes', require('./routes/classes'))
app.use('/api/conditions', require('./routes/conditions'))
app.use('/api/damage-types', require('./routes/damageTypes'))
app.use('/api/equipment', require('./routes/equipment'))
app.use('/api/equipment-categories', require('./routes/equipmentCategories'))
app.use('/api/languages', require('./routes/languages'))
app.use('/api/magic-schools', require('./routes/magicSchools'))
app.use('/api/proficiencies', require('./routes/proficiencies'))
app.use('/api/races', require('./routes/races'))
app.use('/api/rule-sections', require('./routes/ruleSections'))
app.use('/api/rules', require('./routes/rules'))
app.use('/api/skills', require('./routes/skills'))
app.use('/api/spells', require('./routes/spells'))
app.use('/api/starting-equipment', require('./routes/startingEquipment'))
app.use('/api/subclasses', require('./routes/subclasses'))
app.use('/api/traits', require('./routes/traits'))
app.use('/api/weapon-properties', require('./routes/weaponProperties'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
