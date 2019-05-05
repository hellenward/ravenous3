import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import App from '../../App.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(function(business) {
            return <Business business={business} />;
          })
        }
      </div>
    );
  }
};

export default BusinessList;
