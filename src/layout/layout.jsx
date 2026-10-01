import { Header } from "../pages/header"
import { Outlet } from "react-router"

export const Layout = props =>{
    return(
    <>
    <Header />
    <main>
        <Outlet />
    </main>
    </>
)}