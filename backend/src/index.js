const express = require('express');
const fs = require('fs')
const app = express();
const cors=require('cors')
const tasks = require('./controller.js')

app.use(cors())
app.use(express.json());
app.use('/', tasks)

const port = process.env.PORT || 3013;

app.listen(port, () => console.log(`Server started on port ${port}`))