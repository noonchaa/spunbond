import {createClient} from 'contentful'

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
            home : homepage[0],
            sales: salesman.items.map(item => ({...item.fields}))
        },
        revalidate: 10
    }
}

const PostDetail = ({postDetail,home, sales}) => {
    if (!postDetail) return <h1>...loading...</h1>
    const {judul} = postDetail.fields
    return (
        <div>
            <h1>{judul}</h1>
        </div>
    )
}

export default PostDetail