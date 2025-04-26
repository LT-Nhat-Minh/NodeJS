import getConnection from "config/database";

const handleCreateUser = async (
    fullName: string,
    email: string,
    password: string,
    address: string) => {
    //insert user into database logic here

    //return { fullName, email, password };
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO `user`(`fullName`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];

        const [result, fields] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        console.log(err);
    }
}

const getAllUsers = async () => {
    const connection = await getConnection();
    try {
        const [results, fields] = await connection.query('SELECT * FROM `user`');
        return results;
    }
    catch (err) {
        console.log(err);
    }
    return [];
}

const handleDeleteUser = async (id: string) => {
    const connection = await getConnection();
    try {
        const sql = "DELETE FROM `user` WHERE id = ?";
        const values = [id];
        connection.execute(sql, values);
    } catch (err) {
        console.log(err);
    }
}

const handleGetUser = async (id: string) => {
    const connection = await getConnection();
    try {
        const sql = "SELECT * FROM `user` WHERE id = ?";
        const values = [id];
        const [result, fields] = await connection.execute(sql, values);
        return result[0];
    } catch (err) {
        console.log(err);
    }
}

const handleUpdateUser = async (id: string, data: any) => {
    const connection = await getConnection();
    try {
        const sql = "UPDATE `user` SET `fullName` = ?, `email` = ?, `address` = ? WHERE id = ?";
        const values = [data.fullName, data.email, data.address, id];
        await connection.execute(sql, values);
    } catch (err) {
        console.log(err);
    }
}
export { handleCreateUser, getAllUsers, handleDeleteUser, handleGetUser, handleUpdateUser };