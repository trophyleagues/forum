import React from 'react';

const Button = (props) => {
    return (
      <button type="button" className="btn btn-gradient btn-lg btn-block mt-2 mr-1">{props.children}</button>    
    );
}

export default Button;
