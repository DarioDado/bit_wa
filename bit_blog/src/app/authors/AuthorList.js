import React from 'react';
import { AuthorItem } from './AuthorItem.js';


export class AuthorList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <div className="container main-content">
                <h3 className="center blue-grey-text text-darken-1">Authors (6)</h3>
                <div className="row">
                  <AuthorItem />
                  <AuthorItem />
                  <AuthorItem />
                  <AuthorItem />
                  <AuthorItem />
                  <AuthorItem />
                </div>
            </div>
        )

    }
}
