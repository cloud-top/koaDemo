const router = require('koa-router')();
const models = require('../modules');
const userCtl = require('../controller/user');
router.prefix('/users');

router.post('/add', userCtl.userAdd);

router.post('/update', userCtl.userUpdate);

router.post('/del', userCtl.userDel);

router.get('/find', userCtl.userFind);

router.get('/find/:id', userCtl.userFindOne);

router.post('/login', userCtl.login);

module.exports = router;
