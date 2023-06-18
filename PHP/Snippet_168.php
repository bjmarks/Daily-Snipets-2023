<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Snippet 168</title>
	<link rel="stylesheet" href="../CSS/Snippet_168.css">
</head>
<body>
	<a href="./Snippet_167.php">Videos</a>
<?php if (isset($_GET['error'])) {  ?>
	<p><?=$_GET['error']?></p>
<?php } ?>
	<form action="Snippet_169.php" method="post" enctype="multipart/form-data">
	 	<input type="file" name="uploaded">
	 	<input type="submit" name="submit" value="Upload">
	</form>
</body>
</html>