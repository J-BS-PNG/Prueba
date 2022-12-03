CREATE TABLE `person`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(255) NOT NULL ,
  `date_now`      DATE,
  `photo`         VARCHAR(255),
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`name`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;