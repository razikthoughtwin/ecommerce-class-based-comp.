import React from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id)
    this.state = {
      menuitems: [],
      menucatergories:[]
    };
  }



  async componentDidMount() {
    // const { id } = this.props.match.params
    let { id } = this.props.params;

    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${id}`)
    const json = await response.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    this.setState({
      menuitems: json?.data?.cards[2]?.card?.card?.info,
      menucatergories: json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    });
  }

  render() {
    
    let { id } = this?.props?.params;
    // console.log(this.state.menuitems)
    console.log(this.state.menucatergories)

    if(this?.state.menucatergories?.length==0)
    {
      return <h1>Loading......</h1>
    }


    const { name, city,locality,areaName,costForTwoMessage ,avgRating} = this?.state?.menuitems;
    // const {} = this.state.menucatergories;
    return (
      <div>
        <h1>{`Restaurantmenu ${id}`}</h1>
        <h2>{name}</h2>
        <h2>{city}</h2>
        <h2>{locality}</h2>
        <h2>{areaName}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{avgRating}</h2>
        <div className="menu-container">
        {
            this?.state?.menucatergories?.map((item)=>{
                return(
                  <div className="menu-card">
                   <h4 key={item.card.info.id}>{item.card.info.name}</h4>
                </div>
                )
                
            })
        }
        </div>
      </div>
    );
  }
}

export default withParams(RestaurantMenu);
