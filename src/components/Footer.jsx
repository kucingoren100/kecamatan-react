import { Link } from 'react-router-dom'
import { SITE, NAV_ITEMS } from '../data/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Identitas */}
            <div className="footer-col footer-identity">
              <div className="footer-logo">
                <div className="logo-fallback small">
                  <i className="fas fa-landmark"></i>
                </div>
                <div>
                  <strong>{SITE.name}</strong>
                  <span>{SITE.kota}</span>
                </div>
              </div>
              <p>Website resmi Kecamatan Karang Tengah sebagai pusat informasi layanan publik bagi masyarakat.</p>
              <div className="footer-social">
                <a href="https://shorturl.at/th1iD" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://shorturl.at/OQ2VS" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                <a href="https://shorturl.at/s6f5Q" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            {/* Navigasi */}
            <div className="footer-col">
              <h4>Navigasi</h4>
              <ul>
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div className="footer-col">
              <h4>Kontak Kami</h4>
              <ul className="footer-contact">
                <li><i className="fas fa-map-marker-alt"></i><span>{SITE.alamat}</span></li>
                <li><i className="fas fa-phone"></i><a href={`tel:${SITE.telepon}`}>{SITE.telepon}</a></li>
                <li><i className="fas fa-envelope"></i><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li><i className="fas fa-clock"></i><span>{SITE.jamOps}</span></li>
              </ul>
            </div>

            {/* Tautan */}
            <div className="footer-col">
              <h4>Tautan Terkait</h4>
              <ul>
                <li><a href="https://tangerangkota.go.id" target="_blank" rel="noreferrer">Pemerintah Kota Tangerang</a></li>
                <li><a href="https://bantenprov.go.id" target="_blank" rel="noreferrer">Pemerintah Provinsi Banten</a></li>
                <li><a href="https://kemendagri.go.id" target="_blank" rel="noreferrer">Kemendagri</a></li>
                <li><a href="https://lapor.go.id" target="_blank" rel="noreferrer">Lapor.go.id</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} {SITE.name}, {SITE.kota}. Hak cipta dilindungi.</p>
          <p>Dikembangkan oleh Tim IT Kecamatan Karang Tengah</p>
        </div>
      </div>
    </footer>
  )
}
