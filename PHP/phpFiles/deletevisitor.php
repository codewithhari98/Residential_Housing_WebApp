<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include './function.php';

$data = json_decode((file_get_contents("php://input")));
$visitorEmail= $data->user1;

$conn = get_db_connection();
$sql = "DELETE FROM visitor where visitorEmail = '$visitorEmail'";


if($conn->query($sql) === true) {
    $response['message'] = 'delete visitor success';
    echo json_encode($response);
  } else {
      $response['message'] = 'delete visitor failed';
      echo json_encode($response);
  } 

?>