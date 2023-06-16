<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ManagerprofileSettings;
class ManagerProfileController extends Controller
{
    public function getProfile($email){
        $bm=  ManagerprofileSettings::find($email);

        return $bm->get();
        ;
    }
    public function editProfile(Request $req, $email){
        $bm=  ManagerprofileSettings::find($email);
        $bm->bm_name = $req->user1;
        $bm->bm_id = $req->user2;
        $bm->bm_contact = $req->user11;

        $bm ->update();
        return $bm;
        ;
    }
}
