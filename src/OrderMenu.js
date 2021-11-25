import Menu from "./Menu";
import Order from "./Order";
import Pad from "./Pad";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemQty } from './orderSlice';

function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

export default function OrderMenu(props) {

    const [index, setIndex] = useState(-1);
    const items = useSelector(order => order.items);
    const dispatch = useDispatch();
    const prevCount = usePrevious(items.length);

    const setQuantity = function (qty) {
        dispatch(updateItemQty({ index: index, quantity: qty }))
        setIndex(-1);
    }

    const removeItemCallBack = function () {
        dispatch(removeItem(index));
        setIndex(-1);
    }

    useEffect(() => {
        if (prevCount < items.length)
            setIndex(items.length - 1);
    }, [items.length])

    const addItemCallBack = (food) => {
        let currentFood = null;
        items.forEach((item, index) => {
            if (item.itemName === food.itemName) {
                currentFood = item;
                setIndex(index);
            }
        })

        if (!currentFood) {
            dispatch(addItem(food))
        }
    }

    return (
        <article className="bg-green-400 m-0 p-0 h-screen grid grid-row-flow grid-rows-auto grid-cols-auto">
            <section className="col-start-1 col-end-2 grid-span-2 w-12/12 p-0 ml-2">
                <Order setIndex={setIndex} />
            </section>
            <section className="col-start-3 col-span-1 -ml-38 p-2">
                {index > -1 ?
                    <section>
                        <Pad padNo={items[index].quantity}
                            setQuantity={setQuantity} removeItem={removeItemCallBack} />
                    </section> : ""}
                <Menu foodList={props.foodList} addItem={addItemCallBack} />
            </section>
        </article>
    );
}