import { useRef } from 'react';

export default function Pad(props) {

    let number = useRef(props.padNo);
    const qtyBill = (no) => {
        number.current.value = (number.current.value * 10) + no;
    }

    const backSpace = () => {
        number.current.value = parseInt(number.current.value / 10);
    }

    return (
        <section className="grid grid-flow-row grid-cols-3 bg-orange-300 p-6 rounded-md w-36">
            <p className="col-start-1 col-span-3 text-green-700 font-bold bg-orange-300 text-3xl text-center p-2 font-mono tracking-wider ">QUANTITY PAD</p>
            <input type="text" className="col-start-1 col-span-3 text-black bg-white p-2 text-xl m-2 rounded-md" id="pad-amount"
                defaultValue={number.current} ref={number}></input>
            <button className="bg-green-600 text-xl font-bold text-white p-4 col-start-1 m-2 rounded-md" onClick={() => qtyBill(7)}>7</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(8)}>8</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(9)}>9</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(4)}>4</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(5)}>5</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(6)}>6</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(1)}>1</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(2)} >2</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(3)}>3</button>
            <button className="bg-green-600 m-2 rounded-md"
                onClick= {props.removeItem}>
                <i className="fa fa-trash text-3xl text-white font-bold p-4"></i>
            </button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => qtyBill(0)} >0</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 m-2 rounded-md" onClick={() => backSpace()}>BS</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 col-span-3 m-2 rounded-md"
                onClick={() => number.current.value === "0" ? number.current.value = 1 :
                    props.setQuantity( number.current.value)}>Done</button>
            <button className="bg-green-600 text-xl font-bold text-white p-4 col-span-3 m-2 rounded-md">Cancel</button>

        </section>
    );
}