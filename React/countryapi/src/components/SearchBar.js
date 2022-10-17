import {useState} from 'react';

const SearchBar = ({fetchCountryData}) => {
    const [country, setCountry] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(country);
            fetchCountryData(country);
        }
    }

    return (
        <div>
            <form>
                <label>Input Field</label>
                <input
                    type="text"
                    value={country}
                    placeholder="Enter a country"
                    onChange={event => setCountry(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </div>
    )
}

export default SearchBar;