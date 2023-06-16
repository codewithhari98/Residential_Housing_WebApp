<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buildingmanager extends Model
{
    use HasFactory;
    protected $table ='buildingmanager';
    protected $primaryKey = 'bm_id';
    public $incrementing=false;
    // protected $fillable= [
    //     'bm_name', 'bm_id','bm_email', 'bm_contact','bm_ssn', 'bm_password','bm_dob','bm_doj', 'bm_salary', 'bm_starttime','bm_endtime'
    // ];
}
