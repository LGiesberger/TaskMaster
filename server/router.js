const Router = require('express').Router;
const router = Router();
const { task_controller, user_controller } = require('./controllers/index');
const authMiddleware = require('./auth');

// User stuff

router.post('/register', user_controller.registerUser);
router.post('/login', user_controller.loginUser);

// Task stuff

router.get('/edit/:taskId', authMiddleware, task_controller.getTask);
router.get('/tasks/all', authMiddleware, task_controller.getAllTasks);
router.post('/task', authMiddleware, task_controller.createTask);
router.post('/tasks', authMiddleware, task_controller.getAllTasksForDay);
router.put('/tasks/:taskId', authMiddleware, task_controller.editTask);
router.put(
  '/tasks/:taskId/status',
  authMiddleware,
  task_controller.setCompletedProp
);
router.delete('/tasks/:taskId', authMiddleware, task_controller.deleteTask);

module.exports = router;
