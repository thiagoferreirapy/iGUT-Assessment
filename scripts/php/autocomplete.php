<?php
    include("connection.php");

    if (isset($_GET['query'])) {
        $searchTerm = mysqli_real_escape_string($connection, $_GET['query']);

        $sql = "SELECT id, name, price FROM produtos WHERE name LIKE '%$searchTerm%'";
        $result = mysqli_query($connection, $sql);
        $products = [];

        while ($row = mysqli_fetch_assoc($result)) {
            $products[] = $row;
        }
        echo json_encode($products);
    }

    mysqli_close($connection);
?>