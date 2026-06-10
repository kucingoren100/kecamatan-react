import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Beranda from './pages/Beranda'
import Profil from './pages/Profil'
import Pelayanan from './pages/Pelayanan'
import FAQ from './pages/FAQ'
import SKM from './pages/SKM'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"          element={<Beranda />} />
          <Route path="/profil"    element={<Profil />} />
          <Route path="/pelayanan" element={<Pelayanan />} />
          <Route path="/faq"       element={<FAQ />} />
          <Route path="/skm"       element={<SKM />} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </>
  )
}
