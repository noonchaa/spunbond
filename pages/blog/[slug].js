import {createClient} from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({content_type:'blogPost'})
    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: true
    }
}
export const getStaticProps = async ({params}) => {
    const {items} = await client.getEntries({content_type:'blogPost','fields.slug':params.slug})
    const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
    const salesman = await client.getEntries({content_type: 'salesman'})
    if (!items.length){
        return {
            redirect:{
                destination:'/blog',
                permanent: false
            }
        }
    }
    return {
        props:{
            isiPost:items[0],
            homepage: homepage[0],
            salesman: salesman.items.map(item=>({...item.fields}))
        },
        revalidate:10
    }
}

const Posts = ({isiPost,homepage,salesman}) => {

    return(
        <div>
        <h1>key</h1>
        </div>
    )
}
export default Posts