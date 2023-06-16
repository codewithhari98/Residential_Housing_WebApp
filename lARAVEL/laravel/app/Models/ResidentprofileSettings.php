<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentprofileSettings extends Model
{
    use HasFactory;
    protected $table ='resident';
    protected $primaryKey = 'email';
    public $timestamps = false;
}
