const express = require('express');
const commentsController = require('../../controllers/comments/commentsCtrl');

const commentsRouter = express.Router();

//-------------
//comments route
//--------------
//POST/api/v1/comments
commentsRouter.post('/', commentsController.cmntPostCtrl)

//GET/api/v1/comments/:id
commentsRouter.get('/:id', commentsController.cmntGetCtrl)

//GET/api/v1/users
commentsRouter.get('/', commentsController.cmntsGetCtrl)

//DELETE/api/v1/posts/:id
commentsRouter.delete('/:id', commentsController.cmntDeleteCtrl)


//PUT/api/v1/posts/:is
commentsRouter.put('/:id', commentsController.cmntUpdateCtrl)

module.exports = commentsRouter;