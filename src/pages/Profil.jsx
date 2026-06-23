import PageHero from '../components/PageHero'

const KELURAHAN = [
  'Parung Jaya', 'Karang Tengah', 'Karang Timur',
  'Pedurenan',   'Pondok Bahar',  'Pondok Pucung',
]

const MISI = [
  'Meningkatkan kualitas pelayanan publik yang cepat, mudah, dan transparan kepada seluruh lapisan masyarakat.',
  'Mendorong pemberdayaan masyarakat dan partisipasi warga dalam pembangunan wilayah kecamatan.',
  'Mewujudkan tata kelola pemerintahan yang bersih, akuntabel, dan berbasis teknologi informasi.',
  'Meningkatkan kualitas infrastruktur, lingkungan hidup, dan kesejahteraan sosial masyarakat.',
  'Mengembangkan potensi ekonomi lokal dan UMKM sebagai penggerak kesejahteraan warga.',
]

const STRUKTUR = [
  ['Drs. Ahmad Fauzi, M.Si.',    'Camat'],
  ['Hj. Siti Rahayu, S.Sos.',   'Sekretaris Camat'],
  ['Budi Santoso, S.AP.',        'Kasi Pemerintahan'],
  ['Dewi Kurniawati, S.E.',      'Kasi Ekbang'],
  ['Rudi Hartono, S.Sos.',       'Kasi Trantib'],
  ['Fitri Handayani, S.AP.',     'Kasi Kesos'],
  ['Agus Setiawan, S.H.',        'Kasi Pelayanan'],
  ['Nurul Hidayah, S.E.',        'Kasubag TU'],
]

export default function Profil() {
  return (
    <>
      <PageHero
        title="Profil Kecamatan Karang Tengah"
        description="Mengenal lebih dekat Kecamatan Karang Tengah, sejarah, visi, misi, dan struktur organisasi kami."
        breadcrumb="Profil Kecamatan"
      />

      <section className="section">
        <div className="container">
          <div className="profil-grid">

            {/* Sidebar */}
            <div className="profil-sidebar">
              <div className="card">
                <div className="pejabat-photo">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="pejabat-info">
                  <h3>Drs. Ahmad Fauzi, M.Si.</h3>
                  <div className="jabatan">Camat Karang Tengah</div>
                  <div className="nip">NIP. 19720315 199603 1 004</div>
                  <div style={{ marginTop: 14, fontSize: '.78rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    <i className="fas fa-envelope" style={{ color: 'var(--gold)' }}></i>&nbsp;
                    camat.karangtengah@tangerangkota.go.id
                  </div>
                </div>
              </div>
            </div>

            {/* Konten */}
            <div className="profil-content">
              <h2>Sejarah Singkat</h2>
              <p>Kecamatan Karang Tengah merupakan salah satu dari 13 kecamatan di Kota Tangerang, Provinsi Banten. Kecamatan ini dibentuk berdasarkan Peraturan Daerah Kota Tangerang sebagai hasil pemekaran wilayah untuk mengoptimalkan pelayanan publik kepada masyarakat.</p>
              <p>Secara geografis, Kecamatan Karang Tengah berada di bagian tengah Kota Tangerang dengan luas wilayah sekitar 10,47 km² dan jumlah penduduk lebih dari 120.000 jiwa.</p>

              <div className="visi-misi-box">
                <div className="label">Visi</div>
                <p>"Terwujudnya Kecamatan Karang Tengah yang Maju, Sejahtera, dan Berkeadilan melalui Pelayanan Prima kepada Masyarakat"</p>
              </div>

              <h3>Misi</h3>
              <div className="misi-list">
                {MISI.map((m, i) => (
                  <div className="misi-item" key={i}><span>{m}</span></div>
                ))}
              </div>

              <h3>Wilayah Kelurahan</h3>
              <p>Kecamatan Karang Tengah terdiri dari 7 (enam) kelurahan, yaitu:</p>
              <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', marginTop: 16 }}>
                {KELURAHAN.map(k => (
                  <div className="service-card" style={{ padding: '18px 20px' }} key={k}>
                    <div className="service-icon" style={{ width: 40, height: 40, fontSize: '1rem', marginBottom: 12 }}>
                      <i className="fas fa-map-pin"></i>
                    </div>
                    <h3 style={{ fontSize: '.875rem' }}>Kel. {k}</h3>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: 36 }}>Struktur Organisasi</h3>
              <div className="struktur-grid">
                {STRUKTUR.map(([nama, jabatan]) => (
                  <div className="struktur-card" key={nama}>
                    <div className="struktur-avatar"><i className="fas fa-user"></i></div>
                    <h4>{nama}</h4>
                    <p>{jabatan}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
