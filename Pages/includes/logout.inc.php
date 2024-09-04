<?php
 session_start();
 session_unser();
 session_destroy();
 header("Location:../index.php");
 exit();