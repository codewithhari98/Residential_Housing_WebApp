<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoginModel;


class LoginController extends Controller
{
    public function postLogin(Request $req){
        $login = new LoginModel;
        $login -> email = $req->user1;
        $login -> psw = $req->user2;
        $login ->save();
        return $login;
    }
}
