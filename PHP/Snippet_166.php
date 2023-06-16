<?php
$sname = "localhost";
$uname = "root";
$password = "Ilike3tibits0fPineApplesOn_myPizz@";
$db_name = "pizza_users_db";
$conn = mysqli_connect($sname, $uname, $password, $db_name);
if (!$conn) {
	echo "Connection failed!";
	exit();
}
?>