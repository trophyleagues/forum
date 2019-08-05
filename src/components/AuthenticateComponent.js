import React, {Component} from 'react';
import { getJwt, getUser } from '../utils/jwt';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AuthenticateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt()
    const user_id = getUser()

    if(!jwt) {
      this.props.history.push('/login');
    }

    axios.get(`http://localhost:8000/api/v1/user/${user_id}/`, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Accept-Language': 'es'
      }})
      .then(res => {
        this.setState({user: res.data.id})
        console.log("Entró: ", res)
      })
      .catch(err => {
        console.log("No entró: ", err)
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_id')
        this.props.history.push('/login')
      })
  }

  render() {
      if(this.state.user === undefined) {
        return(<div>Loading...</div>)
      }
      return(
        <div>      
          {this.props.children}
        </div>
      )
  }
}

export default withRouter(AuthenticateComponent);