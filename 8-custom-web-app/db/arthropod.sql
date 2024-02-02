CREATE TABLE `arthropod` (
  `arth_id` int NOT NULL AUTO_INCREMENT,
  `arth_common_name` varchar(200) NOT NULL,
  `arth_species` varchar(200) NOT NULL,
  `arth_order` varchar(200) NOT NULL,
  `arth_class` varchar(200) NOT NULL,
  `arth_subphylum` varchar(200) NOT NULL,
  `arth_desc` varchar(2000) DEFAULT NULL,
  `arth_ecosystem` varchar(200) DEFAULT NULL,
  `arth_habitat` varchar(200) DEFAULT NULL,
  `arth_location` varchar(9000) DEFAULT NULL,
  `arth_wiki_link` varchar(1000) DEFAULT NULL,
  `arth_img_link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`arth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
