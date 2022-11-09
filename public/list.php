<?php

    // make sure its interpreted as a json
    header('Content-type: text/json');
    // warning: this will dump every file in the directory, it wont
    // care if its a jpg or an exe

    // replace for actual directory you want to list
    $dir = './Content';
    
    // query the directory
    $entries = scandir($dir);

    // encode it into json format
    $asJson = json_encode($entries);

    // write as the result
    echo $asJson;
?>