<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include 'function.php';
// function debug_to_console($data) {
//     $output = $data;
//     if (is_array($output))
//         $output = implode(',', $output);

//     echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
// }
// debug_to_console("Tes1");


$data = json_decode((file_get_contents("php://input")));

$name = $data->user1;
$email= $data->user2;
$contact= $data->user3;
$ssn= $data->user4;
$password= $data->user5;
$dob= $data->user6;
$movein= $data->user7;
$moveout= $data->user8;
$type= $data->user9;


$conn = get_db_connection();
$sql = "INSERT INTO sxg5271.resident( name, email,contact,residenttype, ssn, password , dob,movein, moveout) values ('$name', 
'$email','$contact','$type','$ssn','$password','$dob','$movein','$moveout')";
// debug_to_console($sql);


if($conn->query($sql) === true) {
    $response['message'] = 'success';
    // debug_to_console($response['message']);

    echo json_encode($response);
} else {
    $response['message'] = 'failed';
    // debug_to_console($response['message']);

    echo json_encode($response);

}

?>



