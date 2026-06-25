import { useState } from 'react'
import PageHero from '../components/PageHero'

// const ASPEK = [
//   { label: 'Persyaratan Pelayanan',  sub: 'Kemudahan memahami dan memenuhi persyaratan' },
//   { label: 'Prosedur Pelayanan',     sub: 'Kejelasan dan kemudahan alur pelayanan' },
//   { label: 'Waktu Pelayanan',        sub: 'Kecepatan dan ketepatan waktu penyelesaian' },
//   { label: 'Kesesuaian Biaya',       sub: 'Kesesuaian biaya dengan peraturan (jika ada)' },
//   { label: 'Hasil Pelayanan',        sub: 'Kualitas dan keakuratan hasil layanan' },
//   { label: 'Kompetensi Petugas',     sub: 'Kemampuan dan pengetahuan petugas' },
//   { label: 'Perilaku Petugas',       sub: 'Keramahan, kesopanan, dan profesionalisme' },
//   { label: 'Sarana & Prasarana',     sub: 'Kebersihan dan kenyamanan fasilitas' },
//   { label: 'Penanganan Pengaduan',   sub: 'Ketersediaan dan responsivitas penanganan aduan' },
// ]

const RATINGS = [
  { value: 1, icon: 'fas fa-frown',      label: 'Tidak Baik'  },
  { value: 2, icon: 'fas fa-meh',        label: 'Kurang Baik' },
  { value: 3, icon: 'fas fa-smile',      label: 'Baik'        },
  { value: 4, icon: 'fas fa-grin-stars', label: 'Sangat Baik' },
]

const today = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })

export default function SKM() {
  const [submitted, setSubmitted] = useState(false)
  const [ratings, setRatings] = useState({})
  const [form, setForm] = useState({ jenisKelamin: '', usia: '', layanan: '', saran: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const setRating = (idx, val) => setRatings(r => ({ ...r, [idx]: val }))
  const setField  = (k, v)     => setForm(f => ({ ...f, [k]: v }))

  return (
    <>
      <PageHero
        title="Survei Kepuasan Masyarakat"
        description="Penilaian Anda membantu kami meningkatkan kualitas pelayanan secara terus-menerus."
        breadcrumb="SKM"
      />

      <section className="section">
        <div className="container">
          <div className="skm-intro">
            <span className="section-eyebrow">SKM 2026</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--navy)', marginBottom: 12 }}>Bantu Kami Berkembang</h2>
            <p>Survei Kepuasan Masyarakat (SKM) dilaksanakan sesuai Permenpan-RB No. 14 Tahun 2017 sebagai upaya pengukuran kualitas pelayanan publik secara berkala. Jawaban Anda bersifat <strong>anonim</strong> dan digunakan semata-mata untuk perbaikan layanan.</p>
          </div>

          {submitted ? (
            <div className="success-banner" style={{ display: 'flex', maxWidth: 740, margin: '0 auto' }}>
              <i className="fas fa-check-circle"></i>
              <div>
                <strong>Terima kasih atas partisipasi Anda!</strong><br />
                <span style={{ fontSize: '.83rem' }}>Masukan Anda sangat berarti bagi peningkatan kualitas layanan Kecamatan Karang Tengah.</span>
              </div>
            </div>
          ) : (
            <form id="skm-form" className="skm-form-wrap" onSubmit={handleSubmit} noValidate>

              {/* Data Responden */}
              <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid var(--gray-100)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: 4 }}>Data Responden</h3>
                <p style={{ fontSize: '.82rem', color: 'var(--text-muted)' }}>Scan QR Code dibawah untuk mengisi data responden.</p>
              </div>

              {/* Saran */}
              <label className="form-label">Saran dan Masukan</label>
              <img src="/qr-code-skm.png" alt="QR Code SKM Kecamatan Karang Tengah"/>
            </form>
          )}

          {/* Info cards */}
          <div style={{ maxWidth: 740, margin: '28px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              { icon: 'fas fa-shield-alt', title: 'Data Aman',         desc: 'Identitas Anda tidak akan dipublikasikan' },
              { icon: 'fas fa-chart-bar',  title: 'Digunakan untuk Evaluasi', desc: 'Hasil digunakan untuk perbaikan layanan' },
              { icon: 'fas fa-file-alt',   title: 'Laporan Berkala',   desc: 'Hasil SKM dipublikasikan setiap semester' },
            ].map(c => (
              <div key={c.title} style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: 20, textAlign: 'center' }}>
                <i className={c.icon} style={{ color: 'var(--blue)', fontSize: '1.5rem', marginBottom: 10, display: 'block' }}></i>
                <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--navy)' }}>{c.title}</div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginTop: 4 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
