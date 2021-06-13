import Head from 'next/head'

const Layout = ({title,desc,children}) => {
    return (
        <div className='bg-gray-100'>
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Head>
        <main>
            <div className='container mx-auto px-6 py-3'>
            {children}
            </div>
        </main>
        <footer>
        <div className='container mx-auto px-6 py-3'>
            Footer
        </div>
        </footer>
        </div>
    )
}
export default Layout