import {createClient} from 'contentful'
import Layout from '../../components/Layout'
import Header from '../../components/blog/Header'

const client = createClient({
    space: process.env.CONTENTFUL_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({content_type:'blogPost'})
    const paths = res.items.map(item => {
        return {
            params : {id: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({params}) => {
    const {items} = await client.getEntries({content_type:'blogPost','fields.slug':params.id})
    const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
    const salesman = await client.getEntries({content_type: 'salesman'})
    return {
        props : {
            postDetail : items[0],
            home : homepage.items[0],
            sales: salesman.items.map(item => ({...item.fields}))
        },
        revalidate: 10
    }
}

const PostDetail = ({postDetail,home, sales}) => {
    if (!postDetail) return <h1>...loading...</h1>
    const {judul,keyword,post} = postDetail.fields
    const {createdAt} = postDetail.sys
    const {
        title,
        text1,
        text2,
        headOffice,
        factory,
        heroImage,
        facebook,
        instagram,
        twitter,
        linkedIn,
        motto
    } = home.fields

    return (
        <Layout title={judul} desc={keyword} foottitle={title} lead={text1} second={text2} 
        factory={factory} office={headOffice} img={heroImage.fields.file.url} fb={facebook} 
        twit={twitter}insta={instagram} lin={linkedIn} sales={sales}>
            <Header link={['profile','aplikasi','contact']} titleLink={'/'} img={heroImage.fields.file.url} />

        </Layout>
    )
}

export default PostDetail