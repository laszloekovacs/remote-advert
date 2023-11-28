<?php
    // warning: this will dump every file in the directory, it wont
    // care if its a jpg or an exe

    // replace for actual directory you want to list
    $dir = '.';
    
    // query the directory
    $entries = scandir($dir);

    // begin JSON array
    print('{ "content": [');

    // print out every file, skip directories
    foreach ($entries as $key => $val) {
        // skip directories
        if(!is_dir($val)) {
            // if its the last element, dont append a "," at the end
            if($key == count($entries) -1) {
                print('"');
                print("$val");
                print('"');
            } else {
                print('"');
                print("$val");
                print('",');
            }
        }
    }
    // close JSON array
    print("]}");
?>