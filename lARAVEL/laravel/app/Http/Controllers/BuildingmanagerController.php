<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\Buildingmanager;


class BuildingmanagerController extends Controller
{
    public function getBuildingmanager(){
        return Buildingmanager::all();
    }
    public function addBuildingmanager(Request $req){
        $bm= new Buildingmanager;
        $bm->bm_name = $req->user1;
        $bm->bm_id = $req->user2;
        $bm->bm_email = $req->user3;
        $bm->bm_contact = $req->user11;
        $bm->bm_ssn = $req->user4;
        $bm->bm_password = $req->user5;
        $bm->bm_dob = $req->user6;
        $bm->bm_doj = $req->user7;
        $bm->bm_salary = $req->user8;
        $bm->bm_starttime = $req->user9;
        $bm->bm_endtime = $req->user10;
        $bm ->save();
        return $bm;
    }
    public function updateBuildingmanager(Request $req, $id){
        $bm=  Buildingmanager::find($id);
        $bm->bm_name = $req->user1;
        // $bm->bm_id = $req->user2;
        // $bm->bm_email = $req->user3;
        $bm->bm_contact = $req->user11;
        $bm->bm_ssn = $req->user4;
        $bm->bm_dob = $req->user6;
        $bm->bm_doj = $req->user7;
        $bm->bm_salary = $req->user8;
        $bm->bm_starttime = $req->user9;
        $bm->bm_endtime = $req->user10;
        $bm ->update();
        return $bm;
    }
    public function deleteBuildingmanager($id){
        $bm=  Buildingmanager::find($id);
        $bm ->delete();
        return 'Success';
    }
}
