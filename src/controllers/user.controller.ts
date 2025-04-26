import { Request, Response } from "express"
import { getAllUsers, handleCreateUser, handleDeleteUser, handleGetUser, handleUpdateUser } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    //get user from db
    const results = await getAllUsers();

    return res.render("home", { users: results });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}

const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, password, address } = req.body;

    //handle create user logic here
    await handleCreateUser(fullName, email, password, address);

    return res.redirect("/");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    await handleDeleteUser(id);

    return res.redirect("/");
}

const postViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await handleGetUser(id);

    return res.render("view-user", { user: user });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    await handleUpdateUser(id, req.body);

    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, postViewUser, postUpdateUser };