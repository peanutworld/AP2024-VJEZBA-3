## SQL Script

  ```
CREATE DATABASE IF NOT EXISTS `ap2024` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ap2024`;

CREATE TABLE IF NOT EXISTS `proizvodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` varchar(255) DEFAULT NULL,
  `kategorija` varchar(255) DEFAULT NULL,
  `cijena` decimal(10,2) DEFAULT NULL,
  `dostupnost` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

INSERT INTO `proizvodi` (`id`, `naziv`, `kategorija`, `cijena`, `dostupnost`) VALUES
	(1, 'Monitor', 'Računalna oprema', 299.99, 1),
	(2, 'Tipkovnica', 'Računalna oprema', 49.99, 1),
	(3, 'Miš', 'Računalna oprema', 29.99, 1),
	(4, 'Mobitel', 'Mobilni uređaji', 399.99, 1),
	(5, 'Stol', 'Namještaj', 149.99, 0);
  ```
