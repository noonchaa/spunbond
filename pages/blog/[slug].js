import Layout from "../../components/Layout";
import {createClient} from 'contentful'
import Header from "../../components/blog/Header";
import Post from "../../components/blog/Post";

const client = createClient({
    space: process.env.CONTENTFUL_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({content_type:'blogPost'})
    const paths = res.items.map(item => {
        return {
            params:{slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({params}) => {
  const {items} = await client.getEntries({content_type:'blogPost','fields.slug':params.slug})
  return {
    props: {
      post: items[0]
    },
    revalidate: 60
  }
}

export default function Posts({post}) {

    return(
        <div>
            Slug
        </div>
    )
}