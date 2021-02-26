import Head from "next/head";
import Header from "../../components/pennyjuice/header";
import Main from "../../components/pennyjuice/main";
import Footer from "../../components/pennyjuice/footer";
import Nav from "../../components/pennyjuice/nav";

export default function Pennyjuice() {
    return (
      <div>
        <Head>
          <title>Alfred Sung Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
       <Header/>

       <Nav/>
       
       <Main/>

      <Footer/>

      </div>
    )
  }
  