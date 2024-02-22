import mssql from 'mssql';
import dotenv from 'dotenv';
import { sqlConfig } from '../config/sqlConfig';
import ejs from 'ejs';
import { sendMail } from '../Helpers/emailHelper';



export const welcomeUser = async() => {
    const pool = await mssql.connect(sqlConfig)
    const users = (await pool.request().query('SELECT * FROM users WHERE isWelcome = 0 and isDeleted = 0')).recordset

    console.log(users);

    for(let user of users){
        ejs.renderFile('template/welcomeUse.ejs', {CustomerName: user.name}, async(error, data)=>{
            let mailOptions = {
                from: "mwadiajackson@gmail.com",
                to: user.email,
                subject: "Welcome to Xplora Tours",
                html: data
            }

            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE users SET isWelcome = 1 WHERE isWelcome = 0 AND isDeleted = 0')

                console.log("Emails send to new users");
                
            } catch (error) {
                console.log(error);
            }
        })
    }
}

