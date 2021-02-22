import Head from "next/head";
import Header from "../../components/alfredsung/header";
import Main from "../../components/alfredsung/main";
import Footer from "../../components/alfredsung/footer";


export default function Alfredsung() {
    return (
      <div>
        <Head>
          <title>Alfred Sung Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
       <Header></Header>
          
       <Main></Main>

       <Footer></Footer>

      </div>
    )
  }
  