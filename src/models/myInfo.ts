import mongoose from 'mongoose';


const myInfo = new mongoose.Schema({
    
    words: {
        type: String,
    },
    testimonials: {
        type: String,
    },
    approachData:{
        type: String,
    },
    projectInfo:{
        type: String,
    },
    cvlink:{
        type: String,
    },
    featuredSection:{
        type: String,
    }


});

export default mongoose.models.myInfo || mongoose.model('myinfo', myInfo);