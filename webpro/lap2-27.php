<div class="bg">
    <?php
        function Student($student_id, $student_name, $student_Password, $student_Sex) {
            echo "<b>ข้อมูลที่ผู้ใช้ใส่มา </b><br /><br />";
            echo "รหัสนักศึกษา : $student_id <br/>";
            echo "ชื่อ : $student_name <br />";
            echo "รหัสผ่าน : $student_Password <br />";
        }
    
        $student_id = $_POST['student-ID'];
        $student_name = $_POST['student-Name'];
        $student_Password = $_POST['student-Password'];
        $student_Sex = $_POST['sex'];

        Student($student_id, $student_name, $student_Password, $student_Sex);

        //sex output
        if ($student_Sex == 1) {
            echo "เพศ : male <br />";
        } else echo "เพศ : female <br />";

        //hobby output
        for ($i=0; $i < cout($_POST("hobby")); $i++) { 
            if (trim($_POST("hobby")[$i]) != "") {
                echo "My hobby is : ". $_POST("hobby")[$i]."<br>";
            }
        }

        //fav color output
        for ($i=0; $i < cout($_POST("color")); $i++) { 
            if (trim($_POST("color")[$i]) != "") {
                echo "My fav color is  : ". $_POST("color")[$i]."<br>";
            }
        }
    ?>
        <br><br>
        <!-- back to form -->
        <a href="webpro.php"> back to first page </a>
</div>