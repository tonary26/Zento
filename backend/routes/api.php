<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/v1')->middleware('throttle:api')->group(function () {
    Route::prefix('/products')->name('products.')->group(function () {
        require __DIR__ . '/api/product.php';
    });

    Route::prefix('/telegram-auth')->name('telegram-auth.')->group(function () {
        require __DIR__ . '/api/telegramAuth.php';
    });
});
