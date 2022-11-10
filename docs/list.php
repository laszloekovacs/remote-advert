<?php

    // make sure its interpreted as a json
    header('Content-type: text/json');
    // warning: this will dump every file in the directory, it wont
    // care if its a jpg or an exe

    // replace for actual directory you want to list
    $dir = './content';
    
    // query the directory
    $entries = scandir($dir);

    //remove . and .. from the list
    if(($i = array_search(".", $entries)) !== false) {
        unset(($entries[$i]))
    }

    if(($k = array_search("..", $entries)) !== false) {
        unset(($entries[$k]))
    }

    // encode it into json format
    $asJson = json_encode($entries);

    // write as the result
    echo $asJson;
?>