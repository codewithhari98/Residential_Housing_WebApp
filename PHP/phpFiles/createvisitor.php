<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';

$data = json_decode((file_get_contents("php://input")));
$email= $data->user1;
$name = $data->user2;
$contact=(int) $data->user3;
$dlnumber=(int) $data->user4;
$carplatenumber = $data->user5;
$password= $data->user6;


$conn = get_db_connection();
//$contact = !empty($contact) ? "'$contact'":"NULL";
$sql = "INSERT INTO visitor( email, name, contact, dlnumber,  carplatenumber, password)VALUES('$email', '$name','$contact','$dlnumber','$carplatenumber' ,'$password')";

if($conn->query($sql) === true) {
  $response['message'] = 'create visitor success';
  echo json_encode($response);
} else {
    $response['message'] = 'create visitor failed';
    echo json_encode($response);
} 
$sql2 = "DELETE * FROM visitor where visitorContact ='0'";
echo json_encode($sql2);
$response['message'] = 'done';
echo json_encode($response);
?> 