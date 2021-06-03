const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers

const roleRouter = require('./routers/routes/role')
const userRouter = require("../backend/routers/routes/createUser")
const loginRouter = require("./routers/routes/login")
const productsRouter = require("./routers/routes/product")
const  createNewCommentRouter = require("./routers/routes/createComment")
const  createRatingRouter = require("./routers/routes/rating")


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use(roleRouter);
app.use('/user',userRouter);
app.use(loginRouter);
app.use('/products', productsRouter);
app.use(createNewCommentRouter);
app.use(createRatingRouter);


/////////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
