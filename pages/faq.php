<!-- ================================================
     HALAMAN FAQ
     ================================================ -->

<div class="page-hero">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.php?page=beranda">Beranda</a>
            <span class="breadcrumb-sep">/</span>
            <span>FAQ</span>
        </div>
        <h1>Pertanyaan yang Sering Diajukan</h1>
        <p>Temukan jawaban atas pertanyaan umum seputar layanan Kecamatan Karang Tengah.</p>
    </div>
</div>

<section class="section">
    <div class="container" style="max-width:800px;">

        <?php
        $faqs = [
            'Administrasi & Dokumen' => [
                [
                    'q' => 'Berapa lama waktu pembuatan e-KTP?',
                    'a' => 'Proses perekaman data dilakukan langsung di kecamatan pada hari yang sama. Pencetakan e-KTP memerlukan waktu sekitar 1–7 hari kerja tergantung antrean dan ketersediaan blangko. Pemohon akan dihubungi ketika dokumen siap diambil.',
                ],
                [
                    'q' => 'Apakah ada biaya untuk membuat Kartu Keluarga baru?',
                    'a' => 'Tidak ada biaya. Seluruh layanan administrasi kependudukan di Kecamatan Karang Tengah tidak dipungut biaya (gratis). Jika ada oknum yang meminta biaya, segera laporkan kepada pimpinan.',
                ],
                [
                    'q' => 'Bagaimana jika KTP saya hilang atau rusak?',
                    'a' => 'Untuk KTP hilang, bawa Surat Keterangan Kehilangan dari Kepolisian, KK asli dan fotokopi, serta surat pengantar dari RT/RW. Untuk KTP rusak, bawa KTP lama yang rusak, KK, dan surat pengantar RT/RW. Proses penggantian tidak dipungut biaya.',
                ],
                [
                    'q' => 'Apakah bisa mengurus dokumen diwakilkan orang lain?',
                    'a' => 'Untuk beberapa jenis layanan tertentu, pengurusan dapat diwakilkan dengan membawa surat kuasa bermaterai, fotokopi KTP pemberi kuasa, dan KTP penerima kuasa. Namun untuk perekaman e-KTP dan beberapa dokumen vital, harus dilakukan sendiri.',
                ],
                [
                    'q' => 'Berapa lama akta kelahiran bisa selesai?',
                    'a' => 'Akta kelahiran biasanya selesai dalam 3–5 hari kerja setelah berkas dinyatakan lengkap. Untuk kelahiran yang dilaporkan lebih dari 60 hari, diperlukan prosedur tambahan sesuai peraturan yang berlaku.',
                ],
            ],
            'Jam & Lokasi Layanan' => [
                [
                    'q' => 'Kapan jadwal operasional kantor kecamatan?',
                    'a' => 'Kantor Kecamatan Karang Tengah buka Senin–Jumat pukul 08.00–16.00 WIB. Istirahat pukul 12.00–13.00 WIB (Jumat: 11.30–13.00 WIB). Sabtu, Minggu, dan hari libur nasional kantor tutup.',
                ],
                [
                    'q' => 'Di mana lokasi kantor Kecamatan Karang Tengah?',
                    'a' => 'Kantor kami beralamat di Jl. KH. Hasyim Ashari No. 1, Karang Tengah, Kota Tangerang. Dapat dijangkau dengan kendaraan umum maupun pribadi. Tersedia parkir untuk pengunjung.',
                ],
                [
                    'q' => 'Apakah ada layanan di luar jam kantor?',
                    'a' => 'Saat ini belum tersedia layanan di luar jam operasional. Namun untuk kondisi darurat seperti kematian atau kelahiran yang memerlukan pengurusan mendesak, dapat menghubungi nomor kontak darurat kecamatan.',
                ],
            ],
            'Lainnya' => [
                [
                    'q' => 'Bagaimana cara mengadu jika pelayanan tidak memuaskan?',
                    'a' => 'Anda dapat menyampaikan pengaduan melalui: (1) Kotak saran di kantor kecamatan, (2) Email resmi kecamatan, (3) Telepon langsung ke kantor, (4) Mengisi Survei Kepuasan Masyarakat (SKM) di website ini, atau (5) Melalui aplikasi LAPOR! (lapor.go.id).',
                ],
                [
                    'q' => 'Apakah ada layanan online untuk pengurusan dokumen?',
                    'a' => 'Kota Tangerang memiliki portal layanan online melalui Website Disdukcapil Kota Tangerang. Beberapa layanan kependudukan dapat diajukan secara online. Namun untuk perekaman data biometrik (e-KTP) tetap harus datang langsung.',
                ],
                [
                    'q' => 'Bagaimana cara mengecek status permohonan dokumen saya?',
                    'a' => 'Anda dapat mengecek status permohonan dengan menghubungi loket pelayanan melalui telepon di nomor ' . SITE_TELEPON . ' atau datang langsung ke kantor dengan membawa bukti tanda terima pengajuan berkas.',
                ],
            ],
        ];
        ?>

        <?php foreach ($faqs as $kategori => $items): ?>
        <div style="margin-bottom: 40px;">
            <h2 style="font-family: var(--font-display); color: var(--navy); font-size: 1.2rem; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 2px solid var(--gray-100); display: flex; align-items: center; gap: 10px;">
                <span style="display:inline-block; width:4px; height:20px; background: var(--gold); border-radius:2px;"></span>
                <?= htmlspecialchars($kategori) ?>
            </h2>
            <div class="faq-accordion">
                <?php foreach ($items as $i => $faq): ?>
                <div class="faq-item">
                    <button class="faq-question" type="button">
                        <?= htmlspecialchars($faq['q']) ?>
                        <span class="faq-icon"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer">
                        <?= htmlspecialchars($faq['a']) ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>

        <!-- Tidak temukan jawaban? -->
        <div style="background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 32px; text-align: center; margin-top: 40px;">
            <i class="fas fa-headset" style="font-size:2rem; color: var(--blue); margin-bottom: 14px; display:block;"></i>
            <h3 style="font-weight:700; color: var(--navy); margin-bottom: 8px;">Masih punya pertanyaan?</h3>
            <p style="color: var(--text-muted); margin-bottom: 20px; font-size:.9rem;">Hubungi kami langsung melalui telepon atau email, kami siap membantu.</p>
            <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                <a href="tel:<?= SITE_TELEPON ?>" class="btn btn-blue"><i class="fas fa-phone"></i> <?= SITE_TELEPON ?></a>
                <a href="mailto:<?= SITE_EMAIL ?>" class="btn btn-outline" style="color:var(--navy); border-color:var(--gray-300);"><i class="fas fa-envelope"></i> Kirim Email</a>
            </div>
        </div>

    </div>
</section>
