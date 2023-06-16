<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeleteLoginDetails;


class DeleteLoginDetailsController extends Controller
{
    public function getDeleteLoginDetails($email) {
        $delete = DeleteLoginDetails::find($email);
        $delete -> delete();
        return 'Success';
    }
}
