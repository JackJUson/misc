const CountryCard = ({flag, country, capital, area, population, currency, region}) => {
    return (
        <div class="container">
            <div>
                {/* <img src={flag}/> */}
                <img src={flag}/>
            </div>
            <div>
                The country is: {country}
            </div>
            <div>
                The area is: {area}
            </div>
            <div>
                The population is: {population}
            </div>
        </div>
    )
}

export default CountryCard;