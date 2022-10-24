import React, { useState } from 'react'

export default function FooterView() {
    const items = [
        'Meta',
        'About',
        'Blog',
        'Jobs',
        'Help',
        'API',
        'Privacy',
        'Terms',
        'Top Accounts',
        'Hashtags',
        'Locations',
        'Instagram Lite',
        'Contact Uploading & Non-Users'
    ]

    const languages = [
        'Afrikaans',
        'Arabic',
        'Bengali',
        'Bulgarian',
        'Catalan',
        'Cantonese',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
        'Lithuanian',
        'Malay',
        'Malayalam',
        'Panjabi',
        'Tamil',
        'English',
        'Finnish',
        'French',
        'German',
        'Greek',
        'Hebrew',
        'Hindi',
        'Hungarian',
        'Indonesian',
        'Italian',
        'Japanese',
        'Javanese',
        'Korean',
        'Norwegian',
        'Polish',
        'Portuguese',
        'Romanian',
        'Russian',
        'Serbian',
        'Slovak',
        'Slovene',
        'Spanish',
        'Swedish',
        'Telugu',
        'Thai',
        'Turkish',
        'Ukrainian',
        'Vietnamese',
        'Welsh',
        'Sign language',
        'Algerian',
        'Aramaic',
        'Armenian',
        'Berber',
        'Burmese',
        'Bosnian',
        'Brazilian',
        'Bulgarian',
        'Cypriot',
        'Corsica',
        'Creole',
        'Scottish',
        'Egyptian',
        'Esperanto',
        'Estonian',
        'Finn',
        'Flemish',
        'Georgian',
        'Hawaiian',
        'Indonesian',
        'Inuit',
        'Irish',
        'Icelandic',
        'Latin',
        'Mandarin',
        'Nepalese',
        'Sanskrit',
        'Tagalog',
        'Tahitian',
        'Tibetan',
        'Gypsy',
        'Wu'
    ]

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="flex flex-col w-full p-[24px_0_52px_0]">
            <ul className="flex flex-wrap justify-center items-center">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="text-xs text-[#8E8E8E] leading-[16px] m-[12px_8px] hover:underline">{item}</a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap justify-center items-center">
                <select className="outline-none text-xs text-[#8E8E8E] cursor-pointer p-[2px]">
                    {languages.map((language, index) => (
                        <option key={index}>{language}</option>
                    ))}
                </select>
                <span className="text-xs text-[#8E8E8E] ml-[16px]">© {year} Instagram from Meta</span>
            </div>
        </footer>
    )
}