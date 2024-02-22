import express from 'express';
import mssql from 'mssql';
import { welcomeUser } from './mailServices/WelcomeUser';
import cron from "node-cron";

const app = express();

 const run = async ()=>{
    cron.schedule('*/5 * * * * *', async()=>{
        console.log('checking for a new user');
        
        await welcomeUser()})
 } 
 run()  

app.listen(4200, () => {
    console.log("server running ...");
    
})