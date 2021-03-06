import Image from "next/image"

export default function Team({team}) {
    return(
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Official Staff</h1>
    </div>
    <div className="flex flex-wrap -m-2">
    {team.map((item,index)=>(
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={`https:${item.foto.fields.file.url}`} width={64} height={64} />
          <div className="flex-grow pl-4">
            <h2 className="text-gray-900 title-font font-medium">{item.nama}</h2>
            <p className="text-gray-500">{item.jabatan}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</section>
    )
}