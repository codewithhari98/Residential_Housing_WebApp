<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ResidentReport;


class ResidentReportController extends Controller
{
    public function getResidentReport($startdate, $enddate){
        $rm = ResidentReport::whereBetween('movein', [$startdate, $enddate]);
        return $rm -> get();
    }
}
