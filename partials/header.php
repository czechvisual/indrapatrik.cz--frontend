<!DOCTYPE html>
<html lang="cs-CZ">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>
        <?=$data->meta->title?>
    </title>

    <link rel='stylesheet/less' href='assets/css/config.less'>

    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <script src="https://cdn.jsdelivr.net/npm/less@4"></script>
    <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
</head>

<body id="body">
    <?php component("header.default", $data->header); ?>
