import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import { Navbar } from "./Navbar"


export function Settings() {
    return (
        <div class="h-screen w-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <Link to="/homepage">
                <ButtonPrev />
            </Link>
            <div class="flex flex-wrap h-4/5 justify-center items-center">
                <label class="justify-center text-3xl flex flex-wrap w-full 
                md:text-5xl" for="language">Select Language:
                    <select class="text-center flex w-1/3 bg-transparent text-xl 
                    md:text-4xl md:w-1/4 
                    lg:w-36" id="language" name="language">
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select></label>
                <Link to="/changeAvatarColor" class="md:w-full">
                    <p class="text-center text-3xl w-full 
                    md:text-5xl">Change Avatar Color</p>
                </Link>
                <Link to="/team" class="md:w-full">
                    <p class="text-center text-3xl w-full 
                    md:text-5xl">Our Team</p>
                </Link>
                <button class="text-center text-3xl w-full 
                md:text-5xl">Logout</button>
            </div>
            <Navbar />
        </div>
    )
}