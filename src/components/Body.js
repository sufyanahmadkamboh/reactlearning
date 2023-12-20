
import ResCard from "./RestCard";
import { restList } from "../utils/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search

             </div>
            <div className="res-container">
            {
                restList.map(resturent => <ResCard key={resturent.id} restData={resturent} />)
            }
            
            </div>
        </div>

    );
};

export default Body;