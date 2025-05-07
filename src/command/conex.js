import mysql from "mysql2/promise";
import config from "../config/confi-dev.js";


const connect = async () => {
    try {
        return await mysql.createConnection(config)
    } catch (error) {
        console.warn("error:", error.message)
    }
}

export default connect;