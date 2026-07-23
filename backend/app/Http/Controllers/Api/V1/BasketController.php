<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Basket;
use Illuminate\Support\Facades\DB;

class BasketController extends Controller
{
    public function index()
    {
        $basket = Basket::where('user_id', auth()->user()->id)->with('products')->first();

        return response()->json([
            'basket' => $basket
        ]);
    }

    public function store(Product $product)
    {
        $basket = Basket::create([
            'user_id' => auth()->user()->id
        ]);

        $isExistProduct = $basket->products()->where('product_id', $product->id)->exists();

        if ($isExistProduct) {
            $basket->products()->updateExistingPivot($product->id, [
                'amount' => DB::raw('amount + 1')
            ]);
        }
        else {
            $basket->products()->attach($product->id, ['amount' => 1]);
        }

        return response()->json([
            'message' => 'Продукт успешно добавлен.'
        ], 201);
    }
}
