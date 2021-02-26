import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return (
    <div>    
        <ul className="menu-list flex p-4 list-none">
            <li className="text-white pl-2 pr-6 md:p-2">Works</li>
            <li className="text-white pr-6 md:p-2">People</li>
            <li className="text-white pr-6 md:p-2">About</li>
            <li className="text-white pr-6 md:p-2">Contact Us</li>
        </ul>
    </div>  
    )
  }
 