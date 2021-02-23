import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
    <div>    
      <div className="font-pj-varela bg-pj-grey">
            <header className="lg:bg-pj-header lg:min-h-screen bg-center bg-cover bg-no-repeat">
                <div className="bg-pj-header-nav bg-cover bg-center bg-no-repeat lg:flex hidden">
                    <div className="xl:container xl:mx-auto mx-10">
                        <div className="flex flex-row pb-20">
                            <div>
                                <div className="flex flex-row text-sm mt-2">
                                    <span className="flex-grow">915 40th Ave Bettendorf, IA 52722</span>
                                    <span className="">563-386-1999</span>
                                </div>
                                <div className="mt-2">
                                    <div className="2xl:w-full lg:w-1/2">
                                        <Image src="/images/pj-logo.png" layout="fixed" width={380} height={137} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <nav className="flex flex-grow justify-end items-center">
                                <ul className="flex flex-row">
                                    <li className="xl:mr-10 ml-10">
                                        <Link href="/pennyjuice/menu1">
                                            <a>MENU1</a>
                                        </Link>
                                    </li>
                                    <li className="xl:mr-10 ml-10">
                                        <Link href="/pennyjuice/menu2">
                                            <a>MENU2</a>
                                        </Link>
                                    </li>
                                    <li className="xl:mr-10 ml-10">
                                        <Link href="/pennyjuice/menu3">
                                            <a>MENU3</a>
                                        </Link>
                                    </li>
                                    <li className="xl:mr-10 ml-10">
                                        <Link href="/pennyjuice/menu4">
                                            <a>MENU4</a>
                                        </Link>
                                    </li>
                                    <li className="xl:mr-10 ml-10">
                                        <Link href="/pennyjuice/menu5">
                                            <a>MENU5</a>
                                        </Link>
                                    </li>
                                </ul> 
                            </nav>
                            
                        </div>
                    </div>
                    
                </div>

                <div className="bg-pj-green-fruit lg:hidden grid grid-cols-3 p-3">
                    <div className="flex justify-center">
                        <Image className="w-6" width={24} height={28.35} src="/images/menu-white-icon.svg" alt=""/>
                    </div>
                    <div className="flex justify-center">
                        <Image className="w-6" width={24} height={28.35} src="/images/location-white-icon.svg" alt=""/>
                    </div>
                    <div className="flex justify-center">
                        <Image className="w-6" width={24} height={28.35} src="/images/phone-white-icon.svg" alt=""/>
                    </div>
                </div>
                <div className="lg:hidden flex justify-center mt-5">
                    <Image className="2xl:w-full w-1/2" width={384} height={138.083} src="/images/pj-logo.png" alt=""/>
                </div>
               

                <div className="container mx-auto">
                    <div className="lg:w-3/5 flex flex-col mt-20 lg:pb-0 pb-20 md:px-0 px-10 justify-center items-center">
                        <h1 className="md:w-4/5 flex flex-col 2xl:text-4xl text-2xl justify-center items-center">
                            <span className="text-center"><span className="pr-2 bg-pj-torn bg-contain bg-no-repeat bg-bottom">100% blended</span>fruit juice concentrate
                            specifically designed for childcare centers.</span>
                        </h1>
                        <button className="bg-pj-orange rounded-full text-white font-bold py-5 px-10 mt-5 2xl:text-2xl text-xl" type="button">ORDER NOW !</button>
                    </div>
                </div>
            </header>
      </div>
    </div>  
    )
  }
 