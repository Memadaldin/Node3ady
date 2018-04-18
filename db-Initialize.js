const mongoose= require('mongoose');
let mongo_url='mongodb://localhost:27017/iti-emad';
if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://MEmadaldin-UI:phoenix!!@ds147589.mlab.com:47589/iti-emad'
}
mongoose.connect(mongo_url);