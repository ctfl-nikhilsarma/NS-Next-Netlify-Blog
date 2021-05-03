import Head from 'next/head'

import { fetchEntries } from '@components/contentfulPosts'
import Post from '@components/Post'

import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ posts }) {
  console.log(posts.image)
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />      
      
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}