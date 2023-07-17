import ButtonPrev from "./ButtonPrev";
import { Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import userLoggedContest from "./UserLoggedContest";
import LanguageContext from "./LanguageContext";

export function ChangeAvatarColor({ setUserlogged }) {
    const user = useContext(userLoggedContest);
    const { languageApp } = useContext(LanguageContext);
    const languages = {
        saveColor: languageApp === "it" ? "SALVA" : "SAVE",
        shade: languageApp === "it" ? "TONALITA'" : "SHADE",
    };
    const [avatarColor, setAvatarColor] = useState(user.avatarColor);

    const handleButtonClick = (color) => {
        setAvatarColor(color);
    };

    const handleColorChange = (event) => {
        const color = event.target.value;
        setAvatarColor(color);
    };

    const avatarUpdate = () => {
        fetch("http://localhost:3001/login/put", {
            method: "PUT",
            body: JSON.stringify({
                username: user.username,
                color: avatarColor,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((res) => res.json())
            .then((json) => alert(json.text));
        setUserlogged({
            logged: true,
            userID: user.userID,
            username: user.username,
            mail: user.mail,
            avatar: user.avatar,
            avatarColor: avatarColor,
        });
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-green-100 via-green-400 to-green-700">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div className="flex flex-wrap items-center justify-center h-5/6 gap-6 ">
                <Stack className="w-full justify-center flex flex-col items-center gap-7">
                    <Avatar
                        sx={{
                            fontSize: [50],
                            bgcolor: [avatarColor],
                            width: [100],
                            height: [100],
                        }}
                    >
                        {user.avatar}
                    </Avatar>
                    <button
                        className="bg-green-700 rounded-xl w-28 h-12"
                        onClick={avatarUpdate}
                    >
                        {languages.saveColor}
                    </button>
                </Stack>
                <div
                    className="w-full h-2/5 flex flex-wrap justify-center
                 md:w-full md:h-auto"
                >
                    <div
                        className="h-80 flex flex-wrap justify-center
                     md:w-11/12 md:h-full"
                    >
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(7 89 133)")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(17 94 89);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(6 95 70);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(22 101 52);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(63 98 18);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(133 77 14);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-800 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(154 52 18);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-800 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(153 27 27);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(3 105 161);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(15 118 110);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(4 120 87);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(21 128 61);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(77 124 15);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(161 98 7);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-700 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(194 65 12);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-700 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(185 28 28);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(2 132 199);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(13 148 136);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(5 150 105);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(22 163 74);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(101 163 13);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(202 138 4);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-600 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(234 88 12);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-600 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(220 38 38);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(14 165 233);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(20 184 166);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(16 185 129);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(34 197 94);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(132 204 22);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(234 179 8);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-500 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(249 115 22);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-500 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(239 68 68);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(56 189 248);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(45 212 191);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(52 211 153);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(74 222 128);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(163 230 53);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(250 204 21);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-400 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(251 146 60);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-400 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(248 113 113);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(125 211 252);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(94 234 212);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(110 231 183);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(134 239 172);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(190 242 100);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(253 224 71);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-300 border-r-2 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(253 186 116);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-300 border-b-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(252 165 165);")
                                }
                            ></button>
                        </div>
                        <div
                            className="flex flex-wrap justify-center
                        md:w-full md:h-20"
                        >
                            <button
                                className="w-11 h-12 m-0 bg-sky-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(186 230 253);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-teal-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(153 246 228);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-emerald-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(167 243 208);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-green-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(187 247 208);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-lime-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(217 249 157);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-yellow-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(254 240 138);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-orange-200 border-r-2
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(254 215 170);")
                                }
                            ></button>
                            <button
                                className="w-11 h-12 m-0 bg-red-200
                            md:w-16 md:h-20"
                                onClick={() =>
                                    handleButtonClick("rgb(254 202 202);")
                                }
                            ></button>
                        </div>
                    </div>
                </div>
                <h1>{languages.shade}</h1>
                <input
                    className="w-3/6 h-1/6"
                    type="color"
                    value={avatarColor}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    );
}
