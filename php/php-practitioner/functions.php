<?php
function dd($val){
        echo '<pre>';
        var_dump($val);
        echo '</pre>';
        
    }

function ageCheck($age){
    if ($age < 21){
        echo 'Not allow';
    }else{
        echo 'Good';
    }
}



?>