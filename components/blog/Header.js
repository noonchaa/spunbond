import { useState } from 'react'
import Link from 'next/link'
import {FaBars} from 'react-icons/fa'
import Image from 'next/image'

const Header = ({link, titleLink,img}) => {
    const [toggle, setToogle] = useState(false)
    
    return(
        <>
        <nav className="bg-gray-50 shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Image src={`https://${img}`} className="w-10 h-10 p-2 rounded-full" alt='logo' width={24} height={24} />
                    <Link href={titleLink}>
                    <a className='text-xl font-bold text-red-600 md:text-2xl ml-2' >
                        Care Spunbond
                    </a>
                    </Link>
                </div>
                    
                    {/*Mobile menu button*/} 
                <div className="flex md:hidden">
                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400
                             focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"
                             onClick={()=>setToogle(!toggle)}>
                <FaBars/>
                </button>
                </div>
            </div>

                {/*Mobile Menu open: "block", Menu closed: "hidden"*/}
            <div className={toggle==false?'items-center md:flex hidden':'items-center md:flex block'}>
                <div className="flex flex-col md:flex-row md:mx-6">
                {link.map((item,index) => (
                    <Link href={`/#${item}`} key={index}>
                    <a key={item} className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-500
                                         dark:hover:text-red-400 md:mx-4 md:my-0 capitalize" >{item}</a>
                    </Link>
                ))}
                </div>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Header