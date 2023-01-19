const express = require('express');
const categoriesController = require('../../controllers/categories/categoriesCtrl');

const categoriesRouter = express.Router();

//------------------
//categories route
//------------------

//POST/api/v1/categories
categoriesRouter.post('/', categoriesController.ctgrPostCtrl)

//GET/api/v1/comments/:id
categoriesRouter.get('/:id', categoriesController.ctgrGetCtrl)

//GET/api/v1/users
categoriesRouter.get('/', categoriesController.ctgrsGetCtrl)

//DELETE/api/v1/posts/:id
categoriesRouter.delete('/:id', categoriesController.ctgrDeleteCtrl)


//PUT/api/v1/categories/:id
categoriesRouter.put('/:id', categoriesController.ctgrUpdateCtrl)

module.exports = categoriesRouter;
