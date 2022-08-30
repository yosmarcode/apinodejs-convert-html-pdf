/** @format */

import connect from "../command/conex.js";

export const create = async (email, name_file) => {
    const connection = await connect();
    try {
        const data = await connection.query(
            "INSERT INTO history_pdf(email,name_file) VALUES (?, ?)",
            [email, name_file]
        );
        console.log("REGISTRO SERVER CORRECT");
    } catch (error) {
        console.log("ERROR SERVER REGISTER", error.message);
    }

    connection.end();
};
