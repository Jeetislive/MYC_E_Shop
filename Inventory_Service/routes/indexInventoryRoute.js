import express from "express";
import itemInventoryRoute from "./itemInventoryRoute.js";
import brandInventoryRoute from "./brandInventoryRoute.js";
import sizeInventoryRoute from "./sizeInventoryRoute.js";
import colorInventoryRoute from "./colorInventoryRoute.js";

const indexInventoryRoute = express.Router();

indexInventoryRoute.use("/items",itemInventoryRoute);
indexInventoryRoute.use("/brands",brandInventoryRoute);
//complete
indexInventoryRoute.use("/sizes",sizeInventoryRoute);
indexInventoryRoute.use("/colors",colorInventoryRoute);





export default indexInventoryRoute;