<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BuildingmanagerReport;

class BuildingmanagerReportController extends Controller
{
    public function getBmReport($doj, $doe){
        $bm=  BuildingmanagerReport::whereBetween('bm_doj', [$doj,$doe ]);

        return $bm->get();
        ;
    }
}
