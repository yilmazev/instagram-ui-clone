import appIcon from 'assets/images/icon.png'
import fromMeta from 'assets/images/from-meta.png'

export default function LoaderView() {
    return (
        <div className="flex justify-center items-center w-full h-full bg-white">
            <img className="w-[80px] h-[80px]" src={appIcon} />
            <img src={fromMeta} className="absolute left-1/2 bottom-0 m-[-36px_0_32px_-36px] w-[72px] h-[32px]" />
        </div>
    )
}