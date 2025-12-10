import Navbar from "../component/Navbar"
import Header from "../component/Header"
import Card from "../component/Card"

import { cartData } from "./data"
export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="card-container">
            {cartData.map(item => (
                 
                <Card key={item.id} {...item} />
            ))}
            </div>

           
            
            

            
        </div>
    )
}