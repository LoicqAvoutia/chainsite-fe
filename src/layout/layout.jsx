import { Header } from "../pages/header"
import { Outlet } from "react-router"
import { Footer } from "../components/footer"
import './Layout.css'

export const Layout = props =>{
    return(
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
)}