<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ProductController;

Route::get('/', [ProductController::class, 'index'])->name('index');
Route::post('/', [ProductController::class, 'store'])->name('stores')->middleware(['auth:sanctum', 'is_admin']);
Route::get('/{product}', [ProductController::class, 'show'])->name('show');
Route::delete('/{product}', [ProductController::class, 'delete'])->name('delete')->middleware(['auth:sanctum', 'is_admin']);
