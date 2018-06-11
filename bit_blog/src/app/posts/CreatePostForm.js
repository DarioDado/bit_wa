import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

export const CreatePostForm = props => {
    return (
        <Fragment>
            <h3 className="center blue-grey-text text-darken-1">NEW POST</h3>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input name="title" id="input_text" placeholder="Title" type="text"  />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea name="body" id="textarea2" placeholder="Content" class="materialize-textarea" ></textarea>
                        </div>
                    </div>
                    <button class="waves-effect waves-light red darken-1 btn">Cancel</button>
                    <button class="waves-effect waves-light btn">Save</button>
                </form>
            </div>
      </Fragment>
    )
}