const Router = require('express').Router;
const router = Router();
const controller = require('./controllers/index');
const authMiddleware = require('./auth');

router.get('/edit/:taskId', controller.getTask);
router.get('/tasks/all', controller.getAllTasks);
router.get('/authenticated', authMiddleware, (req, res) => {
  console.log('auth');
});
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.post('/task', controller.createTask);
router.post('/tasks', controller.getAllTasksForDay);
router.put('/tasks/:taskId', controller.editTask);
router.put('/tasks/:taskId/status', controller.setCompletedProp);
router.delete('/tasks/:taskId', controller.deleteTask);

module.exports = router;
