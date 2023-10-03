import express from "express";
import controller from "../controllers/userController.js";
const ROUTE = express.Router();

/* route is coded in controllers folder */
ROUTE.route("/sendMail").post(controller.sendMail);

export default ROUTE;
