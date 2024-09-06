<?php
    $server="localhost";
    $user="user";
    $password="password";
    $dbname="db_name";

    $connection=mysqli_connect($server, $user,$password, $dbname);

    if (!$connection){
        diw("Erro de conexão com o banco de dados".mysqli_connect_errno());
    }
?>