import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image'

export default function Post({judul,post,tanggal,motto}) {
    const publish = new Date(tanggal)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const CustomRender = ({url, width, height}) => (
        <div>
            <Image src={`https:${url}`} alt='post' width={width} height={height} layout='intrinsic' />
        </div>
    )
    const optionsRender = {
        renderNode:{
            [BLOCKS.EMBEDDED_ASSET] : (node) => {
                const {url} = node.data.target.fields.file
                const {width, height} = node.data.target.fields.file.details.image
                return <CustomRender url={url} width={width} height={height} />
            }
        }
    }

    return(
        <section className='text-gray-600 body-font'>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col w-full">
                    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1 
                    uppercase text-center">{motto}</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">
                        {judul}
                    </h1>
                    <p className="lg:w-2/3 leading-relaxed text-base pb-5">
                    Publised : {publish.toLocaleDateString('ID',options)}
                    </p>
                    <div className='prose max-w-none lg:prose-lg xl:prose-xl'>
                        {documentToReactComponents(post,optionsRender)}
                    </div>
                </div>
            </div>
        </section>
    )
}