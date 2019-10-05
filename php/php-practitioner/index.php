<?php 
   require 'functions.php';
   require 'Task.php';



// args (type of database:, host='127.0.0.1;dbname={database-name}', 'database username', 'database password';)

$pdo = connectToDb();


$tasks = fectchAllTasks($pdo);



require 'index.view.php';



















    // class Task{
    //     public $description;
    //     public $completed = false;
    //     public function __construct($description){
    //         $this->description = $description;
    //     }
    //     public function isComplete(){
    //         return $this->completed;
    //     }

    //     public function complete(){
    //         $this->completed = true;
    //     }
    // }


    // $tasks = [
    //     new Task('Go to the store'),
    //     new Task('Finish my screencast'),
    //     new Task('Clean my room')
    // ];
    // $tasks[0]->complete();
    
?>