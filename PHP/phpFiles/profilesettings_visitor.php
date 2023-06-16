<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './function.php';

$data = json_decode((file_get_contents("php://input")));
$name = $data->user1;
$email = $data->user3;

$contact=$data->user11;

$conn = get_db_connection();
$sql = "UPDATE visitor SET bm_name= '$name', bm_contact='$contact' WHERE bm_email = '$email'";
if($conn->query($sql) === true) {
    $response['message'] = 'success';
    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    echo json_encode($response);
}

?>