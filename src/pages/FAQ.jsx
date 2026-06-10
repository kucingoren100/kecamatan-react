import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { SITE } from '../data/config'

const FAQ_DATA = [
  {
    kategori: 'Administrasi & Dokumen',
    items: [
      { q: 'Berapa lama waktu pembuatan e-KTP?', a: 'Proses perekaman data dilakukan langsung di kecamatan pada hari yang sama. Pencetakan e-KTP memerlukan waktu sekitar 1–7 hari kerja tergantung antrean dan ketersediaan blangko. Pemohon akan dihubungi ketika dokumen siap diambil.' },
      { q: 'Apakah ada biaya untuk membuat Kartu Keluarga baru?', a: 'Tidak ada biaya. Seluruh layanan administrasi kependudukan di Kecamatan Karang Tengah tidak dipungut biaya (gratis). Jika ada oknum yang meminta biaya, segera laporkan kepada pimpinan.' },
      { q: 'Bagaimana jika KTP saya hilang atau rusak?', a: 'Untuk KTP hilang, bawa Surat Keterangan Kehilangan dari Kepolisian, KK asli dan fotokopi, serta surat pengantar dari RT/RW. Untuk KTP rusak, bawa KTP lama yang rusak, KK, dan surat pengantar RT/RW. Proses penggantian tidak dipungut biaya.' },
      { q: 'Apakah bisa mengurus dokumen diwakilkan orang lain?', a: 'Untuk beberapa jenis layanan tertentu, pengurusan dapat diwakilkan dengan membawa surat kuasa bermaterai, fotokopi KTP pemberi kuasa, dan KTP penerima kuasa. Namun untuk perekaman e-KTP dan beberapa dokumen vital, harus dilakukan sendiri.' },
      { q: 'Berapa lama akta kelahiran bisa selesai?', a: 'Akta kelahiran biasanya selesai dalam 3–5 hari kerja setelah berkas dinyatakan lengkap. Untuk kelahiran yang dilaporkan lebih dari 60 hari, diperlukan prosedur tambahan sesuai peraturan yang berlaku.' },
    ],
  },
  {
    kategori: 'Jam & Lokasi Layanan',
    items: [
      { q: 'Kapan jadwal operasional kantor kecamatan?', a: 'Kantor Kecamatan Karang Tengah buka Senin–Jumat pukul 08.00–16.00 WIB. Istirahat pukul 12.00–13.00 WIB (Jumat: 11.30–13.00 WIB). Sabtu, Minggu, dan hari libur nasional kantor tutup.' },
      { q: 'Di mana lokasi kantor Kecamatan Karang Tengah?', a: 'Kantor kami beralamat di Jl. KH. Hasyim Ashari No. 1, Karang Tengah, Kota Tangerang. Dapat dijangkau dengan kendaraan umum maupun pribadi. Tersedia parkir untuk pengunjung.' },
      { q: 'Apakah ada layanan di luar jam kantor?', a: 'Saat ini belum tersedia layanan di luar jam operasional. Namun untuk kondisi darurat seperti kematian atau kelahiran yang memerlukan pengurusan mendesak, dapat menghubungi nomor kontak darurat kecamatan.' },
    ],
  },
  {
    kategori: 'Lainnya',
    items: [
      { q: 'Bagaimana cara mengadu jika pelayanan tidak memuaskan?', a: 'Anda dapat menyampaikan pengaduan melalui: (1) Kotak saran di kantor kecamatan, (2) Email resmi kecamatan, (3) Telepon langsung ke kantor, (4) Mengisi Survei Kepuasan Masyarakat (SKM) di website ini, atau (5) Melalui aplikasi LAPOR! (lapor.go.id).' },
      { q: 'Apakah ada layanan online untuk pengurusan dokumen?', a: 'Kota Tangerang memiliki portal layanan online melalui Website Disdukcapil Kota Tangerang. Beberapa layanan kependudukan dapat diajukan secara online. Namun untuk perekaman data biometrik (e-KTP) tetap harus datang langsung.' },
      { q: 'Bagaimana cara mengecek status permohonan dokumen saya?', a: `Anda dapat mengecek status permohonan dengan menghubungi loket pelayanan melalui telepon di nomor ${SITE.telepon} atau datang langsung ke kantor dengan membawa bukti tanda terima pengajuan berkas.` },
    ],
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className={`faq-question${open ? ' active' : ''}`} onClick={() => setOpen(v => !v)}>
        {q}
        <span className="faq-icon"><i className="fas fa-plus"></i></span>
      </button>
      <div className={`faq-answer${open ? ' open' : ''}`}>{a}</div>
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <PageHero
        title="Pertanyaan yang Sering Diajukan"
        description="Temukan jawaban atas pertanyaan umum seputar layanan Kecamatan Karang Tengah."
        breadcrumb="FAQ"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {FAQ_DATA.map(group => (
            <div key={group.kategori} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontSize: '1.2rem', marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-block', width: 4, height: 20, background: 'var(--gold)', borderRadius: 2 }}></span>
                {group.kategori}
              </h2>
              <div className="faq-accordion">
                {group.items.map(item => <FaqItem key={item.q} {...item} />)}
              </div>
            </div>
          ))}

          <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: 32, textAlign: 'center', marginTop: 40 }}>
            <i className="fas fa-headset" style={{ fontSize: '2rem', color: 'var(--blue)', marginBottom: 14, display: 'block' }}></i>
            <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Masih punya pertanyaan?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '.9rem' }}>Hubungi kami langsung melalui telepon atau email, kami siap membantu.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE.telepon}`} className="btn btn-blue"><i className="fas fa-phone"></i> {SITE.telepon}</a>
              <a href={`mailto:${SITE.email}`} className="btn btn-outline-dark"><i className="fas fa-envelope"></i> Kirim Email</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
