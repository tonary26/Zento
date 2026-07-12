<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'products' => $products
        ]);
    }

    public function store(ProductStoreRequest $request)
    {
        $data = $request->validated();
        Product::create($data);

        return response()->json([
            'message' => 'Продукт успешно создан.'
        ], 201);
    }

    public function show(Product $product)
    {
        return response()->json([
            'product' => $product
        ]);
    }

    public function update(ProductUpdateRequest $request, Product $product)
    {
        $data = $request->validated();
        $product->update($data);

        return response()->json([
            'product' => $product
        ]);
    }

    public function delete(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Товар удален.'
        ], 204);
    }
}
