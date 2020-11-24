<?php 

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
        //$this->middleware(['guest']);
    }

    public function index()
    {
        return Inertia::render('Home/Index');
    }
}