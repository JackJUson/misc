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
                <div>
                    The capital is: {capital}
                </div>
                <div>
                    The area is: {area}
                </div>
                <div>
                    The population is: {population}
                </div>
                <div>
                    The currency is: {currency}
                </div>
                <div>
                    The region is: {region}
                </div>
            </div>
            
        </div>
    )
}

export default CountryCard;