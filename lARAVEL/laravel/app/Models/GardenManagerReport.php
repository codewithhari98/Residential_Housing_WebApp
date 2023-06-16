<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuildingManagerReport extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table ='buildingmanager';
    protected $primaryKey = 'startdate';
}