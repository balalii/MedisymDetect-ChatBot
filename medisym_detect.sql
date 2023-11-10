-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2023 at 04:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medisym_detect`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_user` varchar(400) NOT NULL,
  `symptom` text NOT NULL,
  `disease` text NOT NULL,
  `probability` varchar(400) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `name_user`, `symptom`, `disease`, `probability`, `created_at`, `updated_at`) VALUES
(1, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:34:49', '2023-09-09 08:34:49'),
(2, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:36:24', '2023-09-09 08:36:24'),
(3, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:36:50', '2023-09-09 08:36:50'),
(4, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:37:44', '2023-09-09 08:37:44'),
(5, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:37:45', '2023-09-09 08:37:45'),
(6, 'Cek Gatal Nih Bang Hedhe', 'panu', 'cek gatal nih bang hedhe', '50.00', '2023-09-09 08:37:58', '2023-09-09 08:37:58'),
(7, 'Me', 'panu', 'gatal muka memar', '80.00', '2023-09-14 09:55:41', '2023-09-14 09:55:41'),
(8, 'Ucup', 'panu', 'gatal muka lebam', '75.00', '2023-09-14 10:35:28', '2023-09-14 10:35:28'),
(9, 'Ucup', 'panu', 'gatal muka lebam', '75.00', '2023-09-14 10:36:40', '2023-09-14 10:36:40'),
(10, 'Ujang', 'panu', 'gatal di area kulit punggun dan kemarahan', '88.89', '2023-09-27 06:20:19', '2023-09-27 06:20:19'),
(11, 'Ujang', 'panu', 'gatal di area kulit punggun dan kemarahan', '88.89', '2023-09-27 06:21:18', '2023-09-27 06:21:18'),
(12, 'Ujang', 'panu', 'gatal di area kulit punggun dan kemarahan', '88.89', '2023-09-27 06:21:30', '2023-09-27 06:21:30'),
(13, 'Ujang', 'panu', 'gatal di area kulit punggun dan kemarahan', '88.89', '2023-09-27 06:21:32', '2023-09-27 06:21:32'),
(14, 'Ujang', 'panu', 'gatal di area kulit punggun dan kemarahan', '88.89', '2023-09-27 06:21:33', '2023-09-27 06:21:33'),
(15, 'Me', 'panu', 'gatal di daerah kulit bagian belakang', '85.71', '2023-09-27 06:26:28', '2023-09-27 06:26:28'),
(16, 'Me', 'panu', 'gatel nih muka wi', '40.00', '2023-09-27 06:34:18', '2023-09-27 06:34:18'),
(17, 'Me', 'panu', 'gatal', '100', '2023-09-27 06:35:21', '2023-09-27 06:35:21'),
(18, 'Cek', 'panu', 'gatal', '100', '2023-09-27 06:37:14', '2023-09-27 06:37:14'),
(19, 'Ucup', 'panu', 'gatal pantad kaya pumya nauval', '33.33', '2023-10-24 19:07:24', '2023-10-24 19:07:24'),
(20, 'Ucup', 'panu', 'gatal muka saya sejenis sedikit hilang', '50.00', '2023-11-02 19:10:42', '2023-11-02 19:10:42'),
(21, 'Fadsf', 'panu', 'gatal eh aduh heh', '60.00', '2023-11-02 19:29:14', '2023-11-02 19:29:14'),
(22, 'Fadsf', 'panu', 'gatal haduh anjj', '50.00', '2023-11-02 19:32:25', '2023-11-02 19:32:25'),
(23, 'Fadsf', 'panu', 'gatal haduh anjj', '50.00', '2023-11-02 19:34:27', '2023-11-02 19:34:27'),
(24, 'F', 'panu', 'gatl kulit anjj', '50.00', '2023-11-02 19:38:48', '2023-11-02 19:38:48'),
(25, 'Gsdfgdsg', 'panu', 'Tentu Gsdfgdsg, Mohon jelaskan dengan lebih rinci gejala kulit yang Anda alami. Semakin spesifik informasinya, semakin baik Saya dapat membantu Anda!Tentu Gsdfgdsg, Mohon jelaskan dengan lebih rinci gejala kulit yang Anda alami. Semakin spesifik informasinya, semakin baik Saya dapat membantu Anda!Tentu Gsdfgdsg, Mohon jelaskan dengan lebih rinci gejala kulit yang Anda alami. Semakin spesifik informasinya, semakin baik Saya dapat membantu Anda!Tentu Gsdfgdsg, Mohon jelaskan dengan lebih rinci gejala kulit yang Anda alami. Semakin spesifik informasinya, semakin baik Saya dapat membantu Anda!', '35.37', '2023-11-05 09:27:49', '2023-11-05 09:27:49'),
(26, 'D', 'panu', 'v', '100', '2023-11-06 06:45:14', '2023-11-06 06:45:14'),
(27, 'Ucup', 'panu', 'gatal kulit aduhai', '75.00', '2023-11-07 08:45:43', '2023-11-07 08:45:43'),
(28, 'Iqbal', 'panu', 'gatal kulit bau', '75.00', '2023-11-08 06:17:59', '2023-11-08 06:17:59'),
(29, 'Iqbal', 'panu', 'gatal kulit bau', '75.00', '2023-11-08 06:18:40', '2023-11-08 06:18:40'),
(30, 'Udin', 'panu', 'gatal pantad', '66.67', '2023-11-08 06:49:06', '2023-11-08 06:49:06'),
(31, 'Udin', 'panu', 'gatal anjing', '66.67', '2023-11-08 06:52:35', '2023-11-08 06:52:35'),
(32, 'Ucup', 'panu', 'gatal  njir', '75.00', '2023-11-08 07:06:40', '2023-11-08 07:06:40'),
(33, 'Ucup', 'panu', 'gatal pantad bau', '50.00', '2023-11-08 07:42:21', '2023-11-08 07:42:21'),
(34, 'Ucup', 'panu', 'gatal pantad bau', '50.00', '2023-11-08 07:43:24', '2023-11-08 07:43:24'),
(35, 'GATAL ANJJ', 'panu', 'GATAL ANJJ', '66.67', '2023-11-08 08:00:19', '2023-11-08 08:00:19'),
(36, 'GATAL ANJJ', 'panu', 'GATAL ANJJ', '66.67', '2023-11-08 08:05:33', '2023-11-08 08:05:33'),
(37, 'Me', 'panu', 'gatal anjng', '66.67', '2023-11-08 08:20:11', '2023-11-08 08:20:11'),
(38, 'Mee', 'panu', 'gatal anjing', '66.67', '2023-11-08 08:22:03', '2023-11-08 08:22:03'),
(39, 'Me', 'panu', 'gatal njir', '66.67', '2023-11-08 08:37:22', '2023-11-08 08:37:22'),
(40, 'Ucup', 'panu', 'gatal anjingg', '66.67', '2023-11-08 08:54:47', '2023-11-08 08:54:47'),
(41, 'Ucup', 'panu', 'gatal anjing', '66.67', '2023-11-08 08:55:29', '2023-11-08 08:55:29'),
(42, 'Me', 'panu', 'gatal anjjj kulit', '75.00', '2023-11-09 04:26:30', '2023-11-09 04:26:30'),
(43, 'Fdas', 'panu', 'gatal pantad ku', '75.00', '2023-11-09 05:15:06', '2023-11-09 05:15:06'),
(44, 'Me', 'panu', 'gatal pantad', '66.67', '2023-11-09 06:35:18', '2023-11-09 06:35:18'),
(45, 'Me', 'panu', 'cek gatel banget ni kulit njir', '42.86', '2023-11-09 07:16:09', '2023-11-09 07:16:09'),
(46, 'Me', 'panu', 'gatl kulit ku njir', '60.00', '2023-11-09 07:18:02', '2023-11-09 07:18:02'),
(47, 'Ucup', 'panu', 'Coba dua fitur utama yang baru tersedia saat ini. Silakan pilih opsi yang paling sesuai dengan kebutuhan Anda.', '36.84', '2023-11-09 18:16:19', '2023-11-09 18:16:19'),
(48, 'Me', 'panu', 'gatal anjing pantad', '50.00', '2023-11-09 18:22:16', '2023-11-09 18:22:16'),
(49, 'M', 'panu', 'gatal pantad ku mas', '80.00', '2023-11-09 18:32:18', '2023-11-09 18:32:18');

-- --------------------------------------------------------

--
-- Table structure for table `diagnoses`
--

CREATE TABLE `diagnoses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(400) NOT NULL,
  `disease` varchar(400) NOT NULL,
  `desc` text NOT NULL,
  `symptom` text NOT NULL,
  `treatment` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `diagnoses`
--

INSERT INTO `diagnoses` (`id`, `image`, `disease`, `desc`, `symptom`, `treatment`, `created_at`, `updated_at`) VALUES
(1, 'panu-1694239279.png', 'panu', '<h2><strong>Pengertian Panu</strong></h2><p>Panu adalah infeksi jamur pada kulit yang terbilang sangat umum. Pada sebagian besar kasus, panu atau tinea versicolor lebih sering menyerang remaja dan usia muda. Meski begitu, orang dewasa juga bisa saja terserang panu, terutama mereka yang tinggal di iklim subtropis.</p><p>Jamur mengganggu pigmentasi pada kulit, sehingga memicu perbedaan warna pada area kulit di sekitarnya. Pada area kulit yang terkena infeksi panu akan berwarna lebih gelap atau terang. Sebagian besar panu terjadi pada pundak, punggung, leher, dan dada. Namun untungnya, <a href=\"https://www.halodoc.com/kesehatan/perawatan-kulit\">masalah kulit</a> ini tidak menyebabkan nyeri dan tidak menular.</p><h2><strong>Penyebab Panu</strong></h2><p>Penyebab utama panu adalah perkembangan jamur <i>malassezia</i> pada kulit. Jamur penyebab panu bisa ditemukan pada kulit yang sehat, dan merupakan flora yang normal. Jamur ini baru akan menyebabkan masalah saat tumbuh secara abnormal. Misalnya, dipicu karena lemahnya sistem kekebalan tubuh atau perubahan hormon.&nbsp;</p><h2><strong>Faktor Risiko Panu</strong></h2><p>Terdapat beberapa faktor yang bisa meningkatkan risiko terjadinya panu, antara lain:</p><ul><li>Cuaca panas dan lembap.</li><li>Kulit berminyak.</li><li>Perubahan hormonal.</li><li>Sistem kekebalan tubuh melemah.</li><li>Mengonsumsi obat-obatan yang menekan sistem imun.</li><li>Keringat berlebihan.</li><li>Riwayat panu dalam keluarga.</li><li>Lingkungan yang beriklim lembap dan hangat.</li></ul><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/kenali-faktor-pemicu-munculnya-panu-di-wajah\">Faktor Pemicu Munculnya Panu di Wajah&nbsp;</a></p><h2><strong>Gejala Panu</strong></h2><p>Ketika seseorang terserang panu, maka tubuhnya akan mengalami beberapa keluhan. Berikut gejala-gejala yang umumnya dialami pengidap panu:</p><ul><li>Area kulit dengan diskolorasi, biasanya pada bagian punggung, dada, leher, dan lengan atas, yang tampak lebih gelap atau terang.</li><li>Kondisi gatal ringan.</li><li>Kulit terasa kering, gatal, dan mungkin bersisik.</li><li>Kulit menebal.</li><li>Perubahan warna pada kulit, menjadi lebih terang atau gelap dibandingkan kulit di sekitarnya.</li></ul><h2><strong>Diagnosis Panu</strong></h2><p>Untuk mendiagnosis panu, dokter akan melakukan pemeriksaan pada kulit untuk melihat ruam. Dalam beberapa kondisi, dokter mungkin akan menggunakan sinar ultraviolet untuk membantu mendiagnosis panu. Sinar ini akan membuat daerah yang terkena tampak berwarna kuning-hijau neon pada lesi panu.</p><p><a href=\"https://www.halodoc.com/tanya-dokter/kategori/spesialis-kulit\">Dokter kulit</a> mungkin juga mengambil sampel kulit dengan mengikis kulit dan sisik dari area yang terkena untuk dilihat di bawah mikroskop. Sampel kemudian dapat ditempelkan langsung ke <i>slide</i> untuk dilihat dengan mikroskop.</p><h2><strong>Komplikasi Panu</strong></h2><p>Dalam beberapa kasus, panu bisa menimbulkan komplikasi pada kulit. Komplikasi yang umum terjadi adalah perubahan warna kulit yang bisa bertahan selama berminggu-minggu setelah perawatan. Pasalnya, melanosit (sel penghasil warna kulit) memerlukan beberapa waktu untuk pulih. Tak ada komplikasi permanen yang disebabkan oleh panu.</p>', 'Pengertian Panu\r\nPanu adalah infeksi jamur pada kulit yang terbilang sangat umum. Pada sebagian besar kasus, panu atau tinea versicolor lebih sering menyerang remaja dan usia muda. Meski begitu, orang dewasa juga bisa saja terserang panu, terutama mereka yang tinggal di iklim subtropis.\r\n\r\nJamur mengganggu pigmentasi pada kulit, sehingga memicu perbedaan warna pada area kulit di sekitarnya. Pada area kulit yang terkena infeksi panu akan berwarna lebih gelap atau terang. Sebagian besar panu terjadi pada pundak, punggung, leher, dan dada. Namun untungnya, masalah kulit ini tidak menyebabkan nyeri dan tidak menular.\r\n\r\nPenyebab Panu\r\nPenyebab utama panu adalah perkembangan jamur malassezia pada kulit. Jamur penyebab panu bisa ditemukan pada kulit yang sehat, dan merupakan flora yang normal. Jamur ini baru akan menyebabkan masalah saat tumbuh secara abnormal. Misalnya, dipicu karena lemahnya sistem kekebalan tubuh atau perubahan hormon. \r\n\r\nFaktor Risiko Panu\r\nTerdapat beberapa faktor yang bisa meningkatkan risiko terjadinya panu, antara lain:\r\n\r\nCuaca panas dan lembap.\r\nKulit berminyak.\r\nPerubahan hormonal.\r\nSistem kekebalan tubuh melemah.\r\nMengonsumsi obat-obatan yang menekan sistem imun.\r\nKeringat berlebihan.\r\nRiwayat panu dalam keluarga.\r\nLingkungan yang beriklim lembap dan hangat.\r\nBaca juga: Faktor Pemicu Munculnya Panu di Wajah \r\n\r\nGejala Panu\r\nKetika seseorang terserang panu, maka tubuhnya akan mengalami beberapa keluhan. Berikut gejala-gejala yang umumnya dialami pengidap panu:\r\n\r\nArea kulit dengan diskolorasi, biasanya pada bagian punggung, dada, leher, dan lengan atas, yang tampak lebih gelap atau terang.\r\nKondisi gatal ringan.\r\nKulit terasa kering, gatal, dan mungkin bersisik.\r\nKulit menebal.\r\nPerubahan warna pada kulit, menjadi lebih terang atau gelap dibandingkan kulit di sekitarnya.\r\nDiagnosis Panu\r\nUntuk mendiagnosis panu, dokter akan melakukan pemeriksaan pada kulit untuk melihat ruam. Dalam beberapa kondisi, dokter mungkin akan menggunakan sinar ultraviolet untuk membantu mendiagnosis panu. Sinar ini akan membuat daerah yang terkena tampak berwarna kuning-hijau neon pada lesi panu.\r\n\r\nDokter kulit mungkin juga mengambil sampel kulit dengan mengikis kulit dan sisik dari area yang terkena untuk dilihat di bawah mikroskop. Sampel kemudian dapat ditempelkan langsung ke slide untuk dilihat dengan mikroskop.\r\n\r\nKomplikasi Panu\r\nDalam beberapa kasus, panu bisa menimbulkan komplikasi pada kulit. Komplikasi yang umum terjadi adalah perubahan warna kulit yang bisa bertahan selama berminggu-minggu setelah perawatan. Pasalnya, melanosit (sel penghasil warna kulit) memerlukan beberapa waktu untuk pulih. Tak ada komplikasi permanen yang disebabkan oleh panu.', '<h2><strong>Pengobatan Panu</strong></h2><p>Jika tinea versikolor parah atau tidak bereaksi terhadap obat antijamur yang dijual bebas, mungkin diperlukan obat resep dokter, dalam bentuk topikal maupun oral. Setelah perawatan selesai, warna kulit mungkin tetap tidak merata selama beberapa minggu, atau bahkan berbulan-bulan.&nbsp;</p><p>Infeksi juga dapat berulang dalam cuaca panas dan lembap. Dalam kasus persisten, mungkin perlu minum obat satu atau dua kali sebulan untuk mencegah infeksi berulang.</p><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/4-jenis-salep-jamur-kulit-untuk-redakan-gejala\">Jenis Salep Jamur Kulit Untuk Redakan Gejala</a></p><h2><strong>Pencegahan Panu</strong></h2><p>Cara mencegah panu paling utama adalah menjaga kebersihan kulit agar tidak lembap dan memperkuat sistem kekebalan tubuh. Untuk membantu mencegah tinea versikolor kembali, dokter dapat meresepkan perawatan kulit atau mulut yang digunakan satu atau dua kali sebulan.&nbsp;</p><h2><strong>Kapan Harus ke Dokter?</strong></h2><p>Jika cara penanganan dan pencegahan di atas tidak berhasil, kamu bisa <a href=\"https://halodoc.onelink.me/g7yv/dermatologytextbottom\">konsultasi dengan dokter</a> di Halodoc✔️ untuk mendapatkan rekomendasi penanganan dan saran medis yang tepat. Penanganan yang tepat dan cepat bisa meningkatkan peluang kesembuhan, dan mencegah komplikasi. Yuk, <i>download</i> aplikasi <strong>Halodoc</strong> untuk mendapatkan kemudahan informasi seputar kesehatan!</p>', '2023-09-08 23:01:20', '2023-09-08 23:01:20'),
(2, 'fas-1694273661.jpg', 'Gatal Hidung', '<h2><strong>Pengertian Panu</strong></h2><p>Panu adalah infeksi jamur pada kulit yang terbilang sangat umum. Pada sebagian besar kasus, panu atau tinea versicolor lebih sering menyerang remaja dan usia muda. Meski begitu, orang dewasa juga bisa saja terserang panu, terutama mereka yang tinggal di iklim subtropis.</p><p>Jamur mengganggu pigmentasi pada kulit, sehingga memicu perbedaan warna pada area kulit di sekitarnya. Pada area kulit yang terkena infeksi panu akan berwarna lebih gelap atau terang. Sebagian besar panu terjadi pada pundak, punggung, leher, dan dada. Namun untungnya, <a href=\"https://www.halodoc.com/kesehatan/perawatan-kulit\">masalah kulit</a> ini tidak menyebabkan nyeri dan tidak menular.</p><p>&nbsp;</p><h2><strong>Penyebab Panu</strong></h2><p>Penyebab utama panu adalah perkembangan jamur <i>malassezia</i> pada kulit. Jamur penyebab panu bisa ditemukan pada kulit yang sehat, dan merupakan flora yang normal. Jamur ini baru akan menyebabkan masalah saat tumbuh secara abnormal. Misalnya, dipicu karena lemahnya sistem kekebalan tubuh atau perubahan hormon.&nbsp;</p><p>&nbsp;</p><h2><strong>Faktor Risiko Panu</strong></h2><p>Terdapat beberapa faktor yang bisa meningkatkan risiko terjadinya panu, antara lain:</p><ul><li>Cuaca panas dan lembap.</li><li>Kulit berminyak.</li><li>Perubahan hormonal.</li><li>Sistem kekebalan tubuh melemah.</li><li>Mengonsumsi obat-obatan yang menekan sistem imun.</li><li>Keringat berlebihan.</li><li>Riwayat panu dalam keluarga.</li><li>Lingkungan yang beriklim lembap dan hangat.</li></ul><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/kenali-faktor-pemicu-munculnya-panu-di-wajah\">Faktor Pemicu Munculnya Panu di Wajah&nbsp;</a></p><p>&nbsp;</p><h2><strong>Gejala Panu</strong></h2><p>Ketika seseorang terserang panu, maka tubuhnya akan mengalami beberapa keluhan. Berikut gejala-gejala yang umumnya dialami pengidap panu:</p><ul><li>Area kulit dengan diskolorasi, biasanya pada bagian punggung, dada, leher, dan lengan atas, yang tampak lebih gelap atau terang.</li><li>Kondisi gatal ringan.</li><li>Kulit terasa kering, gatal, dan mungkin bersisik.</li><li>Kulit menebal.</li><li>Perubahan warna pada kulit, menjadi lebih terang atau gelap dibandingkan kulit di sekitarnya.</li></ul><p>&nbsp;</p><h2><strong>Diagnosis Panu</strong></h2><p>Untuk mendiagnosis panu, dokter akan melakukan pemeriksaan pada kulit untuk melihat ruam. Dalam beberapa kondisi, dokter mungkin akan menggunakan sinar ultraviolet untuk membantu mendiagnosis panu. Sinar ini akan membuat daerah yang terkena tampak berwarna kuning-hijau neon pada lesi panu.</p><p><a href=\"https://www.halodoc.com/tanya-dokter/kategori/spesialis-kulit\">Dokter kulit</a> mungkin juga mengambil sampel kulit dengan mengikis kulit dan sisik dari area yang terkena untuk dilihat di bawah mikroskop. Sampel kemudian dapat ditempelkan langsung ke <i>slide</i> untuk dilihat dengan mikroskop.</p><p>&nbsp;</p><h2><strong>Komplikasi Panu</strong></h2><p>Dalam beberapa kasus, panu bisa menimbulkan komplikasi pada kulit. Komplikasi yang umum terjadi adalah perubahan warna kulit yang bisa bertahan selama berminggu-minggu setelah perawatan. Pasalnya, melanosit (sel penghasil warna kulit) memerlukan beberapa waktu untuk pulih. Tak ada komplikasi permanen yang disebabkan oleh panu.</p>', 'fsad', '<p>fsa</p>', '2023-09-09 08:34:22', '2023-11-08 07:57:53'),
(3, 'Gatal Pantad-1699455547.png', 'Gatal Pantad', '<h2><strong>Pengertian Panu</strong></h2><p>Panu adalah infeksi jamur pada kulit yang terbilang sangat umum. Pada sebagian besar kasus, panu atau tinea versicolor lebih sering menyerang remaja dan usia muda. Meski begitu, orang dewasa juga bisa saja terserang panu, terutama mereka yang tinggal di iklim subtropis.</p><p>Jamur mengganggu pigmentasi pada kulit, sehingga memicu perbedaan warna pada area kulit di sekitarnya. Pada area kulit yang terkena infeksi panu akan berwarna lebih gelap atau terang. Sebagian besar panu terjadi pada pundak, punggung, leher, dan dada. Namun untungnya, <a href=\"https://www.halodoc.com/kesehatan/perawatan-kulit\">masalah kulit</a> ini tidak menyebabkan nyeri dan tidak menular.</p><p>&nbsp;</p><h2><strong>Penyebab Panu</strong></h2><p>Penyebab utama panu adalah perkembangan jamur <i>malassezia</i> pada kulit. Jamur penyebab panu bisa ditemukan pada kulit yang sehat, dan merupakan flora yang normal. Jamur ini baru akan menyebabkan masalah saat tumbuh secara abnormal. Misalnya, dipicu karena lemahnya sistem kekebalan tubuh atau perubahan hormon.&nbsp;</p><p>&nbsp;</p><h2><strong>Faktor Risiko Panu</strong></h2><p>Terdapat beberapa faktor yang bisa meningkatkan risiko terjadinya panu, antara lain:</p><ul><li>Cuaca panas dan lembap.</li><li>Kulit berminyak.</li><li>Perubahan hormonal.</li><li>Sistem kekebalan tubuh melemah.</li><li>Mengonsumsi obat-obatan yang menekan sistem imun.</li><li>Keringat berlebihan.</li><li>Riwayat panu dalam keluarga.</li><li>Lingkungan yang beriklim lembap dan hangat.</li></ul><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/kenali-faktor-pemicu-munculnya-panu-di-wajah\">Faktor Pemicu Munculnya Panu di Wajah&nbsp;</a></p><p>&nbsp;</p><h2><strong>Gejala Panu</strong></h2><p>Ketika seseorang terserang panu, maka tubuhnya akan mengalami beberapa keluhan. Berikut gejala-gejala yang umumnya dialami pengidap panu:</p><ul><li>Area kulit dengan diskolorasi, biasanya pada bagian punggung, dada, leher, dan lengan atas, yang tampak lebih gelap atau terang.</li><li>Kondisi gatal ringan.</li><li>Kulit terasa kering, gatal, dan mungkin bersisik.</li><li>Kulit menebal.</li><li>Perubahan warna pada kulit, menjadi lebih terang atau gelap dibandingkan kulit di sekitarnya.</li></ul><p>&nbsp;</p><h2><strong>Diagnosis Panu</strong></h2><p>Untuk mendiagnosis panu, dokter akan melakukan pemeriksaan pada kulit untuk melihat ruam. Dalam beberapa kondisi, dokter mungkin akan menggunakan sinar ultraviolet untuk membantu mendiagnosis panu. Sinar ini akan membuat daerah yang terkena tampak berwarna kuning-hijau neon pada lesi panu.</p><p><a href=\"https://www.halodoc.com/tanya-dokter/kategori/spesialis-kulit\">Dokter kulit</a> mungkin juga mengambil sampel kulit dengan mengikis kulit dan sisik dari area yang terkena untuk dilihat di bawah mikroskop. Sampel kemudian dapat ditempelkan langsung ke <i>slide</i> untuk dilihat dengan mikroskop.</p><p>&nbsp;</p><h2><strong>Komplikasi Panu</strong></h2><p>Dalam beberapa kasus, panu bisa menimbulkan komplikasi pada kulit. Komplikasi yang umum terjadi adalah perubahan warna kulit yang bisa bertahan selama berminggu-minggu setelah perawatan. Pasalnya, melanosit (sel penghasil warna kulit) memerlukan beberapa waktu untuk pulih. Tak ada komplikasi permanen yang disebabkan oleh panu.</p>', 'f', '<h2><strong>Pengobatan Panu</strong></h2><p>Jika tinea versikolor parah atau tidak bereaksi terhadap obat antijamur yang dijual bebas, mungkin diperlukan obat resep dokter, dalam bentuk topikal maupun oral. Setelah perawatan selesai, warna kulit mungkin tetap tidak merata selama beberapa minggu, atau bahkan berbulan-bulan.&nbsp;</p><p>Infeksi juga dapat berulang dalam cuaca panas dan lembap. Dalam kasus persisten, mungkin perlu minum obat satu atau dua kali sebulan untuk mencegah infeksi berulang.</p><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/4-jenis-salep-jamur-kulit-untuk-redakan-gejala\">Jenis Salep Jamur Kulit Untuk Redakan Gejala</a></p><p>&nbsp;</p><h2><strong>Pencegahan Panu</strong></h2><p>Cara mencegah panu paling utama adalah menjaga kebersihan kulit agar tidak lembap dan memperkuat sistem kekebalan tubuh. Untuk membantu mencegah tinea versikolor kembali, dokter dapat meresepkan perawatan kulit atau mulut yang digunakan satu atau dua kali sebulan.&nbsp;</p><p>&nbsp;</p><h2><strong>Kapan Harus ke Dokter?</strong></h2><p>Jika cara penanganan dan pencegahan di atas tidak berhasil, kamu bisa <a href=\"https://halodoc.onelink.me/g7yv/dermatologytextbottom\">konsultasi dengan dokter</a> di Halodoc✔️ untuk mendapatkan rekomendasi penanganan dan saran medis yang tepat. Penanganan yang tepat dan cepat bisa meningkatkan peluang kesembuhan, dan mencegah komplikasi. Yuk, <i>download</i> aplikasi <strong>Halodoc</strong> untuk mendapatkan kemudahan informasi seputar kesehatan!</p>', '2023-11-08 07:59:07', '2023-11-08 07:59:07'),
(4, 'Gatal Apah-1699455579.jpeg', 'Gatal Apah', '<h2><strong>Pengertian Panu</strong></h2><p>Panu adalah infeksi jamur pada kulit yang terbilang sangat umum. Pada sebagian besar kasus, panu atau tinea versicolor lebih sering menyerang remaja dan usia muda. Meski begitu, orang dewasa juga bisa saja terserang panu, terutama mereka yang tinggal di iklim subtropis.</p><p>Jamur mengganggu pigmentasi pada kulit, sehingga memicu perbedaan warna pada area kulit di sekitarnya. Pada area kulit yang terkena infeksi panu akan berwarna lebih gelap atau terang. Sebagian besar panu terjadi pada pundak, punggung, leher, dan dada. Namun untungnya, <a href=\"https://www.halodoc.com/kesehatan/perawatan-kulit\">masalah kulit</a> ini tidak menyebabkan nyeri dan tidak menular.</p><p>&nbsp;</p><h2><strong>Penyebab Panu</strong></h2><p>Penyebab utama panu adalah perkembangan jamur <i>malassezia</i> pada kulit. Jamur penyebab panu bisa ditemukan pada kulit yang sehat, dan merupakan flora yang normal. Jamur ini baru akan menyebabkan masalah saat tumbuh secara abnormal. Misalnya, dipicu karena lemahnya sistem kekebalan tubuh atau perubahan hormon.&nbsp;</p><p>&nbsp;</p><h2><strong>Faktor Risiko Panu</strong></h2><p>Terdapat beberapa faktor yang bisa meningkatkan risiko terjadinya panu, antara lain:</p><ul><li>Cuaca panas dan lembap.</li><li>Kulit berminyak.</li><li>Perubahan hormonal.</li><li>Sistem kekebalan tubuh melemah.</li><li>Mengonsumsi obat-obatan yang menekan sistem imun.</li><li>Keringat berlebihan.</li><li>Riwayat panu dalam keluarga.</li><li>Lingkungan yang beriklim lembap dan hangat.</li></ul><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/kenali-faktor-pemicu-munculnya-panu-di-wajah\">Faktor Pemicu Munculnya Panu di Wajah&nbsp;</a></p><p>&nbsp;</p><h2><strong>Gejala Panu</strong></h2><p>Ketika seseorang terserang panu, maka tubuhnya akan mengalami beberapa keluhan. Berikut gejala-gejala yang umumnya dialami pengidap panu:</p><ul><li>Area kulit dengan diskolorasi, biasanya pada bagian punggung, dada, leher, dan lengan atas, yang tampak lebih gelap atau terang.</li><li>Kondisi gatal ringan.</li><li>Kulit terasa kering, gatal, dan mungkin bersisik.</li><li>Kulit menebal.</li><li>Perubahan warna pada kulit, menjadi lebih terang atau gelap dibandingkan kulit di sekitarnya.</li></ul><p>&nbsp;</p><h2><strong>Diagnosis Panu</strong></h2><p>Untuk mendiagnosis panu, dokter akan melakukan pemeriksaan pada kulit untuk melihat ruam. Dalam beberapa kondisi, dokter mungkin akan menggunakan sinar ultraviolet untuk membantu mendiagnosis panu. Sinar ini akan membuat daerah yang terkena tampak berwarna kuning-hijau neon pada lesi panu.</p><p><a href=\"https://www.halodoc.com/tanya-dokter/kategori/spesialis-kulit\">Dokter kulit</a> mungkin juga mengambil sampel kulit dengan mengikis kulit dan sisik dari area yang terkena untuk dilihat di bawah mikroskop. Sampel kemudian dapat ditempelkan langsung ke <i>slide</i> untuk dilihat dengan mikroskop.</p><p>&nbsp;</p><h2><strong>Komplikasi Panu</strong></h2><p>Dalam beberapa kasus, panu bisa menimbulkan komplikasi pada kulit. Komplikasi yang umum terjadi adalah perubahan warna kulit yang bisa bertahan selama berminggu-minggu setelah perawatan. Pasalnya, melanosit (sel penghasil warna kulit) memerlukan beberapa waktu untuk pulih. Tak ada komplikasi permanen yang disebabkan oleh panu.</p>', 'd', '<h2><strong>Pengobatan Panu</strong></h2><p>Jika tinea versikolor parah atau tidak bereaksi terhadap obat antijamur yang dijual bebas, mungkin diperlukan obat resep dokter, dalam bentuk topikal maupun oral. Setelah perawatan selesai, warna kulit mungkin tetap tidak merata selama beberapa minggu, atau bahkan berbulan-bulan.&nbsp;</p><p>Infeksi juga dapat berulang dalam cuaca panas dan lembap. Dalam kasus persisten, mungkin perlu minum obat satu atau dua kali sebulan untuk mencegah infeksi berulang.</p><p>Baca juga: <a href=\"https://www.halodoc.com/artikel/4-jenis-salep-jamur-kulit-untuk-redakan-gejala\">Jenis Salep Jamur Kulit Untuk Redakan Gejala</a></p><p>&nbsp;</p><h2><strong>Pencegahan Panu</strong></h2><p>Cara mencegah panu paling utama adalah menjaga kebersihan kulit agar tidak lembap dan memperkuat sistem kekebalan tubuh. Untuk membantu mencegah tinea versikolor kembali, dokter dapat meresepkan perawatan kulit atau mulut yang digunakan satu atau dua kali sebulan.&nbsp;</p><p>&nbsp;</p><h2><strong>Kapan Harus ke Dokter?</strong></h2><p>Jika cara penanganan dan pencegahan di atas tidak berhasil, kamu bisa <a href=\"https://halodoc.onelink.me/g7yv/dermatologytextbottom\">konsultasi dengan dokter</a> di Halodoc✔️ untuk mendapatkan rekomendasi penanganan dan saran medis yang tepat. Penanganan yang tepat dan cepat bisa meningkatkan peluang kesembuhan, dan mencegah komplikasi. Yuk, <i>download</i> aplikasi <strong>Halodoc</strong> untuk mendapatkan kemudahan informasi seputar kesehatan!</p>', '2023-11-08 07:59:39', '2023-11-08 07:59:39');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_08_24_132614_create_diagnoses_table', 2),
(6, '2023_09_02_090414_create_chats_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'admin@gmail.com', NULL, '$2y$10$0XP2jDSD1RPUFMWTxHGP5uATNrC.34ceFo22I1QPnJBydiAgxInK.', NULL, '2023-09-08 23:00:04', '2023-09-08 23:00:04'),
(2, 'ucup', 'ucup@gmail.com', NULL, '$2y$10$5yv2YPJ7tyKS6Wr6iiPam.B37O1LGjzF0KM9xwJesY09bTjx5n4q6', NULL, '2023-11-08 07:51:06', '2023-11-08 07:51:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diagnoses`
--
ALTER TABLE `diagnoses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `diagnoses`
--
ALTER TABLE `diagnoses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
