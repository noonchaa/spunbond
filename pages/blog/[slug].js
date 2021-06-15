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
  const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
  const salesman = await client.getEntries({content_type: 'salesman'})
  return {
    props: {
      isipost: items[0],
      homePage: homepage.items[0],
      salesman: salesman.items.map(item=>({...item.fields})),
    },
    revalidate: 60
  }
}

export default function Posts({isipost,homePage,salesman}) {
    const {siteTitle,description,title,text1,text2,headOffice,factory,heroImage,facebook,instagram,
            twitter,linkedIn} = homePage.fields

    return(
        <Layout title={siteTitle} desc={description} foottitle={title} lead={text1} second={text2} factory={factory} 
        office={headOffice} img={heroImage.fields.file.url} fb={facebook} twit={twitter}insta={instagram} 
        lin={linkedIn} sales={salesman} >
            <Header link={['profile','aplikasi','contact']} titleLink={'/'} img={heroImage.fields.file.url} />
            <Post blogPost={isipost} />
        </Layout>
    )
}