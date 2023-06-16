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
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `amount` int DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `card` varchar(16) DEFAULT NULL,
  `expiry` varchar(45) DEFAULT NULL,
  `cvv` int DEFAULT NULL,
  `subscription` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (100,'Hash','1234567890123456','01-2023',123,NULL,''),(150,'Tree','9987654321012345','01-2024',345,NULL,''),(12,'bottle','1234567890654321','01-2023',345,NULL,''),(100,'ash','101010100','01-2023',111,NULL,''),(10,'ash','101010','01-2023',111,NULL,''),(100,'ash','1425455544','01-2023',121,NULL,''),(100,'ash','1425455544','01-2023',121,NULL,''),(100,'ash','11111111','01-2023',111,'tennis','ash@res.com'),(100,'ash','7444444','01-2023',522,'pool','ash@gmail.com'),(23,'taylor','1234567890123456','12-2023',234,'pool','taylor@gmail.com'),(56,'test','1234567890123456','12-2023',234,'tennis','test@gmail.com'),(12,'Pool','9876543210123456','02-2024',456,'pool','pot@gmail.com'),(123,'Pool','9876543210123456','02-2024',456,'pool','pot@gmail.com'),(21,'Tennis','1234567890123456','02-2024',456,'tennis','bash@gmail.com'),(211,'Tennis','1234567890123456','02-2024',456,'tennis','bash@gmail.com'),(1010,'bear','7777777','08-5021',444,'tennis','bear@gmial.com'),(333,'ash','11111','05-2021',111,'tennis','ash@resident.com');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:11:18
