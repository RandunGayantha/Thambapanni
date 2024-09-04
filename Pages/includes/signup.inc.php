<?php
 if(isset ($_POST["submit"])){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $username=$_POST["uid"];
    $pwd=$_POST["pwd"];
    $pwdrepeat=$_POST["pwdrepeat"];

    require_once 'dbh.inc.php';
    require_once 'function.inc.php';
    
    $emptyInputs=emptyInputSignup($name,$email,$username,$pwd,$pwdrepeat);
    $invalidUid= invalidUid($username);
    $invalidEmail=invalidEmail($email);
    $pwdMatch= pwdMatch($pwd,$pwdrepeat);
    $uidExists=uidExists($conn,$username,$email);

    if($emptyInputs  !== false ){
        header("location:../signup.php? error=emptyinput");
        exit();
    }

    if($invalidUid  !== false ){
        header("location:../signup.php? error=invalidUid");
        exit();
    }

    if($invalidEmail  !== false ){
        header("location:../signup.php? error=invalidemail");
        exit();
    }
    
    if($pwdMatch  !== false ){
        header("location:../signup.php? error=passwordsdontmatch");
        exit();
    }

    if($uidExists  !== false ){
        header("location:../signup.php? error=usernametaken");
        exit();
    }

    createUser($conn,$name,$email,$username,$pwd);

 }
 else{
    header('Location:../login.php');
 }




?>
