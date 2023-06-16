<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Residentdashboard extends Model
{
    use HasFactory;
    protected $table ='residentregistervehicle';
    protected $primaryKey = 'dlplatenumber';
    public $incrementing=false;    // protected $fillable= [
    //     'bm_name', 'bm_id','bm_email', 'bm_contact','bm_ssn', 'bm_password','bm_dob','bm_doj', 'bm_salary', 'bm_starttime','bm_endtime'
    // ];
}
