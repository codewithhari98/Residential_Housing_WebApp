<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';

$data = json_decode((file_get_contents("php://input")));
$id= (int)$data->user1;
$name = $data->user2;
$email = $data->user10;
$contact = (int)$data->user3;
$ssn= (int)$data->user4;
$password = $data->user11;
$dob = $data->user5;
$doj = $data->user6; 
$salary= (int)$data->user7;
$starttime= $data->user8;
$endtime=  $data->user9;

$conn = get_db_connection();
// $sql = "UPDATE buildingmanager SET name= '$name', id= '$id', email='$email',  message= '$message', password= '$password' ,'dob= $dob'  ,date= '$date', salary='$salary', starttime='$starttime' ,endtime= '$endtime' WHERE id = '$id'";
$sql = "UPDATE securitymanager SET sm_id= '$id', sm_name= '$name', sm_contact='$contact', sm_ssn= '$ssn', sm_password = '$password', sm_dob= '$dob', sm_doj= '$doj', sm_salary='$salary', sm_starttime='$starttime' ,sm_endtime= '$endtime' WHERE sm_email = '$email'";

if($conn->query($sql) === true) {
    $response['message'] = 'update sm success';
    echo json_encode($response);
  } else {
      $response['message'] = 'update sm failed';
      echo json_encode($response);
  }  

?>