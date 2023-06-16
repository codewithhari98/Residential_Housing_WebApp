<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SecurityManagerReport;


class SecurityManagerReportController extends Controller
{
    public function getSecurityManagerReport($startdate, $enddate){
        $sm = SecurityManagerReport::whereBetween('sm_doj', [$startdate, $enddate]);
        return $sm -> get();
    }
}
