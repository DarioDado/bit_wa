import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "./AuthorDetails.css";

export const AuthorDetails = props => {
    return (
      <Fragment>
        <Link to='/authors'><p className='back-link'>Back</p></Link>
        <div className='details blue-grey-text text-darken-1'>
          <div className='row basic-info'>
            <div className='col s4 profile-img'>
              <img src='http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png' alt='profile img' />
            </div>
            <div className='col s8 details-info'>
              <h3>Name Surname</h3>
              <p>username: <span className="data">my_cool_username</span></p>
              <p>email: <span className="data">my_cool@email.com</span></p>
              <p>phone: <span className="data">1-770-736-8031</span></p>
            </div>
          </div>
          <div className='row address'>
            <div className='col s7 address-info'>
              <h3>Address</h3>
              <p>street: <span className="data">bla bla street</span></p>
              <p>city: <span className="data">Belgrade</span></p>
              <p>zipcode: <span className="data">11000</span></p>
            </div>
            <div className='col s5 map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.3549170455!2d20.28251479660023!3d44.81540328829176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1528664617683"></iframe>
            </div>
          </div>
          <div className='row company'>
            <div className='col s12 company-info'>
              <h3>Company</h3>
              <p>name: <span className="data">Kupidon doo</span></p>
              <p>catch phrase: <span className="data">Multi-layered client-server neural-net</span></p>
            </div>
          </div>
        </div>
      </Fragment>
    )
}
