import React, { useState } from 'react'
import Input from 'elements/Input/InputView'
import { AiFillFacebook } from 'react-icons/ai';
import AppStore from 'assets/images/app-store.png'
import PlayStore from 'assets/images/play-store.png'
import Logo from 'assets/images/logo.png'

export default function SignInView() {
    const [mail, setMail] = useState('')
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const enable = mail && username && password && fullName

    return (
        <div className="w-full flex flex-wrap justify-center items-center m-[12px_0_0_-24px]">
            <div className="flex flex-col gap-y-[10px]">
                <div className="flex flex-col justify-center items-center bg-white border px-[40px] w-[350px] pt-8 pb-2">
                    <a href="#" className="flex justify-center m-[15px_0_15px_0]">
                        <img src={ Logo } />
                    </a>
                    <p className="text-[17px] text-[#8E8E8E] text-center font-semibold m-[0_0_10px]">Sign up to see photos and videos from your friends.</p>
                    <a className="flex justify-center items-center bg-[#0095f6] rounded p-[5px_9px] cursor-pointer w-full active:bg-[#4cb5f9] select-none">
                        <AiFillFacebook size="21px" color="#fff" />
                        <span className="text-sm text-white font-semibold pointer-events-none">Log in with Facebook</span>
                    </a>
                    <div className="flex items-center w-full p-[18px_0]">
                        <div className="h-px bg-gray-300 flex-1" />
                        <span className="px-4 text-[13px] text-[#8e8e8e] font-semibold uppercase">or</span>
                        <div className="h-px bg-gray-300 flex-1" />
                    </div>
                    <form className="flex flex-col justify-center items-center gap-y-1.5 w-full">
                        <Input type="text" value={mail} onChange={e => setMail(e.target.value)} label="Phone number or email" />
                        <Input type="text" value={fullName} onChange={e => setFullName(e.target.value)} label="Full name" />
                        <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Username" />
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
                        <button type="submit" className="bg-[#0095f6] rounded text-white text-sm font-semibold w-full m-[8px_0_0_0] p-[5px_9px] disabled:bg-[#b2dffc] active:bg-[#4cb5f9]" disabled={!enable}>Log in</button>
                    </form>
                    <span className="text-[#8e8e8e] text-xs text-center my-[10px]">
                        People who use our service may have uploaded your contact information to Instagram. <a className="font-semibold">Learn More</a>
                        <br />
                        By signing up, you agree to our <a className="font-semibold">Terms</a>, <a className="font-semibold">Privacy Policy</a> and <a className="font-semibold">Cookies Policy</a>.
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center bg-white border w-[350px] p-[15px]">
                    <div>
                        <span className="text-[#262626] text-sm">Have an account? <a className="text-[#0095f6] font-semibold cursor-pointer">Log in</a></span>
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