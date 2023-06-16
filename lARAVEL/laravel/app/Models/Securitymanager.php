<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Securitymanager extends Model
{
    use HasFactory;
    protected $table ='securitymanager';
    protected $primaryKey = 'sm_id';
    public $timestamps = false;
}
