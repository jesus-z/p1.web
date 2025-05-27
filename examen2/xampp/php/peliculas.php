<?php
include 'conexion.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    $result = $conn->query("SELECT * FROM peliculas");
    $peliculas = [];
    while ($row = $result->fetch_assoc()) {
      $peliculas[] = $row;
    }
    echo json_encode($peliculas);
    break;

  case 'POST':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("INSERT INTO peliculas (id, titulo, genero, duracion, imagen) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssis", $input['id'], $input['titulo'], $input['genero'], $input['duracion'], $input['imagen']);
    $stmt->execute();
    echo json_encode(["status" => "agregado"]);
    break;

  case 'PUT':
    $input = json_decode(file_get_contents("php://input"), true);
    $stmt = $conn->prepare("UPDATE peliculas SET titulo=?, genero=?, duracion=?, imagen=? WHERE id=?");
    $stmt->bind_param("ssiss", $input['titulo'], $input['genero'], $input['duracion'], $input['imagen'], $input['id']);
    $stmt->execute();
    echo json_encode(["status" => "actualizado"]);
    break;

  case 'DELETE':
    parse_str(file_get_contents("php://input"), $input);
    $stmt = $conn->prepare("DELETE FROM peliculas WHERE id=?");
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
