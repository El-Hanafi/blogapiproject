const express = require('express');
const usersRouter = require('./routes/users/usersRoutes');
const postsRouter = require('./routes/posts/postsRoutes');
const commentsRouter = require('./routes/comments/commentsRoutes');
const categoriesRouter = require('./routes/categories/categoriesRoutes');

require('dotenv').config();
require('./config/dbConnect');
const app =express();

//middlewares
//----------
//routes
//-----------
//users route
app.use('/api/v1/users', usersRouter);

//posts route
app.use('/api/v1/posts', postsRouter);

//comments route
app.use('/api/v1/comments', commentsRouter);

//categories route
app.use('/api/v1/categories', categoriesRouter);


//Error handlers middleware


//Listen to serer 
const PORT = process.env.PORT || 9000 ;

app.listen(PORT, console.log(`server is up and running ${PORT}`))

console.log(app);