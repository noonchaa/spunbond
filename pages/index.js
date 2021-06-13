import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import {createClient} from 'contentful'

export const getStaticProps = async () => {
  const client = createClient({
      space: process.env.CONTENTFUL_ID,
      accessToken: process.env.CONTENTFUL_TOKEN
  })
  const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
  return {
    props: {
      homePage: homepage.items[0]
    },
    revalidate: 60
  }
}

export default function Home({homePage}) {
  const {siteTitle,description,title,text1,text2,headOffice,factory,sales,heroImage,socialMediaLink} = homePage.fields

  return (
    <Layout title={siteTitle} desc={description} foottitle={title} lead={text1} second={text2} factory={factory} office={headOffice} sales={sales}
      img={heroImage.fields.file.url} fb={socialMediaLink[0].fields.facebook} twit={socialMediaLink[0].fields.twitter}
      insta={socialMediaLink[0].fields.instagram} lin={socialMediaLink[0].fields.linkedIn} >
      <Hero img={heroImage.fields.file.url} title={title} lead={text1} second={text2} />
    </Layout>
  )
}