<?php 

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        return Inertia::render('Dashboard/Index');
    }

    public function profile()
    {
        return Inertia::render('Profile/Index');
    }

}