<?php

use App\Core\Hooks;
use App\Core\Router;

// 1. Hook into Router to add a custom page
Hooks::addAction('router_init', function(Router $router) {
    $router->get('/plugin-test', function() {
        echo "<h1>Hello from Example Plugin!</h1>";
        echo "<p>This page is registered via <code>router_init</code> hook.</p>";
        echo "<a href='/'>Back to Home</a>";
    });
});

// 2. Hook into Head to add custom CSS
Hooks::addAction('mivo_head', function() {
    echo "<!-- Example Plugin CSS -->";
    echo "<style>body { border-top: 5px solid #10b981; }</style>";
});

// 3. Hook into Footer to add custom JS or Text
Hooks::addAction('mivo_footer', function() {
    echo "<!-- Example Plugin Footer -->";
    echo "<div style='text-align:center; padding: 10px; background: #f0fdf4; color: #166534; font-weight: bold;'>
            Plugin System is Working! 🚀
          </div>";
});
