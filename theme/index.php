<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WordPress Headless Template</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="<?php echo get_template_directory_uri(); ?>/assets/css/main.css"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/index.js"></script>
  </body>
</html>
