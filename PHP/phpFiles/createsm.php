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
$contact = $data->user3;
$ssn= (int)$data->user4;
$dob = $data->user5;
$doj = $data->user6; 
$salary= (int)$data->user7;
$starttime= $data->user8;
$endtime=  $data->user9;
$email = $data->user10;
$password = $data->user11;

echo json_encode("Hiiiiiii");
echo json_encode($data->user5);
echo json_encode("contact is");
echo json_encode($data->user3);

$conn = get_db_connection();
//$contact = !empty($contact) ? "'$contact'":"NULL";
$sql = "INSERT INTO securitymanager( sm_id, sm_name,sm_email, sm_contact, sm_SSN,sm_password, sm_dob, sm_doj, sm_salary, sm_starttime, sm_endtime) VALUES('$id', '$name', '$email','$contact','$ssn', '$password','$dob' ,'$doj','$salary','$starttime' ,'$endtime')";

if($conn->query($sql) === true) {
  $response['message'] = 'create success';
  echo json_encode($response);
} else {
    $response['message'] = 'create failed';
    echo json_encode($response);
} 
$sql2 = "DELETE * FROM securitymanager where contact ='0'";
echo json_encode($sql2);
$response['message'] = 'done';
echo json_encode($response);
?> 