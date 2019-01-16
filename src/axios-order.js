import axios from 'axios'

 const instance = axios.create({
    baseURL:'https://hambergur-51bb9.firbaseio.com'
})

export default instance