import Link from 'next/link'
import Image from 'next/image'

const Hero = ({img, title, lead, second}) => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row-reverse">
            <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                width={267} height={267} priority={true} alt="hero" src={'https:'+img}/>
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">{title}</h1>
            <p className="leading-relaxed sm:text-2xl text-xl capitalize">{lead}</p>
            <p className="mb-8 leading-relaxed sm:text-2xl text-xl uppercase font-semibold text-gray-900">{second}</p>
            <div className="flex justify-center">
                <Link href='#contact'>
                <a>
                <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg
                 uppercase">
                   Hubungi Sales
                </button>
                </a>
                </Link>
            </div>
            </div>
        </div>
        </section>
    )
}
export default Hero