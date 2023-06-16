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
-- Table structure for table `securitymanager`
--

DROP TABLE IF EXISTS `securitymanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `securitymanager` (
  `sm_id` int NOT NULL,
  `sm_name` varchar(45) DEFAULT NULL,
  `sm_email` varchar(45) NOT NULL,
  `sm_contact` varchar(45) DEFAULT NULL,
  `sm_ssn` int NOT NULL,
  `sm_password` varchar(45) DEFAULT NULL,
  `sm_dob` date DEFAULT NULL,
  `sm_doj` date DEFAULT NULL,
  `sm_salary` int DEFAULT NULL,
  `sm_starttime` time DEFAULT NULL,
  `sm_endtime` time DEFAULT NULL,
  PRIMARY KEY (`sm_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `securitymanager`
--

LOCK TABLES `securitymanager` WRITE;
/*!40000 ALTER TABLE `securitymanager` DISABLE KEYS */;
INSERT INTO `securitymanager` VALUES (23456,'box','box@gmail.com','1234567899',123456788,'Demo@123','2023-04-01','2023-04-10',231,'09:00:00','03:00:00'),(9876,'cup','cup@gmail.com','987654321',987654321,'Demo@123','2023-04-01','2023-04-06',344,'07:00:00','02:00:00'),(14785,'mottu','likr@gmail.com','225233525',535524363,'Pil@12345','1111-11-11','2367-02-23',11111,'11:11:00','11:11:00'),(99887,'orient','orient@gmail.com','8466898888',876543210,'Orient@123','2023-03-04','2023-04-01',987,'05:00:00','07:00:00'),(99888,'orientt','orientt@gmail.com','8466898889',876543211,'Orient@123','2023-03-04','2023-04-01',9876,'05:00:00','07:00:00'),(11122,'phonea','phone@gmail.com','9963743899',765432188,'Choc@123','2023-03-08','2023-04-04',500,'04:00:00','05:00:00'),(11222,'phonee','phone1@gmail.com','9989998933',918273644,'Tree@123','2023-04-01','2023-04-03',244,'08:00:00','09:00:00'),(11224,'phoneeee','phone123@gmail.com','9291202122',987654321,'Chap@123','2023-04-01','2023-04-04',986,'01:00:00','03:00:00'),(16101,'pot','pot@gmail.com','461441207',456789012,'Demo@123','2023-04-01','2023-04-15',66,'09:28:00','21:28:00'),(98765,'Taylor','taylor@gmail.com','998999892',929120212,'Demo@123','2023-04-01','2023-04-13',66,'05:45:00','17:45:00'),(14444,'Warey','warey@gmail.com','77777777',777777777,'Uash@2222222222222','1111-11-11','1113-11-11',1178455,'11:11:00','11:11:00');
/*!40000 ALTER TABLE `securitymanager` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-23 17:11:22
