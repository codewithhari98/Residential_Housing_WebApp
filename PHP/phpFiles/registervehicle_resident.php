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

$email = $data->user1;
$vehiclemodel= $data->user2;
$vehicleyear= $data->user3;
$vehiclecolor= $data->user4;
$dlplatenumber= $data->user5;

$conn = get_db_connection();
$sql = "INSERT INTO residentregistervehicle( email,vehiclemodel, vehicleyear, vehiclecolor ,dlplatenumber) values ('$email', 
'$vehiclemodel','$vehicleyear','$vehiclecolor','$dlplatenumber')";
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



