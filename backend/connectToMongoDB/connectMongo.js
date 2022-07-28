import mongoose from 'mongoose'

const connectToMongoDB = () => {
    mongoose.connect("mongodb+srv://abhigyan:faEEvmzWwQK9I6Pd@cluster0.cu86vhm.mongodb.net/?retryWrites=true&w=majority")
}

export default connectToMongoDB