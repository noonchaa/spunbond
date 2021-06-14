import Image from 'next/image'

export default function Appliance({pakai}) {
    return(
        <section className="text-gray-600 body-font" id='aplikasi' >
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Aplikasi Spunbond Dalam Industri</h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Spunbond / Laken / Furing bisa digunakan atau di aplikasikan 
      dalam berbagai macam industri.</p>
    </div>
    <div className="flex flex-wrap -m-4">
    {pakai.map((item,index)=>(
      <div className="xl:w-1/4 md:w-1/2 p-4" key={index} >
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image className="h-40 rounded w-full object-cover object-center mb-6" 
        src={`https:${item.gambar.fields.file.url}`} height={160} width='auto' alt="content"/>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.nama}</h2>
      </div>
    </div>
    ))}
    </div>
  </div>
</section>
    )
}