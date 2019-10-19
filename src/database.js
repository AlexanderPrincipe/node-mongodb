const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Alexander:rrlalh25@cluster0-fa8ov.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is conected'))
    .catch(e => console.log(e));