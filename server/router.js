const Router = require('express').Router;
const router = Router();
const controller = require('./controllers/index');

router.get('/edit/:taskId', controller.getTask);
router.get('/tasks/all', controller.getAllTasks);
router.post('/task', controller.createTask);
router.post('/tasks', controller.getAllTasksForDay);
router.put('/tasks/:taskId', controller.editTask);
router.put('/tasks/:taskId/status', controller.setCompletedProp);
router.delete('/tasks/:taskId', controller.deleteTask);

module.exports = router;
