<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\resident;


class residentController extends Controller
{
    public function getresident(){
        return resident::all();
    }
    public function addresident(Request $req){
        $resident= new resident;
        $resident->name = $req->user1;
        $resident->email = $req->user2;        
        $resident->contact = $req->user3;
        $resident->ssn = $req->user4;
        $resident->password = $req->user5;
        $resident->dob = $req->user6;
        $resident->movein = $req->user7;
        $resident->moveout = $req->user8;
        $resident->residenttype = $req->user9;        
        $resident ->save();
        return $resident;
    }
    public function updateresident(Request $req, $email){
        $resident=  resident::find($email);
        $resident->name = $req->user1;
        $resident->email = $req->user2;        
        $resident->contact = $req->user3;
        $resident->ssn = $req->user4;
        $resident->password = $req->user5;
        $resident->dob = $req->user6;
        $resident->movein = $req->user7;
        $resident->moveout = $req->user8;
        $resident->residenttype = $req->user9;   
        $resident ->update();
        return $resident;
    }
    public function deleteresident($email){
        $resident=  resident::find($email);
        $resident ->delete();
        return 'Success';
    }
}
