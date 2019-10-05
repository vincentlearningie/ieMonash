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

function connectToDb(){
    try{
        return new PDO('mysql:host=127.0.0.1;dbname=mytodo', 'root','*');
    }  catch(PDOException $e) {
        die($e->getMessage());
    }
   }


   function fectchAllTasks($pdo){
    $statement = $pdo->prepare('select * from todos');

    $statement->execute();

    return $statement->fetchAll(PDO::FETCH_CLASS, 'Task');

}



?>