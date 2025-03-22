const mongoose = require('mongoose')

const mongoDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://devaharsar2004:1234@healthblog.xyuvu.mongodb.net/blog_project?retryWrites=true&w=majority&appName=HealthBlog')
        console.log("MongoDb Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = mongoDb