<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'addbuildingmanagerroute',
        'updatebuildingmanagerroute/*',
        'editprofilesettingsmanager/*',
        'registerProfile',        
        'getPoolTimingRoute',
        'updatePoolTimingRoute/*',
        'getGardenTimingRoute',
        'updateGardenTimingRoute/*',
        'getBuildingManagerReportRoute/*',
        'getSecurityManagerReportRoute/*',
        'getGardenManagerReportRoute/*',
        'getResidentReportRoute/*',
        'getVisitorReportRoute/*',
        'loginRoute/*',
        'deleteLoginDetailsRoute/*',
        'addsecuritymanagerroute',
        'updatesecuritymanagerroute/*',
        'addresidentroute',
        'updateresidentroute/*',
        'addvisitorroute',
        'updatevisitorroute/*',
        'addresident',
        'updateresidentroute/*',
        'editProfileresident/*',
        'addpaymentresident',
        'addResidentRegistervehicle',
        'deletesubscription',
        'editProfilevisitor/*',
        'updateResidentRegistervehicle/*'

    ];
}
