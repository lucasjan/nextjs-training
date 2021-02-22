import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
    return (
      <div>
        <section className="container-wrap grid grid-cols-3 mt-5 lg:px-0 px-5">
          <div className="flex-left lg:row-auto row-start-2">
              <Image src="/images/menu-black.png" layout={'fixed'} width={47.41} height={34.24}/>
          </div>
          <div className="flex-center lg:col-auto col-span-3 lg:mb-0 mb-10">
              <Image src="/images/AlfredSung_Logo_Black.png" layout={'fixed'} width={278} height={77}/>
          </div>
          <div className="flex-right lg:col-auto col-start-3">
              <div className="flex flex-row">
                  <div className="pl-5 flex justify-center items-center">
                      <Image src="/images/loupe.png" layout="fixed" width={37.09} height={37.09}/>
                  </div>
                  <div className="pl-5 flex justify-center items-center">
                      <Image src="/images/user.png" layout="fixed" width={35.54} height={37.18}/>
                  </div>
                  <div className="pl-5 flex justify-center items-center">
                      <Image src="/images/cart.png" layout="fixed" width={29.41} height={35.33}/>
                  </div>
              </div>
          </div>
        </section>
        <section className="lg:grid lg:grid-cols-2 flex flex-col mt-10 bg-as-grey">
          <div className="flex-col-center lg:py-0 py-10">
            <h1 className="flex flex-col">
              <span className="text-ass-primary font-ass-modern lg:text-11xl text-7xl flex-left leading-none">Elegant</span>
              <span className="font-ass-brittany lg:text-7xl text-5xl flex-right leading-none">style glasses</span>  
            </h1>
            <div className="lg:mt-20 mt-10">
                    <button className={styles.borderbtnheaderFormat}  type="button">
                        SHOP NOW
                    </button>
            </div>
          </div>
          <div className="">
            <div className="w-full">
                <Image src="/images/banner-right-glasses.jpg" layout="responsive" width={960} height={941}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
 