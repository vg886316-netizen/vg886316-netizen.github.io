<!-- before xampp software can't run this file after installed starts with apache and mysql and create tables -->


<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "vinod";

$conn = new mysqli($servername,$username,$password,$db_name);
if($conn->connect_error)
{
    die("connection failed:".$conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $rollno = $_POST['rollno'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $marks = $_POST['marks'];

    $sql = "UPDATE student set name='$name',address='$address',marks='$marks' where rollno = '$rollno'";

    if($conn->query($sql) === true)
    {
        echo"<h1 align='center'>Successfully Updated Record</h1>";
        echo"<h3 align='center'><a href='view_record.php'>Click here to view records!</a></h3>";
    }
    else{
        echo"Error :".mysqli_error($conn);
    }
}
$conn->close();
?>


