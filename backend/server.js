import app from "./src/app.js";
import { ConnectDB } from "./src/database/db.js";

const port = 3000;

ConnectDB();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);  
})