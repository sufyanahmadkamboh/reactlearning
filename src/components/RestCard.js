

const ResCard = (props) => {
    const {restData} = props;
    console.log(props);
    return (
        <div className="rest-card">
            <img alt="res-card-logo" src={restData.hero_listing_image} />
            <h3>{restData.name}</h3>
            <h4>{restData.address}</h4>
            <h4>Rating is {restData.rating}</h4>
        </div>
    );
};

export default ResCard;