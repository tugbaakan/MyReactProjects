import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'

// custom hooks
function useRandomNames( defaultCountry ){

    let countryRef = useRef();
    const [country, setCountry] = useState(defaultCountry);
    const handleCountryChange = () => {
        setCountry(countryRef.current.value );
    }
    

    const [isLoading, setIsLoading] = useState(false);
    const [names, setNames] = useState([]);

    useEffect( () => {
        setIsLoading(true);
        console.log("tugba is loading");
        fetch(`https://jsonplaceholder.typicode.com/comments?email=${country}`)
            .then(response => response.json())
            .then(data => {
                setNames(data);
                setIsLoading(false);
            })
    } , [country] );

    return {
        country,
        onChange : handleCountryChange,
        names,
        isLoading,
        countryRef
    }
    
}

function App() {

    let randomNames = useRandomNames('Mariana_Orn@preston.org');

    return (
        <div>
            <p>
                Enter region : {' '}
                <input ref={ randomNames.countryRef } />
                <button onClick={randomNames.onChange}>Change</button>
            </p>

            {randomNames.isLoading ? <p>Loading....</p> :
                <div>
                    { randomNames.names.length >= 0 && randomNames.names.map((item, i) => (<div key={i}>{item.name}</div> ))}
                </div>
            }
        </div>
    )

}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
