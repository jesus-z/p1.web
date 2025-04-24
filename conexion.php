<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername='localhost';
$username='root';
$password='';
$dBname='ejemplo';

$conn=new mysqli($servername,$username,$password,$dBname)

//verificacion de conexion 

if($conn->connect_error){
    http_response_code(500);
    die(json_encode(["error"=>"conexion fallida:".$conn->connect_error]));
}
$method= $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $id = $_GET['id' ?? null];
        if($id){
            $stmt = conn -> prepare('SELECT * FROM clientes WHERE id=?');
            $stmt ->bind_param('s',$id);//vinculo los parametros tomando en cuenta que es un string
            $stmt ->execute();
            $result = $stmt ->get_result();
            //convierto en array
            $cliente=$result->fetch_assoc();
            echo json_encode($cliente);
        }else{
            $result=$conn->query('SELECT * FROM clientes');
            $cliente =[];
            while($row=$result->fetch_assoc()){
                $clientes[]=$row;
            }
            echo json_encode($clientes);
        }
        break;
        case 'POST':
            $data = json_decode(file_get_contents("php://input"), true);
            $nombre = $data['nombre'] ?? null;
            $email = $data['email'] ?? null;
    
            if ($nombre && $email) {
                $stmt = $conn->prepare("INSERT INTO clientes (nombre, email) VALUES (?, ?)");
                $stmt->bind_param("ss", $nombre, $email);
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Cliente creado correctamente"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["error" => "Error al insertar cliente"]);
                }
            } else {
                http_response_code(400);
                echo json_encode(["error" => "Faltan datos"]);
            }
            break;
    
        case 'PUT':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'] ?? null;
            $nombre = $data['nombre'] ?? null;
            $email = $data['email'] ?? null;
    
            if ($id && $nombre && $email) {
                $stmt = $conn->prepare("UPDATE clientes SET nombre=?, email=? WHERE id=?");
                $stmt->bind_param("ssi", $nombre, $email, $id);
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Cliente actualizado correctamente"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["error" => "Error al actualizar cliente"]);
                }
            } else {
                http_response_code(400);
                echo json_encode(["error" => "Datos incompletos para actualizar"]);
            }
            break;
    
        case 'DELETE':
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $data['id'] ?? null;
    
            if ($id) {
                $stmt = $conn->prepare("DELETE FROM clientes WHERE id=?");
                $stmt->bind_param("i", $id);
                if ($stmt->execute()) {
                    echo json_encode(["message" => "Cliente eliminado correctamente"]);
                } else {
                    http_response_code(500);
                    echo json_encode(["error" => "Error al eliminar cliente"]);
                }
            } else {
                http_response_code(400);
                echo json_encode(["error" => "ID requerido para eliminar"]);
            }
            break;
    
        
}
$conn->close();//100pre tengo que cerrar la conexion 

?>