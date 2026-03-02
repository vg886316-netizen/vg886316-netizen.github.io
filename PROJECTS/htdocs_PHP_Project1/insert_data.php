<!-- before xampp software can't run this file after installed starts with apache and mysql and create tables -->

<?php

$servername = "localhost";
$username = "root";
$password = "";
$db_name = "vinod";

$conn = new mysqli($servername,$username,$password,$db_name);

if($conn->connect_error)
{
	die("failed to connect with MySQL : ".$conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $rollno = $_POST['rollno'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $marks  = $_POST['marks'];

    $sql = "Insert into student(rollno,name,address,marks) values('$rollno','$name','$address','$marks')";

    if($conn->query($sql) === true)
    {
        echo"<h1 align='center'>Successfully Inserted Record</h1>";
        echo"<h3 align='center'><a href='view_record.php'>Click here to view records!</a></h3>";
    }
    else{
        echo"Error :".$conn->error;
    }
}
$conn->close();
?>
<html>
<head>
    <title>success</title>
</head>
</html>