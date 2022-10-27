const CountryCard = ({flag, country, capital, area, population, currency, region}) => {
    return (
        <div class="container">
            <div class="image">
                {/* <img src={flag}/> */}
                <img src={flag}/>
            </div>
            <div class="title-container">
                {country}
            </div>
            <div class="inner-container">
                <div class="box">
                    <i class="fa-solid fa-building-columns"></i>
                    The capital is: {capital}
                </div>
                <div class="box">
                    <i class="fa-solid fa-location-dot"></i>
                    The area is: {area}
                </div>
                <div class="box">
                    <i class="fa-solid fa-users"></i>
                    The population is: {population}
                </div>
                <div class="box">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    The currency is: {currency}
                </div>
                <div class="box">
                    <i class="fa-solid fa-earth-asia"></i>
                    The region is: {region}
                </div>
                <div class="box">
                    <i class="fa-regular fa-deer"></i>
                    The something is: {region}
                </div>
            </div>
            
        </div>
    )
}

export default CountryCard;