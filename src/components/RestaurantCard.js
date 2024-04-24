import React from "react";
import { IMAGE_URL } from "../utils/constant";
import { Link } from 'react-router-dom'

class RestaurantCard extends React.Component {

    constructor(props){
        super(props)
        // console.log(props)
    }
  render() {
    const{resdata}=this.props
    // console.log(resdata);
    const {name,cloudinaryImageId,areaName,costForTwo,cuisines,avgRating,id}=resdata.info
    return (
    <Link to={`/menu/${id}`}>
      <div className="card-container">
        <div className="card">
          <div className="card-img">
            <img src={IMAGE_URL+cloudinaryImageId} alt="card-img" />
          </div>
          <div className="card-body">
            <ul>
              <li>{name}</li>
              <li>{areaName}</li>
              <li>{cuisines.slice(1,3).join(",")}</li>
              <li>{costForTwo}</li>
              <li className="rating">{avgRating}</li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default RestaurantCard;
