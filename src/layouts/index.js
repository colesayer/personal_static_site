import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import './index.css'


const TemplateWrapper = ({children}) => (
      <div>
        <Helmet
          title="Cole Shapiro"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <div
          style={{
            maxWidth: '100%',
            maxHeight: '100vh',
            padding: 0,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children()}
        </div>
      </div>
    )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
