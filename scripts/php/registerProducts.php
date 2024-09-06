<?php
    include("connection.php");

    $data = json_decode(file_get_contents('php://input'), true);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = mysqli_real_escape_string($connection, $data['name']);
        $price = mysqli_real_escape_string($connection, $data['price']);

        $sql = "INSERT INTO produtos (name, price) VALUES ('$name', '$price')";
        $response = array();
        if (mysqli_query($connection, $sql)) {
            $response['status'] = 'success';
            $response['message'] = 'Produto cadastrado com sucesso!';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Erro: ' . mysqli_error($connection);
        }

        header('Content-Type: application/json');
        echo json_encode($response);

        mysqli_close($connection);
    }
?>