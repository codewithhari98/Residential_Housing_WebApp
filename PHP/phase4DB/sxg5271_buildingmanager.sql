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
-- Table structure for table `buildingmanager`
--

DROP TABLE IF EXISTS `buildingmanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buildingmanager` (
  `bm_id` varchar(45) NOT NULL,
  `bm_name` varchar(45) DEFAULT NULL,
  `bm_email` varchar(45) NOT NULL,
  `bm_contact` varchar(10) DEFAULT NULL,
  `bm_ssn` int DEFAULT NULL,
  `bm_password` varchar(45) DEFAULT NULL,
  `bm_dob` date DEFAULT NULL,
  `bm_doj` date DEFAULT NULL,
  `bm_salary` int DEFAULT NULL,
  `bm_starttime` time DEFAULT NULL,
  `bm_endtime` time DEFAULT NULL,
  PRIMARY KEY (`bm_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buildingmanager`
--

LOCK TABLES `buildingmanager` WRITE;
/*!40000 ALTER TABLE `buildingmanager` DISABLE KEYS */;
INSERT INTO `buildingmanager` VALUES ('67890','Movie','movie@gmail.com','998999892',987654321,'Demo@123','2023-03-03','2023-04-05',678,'17:27:00','05:27:00'),('67899','Movieee','movie12@gmail.com','998999892',987654321,'Demo@123','2023-03-03','2023-04-05',678,'17:27:00','05:27:00'),('S1010','Sam','sam@gmail.com','7777777777',777777777,'Uashu@33','1111-11-11','1111-11-11',11111,'11:11:00','11:11:00'),('1','Shivani','sxg5271@gmail.com','9729729720',123456789,'Lenovo570*','2000-07-07','2023-01-01',100000,'08:00:00','19:00:00'),('2','Usha','ush1@gmail.com','9739739730',132456789,'Lenovo570*','1995-01-01','2023-03-31',90000,'09:00:00','18:00:00'),('S1010','wares','wash@gmail.com','124222222',141111221,'Wasres#3','1111-11-11','1111-11-11',111111,'11:11:00','11:11:00');
/*!40000 ALTER TABLE `buildingmanager` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-08 18:31:05
