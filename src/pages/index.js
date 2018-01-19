import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import ThreeTitle from '../components/three/threeTitle.js'
import BlogContainer from '../components/blog/blogContainer.js'
import AboutContainer from '../components/about/aboutContainer.js'
import ProjectsContainer from '../components/projects/projectsContainer.js'
import Modal from 'react-modal'
import Header from '../components/nav/header.js'
import Footer from '../components/nav/footer.js'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class IndexPage extends Component {
  state = {
    modalIsOpen: false,
    modalComponent: "",
  }

  openModal = (e) => {
    console.log("openModal", e.target.innerHTML)
    this.setState({modalIsOpen: true, modalComponent: e.target.innerHTML})
  }

  closeModal = (e) => {
    e.preventDefault()
    this.setState({modalIsOpen: false})
  }
  render(){
    var componentForModal = ""

    switch(this.state.modalComponent) {
    case "Blog":
        componentForModal = <BlogContainer data={this.props.data}/>
        break;
    case "About":
        componentForModal = <AboutContainer/>
        break;
    case "Projects":
        componentForModal = <ProjectsContainer/>
        break;
    default:
        componentForModal = ""
    }

    return(
      <div style={{width: '100%', height: '100%'}}>
        <Header linkColor={"black"} openModal={this.openModal} closeModal={this.closeModal}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          {componentForModal}
        </Modal>

        <ThreeTitle />
        <Footer />
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;


// <div>
//   <Modal
//    isOpen={this.state.modalIsOpen}
//    onRequestClose={this.closeModal}
//    contentLabel="Example Modal"
//  >
//   <BlogContainer data={this.props.data}/>
//
//  </Modal>
