<?php
// Tentukan halaman aktif berdasarkan parameter
$current_page = isset($_GET['page']) ? $_GET['page'] : 'beranda';

$nav_items = [
    'beranda'   => 'Beranda',
    'profil'    => 'Profil',
    'pelayanan' => 'Pelayanan',
    'faq'       => 'FAQ',
    'skm'       => 'SKM',
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Website resmi Kecamatan Karang Tengah, Kota Tangerang – pusat informasi layanan publik.">
    <title><?= isset($page_title) ? htmlspecialchars($page_title) . ' — ' : '' ?><?= SITE_NAME ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<!-- Top Bar -->
<div class="topbar">
    <div class="container">
        <div class="topbar-left">
            <span><i class="fas fa-map-marker-alt"></i> <?= SITE_ALAMAT ?></span>
        </div>
        <div class="topbar-right">
            <span><i class="fas fa-phone"></i> <?= SITE_TELEPON ?></span>
            <span><i class="fas fa-clock"></i> <?= SITE_JAM_OPERASIONAL ?></span>
        </div>
    </div>
</div>

<!-- Header -->
<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <!-- Logo -->
            <a href="<?= BASE_URL ?>index.php" class="site-logo">
                <div class="logo-icon">
                    <img src="<?= BASE_URL ?>assets/images/logo-placeholder.svg" alt="Logo Kota Tangerang" onerror="this.style.display='none'">
                    <div class="logo-fallback">
                        <i class="fas fa-landmark"></i>
                    </div>
                </div>
                <div class="logo-text">
                    <span class="logo-title"><?= SITE_NAME ?></span>
                    <span class="logo-sub"><?= SITE_KOTA ?>, <?= SITE_PROVINSI ?></span>
                </div>
            </a>

            <!-- Navigation -->
            <nav class="main-nav" id="main-nav">
                <ul>
                    <?php foreach ($nav_items as $key => $label): ?>
                    <li>
                        <a href="<?= BASE_URL ?>index.php?page=<?= $key ?>"
                           class="<?= $current_page === $key ? 'active' : '' ?>">
                            <?= $label ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </nav>

            <!-- Hamburger -->
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </div>
</header>

<!-- Main Content -->
<main class="site-main">
