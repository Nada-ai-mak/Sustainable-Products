<?php
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];



if(isset($_POST['buts']))

{
    $host ="locaslhost";
    $user="root";
    $password="";
    $db="lavender-scene";

    $conn = mysqli_connect($host,$user,$password,$db);

    $insert= "insert into customer info('$name','$email','$message')";

    mysqli_query($conn,$insert);

    if($conn){
        echo("<h1 style='color:green;'>your Registration is Done!</h1>");
    }
    else{
        echo("<h1 style='color:red;'> Your Registration is Failed");
    }



}




?>