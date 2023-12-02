import  express  from "express";
import 'dotenv/config';
import router from "./routes/contactRoutes.js";
import route from "./routes/userRoutes.js";
import errorHandler from "./middleware/errroHandler.js";
import connectDb from "./config/dbConnection.js";

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", router);
app.use("/api/users", route);
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`server is running on port ${port}.`);
});
