<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Residentpayment extends Model
{
    use HasFactory;
    protected $table ='payment';
    protected $primaryKey = 'email';
    public $timestamps = false;
}
