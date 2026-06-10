<!-- ================================================
     HALAMAN PROFIL
     ================================================ -->

<div class="profil-hero">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.php?page=beranda">Beranda</a>
            <span class="breadcrumb-sep">/</span>
            <span>Profil Kecamatan</span>
        </div>
        <h1>Profil Kecamatan Karang Tengah</h1>
        <p>Mengenal lebih dekat Kecamatan Karang Tengah, sejarah, visi, misi, dan struktur organisasi kami.</p>
    </div>
</div>

<section class="section">
    <div class="container">
        <div class="profil-grid">

            <!-- Sidebar Pejabat -->
            <div class="profil-sidebar">
                <div class="card">
                    <div class="pejabat-photo">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="pejabat-info">
                        <h3>Drs. Ahmad Fauzi, M.Si.</h3>
                        <div class="jabatan">Camat Karang Tengah</div>
                        <div class="nip">NIP. 19720315 199603 1 004</div>
                        <div style="margin-top:14px; font-size:.78rem; color:var(--text-muted); line-height:1.7;">
                            <i class="fas fa-envelope" style="color:var(--gold);"></i>&nbsp;
                            camat.karangtengah@tangerangkota.go.id
                        </div>
                    </div>
                </div>
            </div>

            <!-- Konten Profil -->
            <div class="profil-content">

                <h2>Sejarah Singkat</h2>
                <p>Kecamatan Karang Tengah merupakan salah satu dari 13 kecamatan di Kota Tangerang, Provinsi Banten. Kecamatan ini dibentuk berdasarkan Peraturan Daerah Kota Tangerang sebagai hasil pemekaran wilayah untuk mengoptimalkan pelayanan publik kepada masyarakat.</p>
                <p>Secara geografis, Kecamatan Karang Tengah berada di bagian tengah Kota Tangerang dengan batas wilayah yang berbatasan langsung dengan beberapa kecamatan lain. Luas wilayah Kecamatan Karang Tengah mencapai sekitar 10,47 km² dengan jumlah penduduk lebih dari 120.000 jiwa.</p>

                <div class="visi-misi-box">
                    <div class="label">Visi</div>
                    <p>"Terwujudnya Kecamatan Karang Tengah yang Maju, Sejahtera, dan Berkeadilan melalui Pelayanan Prima kepada Masyarakat"</p>
                </div>

                <h3>Misi</h3>
                <div class="misi-list">
                    <div class="misi-item"><span>Meningkatkan kualitas pelayanan publik yang cepat, mudah, dan transparan kepada seluruh lapisan masyarakat.</span></div>
                    <div class="misi-item"><span>Mendorong pemberdayaan masyarakat dan partisipasi warga dalam pembangunan wilayah kecamatan.</span></div>
                    <div class="misi-item"><span>Mewujudkan tata kelola pemerintahan yang bersih, akuntabel, dan berbasis teknologi informasi.</span></div>
                    <div class="misi-item"><span>Meningkatkan kualitas infrastruktur, lingkungan hidup, dan kesejahteraan sosial masyarakat.</span></div>
                    <div class="misi-item"><span>Mengembangkan potensi ekonomi lokal dan UMKM sebagai penggerak kesejahteraan warga.</span></div>
                </div>

                <h3>Wilayah Kelurahan</h3>
                <p>Kecamatan Karang Tengah terdiri dari 6 (enam) kelurahan, yaitu:</p>
                <div class="service-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); margin-top:16px;">
                    <?php
                    $kelurahan = [
                        ['Parung Jaya',   'fas fa-map-pin'],
                        ['Karang Tengah', 'fas fa-map-pin'],
                        ['Karang Timur',  'fas fa-map-pin'],
                        ['Pedurenan',     'fas fa-map-pin'],
                        ['Pondok Bahar',  'fas fa-map-pin'],
                        ['Pondok Pucung', 'fas fa-map-pin'],
                    ];
                    foreach ($kelurahan as $k): ?>
                    <div class="service-card" style="padding:18px 20px;">
                        <div class="service-icon" style="width:40px;height:40px;font-size:1rem;margin-bottom:12px;">
                            <i class="<?= $k[1] ?>"></i>
                        </div>
                        <h3 style="font-size:.875rem;">Kel. <?= $k[0] ?></h3>
                    </div>
                    <?php endforeach; ?>
                </div>

                <h3 style="margin-top:36px;">Struktur Organisasi</h3>
                <div class="struktur-grid">
                    <?php
                    $struktur = [
                        ['Drs. Ahmad Fauzi, M.Si.', 'Camat'],
                        ['Hj. Siti Rahayu, S.Sos.', 'Sekretaris Camat'],
                        ['Budi Santoso, S.AP.', 'Kasi Pemerintahan'],
                        ['Dewi Kurniawati, S.E.', 'Kasi Ekbang'],
                        ['Rudi Hartono, S.Sos.', 'Kasi Trantib'],
                        ['Fitri Handayani, S.AP.', 'Kasi Kesos'],
                        ['Agus Setiawan, S.H.', 'Kasi Pelayanan'],
                        ['Nurul Hidayah, S.E.', 'Kasubag TU'],
                    ];
                    foreach ($struktur as $s): ?>
                    <div class="struktur-card">
                        <div class="struktur-avatar"><i class="fas fa-user"></i></div>
                        <h4><?= $s[0] ?></h4>
                        <p><?= $s[1] ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>

            </div>
        </div>
    </div>
</section>
