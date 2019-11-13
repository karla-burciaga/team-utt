<?php

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

Route::get('/', function () {
    return view('landing');
});
Route::get('/Famili-Swicht', function (){
    return view('familiSwitch');
});/*

<<<<<<< HEAD
Route::get('/javier', function () {
    return view('VistaJavier');
});

Route::get('/pepe', function () {
    return view('jlmr');
=======
Route::get('/', function () {
    return view('landing');
>>>>>>> 1f01c3a75c1d32d0f9f9a84ff4ee58b879ffdb4e
});*/