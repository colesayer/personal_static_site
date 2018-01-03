import React, { Component } from 'react';
import Link from 'gatsby-link'

import './index.scss'

class Header extends Component{
  render(){
    return(
      <div >
        <header style={{ marginBottom: `1.5rem`, backgroundColor: `black`}}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ textAlign: `center` }}>Cole Shapiro</h3>
          </Link>
        </header>
      </div>

    )
  }
}

export default Header
