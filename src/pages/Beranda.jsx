import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'

// --- Data ---
const STATS = [
  { value: 6,   suffix: '+',  label: 'Kelurahan'       },
  { value: 120, suffix: 'K+', label: 'Penduduk'        },
  { value: 12,  suffix: '',   label: 'Jenis Layanan'   },
  { value: 98,  suffix: '%',  label: 'Kepuasan Warga'  },
]

const LAYANAN = [
  { icon: 'fas fa-id-card',           title: 'KTP Elektronik',     desc: 'Perekaman dan penerbitan KTP elektronik untuk warga yang belum memiliki atau membutuhkan penggantian.' },
  { icon: 'fas fa-users',             title: 'Kartu Keluarga',     desc: 'Pengurusan pembuatan baru, perubahan data, dan penggantian Kartu Keluarga yang hilang atau rusak.' },
  { icon: 'fas fa-baby',              title: 'Akta Kelahiran',     desc: 'Penerbitan akta kelahiran untuk bayi baru lahir maupun pengurusan akta yang belum dimiliki.' },
  { icon: 'fas fa-scroll',            title: 'Surat Keterangan',   desc: 'Berbagai surat keterangan domisili, usaha, tidak mampu, dan keperluan administrasi lainnya.' },
  { icon: 'fas fa-map-marked-alt',    title: 'Domisili Usaha',     desc: 'Surat keterangan domisili untuk keperluan pengurusan izin usaha dan legalitas bisnis.' },
  { icon: 'fas fa-heart',             title: 'Akta Pernikahan',    desc: 'Layanan pengurusan pencatatan pernikahan dan perubahan status perkawinan.' },
  { icon: 'fas fa-book-open',         title: 'Pindah Domisili',    desc: 'Pengurusan surat keterangan pindah domisili antar kelurahan, kecamatan, dan kota.' },
  { icon: 'fas fa-hand-holding-heart',title: 'Bantuan Sosial',     desc: 'Informasi dan pengurusan berkas bantuan sosial DTKS, PKH, dan program sosial lainnya.' },
]

const BERITA = [
  { tgl: '15', bln: 'Jun', title: 'Pelayanan e-KTP Akan Dibuka Sabtu, 21 Juni 2025', meta: 'Pelayanan publik · Kecamatan' },
  { tgl: '10', bln: 'Jun', title: 'Pengumuman Jadwal Vaksinasi Warga Kelurahan Parung Jaya', meta: 'Kesehatan · Puskesmas' },
  { tgl: '05', bln: 'Jun', title: 'Musyawarah Perencanaan Pembangunan Kelurahan 2025', meta: 'Perencanaan · BAPPEDA' },
  { tgl: '28', bln: 'Mei', title: 'Kegiatan Bersih-Bersih Lingkungan Karang Tengah', meta: 'Lingkungan · Kecamatan' },
]

const JADWAL = [
  { hari: 'Senin',  jam: '08.00 – 16.00 WIB', open: true  },
  { hari: 'Selasa', jam: '08.00 – 16.00 WIB', open: true  },
  { hari: 'Rabu',   jam: '08.00 – 16.00 WIB', open: true  },
  { hari: 'Kamis',  jam: '08.00 – 16.00 WIB', open: true  },
  { hari: 'Jumat',  jam: '08.00 – 16.00 WIB', open: true  },
  { hari: 'Sabtu',  jam: '—',                  open: false },
  { hari: 'Minggu', jam: '—',                  open: false },
]

// Counter animation hook
function useCountUp(target, duration = 1200) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const elapsed = Math.min((now - start) / duration, 1)
          el.textContent = Math.round(elapsed * target).toLocaleString('id-ID')
          if (elapsed < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}

function StatItem({ value, suffix, label }) {
  const ref = useCountUp(value)
  return (
    <div className="stat-item">
      <div className="stat-number">
        <span ref={ref}>{value}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Beranda() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge"><i className="fas fa-star"></i> Website Resmi Kecamatan</div>
            <h1>Kecamatan <em>Karang Tengah</em><br />Melayani Sepenuh Hati</h1>
            <p>Pusat informasi layanan publik Kecamatan Karang Tengah, Kota Tangerang. Kami hadir untuk memberikan pelayanan terbaik kepada seluruh masyarakat.</p>
            <div className="hero-cta">
              <Link to="/pelayanan" className="btn btn-primary"><i className="fas fa-clipboard-list"></i> Lihat Layanan</Link>
              <Link to="/skm" className="btn btn-outline"><i className="fas fa-poll"></i> Isi Survei SKM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="stat-strip">
        <div className="container">
          <div className="stat-strip-inner">
            {STATS.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* LAYANAN UNGGULAN */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Layanan Publik"
            title="Layanan Unggulan Kami"
            description="Berbagai layanan administrasi dan kependudukan tersedia untuk memudahkan masyarakat Kecamatan Karang Tengah."
          />
          <div className="service-grid">
            {LAYANAN.map(item => (
              <Link to="/pelayanan" className="service-card" key={item.title}>
                <div className="service-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="card-arrow">Selengkapnya <i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PENGUMUMAN & JAM LAYANAN */}
      <section className="section section-alt">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-bullhorn"></i> Pengumuman Terbaru</h3>
              {BERITA.map((b, i) => (
                <div className="news-item" key={i}>
                  <div className="news-date"><span className="day">{b.tgl}</span>{b.bln}</div>
                  <div>
                    <div className="news-title">{b.title}</div>
                    <div className="news-meta">{b.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-card">
              <h3><i className="fas fa-clock"></i> Jadwal Layanan</h3>
              <div className="schedule-list">
                {JADWAL.map(j => (
                  <div className="schedule-item" key={j.hari}>
                    <span className="day">{j.hari}</span>
                    <span className="time">{j.jam}</span>
                    <span className={`schedule-badge ${j.open ? 'badge-open' : 'badge-closed'}`}>
                      {j.open ? 'Buka' : 'Libur'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="alert alert-info mt-16">
                <i className="fas fa-info-circle"></i>
                Jam istirahat: 12.00 – 13.00 WIB. Khusus Jumat: 11.30 – 13.00 WIB.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SKM */}
      <section className="section section-cta-dark">
        <div className="container text-center">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Partisipasi Warga</span>
          <h2 className="cta-title">Berikan Penilaian Anda</h2>
          <p className="cta-desc">Kepuasan Anda adalah prioritas kami. Bantu kami meningkatkan kualitas layanan dengan mengisi Survei Kepuasan Masyarakat.</p>
          <Link to="/skm" className="btn btn-primary"><i className="fas fa-poll"></i> Isi Survei Sekarang</Link>
        </div>
      </section>
    </>
  )
}
