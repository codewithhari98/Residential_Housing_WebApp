<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VisitorprofileSettings;


class visitorprofileController extends Controller
{
    public function getProfilevisitor($email){
        $bm=  VisitorprofileSettings::find($email);

        return $bm->get();
        ;
    }
    public function editProfilevisitor(Request $req, $email){
        $bm=  VisitorprofileSettings::find($email);
        $bm->name = $req->user1;
        $bm->dlnumber = $req->user2;
        $bm->carplatenumber= $req->user3;
        $bm->contact = $req->user4;

        $bm ->update();
        return $bm;
        ;
    }

}
