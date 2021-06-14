import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

export default function Post({post}) {

    return(
        <section className='text-gray-600 body-font'>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col w-full">
                    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1 uppercase text-center">moto</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">{post.fields.judul}</h1>
                    <p className="lg:w-2/3 leading-relaxed text-base pb-5">
                    tanggal
                    </p>
                    <div className='prose max-w-none lg:prose-lg xl:prose-xl'>
                        contentful rich text
                    </div>
                </div>
            </div>
        </section>
    )
}