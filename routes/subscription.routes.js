import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>{res.send({title: "all subs"})});

export default subscriptionRouter;