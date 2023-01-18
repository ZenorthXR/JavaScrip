<?php

    // get value
    $student_id = $_POST['student-ID'];
    $student_name = $_POST['student-Name'];
    $student_Password = $_POST['student-Password'];
    $student_Sex = $_POST['sex'];
    // hobby output
    $strHobbyFav = "";
    for ($i = 0; $i < count($_POST["hobby"]); $i++) {
        if (($_POST["hobby"][$i]) != "") {
            $strHobbyFav = $strHobbyFav . $_POST["hobby"][$i] . ($i < count($_POST["hobby"]) - 1 ? ", " : "");
        }
    }

    // fav color output
    $strColorFav = "";
    for ($i = 0; $i < count($_POST["color"]); $i++) {
        if (trim($_POST["color"][$i]) != "") {
            $strColorFav = $strColorFav . $_POST["color"][$i] . ($i < count($_POST["color"]) - 1 ? ", " : "");
        }
    }

?>


<html>
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap" rel="stylesheet">

<head>
    <title> Program _Post form student-form </title>
</head>

<body>
    
    <br>
    <h2> ข้อมูลผู้ใช้ </h2>
    รหัสนักศึกษา : <?php echo $student_id ?> <br />
    ชื่อ : <?php echo $student_name ?> <br/>
    รหัสผ่าน : <?php echo $student_Password ?> <br/>
    เพศ : <?php echo ($student_Sex == 1 ? "male" : "female") ?> <br />

    My fav hobby is : <?php echo $strHobbyFav ?> <br />
    My fav color is : <?php echo $strColorFav ?> <br />

    <h2> สรุปข้อมูล </h2>
    <table border="1px" with="400px" align="center" >
    <tr>
        <th>รหัสนักศึกษา</th>
        <th>ชื่อ-นามสกุล</th>
        <th>รหัสผ่าน</th>
        <th>เพศ</th>
        <th>งานอดิเรก</th>
        <th>สีที่ชอบ</th>
    </tr>
    <tr>
        <td><?php echo $student_id ?></td>
        <td><?php echo $student_name ?></td>
        <td><?php echo $student_Password ?></td>
        <td><?php echo ($student_Sex == 1 ? "male" : "female") ?></td>
        <td><?php echo $strHobbyFav ?></td>
        <td><?php echo $strColorFav ?></td>
        </tr>
    </table>
    
    <br>
    <button onclick="document.location='webpro.php'">Back</button>
</body>



</html>


