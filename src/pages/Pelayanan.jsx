import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

const ALUR = [
  { title: 'Siapkan Berkas Persyaratan',  desc: 'Persiapkan dokumen asli dan fotokopi sesuai jenis layanan yang dibutuhkan.' },
  { title: 'Datang ke Loket Pelayanan',   desc: 'Kunjungi kantor Kecamatan Karang Tengah pada jam operasional. Ambil nomor antrian di loket informasi.' },
  { title: 'Verifikasi Berkas',           desc: 'Petugas akan memeriksa kelengkapan berkas. Jika sudah lengkap, berkas akan diproses.' },
  { title: 'Proses Administrasi',         desc: 'Dokumen diproses sesuai SOP. Anda akan mendapat estimasi waktu penyelesaian.' },
  { title: 'Pengambilan Dokumen',         desc: 'Dokumen selesai dapat diambil langsung di loket atau dikirimkan sesuai ketentuan.' },
]

const LAYANAN = [
  {
    icon: 'fas fa-id-card',
    nama: 'KTP Elektronik (e-KTP)',
    syarat: ['Usia minimal 17 Tahun', 'KTP Orang Tua dan Kartu Keluarga asli dan fotokopi', 'Akta Kelahiran', 'Berpakaian Rapih'],
    waktu: '1–7 hari kerja',
  },
  {
    icon: 'fas fa-users',
    nama: 'Kartu Keluarga (KK)',
    syarat: ['Formulir Permohonan', 'KK lama (jika pisah kk)', 'Buku Nikah / Akta Perkawinan (jika ada perubahan)', 'Surat Keterangan Lahir / Akta Kelahiran', 'Surat Keterangan Pindah (jika dari luar daerah)'],
    waktu: '3–7 hari kerja',
  },
  {
    icon: 'fas fa-baby',
    nama: 'Akta Kelahiran',
    syarat: ['Surat Keterangan Lahir dari RS/Bidan/Dokter', 'KTP kedua orang tua (fotokopi)', 'KK asli dan fotokopi', 'Buku Nikah / Akta Perkawinan (fotokopi)', 'Surat Pengantar dari RT/RW'],
    waktu: '3–5 hari kerja',
  },
  {
    icon: 'fas fa-scroll',
    nama: 'Surat Keterangan Domisili',
    syarat: ['KTP asli dan fotokopi', 'KK asli dan fotokopi', 'Surat Pengantar dari RT/RW dan Kelurahan', 'Mengisi formulir permohonan di kecamatan'],
    waktu: '1 hari kerja',
  },
  {
    icon: 'fas fa-heart',
    nama: 'Akta Pernikahan',
    syarat: ['KTP calon suami dan istri', 'Akta Kelahiran calon suami dan istri', 'KK masing-masing calon', 'Surat Keterangan Belum Menikah dari kelurahan', 'Surat Pengantar dari RT/RW', 'Pas foto berdampingan 4x6 (4 lembar)'],
    waktu: '5–10 hari kerja',
  },
  {
    icon: 'fas fa-book-open',
    nama: 'Surat Pindah Datang',
    syarat: ['KTP asli', 'Kartu Keluarga asli', 'Surat Keterangan Pindah WNI (SKPWNI) dari Dukcapil asal'],
    waktu: '3–5 hari kerja',
  },
  {
    icon: 'fas fa-map-marked-alt',
    nama: 'Surat Keterangan Usaha',
    syarat: ['KTP pemilik usaha (asli dan fotokopi)', 'KK asli dan fotokopi', 'Surat Pengantar RT/RW dan Kelurahan', 'Foto lokasi usaha (minimal 2 lembar)', 'Denah lokasi usaha'],
    waktu: '1–3 hari kerja',
  },
  {
    icon: 'fas fa-hand-holding-heart',
    nama: 'Surat Keterangan Tidak Mampu',
    syarat: ['KTP asli dan fotokopi', 'KK asli dan fotokopi', 'Surat Pengantar RT/RW dan Kelurahan', 'Dokumen pendukung (tagihan listrik, dsb.)'],
    waktu: '1 hari kerja',
  },
]

export default function Pelayanan() {
  return (
    <>
      <PageHero
        title="Layanan Publik"
        description="Informasi lengkap persyaratan dan alur pelayanan administrasi di Kecamatan Karang Tengah."
        breadcrumb="Pelayanan"
      />

      {/* Alur */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Prosedur"
            title="Alur Pelayanan Umum"
            description="Ikuti langkah berikut untuk mendapatkan layanan dengan mudah dan cepat."
          />
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div className="alur-steps">
              {ALUR.map((step, i) => (
                <div className="alur-step" key={i}>
                  <div className="step-num">{i + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Layanan */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Persyaratan"
            title="Rincian Layanan & Persyaratan"
            description="Pastikan kelengkapan berkas sebelum datang ke kantor kecamatan."
          />
          <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))' }}>
            {LAYANAN.map(item => (
              <div className="syarat-card" key={item.nama}>
                <div className="syarat-header">
                  <i className={`${item.icon} icon`}></i>
                  <h3>{item.nama}</h3>
                </div>
                <div className="syarat-body">
                  <ul className="syarat-list">
                    {item.syarat.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div className="syarat-footer">
                  <span className="time-badge">
                    <i className="fas fa-clock"></i> Estimasi: {item.waktu}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="alert alert-info" style={{ maxWidth: 700, margin: '32px auto 0', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <i className="fas fa-info-circle" style={{ marginTop: 2, flexShrink: 0 }}></i>
            <span>Seluruh layanan <strong>tidak dipungut biaya (GRATIS)</strong>. Jika ditemukan pungutan liar, segera laporkan ke Kepala Bagian Pelayanan atau hubungi kami di <strong>(021) 5522-1234</strong>.</span>
          </div>
        </div>
      </section>
    </>
  )
}
