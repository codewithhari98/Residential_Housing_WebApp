<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';

$data = json_decode((file_get_contents("php://input")));
$email = $data->user1;
$name = $data->user2;
$contact= $data->user3;
$dlnumber= $data->user4;
$carplatenumber= $data->user5;


$conn = get_db_connection();
// $sql = "UPDATE buildingmanager SET name= '$name', id= '$id', email='$email',  message= '$message', password= '$password' ,'dob= $dob'  ,date= '$date', salary='$salary', starttime='$starttime' ,endtime= '$endtime' WHERE id = '$id'";
$sql = "UPDATE visitor SET email='$email',name= '$name', contact='$contact' , dlnumber='$dlnumber', carplatenumber= '$carplatenumber'  WHERE email = '$email'";
if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    echo json_encode($response);
}

?>