import Menu from "./Menu";
import Order from "./Order";
export default function OrderMenu() {
    return (
        <article className="bg-green-400 m-0 p-0 h-screen grid grid-row-flow grid-rows-auto grid-cols-auto">
            <section className="col-start-1 grid-span-1 w-10/12">
                <Order />
            </section>
            <section className="col-start-2 col-span-2 -ml-48 p-2">
                <Menu />
            </section>
        </article>
    );
}