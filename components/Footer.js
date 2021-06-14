import Image from 'next/image'
import {FaFacebookF, FaTwitter,FaInstagram, FaLinkedin} from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

const Footer = ({foottitle,lead,second,fb,twit,insta,lin,factory,office,sales,img}) => {
    return (
        <footer className="text-gray-600 body-font" id='contact'>
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href='/'>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={`https:${img}`} className="w-10 h-10 p-2 rounded-full" alt='logo' width={40} height={40} />
        <span className="ml-3 text-xl capitalize">{foottitle}</span>
      </a>
      </Link>
      <p className="mt-2 text-sm text-gray-500 capitalize">{lead}<br/>{second}</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Head Office</h2>
        <div className="text-gray-600 hover:text-gray-800 mb-10" >
            {documentToReactComponents(office)}
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Factory</h2>
        <div className="text-gray-600 hover:text-gray-800  mb-10" >
            {documentToReactComponents(factory)}
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Sales</h2>
        {sales.map((item,index)=>(
        <p className="text-gray-600 hover:text-gray-800" key={index} >
            {item.name} <br/> 0{item.nomorTelpon}
        </p>
        ))}
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left capitalize">© {new Date().getFullYear()} {foottitle}</p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500" href={fb==''?'/':fb} target='blank'>
            <FaFacebookF className='w-5 h-5'/>
        </a>
        <a className="ml-3 text-gray-500" href={twit==''?'/':twit} target='blank'>
            <FaTwitter className='w-5 h-5'/>
        </a>
        <a className="ml-3 text-gray-500" href={insta==''?'/':insta} target='blank'>
            <FaInstagram className='w-5 h-5'/>
        </a>
        <a className="ml-3 text-gray-500" href={lin==''?'/':lin} target='blank'>
            <FaLinkedin className='w-5 h-5'/>
        </a>
      </span>
    </div>
  </div>
</footer>
    )
}
export default Footer