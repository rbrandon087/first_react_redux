import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount } from '../features/counterSlice';

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const [customValue, setCustomValue] = useState(0);

    const onCustomSubmit = e => {
        e.preventDefault();
        dispatch(incrementByAmount(Number(customValue)));
        setCustomValue(0);
    }


    return <div>
        <h1>{count}</h1>
        <div>
            <button onClick={e => dispatch(increment())}>Increment</button>
            <button onClick={e => dispatch(decrement())}>Decrement</button>
        </div>
        <div>
            <h3>Custom Value</h3>
            <form onSubmit={onCustomSubmit}>
                <input type='number' onChange={e => setCustomValue(e.target.value)} />
                <button>Custom Increment</button>
            </form>
        </div>
    </div>
}