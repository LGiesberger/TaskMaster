const Router = require('express').Router;
const router = Router();
const controller = require('./controllers/index');

// router.get('/days', controller.getAllDays);
router.get('/tasks/:date', controller.getAllTasksForDay);
router.post('/tasks', controller.createTask);
router.put('/tasks/:taskId', controller.editTask);
router.put('/tasks/:taskId/status', controller.setFinishedProp);
router.delete('/tasks/:taskId', controller.deleteTask);

module.exports = router;
