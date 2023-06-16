<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\visitor;

class visitorController extends Controller
{
    public function getvisitor(){
        return visitor::all();
    }
    public function addvisitor(Request $req){
        $visitor= new visitor;
        $visitor->email = $req->user1;
        $visitor->name = $req->user2;        
        $visitor->contact = $req->user3;
        $visitor->dlnumber = $req->user4;
        $visitor->carplatenumber = $req->user5;
        // $visitor->password = $req->user6;
        //$visitor->visitdate = $req->user7;
        //$visitor->updated_at = $req->user8;
        //$visitor->created_at = $req->user9;        
        $visitor ->save();
        return $visitor;
    }
    public function updatevisitor(Request $req, $email){
        $visitor=  visitor::find($email);
        $visitor->email = $req->user1;
        $visitor->name = $req->user2;        
        $visitor->contact = $req->user3;
        $visitor->dlnumber = $req->user4;
        $visitor->carplatenumber = $req->user5;
        // $visitor->password = $req->user6;
        //$visitor->visitdate = $req->user7;
        //$visitor->updated_at = $req->user8;
        //$visitor->created_at = $req->user9;    
        $visitor ->update();
        return $visitor;
    }
    public function deletevisitor($email){
        $visitor=  visitor::find($email);
        $visitor ->delete();
        return 'Success';
    }
}
