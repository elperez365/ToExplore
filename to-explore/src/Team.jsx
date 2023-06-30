import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import Peppe from "./images/Peppe.jpg"
import Marco from "./images/Marco.png"


export function Team() {
    return (
        <div class="h-screen w-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div class="flex flex-wrap h-[80%]">
                <div class="flex w-full justify-center items-center space-x-3">
                    <div class="w-36 h-36">
                        <img class="rounded-full object-cover w-full h-full" src={Peppe} alt="" />
                    </div>
                    <h1 class="text-2xl">Giuseppe Caliri</h1>
                </div>
                <div class="flex w-full justify-center items-center space-x-3">
                    <h1 class="text-2xl">Marco Verduci</h1>
                    <div class="w-36 h-36">
                        <img class="rounded-full object-cover w-full h-full" src={Marco} alt="" />
                    </div>
                </div>
                <div class="flex w-full justify-center items-center space-x-3">
                    <div class="w-36 h-36">
                        <img class="rounded-full object-cover w-full h-full" src={Peppe} alt="" />
                    </div>
                    <h1 class="text-2xl">Vasco Ceti</h1>
                </div>
                <div class="flex w-full justify-center items-center space-x-3">
                    <h1 class="text-2xl">Andrei Anuta</h1>
                    <div class="w-36 h-36">
                        <img class="rounded-full object-cover w-full h-full" src={Marco} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}