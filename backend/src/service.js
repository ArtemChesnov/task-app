const add = (tasks, req) => {
  tasks.push(req.body);
  return JSON.stringify(tasks, null, 4);
};

const update = (tasks, req) => {
  let task = tasks.find((task) => task.id === req.params.id);
  task.title = req.body.title;
  return JSON.stringify(tasks, null, 4);
};

const complete = (tasks, req) => {
  let task = tasks.find((task) => task.id === req.params.id);
  task.completed = !task.completed;
  return JSON.stringify(tasks, null, 4);
};

const remove = (tasks, req) => {
  const task = tasks.find((task) => task.id === req.params.id);
  tasks.splice(tasks.indexOf(task), 1);
  return JSON.stringify(tasks, null, 4);
};

module.exports = {
  add,
  update,
  remove,
  complete,
};
