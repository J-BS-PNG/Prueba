CREATE TABLE `person`
(
  `identification`INT(11) NOT NULL,
  `name`          VARCHAR(30) NOT NULL,
  `middle_name`   VARCHAR(30),
  `surname`       VARCHAR(30) NOT NULL,
  `second_surname`VARCHAR(30),
  `birth_day`     DATE,
  `photo`         VARCHAR(255),
  PRIMARY KEY (`identification`)
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;