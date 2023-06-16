<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\Residentpayment;


class ResidentpaymentController extends Controller
{
   
    
    public function addpaymentresident(Request $req){
        $rc=  new Residentpayment;
        $rc->amount = $req->user1;
        $rc->name = $req->user2;
        $rc->email = $req->user7;
        $rc->card = $req->user3;
        $rc->expiry = $req->user4;
        $rc->cvv = $req->user5;
        $rc->subscription = $req->user6;
       
    
        $rc ->save();
        return $rc;
    }
   
}
