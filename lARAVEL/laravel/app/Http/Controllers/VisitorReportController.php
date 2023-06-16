<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VisitorReport;


class VisitorReportController extends Controller
{
    public function getVisitorReport($startdate, $enddate){
        $vr = VisitorReport::whereBetween('visitdate', [$startdate, $enddate]);
        return $vr -> get();
    }
}
