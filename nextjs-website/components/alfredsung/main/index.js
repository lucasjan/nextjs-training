import Image from 'next/image'
import styles from './main.module.css'

export default function Main() {
    return (
      <div>
          <div className="grid grid-cols-2 my-20">
              <div className="flex flex-col items-center justify-center border-r border-black border-solid">
                  <span className="mb-5 font-ass-raleway text-2xl">MEN'S</span>
                  <Image src="/images/man-with-glasses-and-shirt.svg" layout="fixed" width={91} height={140}/>
                  <span className="mt-5 font-ass-raleway text-2xl">SUNGLASSES</span>
                  <button className={styles.borderbtnFormat} type="button">
                      SHOP NOW
                  </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <span className="mb-5 font-ass-raleway text-2xl">WOMEN'S</span>
                  <Image src="/images/woman-with-bund-and-glasses.svg" layout="fixed" width={91} height={140}/>
                  <span className="mt-5 font-ass-raleway text-2xl">SUNGLASSES</span>
                  <button className={styles.borderbtnFormat} type="button">
                      SHOP NOW
                  </button>
              </div>
          </div>

          <div className="our-store-section lg:grid lg:grid-cols-2 flex flex-col bg-ass-theme-color">
              <div className="order-1">
                  <Image src="/images/our-store.jpg" layout="responsive" width={960} height={446}/>
              </div>
              <div className="flex flex-col order-2 items-center justify-center lg:pt-0 lg:pb-0 pt-20 pb-20">
                  <h2>
                      <span className="font-ass-modern text-5xl font-bold text-ass-primary">Our</span>
                      <span className="font-ass-brittany text-5xl">Store</span>
                  </h2>
                  <span className="w-3/5 mt-2 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                  <button  className={styles.borderbtnFormat} type="button">
                      ENTER
                  </button>
              </div>
          </div>


          <div className="container mx-auto lg:my-20 lg:grid lg:grid-cols-2 flex flex-col bg-ass-theme-color">
            
              <div className="lg:order-none order-1">
                <Image  src="/images/elegant.jpg" layout="responsive" width={820} height={642} />
              </div>
              

              <div className="lg:order-none order-2 flex flex-col items-center justify-center lg:pt-0 lg:pb-0 pt-20 pb-20">
                  <h2>
                      <span className="font-ass-modern text-5xl font-bold text-ass-primary">Elegant</span>
                      <span className="font-ass-brittany text-5xl">Style</span>
                  </h2>
                  <span className="w-3/5 mt-2 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                  <button className={styles.borderbtnFormat} type="button">
                    SHOP NOW
                  </button>
              </div>

              <div className="lg:order-none order-4 flex flex-col items-center justify-center lg:pt-0 lg:pb-0 pt-20 pb-20">
                  <h2>
                      <span className="font-ass-modern text-5xl font-bold text-ass-primary">Stylish</span>
                      <span className="font-ass-brittany text-5xl">Look</span>
                  </h2>
                  <span className="w-3/5 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                  <button className={styles.borderbtnFormat} type="button">
                    SHOP NOW
                  </button>
              </div>

              <div className="lg:order-none order-3">
                  <Image src="/images/stylish.jpg" layout="responsive" width={820} height={642} />
              </div>
                
              <div className="lg:order-none order-5">
                  <Image src="/images/casual.jpg" layout="responsive" width={820} height={642} />
              </div>
              
              <div className="lg:order-none order-6 flex flex-col items-center justify-center order-6 lg:pt-0 lg:pb-0 pt-20 pb-20">
                  <h2>
                      <span className="font-ass-modern text-5xl font-bold text-ass-primary">Casual</span>
                      <span className="font-ass-brittany text-5xl">Wear</span>
                  </h2>
                  <span className="w-3/5 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                  <button className={styles.borderbtnFormat} type="button">
                    SHOP NOW
                  </button>
              </div>
          </div>

          <div className="bg-ass-background-color lg:grid lg:grid-cols-2 flex flex-col">
                <div className="flex flex-col items-center lg:p-5 p-10 justify-center lg:order-1 order-2">
                    <h2 className="md:w-3/5 w-4/5 flex flex-col">
                        <span className="font-ass-modern lg:text-11xl md:text-9xl text-6xl text-ass-primary">SALE</span>
                        <span className="font-ass-brittany text-right md:text-7xl text-4xl">up to 70% off</span>
                    </h2>
                    <span className="md:w-3/5 w-4/5 mt-10 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                    <button className={styles.borderbtnFormat} type="button">
                    SHOP NOW
                    </button>
                </div>
                <div className="lg:order-2 order-1">
                    <Image src="/images/sale-glasses.svg" layout="responsive" width={960} height={941}/>
                </div>
           </div>

           <div className="lg:m-20 m-10">
                <div className="flex items-center justify-center mb-10">
                    <h2>
                        <span className="font-ass-modern text-5xl font-bold text-ass-primary">Best</span>
                        <span className="font-ass-brittany text-5xl">Seller</span>
                    </h2>
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col">
                    <div className="flex flex-col items-center justify-center lg:mb-0 mb-20">
                        <div>
                            <Image src="/images/best-seller-glasses1.jpg" width={536} height={536}/>
                        </div>
                        <span className="mt-10 w-4/5 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                        <button className="bg-transparent border border-black text-black font-bold py-2 px-4 mt-5" type="button">
                        SHOP NOW
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:mb-0 mb-20">
                        <div>
                            <Image src="/images/best-seller-glasses2.jpg" width={536} height={536}/>
                        </div>
                        
                        <span className="mt-10 w-4/5 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                        <button className="font-ass-raleway bg-transparent border border-black text-black font-bold py-2 px-4 mt-5" type="button">
                        SHOP NOW
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-cente lg:mb-0 mb-20">
                        <div>
                            <Image src="/images/best-seller-glasses3.jpg" width={536} height={536}/>    
                        </div>
                        <span className="mt-10 w-4/5 font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                        <button className="font-ass-raleway bg-transparent border border-black text-black font-bold py-2 px-4 mt-5" type="button">
                        SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-ass-background-color flex lg:flex-row flex-col items-center justify-center lg:p-20 p-5 mt-10">
                <Image src="/images/paper-plane.svg" width={54} height={37}/>
                <div className="flex flex-col lg:ml-5 lg:mt-0 mt-5">
                    <span className="lg:text-3xl text-xl lg:text-left text-center font-ass-raleway">Sign up to Newsletter</span>
                    <span className="font-ass-raleway">...and receive $20 coupon for first shopping</span>
                </div>
                <div className="grid grid-cols-3 lg:ml-10 lg:mt-2 mt-10 shadow">
                    <input className="bg-white py-3 px-4 text-black col-start-1 col-span-2" type="email" name="" id="email" placeholder="Email Address"/>
                    <button className="font-ass-raleway bg-ass-bgcolor-orange text-white lg:text-lg text-sm py-2 px-4 col-start-3 col-span-1" type="button">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
      </div>
    )
  }