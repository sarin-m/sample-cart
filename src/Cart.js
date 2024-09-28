import { useSelector } from 'react-redux';
export default function Cart() {
    const value = useSelector((state) => {
        return state;
    });
    return (
        <div>
            <h6>Items in Cart: {value.value || 0} </h6>
            <h6>Total: {value.price || 0} </h6>
        </div>

    )
}