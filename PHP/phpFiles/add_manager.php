<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';

$data = json_decode((file_get_contents("php://input")));
$name = $data->user1;
$id= $data->user2;
$email= $data->user3;
$ssn= $data->user4;
$password= $data->user5;
$dob = $data->user6;
$date= $data->user7;
$salary= $data->user8;
$starttime= $data->user9 ;
$endtime= $data->user10;
$contact=$data->user11;

$conn = get_db_connection();
$sql = "INSERT INTO buildingmanager( bm_id, bm_name, bm_email,bm_contact,  bm_ssn, bm_password, bm_dob ,bm_doj, bm_salary, bm_starttime ,bm_endtime ) values ('$id','$name', 
'$email','$contact','$ssn','$password','$dob' ,'$date','$salary','$starttime' ,'$endtime')";

if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    echo json_encode($response);
}

?>