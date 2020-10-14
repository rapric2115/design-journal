import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import TextList from '../../content-api/test-list'
import Head from 'next/head';
import Link from 'next/link';
import LogSubs from '../../components/LogSubs'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query  

return (
<Layout>
  <Head>
    <title>{TextList[pid].title} | The Design Journal</title>
  </Head>
  <main className="container">
    <div className="row">
      <div className="col-md-8">
      <div>google ads</div>
      <h1>{TextList[pid].title}</h1>
      <time dateTime={TextList[pid].timePub}>{TextList[pid].fechaPub}</time>
      <br />
      <img src={TextList[pid].imageUrl1} alt={TextList[pid].imgAlt1} className="img-fluid"/>
      <p>{TextList[pid].description}</p>
      <p>{TextList[pid].parrafo1}</p>
      <br/>
      <img src={TextList[pid].imageUrl2} alt={TextList[pid].imgAlt2} className="img-fluid"/>
      <p>{TextList[pid].parrafo2}</p>
      <p>{TextList[pid].parrafo3}</p>
      
      <br />
      <img src={TextList[pid].imageUrl3} alt={TextList[pid].imgAlt3} className="img-fluid"/>
      <p>{TextList[pid].parrafo4}</p>
      <p>{TextList[pid].parrafo5}</p>
      <h2>{TextList[pid].subtitle}</h2>
      <p>{TextList[pid].parrafo6}</p>
      </div>
      <div className="col-md-4">
        ads
      </div>
    </div>
  </main>
</Layout>
)
}

export default Post