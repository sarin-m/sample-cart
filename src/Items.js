import  './App.css';
import { useDispatch, useSelector } from 'react-redux';
export default function Items() {
    const value = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();
    const items = [{
        name: 'Shirt 1',
        price: 500
    },
    {
        name: 'Shirt 2',
        price: 700
    },
    {
        name: 'Jeans 1',
        price: 1000
    }]
    return (
        <div className="container">
            { items.map((el, index) => {
                return(
                <div className="item-block">
                <h4>{el.name}</h4>
                <p>{el.price}</p>
                <button onClick={() => {
                    dispatch({
                        type: 'items',
                        price: el.price,
                        value: 1,
                    });
                }}>Add</button>
                </div>
)})}
        </div>
    )
}