<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReadPoolModel extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table ='payment';
    protected $primaryKey = 'subscription';
}