import React, { useState } from 'react';
import Travel from './Travel.png';
import prova1 from './prova1.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

export function Register() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rptPassword, setRptPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [avatarName, setAvatarName] = useState('');
    const [avatarColor, setAvatarColor] = useState('#166534');

    const notMatchPass = document.getElementById('notMatchPass');

    const handleLogin = () => {
        if (email !== '' && username !== '' && password !== '' && rptPassword !== '' && avatarName !== '') {
            if (rptPassword !== password) {
                notMatchPass.style.display = 'block'
            } else {
                window.location.href = '/';
            }
        }
    };

    const isDisabled = email === '' || username === '' || password === '' || rptPassword === '' || avatarName === '';

    const showSvg = document.getElementById('showSvg');
    const hideSvg = document.getElementById('hideSvg');

    const changeSvgIcon = () => {
        setShowPassword(!showPassword);

        if (showPassword) {
            showSvg.style.display = 'none';
            hideSvg.style.display = 'block';
        } else {
            showSvg.style.display = 'block';
            hideSvg.style.display = 'none';
        }
    };

    const showSvg2 = document.getElementById('showSvg2');
    const hideSvg2 = document.getElementById('hideSvg2');

    const changeSvgIcon2 = () => {
        setShowPassword2(!showPassword2);

        if (showPassword2) {
            showSvg2.style.display = 'none';
            hideSvg2.style.display = 'block';
        } else {
            showSvg2.style.display = 'block';
            hideSvg2.style.display = 'none';
        }
    };

    const handleNameChange = (event) => {
        const name = event.target.value.trim().substring(0, 2);
        setAvatarName(name);
    };

    const handleColorChange = (event) => {
        const color = event.target.value;
        setAvatarColor(color);
    };

    const ResponsiveAvatar = styled(Avatar)(({ theme }) => ({
        bgcolor: avatarColor,
        [theme.breakpoints.up('xs')]: {
            width: '40px',
            height: '40px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '60px',
            height: '60px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '80px',
            height: '80px',
        },
    }));

    return (
        <div class="h-screen bg-gradient-to-b from-green-700 via-green-400 to-green-100">
            <div class="h-screen">
                <img src={prova1} alt="" class="hidden 
                md:hidden 
                lg:block lg:w-full lg:brightness-90 lg:h-full"/>
                <h1 class="text-white text-center pt-2 font-bold
                md:text-[24px] md:font-bold
                lg:absolute lg:top-[10%] lg:left-[22%] lg:text-[50px] lg:font-extrabold lg:text-green-400 lg:z-10">ToExplore</h1>
                <h2 class="text-2xl font-extrabold w-52 m-auto mt-[8%] text-center 
                md:w-full md:m-auto md:text-center md:mt-[3%] md:text-[32px]
                lg:absolute lg:top-[19%] lg:left-[23.5%] lg:m-auto lg:w-auto lg:text-[25px] lg:text-black lg:z-10">Register here!</h2>
                <p class="text-xs w-80 m-auto text-center 
                md:w-full md:m-auto md:text-center md:text-[16px] md:mt-[1%]
                lg:absolute lg:top-[22%] lg:left-[23%] lg:m-auto lg:w-auto lg:text-[15px] lg:text-black lg:z-10">Become part of our community</p>
                <div class="bg-white/90 w-80 h-[45%] m-auto mt-[10%] rounded-lg 
                md:mt-[5%] md:w-[60%] md:h-[47%]
                lg:absolute lg:top-[0%] lg:left-[12%] lg:w-[30%] lg:h-[70%] lg:rounded-[20%] lg:opacity-95">
                    <input
                        class="border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent w-[90%] h-14 m-auto flex justify-center pt-5 
                        md:w-[50%] md:text-[25px] md:h-[7%] md:absolute md:top-[15%] md:right-[25%]
                        lg:w-[85%] lg:text-[25px] lg:absolute lg:top-[23%] lg:left-[8%] lg:h-[10%]"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        class="border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent w-[90%] h-14 m-auto flex justify-center pt-5 
                        md:w-[50%] md:text-[25px] md:h-[7%] md:absolute md:top-[22%] md:right-[25%]
                        lg:w-[85%] lg:text-[25px] lg:absolute lg:top-[33%] lg:left-[8%] lg:h-[10%]"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        class="border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent w-[90%] h-14 m-auto flex justify-center pt-5 
                        md:w-[50%] md:text-[25px] md:h-[7%] md:absolute md:top-[29%] md:right-[25%]
                        lg:w-[85%] lg:text-[25px] lg:absolute lg:top-[43%] lg:left-[8%] lg:h-[10%]"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button id="hideSvg" class="absolute right-[16%] top-[33.5%] 
                    md:absolute md:right-[26%] md:top-[31.5%] md:w-[50px] md:h-[30px]
                    lg:w-[50px] lg:h-[30px] lg:top-[47%] lg:right-[10%]" onClick={changeSvgIcon}>
                        <svg class="md:w-[50px] md:h-[30px]
                         lg:w-[50px] lg:h-[30px] lg:z-10" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z" fill="#000000" />
                            <path d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z" fill="#000000" />
                            <path d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z" fill="#000000" />
                            <path d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z" fill="#000000" />
                            <path d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000" />
                        </svg>
                    </button>
                    <button id="showSvg" class="absolute right-[16%] top-[33.5%] 
                    md:absolute md:right-[26%] md:top-[31.5%] md:w-[50px] md:h-[30px]
                    lg:w-[50px] lg:h-[30px] lg:top-[47%] lg:right-[10%]" onClick={changeSvgIcon}>
                        <svg class="md:w-[50px] md:h-[30px]
                         lg:w-[50px] lg:h-[30px] lg:z-10" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#000000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000" />
                        </svg>
                    </button>
                    <input
                        class="border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800 bg-transparent w-[90%] h-14 m-auto flex justify-center pt-5 
                        md:w-[50%] md:text-[25px] md:h-[7%] md:absolute md:top-[36%] md:right-[25%]
                        lg:w-[85%] lg:text-[25px] lg:absolute lg:top-[53%] lg:left-[8%] lg:h-[10%]"
                        type={showPassword2 ? 'text' : 'password'}
                        placeholder="Repete Password"
                        value={rptPassword}
                        onChange={(e) => setRptPassword(e.target.value)}
                    />
                    <p id='notMatchPass' class="text-red-500 text-xs w-64 m-auto mt-1 ml-[5%] hidden 
                    md:absolute md:text-[16px] md:m-auto md:top-[43.5%] md:left-[25%] md:w-[25%]
                    lg:absolute lg:text-[18px] lg:m-auto lg:top-[64%] lg:left-[8%] lg:w-[80%]">Password does not match</p>
                    <div class="flex items-center justify-center w-[90%]">
                        <input
                            class="border-2 border-t-0 border-x-0 border-b-lime-400 focus:outline-none focus:border-b-lime-800  bg-transparent w-[32%] h-14 flex m-auto pt-5 
                            md:w-[18%] md:text-[25px] md:h-[7%] md:absolute md:top-[42.5%] md:right-[57%] 
                            lg:w-[24%] lg:text-[25px] lg:absolute lg:top-[63%] lg:right-[68%] lg:h-[10%]"
                            type="text"
                            placeholder="Avatar name"
                            value={avatarName}
                            onChange={handleNameChange}
                        />
                        <input
                            class="m-auto mt-[8%] 
                            md:w-[10%] md:h-[3.5%] md:absolute md:top-[45.5%] md:right-[42%] md:m-auto 
                            lg:w-[20%] lg:h-[7%] lg:absolute lg:top-[67%] lg:right-[38%] lg:m-auto"
                            type="color"
                            value={avatarColor}
                            onChange={handleColorChange}
                        />
                        <Stack class="m-auto mt-[5%] 
                        md:absolute md:top-[44.5%] md:right-[29%] md:m-auto 
                        lg:absolute lg:top-[65%] lg:right-[15%] lg:m-auto 
                        ">
                            <ResponsiveAvatar sx={{bgcolor: [avatarColor]}}>{avatarName}</ResponsiveAvatar>
                        </Stack>
                    </div>
                    <button id="hideSvg2" class="absolute right-[16%] top-[40%] 
                    md:absolute md:right-[26%] md:top-[39%] md:w-[50px] md:h-[30px] 
                    lg:w-[50px] lg:h-[30px] lg:top-[57%] lg:right-[10%]" onClick={changeSvgIcon2}>
                        <svg class="md:w-[50px] md:h-[30px]
                         lg:w-[50px] lg:h-[30px] lg:z-10" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5.70711 19.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071Z" fill="#000000" />
                            <path d="M12 5C13.2011 5 14.394 5.21361 15.5362 5.63535L13.9368 7.23482C13.2953 7.0777 12.6458 7 12 7C9.07319 7 6.06862 8.59614 4.09173 11.9487C4.74631 13.0987 5.52178 14.046 6.37447 14.7971L4.95845 16.2131C3.88666 15.248 2.93477 14.037 2.16029 12.5876C1.94361 12.1821 1.94637 11.6844 2.17003 11.2807C4.45796 7.15186 8.18777 5 12 5Z" fill="#000000" />
                            <path d="M12 9C12.056 9 12.1117 9.00154 12.167 9.00457L9.00457 12.167C9.00154 12.1117 9 12.056 9 12C9 10.3431 10.3431 9 12 9Z" fill="#000000" />
                            <path d="M14.9954 11.833L11.833 14.9954C11.8883 14.9985 11.944 15 12 15C13.6569 15 15 13.6569 15 12C15 11.944 14.9985 11.8883 14.9954 11.833Z" fill="#000000" />
                            <path d="M12 17C11.355 17 10.7061 16.9216 10.0654 16.763L8.46807 18.3604C9.60812 18.7849 10.7998 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807C21.0543 9.88089 20.1128 8.7083 19.0587 7.76977L17.6421 9.18635C18.4837 9.91776 19.2525 10.8366 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000" />
                        </svg>
                    </button>
                    <button id="showSvg2" class="absolute right-[16%] top-[40%]  
                    md:absolute md:right-[26%] md:top-[39%] md:w-[50px] md:h-[30px]
                    lg:w-[50px] lg:h-[30px] lg:top-[57%] lg:right-[10%]" onClick={changeSvgIcon2}>
                        <svg class="md:w-[50px] md:h-[30px]
                         lg:w-[50px] lg:h-[30px] lg:z-10" xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#000000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000" />
                        </svg>
                    </button>
                    <button
                        class="bg-green-800 w-64 h-7 m-auto flex justify-center border border-green-800 mt-[10%] text-white rounded-full
                        md:mt-[0%] md:w-[50%] md:h-[5%] md:text-[36px] md:absolute md:top-[53%] md:right-[25%]
                        lg:absolute lg:m-auto lg:top-[78%] lg:right-[7.5%] lg:w-[85%] lg:h-[10%] lg:text-[45px] lg:rounded-full lg:cursor-pointer"
                        disabled={isDisabled}
                        onClick={handleLogin}
                    >
                        Register
                    </button>
                </div>
                <img src={Travel} alt="" class="h-auto w-full m-auto absolute bottom-[0%]
                md:h-[40.91%] 
                lg:hidden" />
            </div>
        </div>
    );
}