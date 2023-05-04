<?php
    class Site {

        public static $data;

        public static function loadData(){
            $data = json_decode(file_get_contents("data/data.json"));
            //var_dump(self::siteRootPath()."data.json");
            self::$data = $data;
        }

        public static function rootComponentPath(){
            return __DIR__."/components/";
        }
    }

    function component($name,$componentData = false){

        $names = explode(".",$name);
        $componentPath = Site::rootComponentPath().$names[0]."/";

        componentRender($name,$componentPath,$componentData);
    }

    function componentRender($name,$componentPath,$componentData){

        if(!$componentData){
            $dataFile =  $componentPath."/default.json";
            $data = json_decode(file_get_contents($dataFile));
        }
        else{
            global $data;
            extract(get_object_vars($componentData));
        }
        $path = $componentPath."/".$name.".php";

        include $path;
    }
