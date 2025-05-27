<?php
include 'conexion.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $result = $conn->query("SELECT * FROM boletos");
    $boletos = [];
    while ($row = $result->fetch_assoc()) {
      $boletos[] = $row;
    }
    echo json_encode($boletos);
    break;

  case 'POST':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("INSERT INTO boletos (id, idCliente, idHorario, cantidad, precioTotal) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssii", $input['id'], $input['idCliente'], $input['idHorario'], $input['cantidad'], $input['precioTotal']);
    $stmt->execute();
    echo json_encode(["status" => "agregado"]);
    break;

  case 'PUT':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("UPDATE boletos SET idCliente=?, idHorario=?, cantidad=?, precioTotal=? WHERE id=?");
    $stmt->bind_param("ssiis", $input['idCliente'], $input['idHorario'], $input['cantidad'], $input['precioTotal'], $input['id']);
    $stmt->execute();
    echo json_encode(["status" => "actualizado"]);
    break;

  case 'DELETE':
    parse_str(file_get_contents("php://input"), $input);
    $stmt = $conn->prepare("DELETE FROM boletos WHERE id=?");
    $stmt->bind_param("s", $input['id']);
    $stmt->execute();
    echo json_encode(["status" => "eliminado"]);
    break;

  default:
    http_response_code(405);
    echo json_encode(["status" => "método no permitido"]);
    break;
}
?>
