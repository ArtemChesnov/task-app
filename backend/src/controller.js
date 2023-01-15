const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler.js');

router.get('/', (req, res) => {
  fs.readFile('db/tasks.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(
        404,
        JSON.stringify({
          result: 0,
          text: err,
        }),
      );
    }
    res.send(data);
  });
});

router.post('/add', (req, res) => {
  handler(req, res, 'add', 'db/tasks.json');
});

router.put(`/update/:id`, (req, res) => {
  handler(req, res, 'update', 'db/tasks.json');
});

router.put(`/complete/:id`, (req, res) => {
  handler(req, res, 'complete', 'db/tasks.json');
});

router.delete('/remove/:id', (req, res) => {
  handler(req, res, 'remove', 'db/tasks.json');
});

module.exports = router;
