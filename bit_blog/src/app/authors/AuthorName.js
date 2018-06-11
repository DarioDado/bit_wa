import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getSingleUser } from '../../services/userService';

export class AuthorName extends Component {
  constructor(props) {
    super(props)
    this.state = {
        author: null,
        loading: true
    }
  }

  componentDidMount = () => {
    const { authorId } = this.props;
    getSingleUser(authorId)
      .then(author => {
        this.setState({ author, loading: false});
      })
  }

  render() {
    const {author, loading} = this.state;

    const nameLink = loading
        ? <p></p>
        : <Link to={`/authors/${author.id}`}><p id="author-name">{author.name}</p></Link>
    return (
        nameLink
    )
  }
}