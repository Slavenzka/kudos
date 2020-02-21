import axios from 'axios'

const axiosData = axios.create({
  baseURL: 'https://kudos-2df2b.firebaseio.com/'
})

export default axiosData