const { v4 } = require('uuid');
const pool = require('../../config/DatabaseConfig');

module.exports = {
    insertUser: async (UserInfo) => {
        try {
            const { user_nm, user_desc, user_login_id, user_login_pw } =
                UserInfo;

            const con = await pool.getConnection();

            const query = `INSERT INTO t_user(
                user_id,
                user_nm,
                user_desc, 
                user_login_id, 
                user_login_pw, 
                created_at, 
                modified_at
                ) 
                VALUES
                (
                    ?,
                    ?,
                    ?,
                    ?,
                    ?,
                    UNIX_TIMESTAMP(),
                    UNIX_TIMESTAMP()
                );`;

            const [{ affectedRows: result }] = await con.query(query, [
                v4(),
                user_nm,
                user_desc,
                user_login_id,
                user_login_pw,
            ]);

            con.release();

            return result;
        } catch (error) {
            throw error;
        }
    },
    getUserList: async () => {
        try {
            const con = await pool.getConnection();

            const query = 'SELECT * FROM t_user';

            const [result] = await con.query(query);

            con.release();

            return result;
        } catch (error) {
            throw error;
        }
    },
    getUserDetail: async (UserInfo) => {
        try {
            const { user_login_id } = UserInfo;

            const con = await pool.getConnection();

            const query = `SELECT * FROM t_user WHERE user_login_id = ${user_login_id}`;

            const [result] = await con.query(query);

            con.release();

            return result;
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (UserInfo) => {},
    deleteUser: async (UserInfo) => {},
};
