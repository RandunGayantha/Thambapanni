<?php
$serverName="localhost";
$dbUsername="root";
$dbPassword="";
$dbName="login_page";

$conn = mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);

if(!$conn){
    die("Connection failed:".mysqli_connect_error());
}
echo"Connected successfully";
?>


