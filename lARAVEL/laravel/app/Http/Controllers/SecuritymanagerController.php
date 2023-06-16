<?php

namespace App\Http\Controllers;
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST, GET");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
use Illuminate\Http\Request;
use App\Models\Securitymanager;


class SecuritymanagerController extends Controller
{
    public function getsecuritymanager(){
        return securitymanager::all();
    }
    public function addsecuritymanager(Request $req){
        $sm= new securitymanager;
        $sm->sm_id = $req->user1;
        $sm->sm_name = $req->user2;        
        $sm->sm_contact = $req->user3;
        $sm->sm_ssn = $req->user4;        
        $sm->sm_dob = $req->user5;
        $sm->sm_doj = $req->user6;
        $sm->sm_salary = $req->user7;
        $sm->sm_starttime = $req->user8;
        $sm->sm_endtime = $req->user9;
        $sm->sm_email = $req->user10;
        $sm->sm_password = $req->user11;
        $sm ->save();
        return $sm;
    }
    public function updatesecuritymanager(Request $req, $id){
        $sm=  securitymanager::find($id);
        $sm->sm_id = $req->user1;
        $sm->sm_name = $req->user2;        
        $sm->sm_contact = $req->user3;
        $sm->sm_ssn = $req->user4;        
        $sm->sm_dob = $req->user5;
        $sm->sm_doj = $req->user6;
        $sm->sm_salary = $req->user7;
        $sm->sm_starttime = $req->user8;
        $sm->sm_endtime = $req->user9;
        $sm->sm_email = $req->user10;
        $sm->sm_password = $req->user11;
        $sm ->update();
        return $sm;
    }
    public function deletesecuritymanager($id){
        $sm=  securitymanager::find($id);
        $sm ->delete();
        return 'Success';
    }
}
