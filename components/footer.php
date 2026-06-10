<!-- END site-main -->
</main>

<footer class="site-footer">
    <div class="footer-top">
        <div class="container">
            <div class="footer-grid">
                <!-- Kolom 1: Identitas -->
                <div class="footer-col footer-identity">
                    <div class="footer-logo">
                        <div class="logo-fallback small">
                            <i class="fas fa-landmark"></i>
                        </div>
                        <div>
                            <strong><?= SITE_NAME ?></strong>
                            <span><?= SITE_KOTA ?></span>
                        </div>
                    </div>
                    <p>Website resmi Kecamatan Karang Tengah sebagai pusat informasi layanan publik bagi masyarakat.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <!-- Kolom 2: Navigasi -->
                <div class="footer-col">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="index.php?page=beranda">Beranda</a></li>
                        <li><a href="index.php?page=profil">Profil Kecamatan</a></li>
                        <li><a href="index.php?page=pelayanan">Layanan Publik</a></li>
                        <li><a href="index.php?page=faq">FAQ</a></li>
                        <li><a href="index.php?page=skm">SKM</a></li>
                    </ul>
                </div>

                <!-- Kolom 3: Kontak -->
                <div class="footer-col">
                    <h4>Kontak Kami</h4>
                    <ul class="footer-contact">
                        <li><i class="fas fa-map-marker-alt"></i><span><?= SITE_ALAMAT ?></span></li>
                        <li><i class="fas fa-phone"></i><a href="tel:<?= SITE_TELEPON ?>"><?= SITE_TELEPON ?></a></li>
                        <li><i class="fas fa-envelope"></i><a href="mailto:<?= SITE_EMAIL ?>"><?= SITE_EMAIL ?></a></li>
                        <li><i class="fas fa-clock"></i><span><?= SITE_JAM_OPERASIONAL ?></span></li>
                    </ul>
                </div>

                <!-- Kolom 4: Tautan -->
                <div class="footer-col">
                    <h4>Tautan Terkait</h4>
                    <ul>
                        <li><a href="https://tangerangkota.go.id" target="_blank">Pemerintah Kota Tangerang</a></li>
                        <li><a href="https://bantenprov.go.id" target="_blank">Pemerintah Provinsi Banten</a></li>
                        <li><a href="https://kemendagri.go.id" target="_blank">Kemendagri</a></li>
                        <li><a href="https://lapor.go.id" target="_blank">Lapor.go.id</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <p>&copy; <?= date('Y') ?> <?= SITE_NAME ?>, <?= SITE_KOTA ?>. Hak cipta dilindungi.</p>
            <p>Dikembangkan oleh Tim IT Kecamatan Karang Tengah</p>
        </div>
    </div>
</footer>

<script src="<?= BASE_URL ?>assets/js/main.js"></script>
</body>
</html>
