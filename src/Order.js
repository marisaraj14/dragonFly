export default function Order() {
    return (
        <article className="bg-white h-auto w-9/12 m-10 rounded-md p-6 align-center">
            <section className="bg-yellow-300 rounded p-2 w-full flex justify-around">
                <i className="fa fa-money text-blue-800 text-5xl font-bold"></i>
                <i className='fa fa-credit-card text-blue-800 text-5xl font-bold'></i>
                <i className="fa fa-trash text-5xl text-blue-800 font-bold"></i>
            </section>
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
                        <tr>
                            <td className="w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-20 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                        <tr>
                            <td className=" w-20">3</td>
                            <td className="w-56 text-center">Soemthing good</td>
                            <td className="w-24 text-right">$23</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="bg-green-200 h-auto p-4 mt-8 rounded-md">
                <table>
                    <tbody>
                        <tr>
                        <td className="font-bold w-11/12">SubTotal</td>
                        <td>$10</td>
                        </tr>
                        <tr>
                        <td className="font-bold w-11/12">Total</td>
                        <td>$100</td>
                        </tr>
                        <tr>
                        <td className="font-bold w-11/12">Amount Paid</td>
                        <td>$10</td>
                        </tr>
                        <tr>
                        <td className="font-bold w-11/12">Change</td>
                        <td>$10</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    );
}