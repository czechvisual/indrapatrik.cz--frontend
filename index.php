<?php
    include 'utils.php';

    Site::loadData();
    $data = Site::$data;

    include 'partials/header.php';

    component("hero.personal", $data->hero);

    include 'partials/footer.php';
