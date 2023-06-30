import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import { Navbar } from "./Navbar"


export function Settings() {
    return (
        <div class="h-screen w-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <Link to="/homepage">
                <ButtonPrev />
            </Link>
            <div class="flex flex-wrap h-[80%] justify-center items-center">
                <label class="justify-center text-[30px] flex flex-wrap" for="language">Select Language:
                    <select class="text-center jy flex w-[30%] bg-transparent text-[20px]" id="language" name="language">
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select></label>
                <Link to="/changeAvatarColor">
                    <p class="text-center text-[30px]">Change Avatar Color</p>
                </Link>
                <Link to="/team">
                    <p class="text-center text-[30px]">Our Team</p>
                </Link>
            </div>
            <Navbar />
        </div>
    )
}