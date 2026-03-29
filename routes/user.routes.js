import {Router} from "express";

const userRouter = Router();

userRouter.get("/", (req, res) =>{res.send({title : "all users"})})

export default userRouter;