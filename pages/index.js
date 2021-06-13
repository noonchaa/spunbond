import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='Care Spunbond' desc='Non-Woven Manufacturer' >
      <div className='bg-red-400'>
        <h1>Care Spundbond</h1>
      </div>
    </Layout>
  )
}