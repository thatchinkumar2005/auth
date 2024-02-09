import express from "express";

import { verifyJwt } from "../../middleware/verifyjwt.js";

import {
  createNewEmployee,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from "../../controllers/employeesController.js";

const employeeApiRoute = express.Router();

employeeApiRoute
  .route("/")

  .get(getAllEmployees)

  .post(createNewEmployee)

  .put(updateEmployee)

  .delete(deleteEmployee);

export { employeeApiRoute };
