<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BuildingmanagerController;
use App\Http\Controllers\BuildingmanagerReportController;
use App\Http\Controllers\ManagerProfileController;
use App\Http\Controllers\registerController;

use App\Http\Controllers\visitorController;
use App\Http\Controllers\SecuritymanagerController;
use App\Http\Controllers\residentController;
use App\Http\Controllers\ResidentdashboardController;
use App\Http\Controllers\ResidentpaymentController;
use App\Http\Controllers\ResidentProfileController;

use App\Http\Controllers\PoolTimingController;
use App\Http\Controllers\GardenTimingController;
use App\Http\Controllers\SecurityManagerReportController;
use App\Http\Controllers\GardenManagerReportController;
use App\Http\Controllers\ResidentReportController;
use App\Http\Controllers\VisitorReportController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DeleteLoginDetailsController;
use App\Http\Controllers\visitorprofileController;
use App\Http\Controllers\ReadPool;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/getbuildingmanagerroute',[BuildingmanagerController::class, 'getBuildingmanager']);
Route::post('/addbuildingmanagerroute',[BuildingmanagerController::class, 'addBuildingmanager']);
Route::get('/deletebuildingmanagerroute/{id}',[BuildingmanagerController::class, 'deleteBuildingmanager']);
Route::put('/updatebuildingmanagerroute/{id}',[BuildingmanagerController::class, 'updateBuildingmanager']);
Route::get('/bmreprot/{doj}/{doe}',[BuildingmanagerReportController::class, 'getBmReport']);
Route::get('/getProfile/{email}',[ManagerProfileController::class, 'getProfile']);
Route::put('/editprofilesettingsmanager/{email}',[ManagerProfileController::class, 'editProfile']);
Route::post('/registerProfile',[registerController::class, 'registeraccount']);


Route::get('/getPoolTimingRoute',[PoolTimingController::class, 'getPoolTiming']);
Route::put('/updatePoolTimingRoute/{email}',[PoolTimingController::class, 'updatePoolTiming']);
Route::get('/getGardenTimingRoute',[GardenTimingController::class, 'getGardenTiming']);
Route::put('/updateGardenTimingRoute/{email}',[GardenTimingController::class, 'updateGardenTiming']);
Route::get('/getBuildingManagerReportRoute/{startdate}/{enddate}',[BuildingManagerReportController::class, 'getBuildingManagerReport']);
Route::get('/getSecurityManagerReportRoute/{startdate}/{enddate}',[SecurityManagerReportController::class, 'getSecurityManagerReport']);
Route::get('/getGardenManagerReportRoute/{startdate}/{enddate}',[GardenManagerReportController::class, 'getGardenManagerReport']);
Route::get('/getResidentReportRoute/{startdate}/{enddate}',[ResidentReportController::class, 'getResidentReport']);
Route::get('/getVisitorReportRoute/{startdate}/{enddate}',[VisitorReportController::class, 'getVisitorReport']);
Route::post('/loginRoute/{email}/{password}',[LoginController::class, 'postLogin']);
Route::get('/deleteLoginDetailsRoute/{email}',[DeleteLoginDetailsController::class, 'getDeleteLoginDetails']);


Route::get('/getsecuritymanagerroute',[SecuritymanagerController::class, 'getsecuritymanager']);
Route::post('/addsecuritymanagerroute',[SecuritymanagerController::class, 'addsecuritymanager']);
Route::get('/deletesecuritymanagerroute/{id}',[SecuritymanagerController::class, 'deletesecuritymanager']);
Route::put('/updatesecuritymanagerroute/{id}',[SecuritymanagerController::class, 'updatesecuritymanager']);

Route::get('/getresidentroute',[residentController::class, 'getresident']);
Route::post('/addresidentroute',[residentController::class, 'addresident']);
Route::get('/deleteresidentroute/{id}',[residentController::class, 'deleteresident']);
Route::put('/updateresidentroute/{id}',[residentController::class, 'updateresident']);

Route::get('/getvisitorroute',[visitorController::class, 'getvisitor']);
Route::post('/addvisitorroute',[visitorController::class, 'addvisitor']);
Route::get('/deletevisitorroute/{id}',[visitorController::class, 'deletevisitor']);
Route::put('/updatevisitorroute/{id}',[visitorController::class, 'updatevisitor']);

Route::get('/getProfileresident/{email}',[ResidentProfileController::class, 'getProfileresident']);
Route::put('/editProfileresident/{email}',[ResidentProfileController::class, 'editProfileresident']);
Route::get('/deletesubscription/{email}',[ResidentProfileController::class, 'deletesubscription']);

Route::get('/getProfilevisitor/{email}',[visitorprofileController::class, 'getProfilevisitor']);
Route::put('/editProfilevisitor/{email}',[visitorprofileController::class, 'editProfilevisitor']);


Route::get('/getResidentregistervehicle',[ResidentdashboardController::class, 'getResidentregistervehicle']);
Route::post('/addResidentRegistervehicle',[ResidentdashboardController::class, 'addResidentRegistervehicle']);
Route::post('/addpaymentresident',[ResidentpaymentController::class, 'addpaymentresident']);

Route::get('/getvehiclelist',[ResidentdashboardController::class, 'getvehiclelist']);
Route::get('/deletevehicle/{dlplatenumber}',[ResidentdashboardController::class, 'deletevehicle']);
Route::put('/updateResidentRegistervehicle/{dlplatenumber}',[ResidentdashboardController::class, 'updateResidentRegistervehicle']);

Route::get('/getpooldetails',[ReadPool::class, 'getpoollist']);
// Route::post('/addbuildingmanagerroute','BuildingmanagerController@addBuildingmanager');