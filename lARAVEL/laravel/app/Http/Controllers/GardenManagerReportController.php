<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GardenManagerReport;


class GardenManagerReportController extends Controller
{
    public function getGardenManagerReport($startdate, $enddate){
        $gm = GardenManagerReport::whereBetween('gm_doj', [$startdate, $enddate]);
        return $gm -> get();
    }
}
