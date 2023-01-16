const express = require('express');
const postsControllers = require('../../controllers/posts/postsCtrl');

const postsRouter = express.Router();

//-----------
//posts route
//-----------
//POST/api/v1/posts/
postsRouter.post('/', postsControllers.pstPostCtrl)

//GET/api/v1/posts/:id
postsRouter.get('/:id',  postsControllers.pstGetCtrl)

//GET/api/v1/posts
postsRouter.get('/',  postsControllers.pstsGetCtrl)

//DELETE/api/v1/posts/:id
postsRouter.delete('/:id',  postsControllers.pstDeleteCtrl)


//PUT/api/v1/posts/:id
postsRouter.put('/:id',  postsControllers.pstUpdateCtrl)

module.exports = postsRouter;
