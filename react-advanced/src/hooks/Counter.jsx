import React, {useState, useEffect} from 'react'
import useDocumentTitle from './useDocumentTitle';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useDocumentTitle(`${name} has clicked ${count} times`);
    
/*     useEffect( 
        () => {
            document.title = `${name} has clicked ${count} times`;

            return  () => {
                console.log('Clean up');
            }
        }
    , [name, count] ); */

    //componentDidMount
    // componenetDidUpdate
    // compoentnWİllUnmount

    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount( count + 1) } >Increase</button>
            <h2>{name} clicked {count} times </h2>
        </div>
    )
}
