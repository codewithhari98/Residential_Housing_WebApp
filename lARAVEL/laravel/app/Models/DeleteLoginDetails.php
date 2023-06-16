<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeleteLoginDetails extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table ='logindetails';
    protected $primaryKey = 'email';
}