import axios from 'axios';

const loginUrl = 'localhost:4000/users/login'

const login = (email, password) => {
  axios.post(loginUrl, {
    email,
    password
  }).then((response) => {
    console.log(response)
  })
}

export default login
