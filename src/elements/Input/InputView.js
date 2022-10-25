import React, { useState, useEffect, useRef } from 'react'

export default function InputView({label, type = 'text', ...props}) {
    const [show, setShow] = useState(false)
    const [inputType, setinputType] = useState(type)

    useEffect(() => {
        if(show) {
            setinputType('text')
            
        } else if(type === 'password') {
            setinputType('password')
        }
    }, [show])

    return (
        <label className="flex relative bg-zinc-50 border rounded-sm w-full h-[38px] focus-within:border-gray-400">
            <input type={inputType} required={true} className=" w-full h-full px-[9px] text-xs outline-none valid:pt-[10px] peer" {...props} />
            <small className="absolute top-1/2 left-[9px] text-xs text-gray-500 -translate-y-1/2 cursor-text pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" className=" h-full flex items-center p-[0_8px_0_0] text-sm text-[#262626] font-semibold hover:cursor-pointer active:opacity-[0.7]" onClick={() => setShow(show => !show)}>
                    { show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
    )
}