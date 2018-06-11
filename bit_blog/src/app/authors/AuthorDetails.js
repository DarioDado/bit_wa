import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "./AuthorDetails.css";

export const AuthorDetails = props => {
  const { author } = props;

  return (
    <Fragment>
      <Link to='/authors'><p className='back-link'>Back</p></Link>
      <div className='details blue-grey-text text-darken-1'>
        <div className='row basic-info'>
          <div className='col s12 m6  profile-img'>
            <img src='http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png' alt='profile img' />
          </div>
          <div className='col s12 m6  details-info'>
            <h3>{author.name}</h3>
            <p>username: <span className="data">{author.username}</span></p>
            <p>email: <span className="data">{author.email}</span></p>
            <p>phone: <span className="data">{author.phone}</span></p>
          </div>
        </div>
        <div className='row address'>
          <div className='col s12 m6 address-info'>
            <h3>Address</h3>
            <p>street: <span className="data">{author.address.street}</span></p>
            <p>city: <span className="data">{author.address.city}</span></p>
            <p>zipcode: <span className="data">{author.address.zipcode}</span></p>
          </div>
          <div className='col s12 m6 map'>
            {/* <iframe title="sdf" src={`http://maps.google.com/maps?q=${author.address.geo.lat},${author.address.geo.lng}&hl=en&z=14&amp;output=embed`} style={{border:0}} allowFullScreen></iframe> */}
            <iframe title="sdf" src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyAi_IJ6QO1OUcybTO6siS-ogB9iGKI5DC0&center=${author.address.geo.lat},${author.address.geo.lng}&maptype=roadmap`}></iframe>

          </div>
        </div>
        <div className='row company'>
          <div className='col s12 company-info'>
            <h3>Company</h3>
            <p>name: <span className="data">{author.company.name}</span></p>
            <p>catch phrase: <span className="data">{author.company.catchPhrase}</span></p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
