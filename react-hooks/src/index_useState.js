import React, { useState } from 'react';
import ReactDOM from 'react-dom'

// custom hooks
function useCounter( {initialState} ){

    const  [count, setCount] = useState(initialState);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return [count,{increment, decrement, setCount}];

}

function App() {

    const[count,{increment, decrement}] = useCounter({initialState:0});

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
