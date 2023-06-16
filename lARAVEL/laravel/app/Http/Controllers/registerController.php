<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RegisterAccount;

class registerController extends Controller
{
    public function registeraccount(Request $req){
        $bm= new RegisterAccount;
        $bm->email = $req->user1;
        $bm->password = $req->user2;
        $bm ->save();
        return $bm;
    }
}
