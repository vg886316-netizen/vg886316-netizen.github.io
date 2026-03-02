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

    $sql = "DELETE FROM student where rollno = '$rollno'";

    if($conn->query($sql) === true)
    {
        echo"<h1 align='center'>Successfully Deleted Record</h1>";
        echo"<h3 align='center'><a href='view_record.php'>Click here to view records!</a></h3>";
    }
    else{
        echo"Error :".mysqli_error($conn);
    }
}
$conn->close();
?>


