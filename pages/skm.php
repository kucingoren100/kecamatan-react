<!-- ================================================
     HALAMAN SKM — SURVEI KEPUASAN MASYARAKAT
     ================================================ -->

<div class="page-hero">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.php?page=beranda">Beranda</a>
            <span class="breadcrumb-sep">/</span>
            <span>SKM</span>
        </div>
        <h1>Survei Kepuasan Masyarakat</h1>
        <p>Penilaian Anda membantu kami meningkatkan kualitas pelayanan secara terus-menerus.</p>
    </div>
</div>

<section class="section">
    <div class="container">
        <div class="skm-intro">
            <span class="section-eyebrow">SKM 2025</span>
            <h2 style="font-family: var(--font-display); font-size:1.8rem; color: var(--navy); margin-bottom: 12px;">Bantu Kami Berkembang</h2>
            <p>Survei Kepuasan Masyarakat (SKM) dilaksanakan sesuai Permenpan-RB No. 14 Tahun 2017 sebagai upaya pengukuran kualitas pelayanan publik secara berkala. Jawaban Anda bersifat <strong>anonim</strong> dan digunakan semata-mata untuk perbaikan layanan.</p>
        </div>

        <!-- Banner sukses (tersembunyi, muncul setelah submit) -->
        <div id="skm-success" class="success-banner" style="max-width:740px; margin: 0 auto 24px;">
            <i class="fas fa-check-circle"></i>
            <div>
                <strong>Terima kasih atas partisipasi Anda!</strong><br>
                <span style="font-size:.83rem;">Masukan Anda sangat berarti bagi peningkatan kualitas layanan Kecamatan Karang Tengah.</span>
            </div>
        </div>

        <!-- Form SKM -->
        <form id="skm-form" class="skm-form-wrap" novalidate>

            <div style="margin-bottom: 28px; padding-bottom: 20px; border-bottom: 1px solid var(--gray-100);">
                <h3 style="font-weight:700; color:var(--navy); font-size: 1rem; margin-bottom: 4px;">Data Responden</h3>
                <p style="font-size:.82rem; color:var(--text-muted);">Kolom bertanda <span style="color:#EF4444;">*</span> wajib diisi.</p>
            </div>

            <div class="form-group">
                <label class="form-label">Tanggal Pengisian</label>
                <input type="text" class="form-control" readonly
                    value="<?= date('d F Y') ?>" />
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                <div class="form-group">
                    <label class="form-label">Jenis Kelamin <span class="required">*</span></label>
                    <select class="form-control" required>
                        <option value="">Pilih...</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Usia <span class="required">*</span></label>
                    <select class="form-control" required>
                        <option value="">Pilih...</option>
                        <option>Di bawah 20 tahun</option>
                        <option>20–30 tahun</option>
                        <option>31–40 tahun</option>
                        <option>41–50 tahun</option>
                        <option>Di atas 50 tahun</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Jenis Layanan yang Digunakan <span class="required">*</span></label>
                <select class="form-control" required>
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
            </div>

            <div style="margin: 28px 0 24px; padding-top: 20px; border-top: 1px solid var(--gray-100);">
                <h3 style="font-weight:700; color:var(--navy); font-size:1rem; margin-bottom:4px;">Penilaian Layanan</h3>
                <p style="font-size:.82rem; color:var(--text-muted);">Pilih salah satu nilai untuk setiap aspek penilaian.</p>
            </div>

            <?php
            $aspek = [
                ['Persyaratan Pelayanan', 'Kemudahan memahami dan memenuhi persyaratan'],
                ['Prosedur Pelayanan', 'Kejelasan dan kemudahan alur pelayanan'],
                ['Waktu Pelayanan', 'Kecepatan dan ketepatan waktu penyelesaian'],
                ['Kesesuaian Biaya', 'Kesesuaian biaya dengan peraturan (jika ada)'],
                ['Hasil Pelayanan', 'Kualitas dan keakuratan hasil layanan'],
                ['Kompetensi Petugas', 'Kemampuan dan pengetahuan petugas'],
                ['Perilaku Petugas', 'Keramahan, kesopanan, dan profesionalisme'],
                ['Sarana & Prasarana', 'Kebersihan dan kenyamanan fasilitas'],
                ['Penanganan Pengaduan', 'Ketersediaan dan responsivitas penanganan aduan'],
            ];

            $icons = ['fas fa-frown', 'fas fa-meh', 'fas fa-smile', 'fas fa-grin-stars'];
            $labels = ['Tidak Baik', 'Kurang Baik', 'Baik', 'Sangat Baik'];
            ?>

            <?php foreach ($aspek as $idx => $a): ?>
            <div class="form-group">
                <label class="form-label">
                    <?= ($idx + 1) ?>. <?= htmlspecialchars($a[0]) ?>
                    <span style="font-weight:400; color:var(--text-muted); font-size:.8rem;"> — <?= htmlspecialchars($a[1]) ?></span>
                </label>
                <div class="rating-group">
                    <?php for ($r = 1; $r <= 4; $r++): ?>
                    <div class="rating-opt rating-<?= $r ?>">
                        <input type="radio" name="aspek_<?= $idx ?>" id="a<?= $idx ?>r<?= $r ?>" value="<?= $r ?>">
                        <label for="a<?= $idx ?>r<?= $r ?>">
                            <i class="<?= $icons[$r-1] ?>"></i>
                            <?= $labels[$r-1] ?>
                        </label>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>
            <?php endforeach; ?>

            <!-- Saran -->
            <div class="form-group" style="margin-top:28px; padding-top:20px; border-top:1px solid var(--gray-100);">
                <label class="form-label">Saran dan Masukan</label>
                <textarea class="form-control" placeholder="Tuliskan saran, masukan, atau harapan Anda untuk peningkatan pelayanan..." rows="4"></textarea>
            </div>

            <div class="form-submit">
                <button type="submit" class="btn-submit">
                    <i class="fas fa-paper-plane"></i><a href="https://www.youtube.com/watch?v=blSDw_fhL6I&list=RDA9hauDwHlvs&index=28"> Ikuti Survey </a>
                </button>
                <span style="font-size:.78rem; color:var(--text-muted);">Data dijaga kerahasiaannya</span>
            </div>

        </form>

        <!-- Info SKM -->
        <div style="max-width:740px; margin: 28px auto 0; display:grid; grid-template-columns: repeat(3, 1fr); gap:16px;">
            <div style="background:var(--gray-50); border-radius:var(--radius); padding:20px; text-align:center;">
                <i class="fas fa-shield-alt" style="color:var(--blue); font-size:1.5rem; margin-bottom:10px; display:block;"></i>
                <div style="font-size:.82rem; font-weight:600; color:var(--navy);">Data Aman</div>
                <div style="font-size:.75rem; color:var(--text-muted); margin-top:4px;">Identitas Anda tidak akan dipublikasikan</div>
            </div>
            <div style="background:var(--gray-50); border-radius:var(--radius); padding:20px; text-align:center;">
                <i class="fas fa-chart-bar" style="color:var(--blue); font-size:1.5rem; margin-bottom:10px; display:block;"></i>
                <div style="font-size:.82rem; font-weight:600; color:var(--navy);">Digunakan untuk Evaluasi</div>
                <div style="font-size:.75rem; color:var(--text-muted); margin-top:4px;">Hasil digunakan untuk perbaikan layanan</div>
            </div>
            <div style="background:var(--gray-50); border-radius:var(--radius); padding:20px; text-align:center;">
                <i class="fas fa-file-alt" style="color:var(--blue); font-size:1.5rem; margin-bottom:10px; display:block;"></i>
                <div style="font-size:.82rem; font-weight:600; color:var(--navy);">Laporan Berkala</div>
                <div style="font-size:.75rem; color:var(--text-muted); margin-top:4px;">Hasil SKM dipublikasikan setiap semester</div>
            </div>
        </div>

    </div>
</section>
