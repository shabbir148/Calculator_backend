import axios from 'axios'

const url = "http://localhost:8085/api/v1/";

class EmployeeService {
    getSqroot(num) {
        return axios.get(url+"sqroot?num="+num)
    }

    getFactorial(num) {
        return axios.get(url+"factorial?num="+num)
    }

    getLog(num) {
        return axios.get(url+"ln?num="+num)
    }

    getPower(num1, num2) {
        return axios.get(url+"pow?base="+num1+"&power="+num2)
    }
}

export default new EmployeeService()