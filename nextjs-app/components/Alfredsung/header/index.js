import Image from 'next/image'
import styles from './Alfredsungheader.module.css'

export default function Header() {
    return (
      <div>
        <section className="container-wrap grid grid-cols-3 mt-5">
          <div className="flex-left">
              <Image src="/images/alfredsung/menu-black.png" width={47} height={34}/>
          </div>
          <div className="flex-center">
              <Image src="/images/alfredsung/AlfredSung_Logo_Black.png" width={278} height={77}/>
          </div>
          <div className="flex-right">
              <div className="flex flex-row">
                  <div className="px-3">
                      <Image src="/images/alfredsung/loupe.png" width={37} height={37}/>
                  </div>
                  <div className="px-3">
                      <Image src="/images/alfredsung/user.png" width={37} height={37}/>
                  </div>
                  <div className="px-3">
                      <Image src="/images/alfredsung/cart.png" width={37} height={37}/>
                  </div>
              </div>
          </div>
        </section>
        <section className="grid grid-cols-2 mt-10">
          <div>
          
          </div>
          <div>
            <div className="w-full">
                <Image src="/images/alfredsung/banner-right-glasses.jpg" width={960} height={941}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
 