import Image from 'next/image'
import styles from './main.module.css'


export default function Main() {
    return (
      <div>
            <section className="container mx-auto">
                <div className="grid lg:grid-cols-3 lg:mt-10 p-10">
                    <div className="flex flex-col items-center xl:p-20 p-10 bg-pj-yellow-fruit">
                        <div>
                            <Image src="/images/orange-fruit.svg" width={104.26} height={142.28} alt=""/>
                        </div>
                        <div className="mt-5 flex flex-col items-center 2xl:text-xl xl:text-lg">
                            <span className="text-center">RAINBOWS OF</span>
                            <span className="text-center">EXCITING FLAVORS</span>
                        </div>
                        <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-5 text-lg" type="button">LEARN MORE</button>
                    </div>
                    <div className="flex flex-col items-center xl:p-20 p-10 bg-pj-orange-fruit">
                        <div>
                            <Image src="/images/grape-fruit.svg" width={118.07} height={145.22} alt=""/>
                        </div>
                        <div className="mt-5 flex flex-col items-center 2xl:text-xl xl:text-lg">
                            <span className="text-center">HEALTHY JUICE</span>
                            <span className="text-center">CONCENTRATE FOR KIDS</span>
                        </div>
                        <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-5 text-lg" type="button">LEARN MORE</button>
                    </div>
                    <div className="flex flex-col items-center xl:p-20 p-10 bg-pj-green-fruit">
                        <div>
                            <Image src="/images/strawberry-fruit.svg" width={99} height={139.44} alt=""/>
                        </div>
                        <div className="mt-5 flex flex-col items-center 2xl:text-xl xl:text-lg">
                            <span className="text-center">PENNY JUICE PRODUCTS</span>
                            <span className="text-center">IS FDA APPROVED</span>
                        </div>
                        <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-5 text-lg" type="button">LEARN MORE</button>
                    </div>
                </div>
            </section>

            <section className="bg-pj-grey mt-10">
                <div className="xl:container xl:mx-auto grid lg:grid-cols-2 xl:py-10 p-10">
                    <div className="flex justify-center">
                        <Image src="/images/fruit-glass.png" width={668} height={668} alt=""/>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:mt-10 mt-10">
                        <h2 className="xl:text-3xl lg:text-2xl">Easy-To-Make Juice Concentrates</h2>
                        <div className="flex flex-col mt-5">
                            <div className="flex flex-row justify-center items-center border-b py-5">
                                <div>
                                    <Image src="/images/fruit-icon1.svg" width={46.08} height={46.08} alt=""/>
                                </div>
                                <span className="pl-5 flex-grow">Prepare all flavors using seven parts water and one part juice concentrate.</span>
                            </div>
                            <div className="flex flex-row justify-center items-center border-b py-5">
                                <div>
                                    <Image src="/images/fruit-icon2.svg" width={46.16} height={47.63} alt=""/>
                                </div>
                                <span className="pl-5 flex-grow">You don’t need to refrigerate the concentrate before or after opening it.</span>
                            </div>
                            <div className="flex flex-row justify-center items-center border-b py-5">
                                <div>
                                    <Image src="/images/fruit-icon3.svg" width={46.06} height={49.15} alt=""/>
                                </div>
                                <span className="pl-5 flex-grow">Reduce cost per ounce, storage and handling requirements. </span>
                            </div>
                        </div>
                        <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-5 text-lg" type="button">LEARN MORE</button>
                    </div>
                </div>
            </section>
            <section className="bg-pj-green-fruit">
                <div className="container mx-auto md:p-20 p-5">
                    <div className="flex flex-col items-center justify-center my:mt-0 my-10">
                        <h2 className="text-3xl text-center">Get Juice Concentrates in a Variety of Flavors</h2>
                        <span className="lg:w-1/2 text-center mt-5">Kids love penny juice concentrates because it’s available 
                            in various exciting flavors and colors. Each case contains 
                            six half-gallon bottles of different flavors.
                        </span>
                        <div className="grid lg:grid-cols-3 mt-5 gap-5">
                            <div className="rounded-full 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20 w-18 h-18 bg-white">
                                <div className="flex flex-col items-center justify-center 2xl:h-24 xl:h-20 h-18">
                                    <div>
                                        <Image src="/images/contract-icon.svg" width={62.33} height={79.68} alt=""/>
                                    </div>
                                    <span className="2xl:text-2xl text-lg mt-5">No contracts</span>
                                </div>
                            </div>
                            <div className="rounded-full 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20 w-18 h-18 bg-white">
                                <div className="flex flex-col items-center justify-center 2xl:h-24 xl:h-20 h-18">
                                    <div>
                                        <Image src="/images/delivery-icon.svg" width={90.98} height={81} alt=""/>
                                    </div>
                                    
                                    <span className="2xl:text-2xl text-lg mt-5">Free delivery nationwide</span>
                                </div>
                            </div>
                            <div className="rounded-full 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20 w-18 h-18 bg-white">
                                <div className="flex flex-col items-center justify-center 2xl:h-24 xl:h-20 h-18">
                                    <div>
                                        <Image src="/images/cart-icon.svg" width={95.15} height={81} alt=""/>
                                    </div>
                                    <span className="2xl:text-2xl text-lg mt-5">Minimum order 1 case</span>
                                </div>
                            </div>
                        </div>
                        <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-10 text-lg" type="button">LEARN MORE</button>
                    </div>
                </div>
            </section>
            <section className="container mx-auto">
                <div className="flex flex-col items-center lg:p-40 md:p-20 p-5 my:mt-0 my-10">
                    <h2 className="text-3xl text-center">Get Juice Concentrates in a Variety of Flavors</h2>
                    <span className="xl:w-3/5 text-center">15 flavors available including 7 color free flavors. 
                        Each case contains 6  bottles of your choice. 
                        We’ve designed them especially for childcare, 
                        daycare, preschool, basp and extended daycare.
                    </span>
                    <div className="mt-10">
                        <Image src="/images/bottle.png" width={675} height={387} alt=""/>
                    </div>
                    <button className="bg-pj-orange rounded-full text-white py-2 px-5 mt-10 text-lg" type="button">ORDER NOW !</button>
                </div>
            </section>
      </div>
    )
  }