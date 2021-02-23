import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
    return (
      <div>
        <footer className="flex flex-col items-center justify-center bg-ass-bgcolor-black pt-20 pb-20 md:pl-0 md:pr-0 pl-5 pr-5">
                <Image src="/images/logo-white-ass.svg" width={292} height={80} />
                <span className="mt-10 lg:w-1/4 lg:mr-5 lg:ml-5 mr-5 ml-5 text-center text-white font-ass-raleway">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, ex non tempor lacinia, massa metus feugiat </span>
                <ul className="lg:mt-2 mt-10 md:flex md:flex-row flex-col md:w-auto w-full uppercase text-white text-xl border-b border-white font-ass-raleway">
                    <li className="lg:p-5 p-2 text-center">home</li>
                    <li className="lg:p-5 p-2 text-center">men</li>
                    <li className="lg:p-5 p-2 text-center">women</li>
                    <li className="lg:p-5 p-2 text-center">shop</li>
                    <li className="lg:p-5 p-2 text-center">contact us</li>
                </ul>
                <div className="flex flex-row mt-5 mb-5">
                    <div className="flex justify-center items-center px-5">
                        <Image src="/images/as-instagram.png" layout="fixed" width={31} height={31}/>
                    </div>
                    <div className="flex justify-center items-center px-5">
                        <Image src="/images/as-fb.png" layout="fixed" width={16.32} height={31.25}/>
                    </div>
                    <div className="flex justify-center items-center px-5">
                        <Image src="/images/as-twitter.png" layout="fixed" width={31.25} height={25}/>
                    </div>
                </div>
                <div className="flex flex-row">
                <Image src="/images/maestro.svg" width={63} height={40}/>
                <Image src="/images/mastercard.svg" width={64} height={40} />
                <Image src="/images/paypal.svg" width={65} height={40}/>
                <Image src="/images/visa.svg" width={64} height={40}/>
                </div>
                <div className="flex flex-row items-center justify-center mt-10 font-ass-raleway">
                    <span className="pr-2 text-white">ALFRED SUNG</span>
                    <Image src="/images/copyright.svg" width={13} height={13}/>
                    <span className="pl-2 text-white">2020.</span>
                </div>
                <span className="text-white font-ass-raleway">All rights reserved.</span>
        </footer>
      </div>
    )
  }
 