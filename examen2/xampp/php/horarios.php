<?php
include 'conexion.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $result = $conn->query("SELECT * FROM horarios");
    $horarios = [];
    while ($row = $result->fetch_assoc()) {
      $horarios[] = $row;
    }
    echo json_encode($horarios);
    break;

  case 'POST':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("INSERT INTO horarios (id, fecha, hora, sala, pelicula) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $input['id'], $input['fecha'], $input['hora'], $input['sala'], $input['pelicula']);
    $stmt->execute();
    echo json_encode(["status" => "agregado"]);
    break;

  case 'PUT':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("UPDATE horarios SET fecha=?, hora=?, sala=?, pelicula=? WHERE id=?");
    $stmt->bind_param("sssss", $input['fecha'], $input['hora'], $input['sala'], $input['pelicula'], $input['id']);
    $stmt->execute();
    echo json_encode(["status" => "actualizado"]);
    break;

  case 'DELETE':
    parse_str(file_get_contents("php://input"), $input);
    $stmt = $conn->prepare("DELETE FROM horarios WHERE id=?");
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
