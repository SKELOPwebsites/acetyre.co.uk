<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TyresController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Main/Index');
});
Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

Route::get('/mobile-tyre-fitting', function () {
    return Inertia::render('Main/MobileTyreFitting');
});
Route::get('/tyre/{size}', [TyresController::class, 'index']);

Route::post('/tyre/filter', [TyresController::class, 'filter']);

Route::post('/choose-tyre-size', [TyresController::class, 'searchCarReg']);
Route::get('/choose-tyre-size', [TyresController::class, 'chooseTyreSize']);

Route::get('/sesh', function () {
    //session()->forget('tyre_filters');
    dd(session()->all());
});

Route::get('/cart', [CartController::class, 'index']);
Route::post('/cart/remove-details', [CartController::class, 'removeDetails']);
Route::post('/cart/add', [CartController::class, 'store']);
Route::post('/cart/quantity', [CartController::class, 'changeQuantity']);
Route::post('/cart/remove', [CartController::class, 'removeCart']);

// checkout routes
Route::get('/checkout', [CheckoutController::class, 'index']);
Route::post('/checkout', [CheckoutController::class, 'toPayment']);

Route::get('/checkout/timeslots', [CheckoutController::class, 'fittingTimeslots']);
Route::post('/checkout/timeslots/select', [CheckoutController::class, 'selectTimeslot']);

Route::post('/checkout/remove-details', [CheckoutController::class, 'removeDetails']);

Route::post('/checkout/purchase', [PaymentController::class, 'purchase']);

Route::get('/order-summary/{order_id}', [PaymentController::class, 'summary'])->name('order-summary');

Route::get('/invoice', [PaymentController::class, 'invoice']);

require __DIR__.'/admin.php';
