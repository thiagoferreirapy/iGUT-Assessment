<?php
    include("connection.php");

    if (isset($_GET['query'])) {
        $query = $_GET['query'];
        $query = mysqli_real_escape_string($connection, $query);

        $sql = "SELECT name FROM produtos WHERE name LIKE '%$query%' LIMIT 10";
        $result = mysqli_query($connection, $sql);

        $suggestions = [];
        if ($result) {
            while ($row = mysqli_fetch_assoc($result)) {
                $suggestions[] = $row;
            }
        }

        header('Content-Type: application/json');
        echo json_encode($suggestions);
    }
    mysqli_close($connection);
?>