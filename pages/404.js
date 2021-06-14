import Link from "next/link";  
import { useEffect } from "react"
import { useRouter } from 'next/router'


export default function NotFound() {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=> {
            router.push('/')
        },5000)
    },[])

    return(
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col min-h-screen">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="undraw_startled_8p0r.svg"/>
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Whoooooppppsss....</h1>
            <p className="mb-8 leading-relaxed">Halaman yang anda cari tidak dapat ditemukan</p>
            <div className="flex justify-center">
            <Link href='/'>
                <a className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Kembali ke Beranda
                </a>
            </Link>
            </div>
            </div>
        </div>
        </section>
    )
}