import { useSelector } from 'react-redux';

export default function Order(props) {
    const list = useSelector(order => order.items);
    const orderItems = list.map((food, index) =>
        <tr key={index.toString()}
            onClick={() => props.setIndex(index)}>
            <td className="w-20">
                <input
                    type="number"
                    className="border-2 w-14 border-green-200"
                    value={food.quantity}
                    disabled
                />
            </td>
            <td className="w-56 text-center">{food.itemName}</td>
            <td className="w-20 text-right">{food.price}</td>
        </tr>
    );


    return (
        <article className="bg-white h-11/12 w-10/12 m-10 rounded-md p-6 align-center">

            <p className="pt-4 font-mono font-bold text-3xl  text-center">ORDERS</p>
            <section className="flex justify-center p-2">
                <table>
                    <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Item</th>
                            <th>Amt</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-scroll h-32 p-2">
                        {orderItems}
                    </tbody>
                </table>
            </section>
        </article>
    );
}