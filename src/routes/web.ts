import express, { Express } from "express";
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, postViewUser, postUpdateUser } from "controllers/user.controller";
const router = express.Router();

const webRouters = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);

    router.post("/create-user", postCreateUser);
    router.post("/delete-user/:id", postDeleteUser);
    router.post("/view-user/:id", postViewUser);
    router.post("/update-user/:id", postUpdateUser);

    app.use("/", router);
}

export default webRouters;



