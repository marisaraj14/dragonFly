export default function Menu() {
    return (
        <>
            <section>
                <input type="text" className="w-11/12 mt-8 p-2 rounded-md" placeholder="Searh for Items" />
                <i className="fa fa-search text-2xl text-green-600 -ml-10"></i>
            </section>
            <article className="flex flex-nowrap " >
                <section className="grid grid-flow-row bg-white rounded m-4 p-2">
                    <img src="https://static.thenounproject.com/png/76352-200.png" alt="food" className="w-20 col-start-1"/>      
                    <p>Product Desc</p>
                    <p>$20</p> 
                 </section>
                 <section className="grid grid-flow-row  bg-pink-300 rounded m-4 p-2">
                    <img src="https://static.thenounproject.com/png/76352-200.png" alt="food" className="w-20 bg-white row-start-1 row-span-2"/>      
                    <p className="row-start-1 text-2xl bg-black text-white flex-1 p-0 m-0">Product Desc</p>
                    <p className="row-start-2 ">$20</p> 
                 </section>
                 <section className="grid grid-flow-row m-4 p-2">
                    <img src="https://static.thenounproject.com/png/76352-200.png" alt="food" className="w-20 col-start-1"/>      
                    <p>Product Desc</p>
                    <p>$20</p> 
                 </section>
            </article>
        </>
    );
}