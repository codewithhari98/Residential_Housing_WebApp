<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';
function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}
debug_to_console("Tes1");


$data = json_decode((file_get_contents("php://input")));

$amount = $data->user1;
$name= $data->user2;
$card= $data->user3;
$expiry= $data->user4;
$cvv= $data->user5;
$subscription= $data->user6;
$email = $data->user7;




$conn = get_db_connection();
$sql = "INSERT INTO payment( amount, name,card, expiry, cvv, subscription, email) values ('$amount', 
'$name','$card','$expiry','$cvv', '$subscription','$email')";
debug_to_console($sql);


if($conn->query($sql) === true) {
    $response['message'] = 'success';
    debug_to_console($response['message']);

    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    debug_to_console($response['message']);

    echo json_encode($response);

}

?>



