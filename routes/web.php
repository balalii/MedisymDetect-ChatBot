<?php

use App\Http\Controllers\ChatsController;
use App\Http\Controllers\DevController;
use App\Http\Controllers\DiagnoseController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Biobii\NaiveBayes;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/hallo', [DiagnoseController::class, 'show']);


// Route::get('/chat', function () {
//     return Inertia::render('Chat');
// });

// landing page
Route::get('/',  LandingPageController::class);

// Developers page
Route::get('/dev',  DevController::class);

// === Chats
Route::get('/chats',  [ChatsController::class, 'index'])->name('chats');
Route::post('/add-chats', [ChatsController::class, 'store']); //add data
Route::post('/delete-chats', [ChatsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.chats');
// === Chats end

// === Dashboard
Route::get('/dashboard',  [DiagnoseController::class, 'show'])->middleware(['auth', 'verified'])->name('dashboard');

// form Crud
Route::post('/diagnoses', [DiagnoseController::class, 'store']); //add data
Route::post('/diagnoses/update', [DiagnoseController::class, 'update'])->middleware(['auth', 'verified'])->name('update.diagnoses');
Route::post('/diagnoses/delete', [DiagnoseController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.diagnoses');
// === Dashboard end


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
}); 

require __DIR__.'/auth.php';