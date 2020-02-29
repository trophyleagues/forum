import React, {useState} from 'react';
import axios from 'axios';
import {url_register} from '../../config/endpoints';
import Loading from '../GeneralComponents/Loading';

const Register = () => {
  const [country, setCountry] = useState('Argentina')
  const [email, setEmail] = useState('faridmurzone@gmail.com')
  const [password, setPassword] = useState('dont-panic')

  function submitData(e) {
    e.preventDefault()
    let data = {
      country: country,
      email: email,
      password: password
    }
    let headers = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*' 
              }
    axios.post(url_register, data, headers)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return(
  <>
  <Loading />
  <div className="col-md-12 d-flex justify-content-center p-5">
  <div className="col-md-12 login-box">
    <div className="card p-5">
      <div className="card-body"></div>
      <form onSubmit={(e) => submitData(e)}>
      <div className="form-group">
        <label htmlFor="country">País: </label>
        <input type="text" name="country"  placeholder="País" className="form-control"
          value={country} onChange={(e) => setCountry(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" placeholder="Email" className="form-control"
          value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="passwod">Password: </label>
        <input type="password" name="password" placeholder="Password" className="form-control"
          value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
        <button type="submit" className="btn btn-gradient d-flex">Registrarse</button>
      </form>
      </div>
    </div>
  </div>
  </>)
}

export default Register