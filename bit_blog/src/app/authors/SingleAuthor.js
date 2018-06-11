import React, { Fragment, Component } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { AuthorDetails } from "./AuthorDetails";
import { getSingleUser } from '../../services/userService';

class SingleAuthor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: null,
      loading: true
    }
  }

  componentDidMount = () => {
    const authorId = this.props.match.params.id;
    getSingleUser(authorId)
      .then(author => {
        this.setState({author, loading: false})
      })
  }

  renderMainContent = () => {
    const {loading, author} = this.state;
    if (loading) {
      return <div className='loading'></div>
    } else {
      return  <main className='container'>
                <AuthorDetails author={author}/>
              </main>
    }
  }
  render() {
    return (
      <Fragment>
      <Header />
      {this.renderMainContent()}
      <Footer />
      </Fragment>
    )
  }
}


export default SingleAuthor;
