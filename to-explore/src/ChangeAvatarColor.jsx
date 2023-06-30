import ButtonPrev from "./ButtonPrev";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";


export function ChangeAvatarColor() {
    const [avatarColor, setAvatarColor] = useState('#166534');

    const handleButtonClick = (color) => {
        setAvatarColor(color);
    };

    const handleColorChange = (event) => {
        const color = event.target.value;
        setAvatarColor(color);
    };

    return (
        <div class="h-screen w-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div class="flex flex-wrap items-center justify-center h-[90%]">
                <Stack class="w-[100%]">
                    <Avatar sx={{ bgcolor: [avatarColor], margin: ["auto"], width: [100], height: [100] }}>AA</Avatar>
                </Stack>
                <div class="w-full h-[45%] flex flex-wrap justify-center m-auto ">
                    <div class="h-[50px] flex flex-wrap justify-center">
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(7 89 133)')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(17 94 89);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(6 95 70);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(22 101 52);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(63 98 18);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(133 77 14);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-800 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(154 52 18);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-800 border-b-2" onClick={() => handleButtonClick('rgb(153 27 27);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(3 105 161);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(15 118 110);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(4 120 87);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(21 128 61);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(77 124 15);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(161 98 7);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-700 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(194 65 12);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-700 border-b-2" onClick={() => handleButtonClick('rgb(185 28 28);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(2 132 199);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(13 148 136);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(5 150 105);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(22 163 74);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(101 163 13);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(202 138 4);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-600 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(234 88 12);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-600 border-b-2" onClick={() => handleButtonClick('rgb(220 38 38);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(14 165 233);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(20 184 166);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(16 185 129);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(34 197 94);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(132 204 22);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(234 179 8);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-500 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(249 115 22);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-500 border-b-2" onClick={() => handleButtonClick('rgb(239 68 68);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(56 189 248);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(45 212 191);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(52 211 153);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(74 222 128);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(163 230 53);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(250 204 21);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-400 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(251 146 60);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-400 border-b-2" onClick={() => handleButtonClick('rgb(248 113 113);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(125 211 252);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(94 234 212);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(110 231 183);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(134 239 172);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(190 242 100);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(253 224 71);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-300 border-r-2 border-b-2" onClick={() => handleButtonClick('rgb(253 186 116);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-300 border-b-2" onClick={() => handleButtonClick('rgb(252 165 165);')}></button>
                        </div>
                        <div class="flex flex-wrap justify-center">
                            <button class="w-[45px] h-[50px] m-0 bg-sky-200 border-r-2" onClick={() => handleButtonClick('rgb(186 230 253);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-teal-200 border-r-2" onClick={() => handleButtonClick('rgb(153 246 228);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-emerald-200 border-r-2" onClick={() => handleButtonClick('rgb(167 243 208);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-green-200 border-r-2" onClick={() => handleButtonClick('rgb(187 247 208);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-lime-200 border-r-2" onClick={() => handleButtonClick('rgb(217 249 157);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-yellow-200 border-r-2" onClick={() => handleButtonClick('rgb(254 240 138);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-orange-200 border-r-2" onClick={() => handleButtonClick('rgb(254 215 170);')}></button>
                            <button class="w-[45px] h-[50px] m-0 bg-red-200" onClick={() => handleButtonClick('rgb(254 202 202);')}></button>
                        </div>
                    </div>
                </div>
                <input
                    class="m-auto w-[50%] h-[10%]"
                    type="color"
                    value={avatarColor}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    )
}