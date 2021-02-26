import Image from 'next/image'
import Link from 'next/link'
import Nav from "./Nav"

const Header = () => {
    return (
        <div>    
        <div className="header-section w-full lg:min-h-0 md:min-h-screen">
            <div className="container mx-auto">   
                <header className="header-wrap flex-row mr-6 ml-6 lg:flex-row lg:mr-6 lg:ml-6 sm:flex-col sm:mr-0 sm:ml-0 lg:flex hidden">
                    <div className="logo-area bg-theme-color pt-10 pb-4 pr-8 flex md:justify-center">
                        <Image src="/images/act-logo.png" width={195} height={168} alt=""/>
                    </div>
                    <div className="menu-are2 uppercase flex-grow self-end text-xl lg:text-xl md:text-xl font-bold lg:self-end md:self-center">
                        <Nav/>
                    </div>
                    
                    <div className="social-media-area flex flex-col self-end lg:self-end md:self-center">
                        <div className="social-media-icons flex self-end mb-2 lg:self-end md:self-center">
                            <div className="pl-3">
                                <Image src="/images/instagram.png" width={20} height={20} alt=""/>
                            </div>
                            <div className="pl-3">
                                <Image src="/images/facebook.png" width={11} height={20} alt=""/>
                            </div>  
                            <div className="pl-3">
                                <Image src="/images/twitter.png" width={20} height={17} alt=""/>
                            </div>
                        </div>
                        <div className="search-area mb-4">
                            <input type="text" name="search" id="" placeholder="Search" className="p-2 rounded-full"/>
                        </div>
                    </div>

                </header>

                
                <header className="mobile-header flex flex-row flex-wrap lg:hidden p-2">
                    <div className="flex-none p-1"><Image src="/images/menu.svg" width={34} height={24} alt=""/></div>
                    <div className="flex-grow flex justify-center"><Image src="/images/title-logo.svg" width={168} height={24} alt=""/></div>
                    <div className="flex-none"><Image src="/images/round-logo-act.svg" width={33} height={33} alt=""/></div>
                </header>


                
                <div className="banner-section flex lg:flex-row flex-col mt-5">
                    <div className="left-banner-img lg:w-3/6 lg:order-first order-last w-full">
                        <Image src="/images/shapes.png" width={820} height={609} alt="banner shapes"/>
                    </div>
                    <div className="banner-text text-white uppercase flex-stretch p-6 text-center lg:order-last order-first">
                        <h1 className="flex flex-col">
                            <span className="xl:text-9xl md:text-7xl text-5xl p-0 leading-none">This site</span>
                            <span className="xl:text-9xl md:text-7xl text-5xl p-0 leading-none tracking-wide">presents</span>
                            <span className="xl:text-5xl md:text-4xl text-2xl p-0 leading-none tracking-widest">experimental ways</span>
                            <span className="xl:text-3xl md:text-2xl p-0 leading-none tracking-wider">in which to explore collection</span>
                            <span className="xl:text-8xl md:text-7xl text-5xl p-0 leading-none tracking-wider">materials</span>
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    </div>  
    );
}

export default Header;

    
 