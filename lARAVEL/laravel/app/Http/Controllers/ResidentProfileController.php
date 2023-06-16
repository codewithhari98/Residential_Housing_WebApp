<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ResidentprofileSettings;
use App\Models\Residentpayment;
class ResidentProfileController extends Controller
{
    public function getProfileresident($email){
        $bm=  ResidentprofileSettings::find($email);

        return $bm->get();
        ;
    }
    public function editProfileresident(Request $req, $email){
        $bm=  ResidentprofileSettings::find($email);
        $bm->name = $req->user1;
       
        $bm->contact = $req->user3;

        $bm ->update();
        return $bm;
        ;
    }

    public function deletesubscription($email){
        $bm=  Residentpayment::find($email);
        $bm ->delete();
        return 'Success';
    }
}
