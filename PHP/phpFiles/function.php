<?php

function get_db_connection() {
    $servername = "acadmysqldb001p.uta.edu";
    $username = "sxg5271";
    $password = "Lenovo570*";
    $dbname = "sxg5271";
    $port= 3306;

    $conn = new mysqli($servername, $username, $password, $dbname, $port);

    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        return null;
    }

    return $conn;

}


?>