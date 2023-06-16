<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './function.php';

$data = json_decode((file_get_contents("php://input")));
// $email = $data->user1;
$conn = get_db_connection();
// $sql = "SELECT name,id, contact FROM buildingmanager WHERE email= '$email'";
$sql = "SELECT * FROM gardentiming";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

// if($conn->query($sql) === true) {
//     $response['message'] = 'success';
//     echo json_encode($response);
// } else {
//     $response['message'] = 'failed';
//     echo json_encode($response);
// }
?>