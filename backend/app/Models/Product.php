<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['image', 'name', 'description', 'price'];

    public function baskets()
    {
        return $this->belongsToMany(Basket::class, 'basket_product')
            ->withPivot('amount')
            ->withTimestamps();
    }
}
