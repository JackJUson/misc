import {useState} from 'react';

const SearchBar = ({fetchCountryData}) => {
    const [country, setCountry] = useState('');

    return (
        <div>
            <form>
                <label>Input Field</label>
                <input type="text"/>
            </form>
        </div>
    )
}

export default SearchBar;