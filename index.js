const express    = require("express")
const bodyParser = require('body-parser')
const {
    port,
    db_user,
    db_password,
    db_host,
    db_port
}   = require('./config.json')
const {
    MongoClient,
    ObjectId
} = require('mongodb')

const mongoClient = new MongoClient(`mongodb://${db_user}:${db_password}@${db_host}:${db_port}`)
const app         = express()
const appPort     = port || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const getCollection = async (db, collection) => {
    await mongoClient.connect()
    return mongoClient.db(db).collection(collection)
}

app.get('/', (req, res) => res.status(200).json({ message: 'API Seriados' }))

app.post('/insert', (req, res) => {
    const add = async () => {
        const collection = await getCollection('uncisal', 'seriados')

        try {
            const result = await collection.insertOne({ name: req.body.name })
            
            return res.status(200).json({ data: result })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    add()
})

app.patch('/update/:id', (req, res) => {
    const update = async () => {
        const collection = await getCollection('uncisal', 'seriados')

        try {
            const result = await collection.updateOne(
                { _id: ObjectId(req.params.id) },
                { $set: { name: req.body.name } }
            )
            
            return res.status(200).json({ data: result })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    update()
})

app.get('/find', (req, res) => {
    const list = async () => {
        const collection = await getCollection('uncisal', 'seriados')

        try {
            const result = await collection.find({}).toArray()
            
            return res.status(200).json({ data: result })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    list()
})

app.get('/find/:id', (req, res) => {
    const list = async () => {
        const collection = await getCollection('uncisal', 'seriados')

        try {
            const result = await collection.find({ _id: ObjectId(req.params.id) }).toArray()
            
            return res.status(200).json({ data: result })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    list()
})

app.delete('/delete/:id', (req, res) => {
    const deleteOne = async () => {
        const collection = await getCollection('uncisal', 'seriados')

        try {
            const result = await collection.deleteOne({ _id: ObjectId(req.params.id) })
            
            return res.status(200).json({ data: result })
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    deleteOne()
})

app.listen(appPort, console.log('Server ON at port: ' + port))