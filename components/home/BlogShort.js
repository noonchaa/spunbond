import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'

export default function BlogShort({post}) {
    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
    <Link href='/blog'>
        <a className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Berita Terbaru
        </a>
    </Link>
    </div>
    <div className="flex flex-wrap -m-4">
    {post.map((item,index)=> (
      <div className="p-4 lg:w-1/3" key={index}>
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.fields.judul}</h1>
        <p className='leading-relaxed mb-3'>{item.fields.keyword}</p>
        <Link href={`/blog/${item.fields.slug}`}>
        <a className="text-blue-500 inline-flex font-semibold items-center">Selengkapnya
          <FaArrowRight className="w-4 h-4 ml-2"/>
        </a>
        </Link>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-900 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
              Published : {item.sys.createdAt.slice(0,10)}
          </span>
        </div>
      </div>
    </div>
    ))}
    </div>
  </div>
</section>
    )
}