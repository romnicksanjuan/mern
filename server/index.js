const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./model/user')


const fs = require('fs')
const path = require('path')
const multer = require('multer')
const Product = require('./model/product')

const app = express();

app.use(cors(
    {
        origin: ["https://mern-rosy-tau.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'uploads')))

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/myreg')
    .then(() => console.log('connected success'))
    .catch((error) => console.log(error))


app.post('/', async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const check = await User.findOne({ username });
        if (check) {
            res.json({ message: "user already exist" })
        } else {
            const saveUser = new User({ name, username, password })
            await saveUser.save();
            res.json({ message: "registered successfully" })
        }

    } catch (error) {
        console.log(error)
    }
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const checkUsername = await User.findOne({ username })
        if (checkUsername) {
            const checkPassword = await User.findOne({ password })

            if (checkPassword) {
                res.json({ message: "success" })
            } else {
                res.json({ message: "password incorrect" })
            }
        } else {
            res.json({ message: "user not found" })
        }
    } catch (error) {
        console.log(error)
    }

})




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Set the filename
    }
});

const upload = multer({ storage: storage });

app.post('/create', upload.single('file'), async (req, res) => {
    res.json({ message: "success" })

    try {
        const saveProduct = new Product({
            title: req.body.title,
            data: fs.readFileSync(path.join(req.file.filename)),
            contentType: req.file.mimetype,
            price: req.body.price
        })
        await saveProduct.save();
        // res.json({message:"Product Created Successfully"})
    } catch (error) {
        console.log(error)
    }
})

app.get('/product-list', async (req, res) => {
    try {
        const product = await Product.find({});
        const displayProduct = product.map((product) => ({
            id: product._id.toString(),
            title: product.title,
            data: product.data.toString('base64'),
            price: product.price
        }))
        res.json(displayProduct)
    } catch (error) {
        console.log(error)
    }
})



app.get('/home', (req, res) => {
    res.json({ message: 'this is home page' })
});

app.get('/display', async (req, res) => {
    try {
        const user = await User.find({});
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log('running on port 3000')
});
