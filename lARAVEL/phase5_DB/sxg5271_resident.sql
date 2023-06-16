-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: acadmysqldb001p.uta.edu    Database: sxg5271
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `resident`
--

DROP TABLE IF EXISTS `resident`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resident` (
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `residenttype` varchar(45) DEFAULT NULL,
  `ssn` int DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `movein` date DEFAULT NULL,
  `moveout` date DEFAULT NULL,
  `poolsubsription` tinyint DEFAULT NULL,
  `gardensubscription` tinyint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resident`
--

LOCK TABLES `resident` WRITE;
/*!40000 ALTER TABLE `resident` DISABLE KEYS */;
INSERT INTO `resident` VALUES ('hari','ash@resident.com','1111111111',NULL,123452222,NULL,'1111-11-11','1111-11-11','1111-11-11',NULL,NULL,NULL,NULL),('ash','ashY@resident.com','4444444444444',NULL,1111111,'UAsh#333','2023-04-16','2023-04-24','2023-04-23',NULL,NULL,'2023-04-24 03:52:36','2023-04-24 03:52:36'),('ash','bash@gmail.com','7845123654',NULL,751254125,'Uash@334','1111-11-11','1111-11-11','1111-11-11',NULL,NULL,NULL,NULL),('bottlee','bottle1@gmail.com','9989998922',NULL,987654322,'Demo@123','2023-04-01','2023-04-11','2023-04-18',NULL,NULL,NULL,NULL),('hsaaa','ha@login.com','1111111111111111111','111111111111',111111111,'Pol@1234','2023-04-13','2023-04-15','2023-04-27',NULL,NULL,NULL,NULL),('hhhhh','hari@gmail.com','1111111111','owner',111111111,'Kil@1234','2023-04-11','2023-04-21','2023-04-24',NULL,NULL,NULL,NULL),('Hash','hash12@gmail.com','9963743899',NULL,918273644,'Tree@123','2023-02-08','2023-03-08','2023-04-08',NULL,NULL,NULL,NULL),('Owner','own@gmail.com','9989998922',NULL,919293945,'Tree@123','2023-04-01','2023-04-21','2023-04-29',NULL,NULL,NULL,NULL),('Pot','pot@gmail.com','4694412071',NULL,919293949,'Demo@123','2023-02-03','2023-03-03','2023-04-21',NULL,NULL,NULL,NULL),('delicatee','swift@gmail.com','998999892',NULL,987654322,NULL,'2023-04-01','2023-04-06','2023-04-29',NULL,NULL,NULL,NULL),('shivani','sxg5271@gmail.com','9729729720',NULL,123456789,'Lenovo57','2000-07-07','2020-04-01','2023-04-01',NULL,NULL,NULL,NULL),('blankspace','taylor@gmail.com','9989998922',NULL,987654322,NULL,'2023-04-21','2023-04-21','2023-04-29',NULL,NULL,NULL,NULL),('Tree','tree@gmail.com','9989998922',NULL,918273645,'Tree@123','2023-03-04','2023-04-04','2023-04-19',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `resident` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:11:25
