import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WEB3 for Freedom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
        <h1 class"title"> Follow us @WEB3forFreedom <h1/>
        <p className="description">
          Get started by editing <code>pages/index.js</code
        <Header/>
        </p>
      </main>

      <Footer />
    </div>
  )
}
