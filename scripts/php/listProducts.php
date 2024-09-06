<?php
    include("connection.php");

    $sql = "SELECT * FROM produtos ORDER BY id ASC";
    $resultado = mysqli_query($connection, $sql);

    if (!$resultado) {
        $response = array("error" => mysqli_error($connection));
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }

    $produtos = array();
    while ($linha = mysqli_fetch_assoc($resultado)) {
        $produtos[] = array(
            'id' => (string)$linha['id'],
            'name' => $linha['name'],
            'price' => (string)number_format($linha['price'], 2, ',', '.')
        );
    }

    header('Content-Type: application/json');
    echo json_encode($produtos);

    mysqli_close($connection);
?>