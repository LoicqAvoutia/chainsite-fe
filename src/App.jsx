import { Routes, Route } from 'react-router'
import { Layout } from './layout/layout.jsx'
import { Home } from './pages/home'
import { Product } from './pages/product'
import { About } from './pages/about'
import { Contacts } from './pages/contacts'
import './App.css'
import { Header } from './pages/header.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prodotti" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contatti" element={<Contacts />} />
      </Route>
    </Routes>
  )
}

export default App
