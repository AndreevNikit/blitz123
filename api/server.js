const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}));
app.use(cors());
app.use("/api", require('./routes/auth.route'));
app.get("/api", (req , res) => {
    res.json({ "users": ["userOne"]})
});



async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@blitz.zmcqyjz.mongodb.net/?retryWrites=true&w=majority&appName=blitz', {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT} `)
        })
    } catch (err) {console.error(err);}

}

start();