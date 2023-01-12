const express = require('express');
const {pstPostCtrl, pstGetCtrl, pstsGetCtrl, pstDeleteCtrl, pstUpdateCtrl} = require('../../controllers/posts/postsCtrl');

const postsRouter = express.Router();

//-----------
//posts route
//-----------
//POST/api/v1/posts/
postsRouter.post('/', pstPostCtrl)

//GET/api/v1/posts/:id
postsRouter.get('/:id', pstGetCtrl)

//GET/api/v1/posts
postsRouter.get('/', pstsGetCtrl)

//DELETE/api/v1/posts/:id
postsRouter.delete('/:id', pstDeleteCtrl)


//PUT/api/v1/posts/:id
postsRouter.put('/:id', pstUpdateCtrl)

module.exports = postsRouter;
