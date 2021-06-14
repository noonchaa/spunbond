export default function About({moto,tentang,visi,misi,value,judul}) {
    return(
        <section className="text-gray-600 body-font" id='profile' >
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1 uppercase ">{moto}</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">{judul}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left md:text-center">
      {tentang}
      </p>
    </div>
    <div className="flex flex-wrap">
      <div className="lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Vision</h2>
        <p className="leading-relaxed text-base mb-4">
        {visi}
        </p>
        
      </div>
      <div className="lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Mission</h2>
        <p className="leading-relaxed text-base mb-4">
        {misi}
        </p>
        
      </div>
      <div className="lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Value</h2>
        <p className="leading-relaxed text-base mb-4">
        {value}
        </p>
        
      </div>
    </div>
  </div>
</section>
    )
}