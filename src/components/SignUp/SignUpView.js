import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { setUser } from 'store/Authentication'
import { login } from 'firebase.js'
import Input from 'elements/Input/InputView'
import { AiFillFacebook } from 'react-icons/ai'
import Screenshot_1 from 'assets/images/screenshot1.png'
import Screenshot_2 from 'assets/images/screenshot2.png'
import Screenshot_3 from 'assets/images/screenshot3.png'
import Screenshot_4 from 'assets/images/screenshot4.png'
import AppStore from 'assets/images/app-store.png'
import PlayStore from 'assets/images/play-store.png'
import Logo from 'assets/images/logo.png'

export default function SignUpView() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const enable = username && password

    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async e => {
        e.preventDefault()
        await login(username, password)

        navigate(location.state?.return_url || '/', {
            replace: true
        })
    }

    return (
        <div className="h-full w-full flex flex-wrap justify-center items-center m-[0_0_0_-24px]">
            <div className="hidden md:block relative bg-phone-wrapper bg-no-repeat bg-[length:468.32px_634.15px] w-[468.32px] h-[634.15px]">
                <div className="absolute w-[250px] h-[538.84px] top-[27px] right-[61px]">
                    <img src={ Screenshot_1 } className="w-full h-full absolute top-0 left-0 transition-opacity" />
                    { /* <img src={ Screenshot_2 } className="w-full h-full absolute top-0 left-0 transition-opacity opacity-0" /> */ }
                    { /* <img src={ Screenshot_3 } className="w-full h-full absolute top-0 left-0 transition-opacity opacity-0" /> */ }
                    { /* <img src={ Screenshot_4 } className="w-full h-full absolute top-0 left-0 transition-opacity opacity-0" /> */ }
                </div>
            </div>
            <div className="flex flex-col gap-y-[10px]">
                <div className="flex flex-col justify-center items-center bg-white border px-[40px] w-[350px] pt-8 pb-2">
                    <a href="#" className="flex justify-center m-[15px_0_40px_0]">
                        <img src={ Logo } />
                    </a>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-1.5 w-full">
                        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username or email" />
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
                        <button type="submit" className="bg-[#0095f6] rounded text-white text-sm font-semibold w-full m-[8px_0_0_0] p-[5px_9px] disabled:bg-[#b2dffc]" disabled={!enable}>Log in</button>
                    </form>
                    <div className="flex items-center w-full p-[18px_0]">
                        <div className="h-px bg-gray-300 flex-1" />
                        <span className="px-4 text-[13px] text-[#8e8e8e] font-semibold uppercase">or</span>
                        <div className="h-px bg-gray-300 flex-1" />
                    </div>
                    <a className="flex justify-center items-center gap-x-1.5 p-[8px_40px] cursor-pointer">
                        <AiFillFacebook size="21px" color="#385185" />
                        <span className="text-sm text-[#385185] font-semibold pointer-events-none">Log in with Facebook</span>
                    </a>
                    <a className="text-center p-[12px_0_10px_0] text-xs text-[#00376b] cursor-pointer"></a>
                    <a className="text-center p-[12px_0_10px_0] text-xs text-[#00376b] cursor-pointer">Forgot password?</a>
                </div>
                <div className="flex flex-col justify-center items-center bg-white border w-[350px] p-[15px]">
                    <div>
                        <span className="text-[#262626] text-sm">Dont have an account? <a className="text-[#0095f6] font-semibold cursor-pointer active:bg-[#4cb5f9]">Sign up</a></span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-sm m-[10px_20px_20px_25px] text-[#262626">Get the app.</p>
                    <div className="flex gap-x-[8px]">
                        <img src={AppStore} className="w-[136px] cursor-pointer" />
                        <img src={PlayStore} className="w-[136px] cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}