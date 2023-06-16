<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitorReport extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table ='visitor';
    protected $primaryKey = 'startdate';
}