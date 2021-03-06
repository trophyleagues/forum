import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {url_login} from '../../config/endpoints';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: 'faridmurzone@gmail.com',
      password: 'dont-panic',
    }
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    axios.post(url_login, {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res)
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('user_id', res.data.user_id)
      this.props.history.push('/forum')
    })
  }

  render(){
    return (
    <>
    <div className="col-md-12 d-flex justify-content-center p-5">
      <div className="col-md-12 login-box">
        <div className="card p-5">
          <div className="card-body">
          <form onSubmit={e => this.submit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" onChange={e => this.change(e)} value={this.state.email} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña: </label>
              <input type="password" name="password" onChange={e => this.change(e)} value={this.state.password} className="form-control" />
            </div>
            <div className="d-flex flex-row-reverse">
            <button type="submit">Enviar</button>
            </div>
            <div className="text-center">
              <small><Link to="/register"><span className="text-main">Registrate</span> si aún no tienes una cuenta</Link></small>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }
}


export default Login;