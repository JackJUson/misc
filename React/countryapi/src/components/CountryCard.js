const CountryCard = ({flag, country, capital, area, population, currency, region}) => {
    return (
        <div class="container">
            <div>
                {/* <img src={flag}/> */}
                <img src={flag}/>
            </div>
            <div class="title-container">
                {country}
            </div>
            <div class="inner-container">
                <div class="box">
                    The capital is: {capital}
                </div>
                <div class="box">
                    The area is: {area}
                </div>
                <div class="box">
                    The population is: {population}
                </div>
                <div class="box">
                    The currency is: {currency}
                </div>
                <div class="box">
                    The region is: {region}
                </div>
                <div class="box">
                    The something is: {region}
                </div>
            </div>
            
        </div>
    )
}

export default CountryCard;