import Head from 'next/head'
import Footer from './Footer'

const Layout = ({title,desc,children, foottitle, lead, second,factory,office,sales,img,fb,insta,twit,lin}) => {
    return (
        <div className='bg-gray-50'>
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
        <main>
            {children}
        </main>
        <Footer foottitle={foottitle} lead={lead} second={second} factory={factory} office={office} sales={sales} img={img} fb={fb} twit={twit}
            insta={insta} lin={lin} />
        </div>
    )
}
export default Layout