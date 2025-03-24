const express = require('express');
const connectDb = require('./db');
const itemModel = require('./models/item');
const User = require('./models/user.model');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({ origin: 'health-and-fitness-blog-server.vercel.app',
    
})); 

// Database Connection
connectDb();

// Routes for User
app.post('/create-account', async (req,res) => {
    console.log("Server")
    const {fullName,email,password} = req.body;

    if(!fullName)
    {
        return res.status(400).json({error : true, message : "Full Name is required"})
    }

    if(!email)
    {
        return res.status(400).json({error : true, message : "Email is required"})
    }

    if(!password)
    {
        return res.status(400).json({error : true, message : "Password is required"})
    }

    const isUser = await User.findOne({email : email})

    if(isUser)
    {
        return res.json({error : true , message : "User already exist"})
    }

    const user = new User({
        fullName,
        email,
        password
    })

    await user.save();

    return res.json({
        error:false,
        user,
        message : "Registration Successful",
    })
})

app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    console.log("server-side")
        if(!email)
        {
            return res.status(400).json({ message : "Email is required"});
        }
        
        if(!password)
        {
            return res.status(400).json({ message : "Password is required"});
        }

        const userInfo = await User.findOne({email : email});

        if(!userInfo)
        {
            return res.status(400).json({message: "User not found"});
        }

        if(userInfo.email == email && userInfo.password == password)
            {
                return res.json({
                    error: false,
                    message : "Login Successful",
                    email,
                });
            }
        
            else
            {
                return res.status(400).json({
                    error:true,
                    message:"Invalid Credentials",
                });
            }
})

// Routes for Blogs
app.get('/', async (req, res) => {
    try {
        const response = await itemModel.find();
        return res.json({ items: response });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching items', details: error.message });
    }
});

app.post('/add', async (req, res) => {
    const { title, description, imageURL } = req.body;
    if (!title || !description || !imageURL) {
        return res.status(400).json({ error: 'Title, description, and imageURL are required' });
    }

    try {
        const newItem = new itemModel({ title, description, imageURL });
        const savedItem = await newItem.save();
        return res.status(201).json({ message: 'Item added successfully', item: savedItem });
    } catch (error) {
        return res.status(400).json({ error: 'Error adding item', details: error.message });
    }
});


app.get('/:id', async (req, res) => {
    try {
        const blog = await itemModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        return res.json(blog);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching blog post' });
    }
});



app.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await itemModel.findByIdAndDelete(req.params.id);
        if (!deleteItem) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        return res.json({ message: 'Blog post deleted successfully', item: deleteItem });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting item', details: error.message });
    }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});