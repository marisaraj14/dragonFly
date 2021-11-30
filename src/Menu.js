
export default function Menu(props) {

    const listItems = props.foodList.map((food, index) =>
        <section key={index.toString()} className="grid grid-flow-row bg-white rounded m-4 p-5"
            onClick={
                () => {
                    props.addItem(food);
                }
            }>
            <img src={food[4]} alt="food" className="w-20 col-start-1" />
            <p>{food[1]}</p>
            <p>{food[2]}</p>
        </section>
    );

    return (
        <>
            <div className="z-10 mt-8 flex flex-wrap overflow-auto w-full " >
                {listItems}
            </div>
        </>
    );
}