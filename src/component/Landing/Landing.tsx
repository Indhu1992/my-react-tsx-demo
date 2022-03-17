import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { About } from "../About/About"
import { ContactUs } from "../Contact-us/ContactUs"
import { Home } from "../Home/Home"
import { Services } from "../Services/Services"
import './Landing.css'

export const Landing = () => {
    return (
    <div className="landing">
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="Home" element={<Home></Home>} />
                <Route path="About" element={<About></About>} />
                <Route path="Services" element={<Services></Services>} />
                <Route path="Contactus" element={<ContactUs></ContactUs>} />
            </Routes>
        </Suspense>
        
    </div>)
}