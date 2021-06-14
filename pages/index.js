import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import {createClient} from 'contentful'
import About from '../components/home/About'
import Appliance from '../components/home/Appliance'
import Team from '../components/home/Team'
import BlogShort from '../components/home/BlogShort'

export const getStaticProps = async () => {
  const client = createClient({
      space: process.env.CONTENTFUL_ID,
      accessToken: process.env.CONTENTFUL_TOKEN
  })
  const homepage = await client.getEntries({content_type:'homePage', 'fields.siteTitle': 'Care Spunbond'})
  const salesman = await client.getEntries({content_type: 'salesman'})
  const pakai = await client.getEntries({content_type:'aplikasiSpunbond'})
  const team = await client.getEntries({content_type:'management'})
  const post = await client.getEntries({content_type:'blogPost','order':'sys.createdAt', 'limit':3})
  return {
    props: {
      homePage: homepage.items[0],
      salesman: salesman.items.map(item=>({...item.fields})),
      pakai: pakai.items.map(item=>({...item.fields})),
      team: team.items.map(item=>({...item.fields})),
      post: post.items
    },
    revalidate: 60
  }
}

export default function Home({homePage,salesman,pakai,team,post}) {
  const {siteTitle,description,title,text1,text2,headOffice,factory,heroImage,facebook,instagram,twitter,linkedIn,
          visi,misi,value,tentangKami,motto,judulTentangKami} = homePage.fields

  return (
    <Layout title={siteTitle} desc={description} foottitle={title} lead={text1} second={text2} factory={factory} office={headOffice}
      img={heroImage.fields.file.url} fb={facebook} twit={twitter}insta={instagram} lin={linkedIn} sales={salesman} >
      <Hero img={heroImage.fields.file.url} title={title} lead={text1} second={text2} />
      <About visi={visi} misi={misi} value={value} tentang={tentangKami} judul={judulTentangKami} moto={motto} />
      <Appliance pakai={pakai} />
      <Team team={team} />
      <BlogShort post={post} />
    </Layout>
  )
}