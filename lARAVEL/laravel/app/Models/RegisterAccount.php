<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterAccount extends Model
{
    use HasFactory;
    protected $table ='visitor';
    protected $primaryKey = 'bm_email';
}
