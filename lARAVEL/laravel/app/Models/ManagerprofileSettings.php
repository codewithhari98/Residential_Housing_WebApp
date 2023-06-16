<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagerprofileSettings extends Model
{
    use HasFactory;
    protected $table ='buildingmanager';
    protected $primaryKey = 'bm_email';
}
