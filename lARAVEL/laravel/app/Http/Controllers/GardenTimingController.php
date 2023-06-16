<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GardenTiming;


class GardenTimingController extends Controller
{
    public function getGardenTiming(){
        return GardenTiming::all();
    }
    public function updateGardenTiming(Request $req, $email){
        $gm = GardenTiming::find($email);
        $gm -> starttime= $req->user2;
        $gm -> endtime = $req->user3;
        $gm ->update();
        return $gm;
    }
    // public function addBuildingmanager(Request $req){
    //     $bm= new Buildingmanager;
    //     $bm->bm_name = $req->user1;
    //     $bm->bm_id = $req->user2;
    //     $bm->bm_email = $req->user3;
    //     $bm->bm_contact = $req->user11;
    //     $bm->bm_ssn = $req->user4;
    //     $bm->bm_password = $req->user5;
    //     $bm->bm_dob = $req->user6;
    //     $bm->bm_doj = $req->user7;
    //     $bm->bm_salary = $req->user8;
    //     $bm->bm_starttime = $req->user9;
    //     $bm->bm_endtime = $req->user10;
    //     $bm ->save();
    //     return $bm;
    // }
    // public function updateBuildingmanager(Request $req, $id){
    //     $bm=  Buildingmanager::find($id);
    //     $bm->bm_name = $req->user1;
    //     // $bm->bm_id = $req->user2;
    //     // $bm->bm_email = $req->user3;
    //     $bm->bm_contact = $req->user11;
    //     $bm->bm_ssn = $req->user4;
    //     $bm->bm_dob = $req->user6;
    //     $bm->bm_doj = $req->user7;
    //     $bm->bm_salary = $req->user8;
    //     $bm->bm_starttime = $req->user9;
    //     $bm->bm_endtime = $req->user10;
    //     $bm ->update();
    //     return $bm;
    // }
    // public function deleteBuildingmanager($id){
    //     $bm=  Buildingmanager::find($id);
    //     $bm ->delete();
    //     return 'Success';
    // }
}
