import { useNavigate } from "@reach/router"

export default function Login() {

    const navigate = useNavigate()

    const onSubmit=()=>{
        navigate('/orderPage')
    }
    return (
        <article className="grid grid-flow-row grid-cols-1 grid-rows-auto place-items-center">
            <img className="h-56 mt-10" src="LOGO.png" alt="dragonflyLogo" />
            <input type="text" placeholder="Username" className="mt-6 border-b-4 border-yellow-900 bg-transparent rounded-md py-2 px-2 w-2/6 hover:border-green-500 focus:outline-none" />
            <input type="password" placeholder="Password" className="mt-6 border-b-4 border-yellow-900 bg-transparent py-2 px-2 rounded-md w-2/6 hover:border-green-500 focus:outline-none" />
            <section className="flex ">
                <select
                    className="form-select float-left mt-6 -ml-2 mx-2 border-yellow-900 p-2 border-b-4 bg-transparent rounded-md px-24 text-yellow-900  hover:border-green-500 hover:text-yellow-900 focus:outline-none">
                    <option value="1">RS Puram</option>
                    <option value="2">Peelamedu</option>
                </select>
                <button className="float-left mt-6 bg-yellow-900 px-16 shadow-2xl text-white rounded hover:bg-green-500" onClick={()=> onSubmit()}>
                    Login
                </button>
            </section>
        </article>
    );
}