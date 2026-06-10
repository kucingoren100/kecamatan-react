import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
