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
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor` (
  `email` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `contact` varchar(10) DEFAULT NULL,
  `dlnumber` int DEFAULT NULL,
  `carplatenumber` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `visitdate` date DEFAULT NULL,
  `updated_at` timestamp NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
INSERT INTO `visitor` VALUES ('ash@visitor,.com','ash','111111',1111,'1111','Uashu@007','2023-03-15','0000-00-00 00:00:00','0000-00-00 00:00:00'),('ash@visitor.com','ash','111111',1111,'1117','Kil@1234',NULL,'2023-04-22 08:55:42','2023-04-22 08:55:42'),('axu4976@mavs.uta.edu',NULL,NULL,NULL,NULL,'Jack@999','2023-03-04','2023-04-16 04:58:35','2023-04-16 04:58:35'),('ben@visitor.com','ben','7474747474',85858585,'85857878',NULL,NULL,'2023-04-22 22:32:32','2023-04-22 22:32:32'),('harip2411@gmail.com',NULL,NULL,NULL,NULL,'Konsi@123','2023-04-04','0000-00-00 00:00:00','0000-00-00 00:00:00'),('honey@gmail.com','Honey','9963743899',12345,'ABC456',NULL,'2023-02-28','0000-00-00 00:00:00','0000-00-00 00:00:00'),('jatan@gmail.com','Jatan','1234567',1234,'123','Jatan@123','2023-01-01','0000-00-00 00:00:00','0000-00-00 00:00:00'),('pot@gmail.com','Pot','9989998922',987,'PQR456','Demo@123','2023-01-15','2023-04-20 08:50:40','2023-04-20 08:50:40'),('ramp@gmail.com','ramo','7777777777',7777777,'777777777','Uas@1222222','2023-04-07','0000-00-00 00:00:00','0000-00-00 00:00:00'),('uashwanthika@gmail.com',NULL,NULL,NULL,NULL,'Uashu@33333',NULL,'2023-04-24 02:43:43','2023-04-24 02:43:43');
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:11:20
