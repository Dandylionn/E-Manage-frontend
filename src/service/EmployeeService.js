import React from "react";
import axios from "axios";

const EMPLOYEE_SERVICE_BASE_URL =
  "http://localhost:9191/employee-service/api/employees";

const EMPLOYEE_ID = 11;

class EmployeeService {
  getEmployee() {
    return axios.get(EMPLOYEE_SERVICE_BASE_URL + "/" + EMPLOYEE_ID);
  }
}

export default new EmployeeService();
