const express = require('express');
const cors = require('cors');
const leaderBoardRouter = require('./routes/leaderBoard.routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

try {
    app.use(express.json());
    app.use(cors());
    app.use('/api', leaderBoardRouter);

    app.listen(PORT, (err) => (err ? console.log(err) : console.log(`Listening Port ${PORT}`)));
} catch (e) {
    console.log(e);
}
