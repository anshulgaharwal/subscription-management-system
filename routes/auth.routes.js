import {Router} from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {res.send({message : "user created"})});

authRouter.get("/sign-in", (req, res) => {res.send({message : "signed in"})});

authRouter.get("/sign-out", (req, res) => {res.send({message : "signed out"})});

export default authRouter;