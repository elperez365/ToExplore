import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import Peppe from "./images/Peppe.jpg";
import Marco from "./images/Marco.png";
import Vasco from "./images/Vasco.JPG";


export function Team() {
    return (
        <div class="h-screen w-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div class="flex flex-wrap h-4/5 gap-8">
                <div class="flex w-full justify-center items-center gap-8">
                    <div class="w-36 h-36 
                    md:w-56 md:h-56">
                        <img class="rounded-full object-cover w-full h-full" src={Peppe} alt="" />
                    </div>
                    <div>
                        <h1 class="text-2xl 
                        md:text-5xl">Giuseppe Caliri</h1>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                    </div>

                </div>
                <div class="flex w-full justify-center items-center gap-8">
                    <div>
                        <h1 class="text-2xl 
                        md:text-5xl">Marco Verduci</h1>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                    </div>
                    <div class="w-36 h-36 
                    md:w-56 md:h-56">
                        <img class="rounded-full object-cover w-full h-full" src={Marco} alt="" />
                    </div>
                </div>
                <div class="flex w-full justify-center items-center gap-8">
                    <div class="w-36 h-36 
                    md:w-56 md:h-56">
                        <img class="rounded-full object-cover w-full h-full" src={Vasco} alt="" />
                    </div>
                    <div>
                        <h1 class="text-2xl 
                        md:text-5xl">Vasco Ceti</h1>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                    </div>
                </div>
                <div class="flex w-full justify-center items-center gap-8">
                    <div>
                        <h1 class="text-2xl 
                        md:text-5xl">Andrei Anuta</h1>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                        <p class="text-sm 
                        md:text-xl">Ho pullato develop</p>
                    </div>
                    <div class="w-36 h-36 
                    md:w-56 md:h-56">
                        <img class="rounded-full object-cover w-full h-full" src={Marco} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}