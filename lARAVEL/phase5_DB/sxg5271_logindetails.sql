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
-- Table structure for table `logindetails`
--

DROP TABLE IF EXISTS `logindetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logindetails` (
  `email` varchar(45) DEFAULT NULL,
  `psw` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logindetails`
--

LOCK TABLES `logindetails` WRITE;
/*!40000 ALTER TABLE `logindetails` DISABLE KEYS */;
INSERT INTO `logindetails` VALUES ('ash@resident.con','Uashu@00'),('ash@resident.con','Uashu@00'),('har@gmail.cpm','Udh@3333'),('har@resident.com','Udh@3333'),('ash@pool.manager.com','Uash@333'),('ash@security.manager.com','Abc@1234'),('ash@builsing.manager.com','Uash#333'),('ash@pool.manager.com','UAshu@33'),('ash@security.manager.com','Jash@333'),('ash@building.manager.xom','Uashu@33'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Demo@123'),('ash@security.manager.com','Lenovo57'),('ash@security.manager.com','Lenovo57'),('ash@security.manager.com','Lenovo57'),(NULL,NULL),(NULL,NULL),('har@resident.com','Udh@3333'),('har@resident.com','Lenovo57'),('har@resident.com','Lenovo57'),('ash@resident.con','Lenovo57'),('har@resident.com','Patel@12'),('har@resident.com','Patel@12'),('har@resident.com','Patel@12'),('har@resident.com','Lenovo57'),('har@resident.con','Lenovo57'),('har@resident.com','Lenovo57'),('ash@resident.con','Lenovo57'),('ash@security.manager.com','Kil@1234'),('ash@garden.manger.com','Uasjs@33'),('ash@garden.manger.com','Uasjs@33'),('ash@garden.manager.com','Uasjs@33'),('ash@garden.manager.com','Joy@1234'),('ash@visiotr.com','UAshu#33'),('ash@building.manager.com','UAshu@33'),('ash@security.manager.com','Uash@333'),('ash@building.manager.com','UAshu@33'),('ash@visiitor.com','Kil@1234'),('ash@visiitor.com','Kil@1234'),('ash@visitor.com','Kil@1234'),('ash@resident.com','Uas@2222'),('ash@pool.manager.com','Uashu#33'),('ash@poolmanager.com','Uashu#33'),('ash@garden.manager.com','UAshu#$4'),('ash@building.manager.com','Uash@333');
/*!40000 ALTER TABLE `logindetails` ENABLE KEYS */;
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
