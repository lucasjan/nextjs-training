import Link from 'next/link'

export default function Nav() {
    return (
    <div>    
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
    )
  }
 