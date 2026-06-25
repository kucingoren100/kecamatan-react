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
              {/* <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid var(--gray-100)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: 4 }}>Data Responden</h3>
                <p style={{ fontSize: '.82rem', color: 'var(--text-muted)' }}>Kolom bertanda <span style={{ color: '#EF4444' }}>*</span> wajib diisi.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Tanggal Pengisian</label>
                <input type="text" className="form-control" readOnly value={today} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div className="form-group">
                  <label className="form-label">Jenis Kelamin <span className="required">*</span></label>
                  <select className="form-control" required value={form.jenisKelamin} onChange={e => setField('jenisKelamin', e.target.value)}>
                    <option value="">Pilih...</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Usia <span className="required">*</span></label>
                  <select className="form-control" required value={form.usia} onChange={e => setField('usia', e.target.value)}>
                    <option value="">Pilih...</option>
                    <option>Di bawah 20 tahun</option>
                    <option>20–30 tahun</option>
                    <option>31–40 tahun</option>
                    <option>41–50 tahun</option>
                    <option>Di atas 50 tahun</option>
                  </select>
                </div>
              </div> */}

              {/* <div className="form-group">
                <label className="form-label">Jenis Layanan yang Digunakan <span className="required">*</span></label>
                <select className="form-control" required value={form.layanan} onChange={e => setField('layanan', e.target.value)}>
                  <option value="">Pilih layanan...</option>
                  <option>KTP Elektronik</option>
                  <option>Kartu Keluarga</option>
                  <option>Akta Kelahiran</option>
                  <option>Akta Pernikahan</option>
                  <option>Surat Keterangan Domisili</option>
                  <option>Surat Keterangan Tidak Mampu</option>
                  <option>Surat Keterangan Usaha</option>
                  <option>Surat Pindah Domisili</option>
                  <option>Layanan lainnya</option>
                </select>
              </div> */}

              {/* Penilaian */}
              {/* <div style={{ margin: '28px 0 24px', paddingTop: 20, borderTop: '1px solid var(--gray-100)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1rem', marginBottom: 4 }}>Penilaian Layanan</h3>
                <p style={{ fontSize: '.82rem', color: 'var(--text-muted)' }}>Pilih salah satu nilai untuk setiap aspek penilaian.</p>
              </div>

              {ASPEK.map((aspek, idx) => (
                <div className="form-group" key={idx}>
                  <label className="form-label">
                    {idx + 1}. {aspek.label}{' '}
                    <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '.8rem' }}>— {aspek.sub}</span>
                  </label>
                  <div className="rating-group">
                    {RATINGS.map(r => (
                      <div className={`rating-opt rating-${r.value}`} key={r.value}>
                        <input
                          type="radio"
                          name={`aspek_${idx}`}
                          id={`a${idx}r${r.value}`}
                          value={r.value}
                          checked={ratings[idx] === r.value}
                          onChange={() => setRating(idx, r.value)}
                        />
                        <label htmlFor={`a${idx}r${r.value}`}>
                          <i className={r.icon}></i>
                          {r.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))} */}

              {/* Saran */}
              <div className="form-group" style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--gray-100)' }}>
                <label className="form-label">Saran dan Masukan</label>
                <textarea
                  className="form-control"
                  placeholder="Tuliskan saran, masukan, atau harapan Anda untuk peningkatan pelayanan..."
                  rows={4}
                  value={form.saran}
                  onChange={e => setField('saran', e.target.value)}
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Kirim Penilaian
                </button>
                <span style={{ fontSize: '.78rem', color: 'var(--text-muted)' }}>Data dijaga kerahasiaannya</span>
              </div>
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
