import mongoose from "mongoose";

const showTimeSchema = new mongoose.Schema({
    date:{
        type: String
    },
    time: {
        type: Date
    },
    availableSeats:{
        type: [String]
    },
    reservedSeats :{
        type: [String]
    }
})

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    poseter: String,
    showtime: [showTimeSchema]
})


export const Movies = mongoose.model('Movie',movieSchema)
