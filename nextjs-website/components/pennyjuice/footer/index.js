import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
      <div>
        <footer className="bg-pj-secondary">
            <div className="2xl:container 2xl:mx-auto xl:flex xl:flex-row grid lg:grid-cols-4 p-10">
                <div className="flex justify-center pt-2 lg:col-span-2">
                    <div>
                        <Image src="/images/pj-footer-logo.png" width={179.74} height={66.87} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col text-white px-10 lg:items-start items-center lg:mt-0 mt-10">
                    <span>KEEP IN TOUCH</span>
                    <span className="mt-2 xl:text-lg text-sm">Send us a message!</span>
                    <span className="xl:text-lg text-sm">name@pennyjuice.com</span>
                </div>
                <div className="flex flex-col text-white lg:items-start items-center lg:mt-0 mt-10">
                    <span>SAY HELLO</span>
                    <span className="mt-2 xl:text-lg text-sm">915 40th Ave Bettendorf, IA 52722</span>
                    <span className="xl:text-lg text-sm">563-386-1999</span>
                </div>
                <div className="flex flex-col text-white flex-grow items-center lg:col-span-2 xl:mt-0 mt-10">
                    <div className="flex flex-col lg:items-start items-center">
                        <span>MENU</span>
                        <ul className="flex mt-2">
                            <li className="2xl:px-5 px-2">
                                <Link href="/pennyjuice/menu1">
                                    <a>MENU1</a>
                                </Link>
                            </li>
                            <li className="2xl:px-5 px-2">
                                <Link href="/pennyjuice/menu2">
                                    <a>MENU2</a>
                                </Link>
                            </li>
                            <li className="2xl:px-5 px-2">
                                <Link href="/pennyjuice/menu3">
                                    <a>MENU3</a>
                                </Link>
                            </li>
                            <li className="2xl:px-5 px-2">
                                <Link href="/pennyjuice/menu4">
                                    <a>MENU4</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:col-span-2 xl:mt-0 mt-10">
                    <div className="px-5">
                        <Image src="/images/instagram.png" width={14} height={14} alt=""/>
                    </div>
                    <div className="px-5">
                        <Image src="/images/facebook.png" width={7.31} height={14}  alt=""/>
                    </div>
                    <div className="px-5 pt-1">
                        <Image src="/images/twitter.png" width={14} height={11.36}  alt=""/>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
 