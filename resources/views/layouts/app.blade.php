<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        
        <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign" defer></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.startsWith" defer></script>

        <script src="{{ asset('js/app.js') }}" defer></script>
        @routes
    </head>
    <body class="font-sans antialiased" >
        <div class="min-h-screen bg-gray-100">
            @inertia
        </div>
    </body>
</html>