<?php
if(isset($_POST['submit'])) {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    if(!empty($_FILES['upload']['name'])) {
        $file_name = $_FILES['upload']['name'];
        $file_size = $_FILES['upload']['size'];
        $file_tmp = $_FILES['upload']['tmp_name'];
        $target_dir = "uploads/${file_name}";
        // get file ext
        $file_ext = explode('.', $file_name);
        $file_ext = strtolower(end($file_ext));
    }
    else {
        $message = '<p style="color: red;">Please Choose a file</p>';
    }
}
// Set Cookies
setcookie('first', $first_name, time() + 86400 * 30);
setcookie('last', $last_name, time() + 86400 * 30);
setcookie('file', $file_name, time() + 86400 * 30);
if(isset($_COOKIE['first'], $_COOKIE['last'])) {
    echo "hello " . $_COOKIE['first'] . $_COOKIE['last'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snippet 03</title>
</head>
<body>
    <?php echo $message ?? null; ?>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST" enctype="multipart/form-data">
    <div>
        <label for="first_name">First Name</label>
        <input type="text" name="first_name">
    </div> 
    <div>
        <label for="last_name">Last Name</label>
        <input type="text" name="last_name">
    </div>
    <div>
        <label for="upload">Select image to upload:</label>
        <input type="file" name="upload" id="user_profile_pic">
    </div>
    <input type="submit" value="Submit" name="submit">
</form>
</body>
</html>