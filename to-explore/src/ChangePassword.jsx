import { Link } from "react-router-dom"
import { useState, useRef } from "react";
import ButtonPrev from "./ButtonPrev";

export function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [rptPassword, setRptPassword] = useState("");
    const [showOldPassord, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRptPassword, setShowRptPassword] = useState(false);
    const showOldPass = useRef(null);
    const hideOldPass = useRef(null);
    const showNewPass = useRef(null);
    const hideNewPass = useRef(null);
    const showRptPass = useRef(null);
    const hideRptPass = useRef(null);

    const changeOldPassIcon = () => {
        if (
            showOldPass.current.style.display === "block" &&
            hideOldPass.current.style.display === "none"
        ) {
            showOldPass.current.style.display = "none";
            hideOldPass.current.style.display = "block";
            setShowOldPassword(false);
        } else {
            showOldPass.current.style.display = "block";
            hideOldPass.current.style.display = "none";
            setShowOldPassword(true);
        }
    }

    const changeNewPassIcon = () => {
        if (
            showNewPass.current.style.display === "block" &&
            hideNewPass.current.style.display === "none"
        ) {
            showNewPass.current.style.display = "none";
            hideNewPass.current.style.display = "block";
            setShowNewPassword(false);
        } else {
            showNewPass.current.style.display = "block";
            hideNewPass.current.style.display = "none";
            setShowNewPassword(true);
        }
    };

    const changeRptPassIcon = () => {
        if (
            showRptPass.current.style.display === "block" &&
            hideRptPass.current.style.display === "none"
        ) {
            showRptPass.current.style.display = "none";
            hideRptPass.current.style.display = "block";
            setShowRptPassword(false);
        } else {
            showRptPass.current.style.display = "block";
            hideRptPass.current.style.display = "none";
            setShowRptPassword(true);
        }
    };

    return (
        <div className="min-h-screen h-full w-full bg-primary bg-opacity-70 flex flex-col gap-28">
            <Link to="/settings">
                <ButtonPrev />
            </Link>
            <div
                className="flex flex-col items-center gap-6
      lg:gap-12"
            >
                <div
                    className="bg-white/90 w-80 h-2/5 rounded-lg flex flex-col items-center gap-5 min-h-[250px] min-w-[320px] max-w-[320px]
                md:w-4/6 md:h-1/2 md:min-h-[438px] md:min-w-[678px] md:flex md:flex-col md:gap-10 
                lg:w-2/5 lg:h-3/5 lg:rounded-3xl lg:opacity-95 lg:min-w-[745px] lg:max-w-[745px] lg:gap-8 justify-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                >
                    <div
                        className="flex border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent w-64 flex justify-center
          md:w-5/6
          lg:w-4/5 lg:items-center"
                    >
                        <input
                            className="bg-transparent w-64
              md:w-full md:text-2xl
              lg:text-2xl lg:h-12"
                            type={showOldPassord ? "text" : "password"}
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <button
                            ref={hideOldPass}
                            id="hideSvg"
                            className="
              md:w-14 md:h-8
                    lg:w-14 lg:h-8"
                            onClick={changeOldPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                        lg:w-14 lg:h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                        <button
                            ref={showOldPass}
                            id="showSvg"
                            className=" hidden
                    md:hidden md:w-14 md:h-8
                    lg:w-14 lg:h-8 lg:hidden"
                            onClick={changeOldPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                lg:w-14 lg:h-8 lg:z-10"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                                    fill="#000000"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="flex border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent flex justify-center w-64 justify-between
                    md:w-5/6 md:text-2xl  md:justify-start md:justify-between
                    lg:w-4/5 lg:text-2xl lg:h-12  lg:justify-start lg:justify-between"
                    >
                        <input
                            className="bg-transparent w-11/12"
                            type={showNewPassword ? "text" : "password"}
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            ref={hideNewPass}
                            id="hideSvg"
                            className="
                    md:w-14 md:h-8
                    lg:w-14 lg:h-8"
                            onClick={changeNewPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                            lg:w-14 lg:h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                        <button
                            ref={showNewPass}
                            id="showSvg"
                            className="hidden
                    md:w-14 md:h-8 md:hidden
                    lg:w-14 lg:h-8 lg:hidden"
                            onClick={changeNewPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                         lg:w-14 lg:h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                                    fill="#000000"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="flex border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent flex justify-center w-64 justify-between
                    md:w-5/6 md:text-2xl  md:justify-start md:justify-between
                    lg:w-4/5 lg:text-2xl lg:h-12  lg:justify-start lg:justify-between"
                    >
                        <input
                            className="bg-transparent w-11/12"
                            type={showRptPassword ? "text" : "password"}
                            placeholder="Repeat New Password"
                            value={rptPassword}
                            onChange={(e) => setRptPassword(e.target.value)}
                        />
                        <button
                            ref={hideRptPass}
                            id="hideSvg"
                            className="
                    md:w-14 md:h-8
                    lg:w-14 lg:h-8"
                            onClick={changeRptPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                            lg:w-14 lg:h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                        <button
                            ref={showRptPass}
                            id="showSvg"
                            className="hidden
                    md:w-14 md:h-8 md:hidden
                    lg:w-14 lg:h-8 lg:hidden"
                            onClick={changeRptPassIcon}
                        >
                            <svg
                                className="md:w-14 md:h-8
                         lg:w-14 lg:h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                                    fill="#000000"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                    fill="#000000"
                                />
                            </svg>
                        </button>
                    </div>
                    <p
                        id="notMatchPass"
                        className="text-red-500 text-xs w-64 hidden
                    md:text-base md:w-5/6
                    lg:text-base lg:w-4/5"
                    >
                        Password does not match
                    </p>
                </div>
            </div>
        </div>
    )
}