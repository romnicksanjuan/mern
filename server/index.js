const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./model/user')
// const bcrypt = require('bcrypt')
const router = require('./api/productRoutes')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const Product = require('./model/product')

const app = express();

app.use(cors(
        {
                origin:["https://mern-client-olive.vercel.app"],
                methods:["POST","GET"],
                credentials:true
         }
))
app.use(express.json())
app.use('/api', router)
app.use(express.static(path.join(__dirname, 'uploads')))

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/myreg')
.then(() => console.log('connected success'))
.catch((error) => console.log(error))


app.post('/', async(req,res) => {
    const {name, username, password} = req.body;

    const check = await User.findOne({username});

    try {
        if(check){
         res.json({userExists:true})
        }else{
        // const hashPassword = await bcrypt.hash(password,10)
        const saveUser = new User({name,username,password})
        await saveUser.save();
        res.json({userExists:false})
        }
        
    } catch (error) {
        console.log(error)
    }
})
app.post('/login', async(req,res) =>{
    const {username, password} = req.body;

    try {
    //     const checkUsername = await User.findOne({username})
    // if(checkUsername){
    //     const compare = await bcrypt(password, checkUsername.password)
    //     if(compare){
    //         res.json({message:"success"})
    //     }else{
    //         res.json({message:true})
    //     }
    // }
    }catch(error){
    console.log(error)
    }

})




const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname); // Set the filename
    }
  });
  
  const upload = multer({ storage: storage });

app.post('/create', upload.single('file'), async(req,res)=>{
    res.json({message:"success"})
    
    try {
        const saveProduct = new Product({
            title:req.body.title,
            
                data:fs.readFileSync(path.join("uploads/" + req.file.filename)),
                contentType:req.file.mimetype,
            
            price:req.body.price})
        await saveProduct.save();
        
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () =>{
    console.log('running on port 3000')
});
