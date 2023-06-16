<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './function.php';

$data = json_decode((file_get_contents("php://input")));
$visitorEmail = $data->user1;
$visitorName = $data->user2;
$visitorContact= $data->user3;
$visitorDL= $data->user4;
$visitorPassword = $data->user5;
$visitorCarPlate = $data->user6;

$conn = get_db_connection();
// $sql = "UPDATE buildingmanager SET name= '$name', id= '$id', email='$email',  message= '$message', password= '$password' ,'dob= $dob'  ,date= '$date', salary='$salary', starttime='$starttime' ,endtime= '$endtime' WHERE id = '$id'";
$sql = "UPDATE visitor SET visitorName= '$visitorName', visitorContact='$visitorContact', visitorDL = '$visitorDL', visitorPassword= '$visitorPassword', visitorCarPlate= '$visitorCarPlate' WHERE visitorEmail = '$visitorEmail'";

if($conn->query($sql) === true) {
    $response['message'] = 'update success';
    echo json_encode($response);
  } else {
      $response['message'] = 'update failed';
      echo json_encode($response);
  }  

?>