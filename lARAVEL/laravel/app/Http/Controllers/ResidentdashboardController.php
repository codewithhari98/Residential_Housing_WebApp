<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\Residentdashboard;


class ResidentdashboardController extends Controller
{
    public function getvehiclelist(){
        $vehicle= Residentdashboard::where('email','=','ash@resident.com');
        return $vehicle->get();
    }
    public function addResidentRegistervehicle(Request $req){
        $rc= new Residentdashboard;
        $rc->email = $req->user1;
        $rc->vehiclemodel = $req->user2;
        $rc->vehicleyear = $req->user3;
        $rc->vehiclecolor = $req->user4;
        $rc->dlplatenumber = $req->user5;
        $rc ->save();
        return $rc;
    }
    public function updateResidentRegistervehicle(Request $req, $dlplatenumber){
        $rc= Residentdashboard::find($dlplatenumber);
        $rc->email = $req->user1;
        $rc->vehiclemodel = $req->user2;
        $rc->vehicleyear = $req->user3;
        $rc->vehiclecolor = $req->user4;
        $rc ->save();
        return $rc;
    }

    public function deletevehicle($dlplatenumber){
        $bm=  Residentdashboard::find($dlplatenumber);
        $bm ->delete();
        return 'Success';
    }
   
}
