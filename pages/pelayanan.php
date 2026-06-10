<!-- ================================================
     HALAMAN PELAYANAN
     ================================================ -->

<div class="page-hero">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.php?page=beranda">Beranda</a>
            <span class="breadcrumb-sep">/</span>
            <span>Layanan Publik</span>
        </div>
        <h1>Layanan Publik</h1>
        <p>Informasi lengkap persyaratan dan alur pelayanan administrasi di Kecamatan Karang Tengah.</p>
    </div>
</div>

<!-- ALUR PELAYANAN UMUM -->
<section class="section section-alt">
    <div class="container">
        <div class="section-header">
            <span class="section-eyebrow">Prosedur</span>
            <h2>Alur Pelayanan Umum</h2>
            <p>Ikuti langkah berikut untuk mendapatkan layanan dengan mudah dan cepat.</p>
            <div class="section-divider"></div>
        </div>
        <div style="max-width: 600px; margin: 0 auto;">
            <div class="alur-steps">
                <div class="alur-step">
                    <div class="step-num">1</div>
                    <div class="step-content">
                        <h4>Siapkan Berkas Persyaratan</h4>
                        <p>Persiapkan dokumen asli dan fotokopi sesuai jenis layanan yang dibutuhkan.</p>
                    </div>
                </div>
                <div class="alur-step">
                    <div class="step-num">2</div>
                    <div class="step-content">
                        <h4>Datang ke Loket Pelayanan</h4>
                        <p>Kunjungi kantor Kecamatan Karang Tengah pada jam operasional. Ambil nomor antrian di loket informasi.</p>
                    </div>
                </div>
                <div class="alur-step">
                    <div class="step-num">3</div>
                    <div class="step-content">
                        <h4>Verifikasi Berkas</h4>
                        <p>Petugas akan memeriksa kelengkapan berkas. Jika sudah lengkap, berkas akan diproses.</p>
                    </div>
                </div>
                <div class="alur-step">
                    <div class="step-num">4</div>
                    <div class="step-content">
                        <h4>Proses Administrasi</h4>
                        <p>Dokumen diproses sesuai SOP. Anda akan mendapat estimasi waktu penyelesaian.</p>
                    </div>
                </div>
                <div class="alur-step">
                    <div class="step-num">5</div>
                    <div class="step-content">
                        <h4>Pengambilan Dokumen</h4>
                        <p>Dokumen selesai dapat diambil langsung di loket atau dikirimkan sesuai ketentuan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- DAFTAR LAYANAN & SYARAT -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <span class="section-eyebrow">Persyaratan</span>
            <h2>Rincian Layanan & Persyaratan</h2>
            <p>Pastikan kelengkapan berkas sebelum datang ke kantor kecamatan.</p>
            <div class="section-divider"></div>
        </div>

        <?php
        $layanan = [
            [
                'icon' => 'fas fa-id-card',
                'nama' => 'KTP Elektronik (e-KTP)',
                'syarat' => [
                    'Surat Pengantar dari RT/RW',
                    'Formulir F-1.01 (tersedia di kelurahan)',
                    'Kartu Keluarga asli dan fotokopi',
                    'Akta Kelahiran / Ijazah (jika ada)',
                    'Pas foto 3x4 (2 lembar) latar biru',
                ],
                'waktu' => '1–7 hari kerja',
            ],
            [
                'icon' => 'fas fa-users',
                'nama' => 'Kartu Keluarga (KK)',
                'syarat' => [
                    'KK lama (asli dan fotokopi)',
                    'Surat Nikah / Akta Cerai (jika ada perubahan)',
                    'Surat Keterangan Lahir / Akta Kelahiran',
                    'Surat Keterangan Pindah (jika pindah domisili)',
                    'Surat Pengantar dari RT/RW dan Kelurahan',
                ],
                'waktu' => '3–7 hari kerja',
            ],
            [
                'icon' => 'fas fa-baby',
                'nama' => 'Akta Kelahiran',
                'syarat' => [
                    'Surat Keterangan Lahir dari RS/Bidan/Dokter',
                    'KTP kedua orang tua (fotokopi)',
                    'KK asli dan fotokopi',
                    'Buku Nikah / Akta Perkawinan (fotokopi)',
                    'Surat Pengantar dari RT/RW',
                ],
                'waktu' => '3–5 hari kerja',
            ],
            [
                'icon' => 'fas fa-scroll',
                'nama' => 'Surat Keterangan Domisili',
                'syarat' => [
                    'KTP asli dan fotokopi',
                    'KK asli dan fotokopi',
                    'Surat Pengantar dari RT/RW dan Kelurahan',
                    'Mengisi formulir permohonan di kecamatan',
                ],
                'waktu' => '1 hari kerja',
            ],
            [
                'icon' => 'fas fa-heart',
                'nama' => 'Akta Pernikahan',
                'syarat' => [
                    'KTP calon suami dan istri',
                    'Akta Kelahiran calon suami dan istri',
                    'KK masing-masing calon',
                    'Surat Keterangan Belum Menikah dari kelurahan',
                    'Surat Pengantar dari RT/RW',
                    'Pas foto berdampingan 4x6 (4 lembar)',
                ],
                'waktu' => '5–10 hari kerja',
            ],
            [
                'icon' => 'fas fa-book-open',
                'nama' => 'Surat Pindah Domisili',
                'syarat' => [
                    'KTP asli dan fotokopi',
                    'KK asli dan fotokopi',
                    'Surat Pengantar dari RT/RW',
                    'Surat Keterangan dari Kelurahan asal',
                    'Mengisi formulir permohonan F-1.03',
                ],
                'waktu' => '3–5 hari kerja',
            ],
            [
                'icon' => 'fas fa-map-marked-alt',
                'nama' => 'Surat Keterangan Usaha',
                'syarat' => [
                    'KTP pemilik usaha (asli dan fotokopi)',
                    'KK asli dan fotokopi',
                    'Surat Pengantar RT/RW dan Kelurahan',
                    'Foto lokasi usaha (minimal 2 lembar)',
                    'Denah lokasi usaha',
                ],
                'waktu' => '1–3 hari kerja',
            ],
            [
                'icon' => 'fas fa-hand-holding-heart',
                'nama' => 'Surat Keterangan Tidak Mampu',
                'syarat' => [
                    'KTP asli dan fotokopi',
                    'KK asli dan fotokopi',
                    'Surat Pengantar RT/RW dan Kelurahan',
                    'Dokumen pendukung (tagihan listrik, dsb.)',
                ],
                'waktu' => '1 hari kerja',
            ],
        ];
        ?>

        <div class="service-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px,1fr));">
            <?php foreach ($layanan as $item): ?>
            <div class="syarat-card">
                <div class="syarat-header">
                    <i class="<?= $item['icon'] ?> icon"></i>
                    <h3><?= htmlspecialchars($item['nama']) ?></h3>
                </div>
                <div class="syarat-body">
                    <ul class="syarat-list">
                        <?php foreach ($item['syarat'] as $s): ?>
                        <li><?= htmlspecialchars($s) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="syarat-footer">
                    <span class="time-badge"><i class="fas fa-clock"></i> Estimasi: <?= htmlspecialchars($item['waktu']) ?></span>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="alert alert-info" style="max-width:700px; margin: 32px auto 0; display:flex; gap:10px; align-items:flex-start;">
            <i class="fas fa-info-circle" style="margin-top:2px; flex-shrink:0;"></i>
            <span>Seluruh layanan <strong>tidak dipungut biaya (GRATIS)</strong>. Jika ditemukan pungutan liar, segera laporkan ke Kepala Bagian Pelayanan atau hubungi kami di <strong><?= SITE_TELEPON ?></strong>.</span>
        </div>
    </div>
</section>
