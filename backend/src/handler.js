const tasks = require('./service.js');
const fs = require('fs');

const actions = {
  add: tasks.add,
  update: tasks.update,
  remove: tasks.remove,
  complete: tasks.complete,
};

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(
        401,
        JSON.stringify({
          result: 0,
          text: err,
        }),
      );
    } else {
      const task = actions[action](JSON.parse(data), req);
      fs.writeFile(file, task, (err) => {
        if (err) {
          res.sendStatus(
            400,
            JSON.stringify({
              result: 0,
              text: err,
            }),
          );
        } else {
          res.send(
            JSON.stringify({
              result: 1,
            }),
          );
        }
      });
    }
  });
};

module.exports = handler;
