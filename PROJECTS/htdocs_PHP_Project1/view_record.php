<!-- before xampp software can't run this file after installed starts with apache and mysql and create tables -->

<?php 

$servername = "localhost";
$user = "root";
$password = "";
$db_name = "vinod";

$conn = new mysqli($servername,$user,$password,$db_name);

if($conn->connect_error)
{
	die("failed to connect with MySQL : ".$conn->connect_error);
}


$sql = "select rollno,name,address,marks from student";
$result = $conn->query($sql);

?>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
	<title>view record</title>
	<style>
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: Verdana, Geneva, sans-serif;
		}
		header{
			height: 90px;
			width: 100%;
			background-color: white;
			box-shadow: -1px 2px 6px rgb(0, 0, 0); 
			position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
		}
		.main{
			height: 100%;
			display: flex;
			justify-content: space-between ;
			align-items: center;

		}
		.icon{
			margin-left: 50px;
			font-size: 25px;
		}
		.icon a{
			text-decoration: none;
			color: black;
			font-weight: bold;
		}
		.icon i{
			height: 45px;
			width: 50px;
			background-color: blue;
			text-align: center;
			border-radius: 10px;
			padding-top: 10px;
			color: white;
		}
		.button{
			margin-right: 50px;
			font-size: 25px;
			height: 40px;
			width: 250px;
			padding: 5px;
			cursor: pointer;
			background-color: blue;
			color: white;
			text-align: center;
			border-radius: 10px;
		}
		.button a{
			text-decoration: none;
			color: white;
		}

		/* section1 */

		.section1{
			height: 100vh;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 100px;
		}
		.table-box{
			margin-top: 140px;
			height: 100vh;
			width: 80%;
			/* border: 2px solid black; */
			overflow-y: scroll;

		}
		table{
			width: 100%;
			border:none;
		}
		td, th{
			padding: 20px;
			font-weight: 600;
			text-align: center;
		}
		td a{
			text-decoration: none;
		}
		th{
			font-size: 18px;
		}
	</style>
</head>
<body>
	<header>
		<div class="main">
            <div class="icon"><a href="student_management-system.html"><i class="fa-solid fa-house-chimney"></i> Home</a></div>
            <div class="button">
                <a href="insert_form.html">+ Add Student</a>
            </div>
        </div>
	</header>
	<div class="section1">
		<div class="table-box">
		<?php
	
			if($result->num_rows>0)
			{
				echo "<table border='1' cellpadding='10' cellspacing='0'>
				<tr style='background: linear-gradient(to right, blue, purple);
			color: white;'>
					<th>Sr.no</th>
					<th>RollNo</th>
					<th>Name</th>
					<th>Address</th>
					<th>Marks(%)</th>
					<th>Action</th>
				</tr>";
				$sr = 1;

				while($row=$result->fetch_assoc())
				{
					if($sr %2 == 0)
					{
						$color = "#cce5ff";
					}else{
						$color = "#fff3cd";
					}
					echo "<tr style='background-color: $color;'>
						<td>  " . $sr++ . "  </td>
						<td>   " . $row['rollno'] . " </td>
						<td>   " . $row['name'] . "   </td>
						<td>   " . $row['address'] . " </td>
						<td>   " . $row['marks'] . "   </td>
						<td>
							<a href='update_form.html?rollno=".$row['rollno']."'>Edit</a> /

							<a href='delete_form.html?rollno=".$row['rollno']."' onclick=\"return confirm('Are you sure want to delete this records?');\">Delete</a>
						</td>
					</tr>";
				}
				echo "</table>";
			}
			else
			{
				echo"0 results";
			}
			$conn->close();

		?>
		</div>
	</div>
</body>
</html>