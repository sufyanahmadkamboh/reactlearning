
import ResCard from "./RestCard";
import { restList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {

      const [listOfResturants, setListOfResturants] = useState(restList);

    // let listOfResturants = [{
    //     id: 93025,
    //     name: "dominoz",
    //     hero_listing_image: "https://images.deliveryhero.io/image/fd-pk/LH/kgdz-listing.jpg",
    //     address: "St 9, Iqbal Park Lahore, Punjab",
    //     rating: 3.9,
    // },
    // {
    //     id: 93026,
    //     name: "KFC",
    //     hero_listing_image: "https://images.deliveryhero.io/image/fd-pk/LH/j9o6-listing.jpg",
    //     address: "St 9, Iqbal Park Lahore, Punjab",
    //     rating: 4.9,
    // },
    // {
    //     id: 93027,
    //     name: "MacDonalds",
    //     hero_listing_image: "https://images.deliveryhero.io/image/fd-pk/LH/n5e8-listing.jpg",
    //     address: "St 9, Iqbal Park Lahore, Punjab",
    //     rating: 4.6,
    // },
    // {
    //     id: 93029,
    //     name: "KFC",
    //     hero_listing_image: "https://images.deliveryhero.io/image/fd-pk/LH/j9o6-listing.jpg",
    //     address: "St 9, Iqbal Park Lahore, Punjab",
    //     rating: 3.5,
    // }];

    return (
        <div className="body">
            <div className="filter">
                <button className="Filter-btn" 
                onClick={()=>{
                    const filteredList = listOfResturants.filter((res) => res.rating>4.0);
                    console.log(filteredList);
                    setListOfResturants(filteredList);
                }}>Top Rated Resturents</button>
             </div>
            <div className="res-container">
            {
                listOfResturants.map(resturent => <ResCard key={resturent.id} restData={resturent} />)
            }
            
            </div>
        </div>

    );
};

export default Body;