<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Snippet 167</title>
	<link rel="stylesheet" href="../CSS/Snippet_168.css">
</head>
<body>
	<a href="Snippet_168.php">UPLOAD</a>
	<div class="alb">
	<?php 
	    include "./Snippet_166.php";
		$sql = "SELECT * FROM videos ORDER BY id DESC";
		$res = mysqli_query($conn, $sql);
		if (mysqli_num_rows($res) > 0) {
		    while ($video = mysqli_fetch_assoc($res)) { 
	?>
	    <video src="uploads/<?=$video['video_url']?>" controls> </video>
	<?php 
	        }
	    }
        else {
		 	echo "<h1>Empty</h1>";
		}
	?>
	</div>
</body>
</html>