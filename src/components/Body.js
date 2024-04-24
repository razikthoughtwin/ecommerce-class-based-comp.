import React from "react";
import RestaurantCard from "./RestaurantCard";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reslist: [],
      newreslist: [],
      search: "",
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log(json)
    this.setState({
      reslist:
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      newreslist:
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
    });
  }

  handlesearch() {
    let filteredData = this.state.reslist.filter((item) => {
      return item.info.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({
      newreslist: filteredData,
    });
  }

  render() {
    const { reslist, newreslist } = this.state;
    console.log(reslist)
    if(this.state.reslist.length==0)
    {
        return <h1>Loading......</h1>
    }
    return (
      <div className="main">
        <div className="searchcontainer">
          <input
            type="text"
            className="searchinput"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              });
            }}
          />
          <button className="searchbtn" onClick={this.handlesearch.bind(this)}>
            Search
          </button>
        </div>
        <div className="container">
          {newreslist.map((item) => {
            return <RestaurantCard key={item.info.id} resdata={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default Body;
