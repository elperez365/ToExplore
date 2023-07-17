import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import Peppe from "./images/Peppe.jpg";
import Marco from "./images/Marco.png";
import Vasco from "./images/Vasco.JPG";
import Andre from "./images/Andre.JPG";


export function Team() {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-green-100 via-green-400 to-green-700">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div className="flex flex-wrap h-4/5 gap-8">
                <div className="flex w-full justify-center items-center gap-8">
                    <div className="w-36 h-36
                    md:w-56 md:h-56">
                        <img className="rounded-full object-cover w-full h-full" src={Peppe} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl
                        md:text-5xl">Giuseppe Caliri</h1>
                    </div>

                </div>
                <div className="flex w-full justify-center items-center gap-8">
                    <div>
                        <h1 className="text-2xl
                        md:text-5xl">Marco Verduci</h1>
                    </div>
                    <div className="w-36 h-36
                    md:w-56 md:h-56">
                        <img className="rounded-full object-cover w-full h-full" src={Marco} alt="" />
                    </div>
                </div>
                <div className="flex w-full justify-center items-center gap-8">
                    <div className="w-36 h-36
                    md:w-56 md:h-56">
                        <img className="rounded-full object-cover w-full h-full" src={Vasco} alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl
                        md:text-5xl">Vasco Ceti</h1>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center gap-8">
                    <div>
                        <h1 className="text-2xl
                        md:text-5xl">Andrei Anuta</h1>
                    </div>
                    <div className="w-36 h-36
                    md:w-56 md:h-56">
                        <img className="rounded-full object-cover w-full h-full" src={Andre} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
