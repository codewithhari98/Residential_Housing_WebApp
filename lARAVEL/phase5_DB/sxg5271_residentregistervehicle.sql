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
-- Table structure for table `residentregistervehicle`
--

DROP TABLE IF EXISTS `residentregistervehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `residentregistervehicle` (
  `email` varchar(45) NOT NULL,
  `vehiclemodel` varchar(45) DEFAULT NULL,
  `vehicleyear` varchar(45) DEFAULT NULL,
  `vehiclecolor` varchar(45) DEFAULT NULL,
  `dlplatenumber` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`),
  CONSTRAINT `FK1` FOREIGN KEY (`email`) REFERENCES `resident` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `residentregistervehicle`
--

LOCK TABLES `residentregistervehicle` WRITE;
/*!40000 ALTER TABLE `residentregistervehicle` DISABLE KEYS */;
INSERT INTO `residentregistervehicle` VALUES ('ha@login.com','1111','1111','11111','11111',NULL,NULL),('own@gmail.com','1111','1111','11111','11111',NULL,NULL),('pot@gmail.com','bmw','2022','red','QWE123',NULL,'2023-04-24 03:27:43'),('sxg5271@gmail.com','qwe','2021','red','1212565',NULL,NULL),('taylor@gmail.com','tesla','2023','white','DLG345',NULL,NULL),('tree@gmail.com','111','2021','111','TS1234',NULL,NULL);
/*!40000 ALTER TABLE `residentregistervehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:11:24
