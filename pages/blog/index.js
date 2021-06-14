import Layout from "../../components/Layout";
import {createClient} from 'contentful'
import Header from "../../components/blog/Header";
import BlogSort from "../../components/blog/BlogSort";

export const getStaticProps = async () => {
  const client = createClient({
      space: process.env.CONTENTFUL_ID,
      accessToken: process.env.CONTENTFUL_TOKEN
  })
  const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
  const salesman = await client.getEntries({content_type: 'salesman'})
  const post = await client.getEntries({content_type:'blogPost','order':'sys.createdAt'})
  return {
    props: {
      homePage: homepage.items[0],
      salesman: salesman.items.map(item=>({...item.fields})),
      post: post.items
    },
    revalidate: 60
  }
}

export default function Blog({homePage,salesman,post}) {
    const {siteTitle,description,title,text1,text2,headOffice,factory,heroImage,facebook,instagram,twitter,linkedIn} = homePage.fields

    return(
        <Layout title={siteTitle} desc={description} foottitle={title} lead={text1} second={text2} factory={factory} office={headOffice}
        img={heroImage.fields.file.url} fb={facebook} twit={twitter}insta={instagram} lin={linkedIn} sales={salesman} >
        <Header link={['profile','aplikasi','contact']} titleLink={'/'} img={heroImage.fields.file.url} />
        <BlogSort post={post} />
        </Layout>
    )
}