<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentReport extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table ='resident';
    protected $primaryKey = 'startdate';
}