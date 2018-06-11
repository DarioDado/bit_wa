import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { createHashHistory } from 'history';
import { savePost } from '../../services/postService';

export class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      data: null
    }
  }

  onChangeTitleHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeBodyHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onFormSubmitHandler = e => {
    e.preventDefault();
  }

  onSavePostHandler = () => {
    const history = createHashHistory();
    const {title, body} = this.state;
    this.setState({
      data: {title, body}
    }, () => {
      savePost(this.state.data)
        .then((savedPost) => {
          console.log(savedPost);
          console.log(this);
          history.push('/');
        } )
    })
  }

  render() {
    return (
      <Fragment>
        <h3 className="center blue-grey-text text-darken-1">NEW POST</h3>
        <div className="row">
          <form onSubmit={this.onFormSubmitHandler} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="title"
                  value={this.state.title}
                  onChange={this.onChangeTitleHandler}
                  placeholder="Title"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  name="body"
                  value={this.state.body}
                  onChange={this.onChangeBodyHandler}
                  placeholder="Content"
                  className="materialize-textarea">
                </textarea>
              </div>
            </div>
            <Link to="/home"><button className="waves-effect waves-light red darken-1 btn">Cancel</button></Link>
            <button className="waves-effect waves-light btn" onClick={this.onSavePostHandler}>Save</button>
          </form>
        </div>
      </Fragment>
    )
  }
}
