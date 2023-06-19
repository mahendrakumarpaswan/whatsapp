
import axios from 'axios';
const CustomerlistData = (pageNo) => {

//   return axios.get("http://localhost:8009/getSubUser")

     // return axios.get(`http://localhost:8009/getSubUser?page=${pageNo}`)
     return axios.get(`https://backend-ie38.vercel.app/getSubUser?page=${pageNo}`)


}

export default CustomerlistData






