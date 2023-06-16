<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\ReadPoolModel;


class ReadPool extends Controller
{
    public function getpoollist(){
        $vehicle= ReadPoolModel::where('subscription','=','pool');
        return $vehicle->get();
    }
}