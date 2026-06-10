<?php
require_once 'includes/config.php';

// Router sederhana berdasarkan query string ?page=
$page = isset($_GET['page']) ? trim($_GET['page']) : 'beranda';

// Daftar halaman yang valid
$valid_pages = ['beranda', 'profil', 'pelayanan', 'faq', 'skm'];

// Fallback ke beranda jika halaman tidak valid
if (!in_array($page, $valid_pages)) {
    $page = 'beranda';
}

// Set judul halaman
$page_titles = [
    'beranda'   => 'Beranda',
    'profil'    => 'Profil Kecamatan',
    'pelayanan' => 'Layanan Publik',
    'faq'       => 'FAQ',
    'skm'       => 'Survei Kepuasan Masyarakat',
];
$page_title = $page_titles[$page] ?? 'Beranda';

// Load header
require_once 'components/header.php';

// Load halaman yang sesuai
require_once "pages/{$page}.php";

// Load footer
require_once 'components/footer.php';
?>
