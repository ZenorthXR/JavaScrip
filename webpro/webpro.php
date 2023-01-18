<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>การสร้างฟอร์ม</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap" rel="stylesheet">    

</head>


<body>
<div class="px-4 py-4 my-1 text-center ">
    <img class="d-block mx-auto mb-4" src="logo.png" alt="" width="180" height="180">
    <h1 class="display-6 fw-bold">แบบฟอร์มบันทึกข้อมูลนักศึกษา</h1>
    <form action="lap2.php" method="post" name="form1" id="form1">
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-1 ">รหัสนักศึกษา : <input type="text" maxlength="13" name="student-ID" /><br /></p>
      <p class="lead mb-1">ชื่อนามสกุล นักศึกษา : <input type="text" size="40" name="student-Name" /><br /> </p>
      <p class="lead mb-1">รหัสผ่าน : <input type="password" maxlength="6" size="6" name="student-Password" /><br /> </p>
      <p class="lead mb-1">เพศ : <input type="radio" name="sex" value="1" /> ชาย
                                 <input type="radio" name="sex" value="2" /> หญิง <br /> </p>
      <p class="lead mb-1"> งานอดิเรก : 
        <input type="checkbox" value="readbook" name="hobby[]" /> อ่านหนังสือ
        <input type="checkbox" value="watching-tv" name="hobby[]" /> ดูโทรทัศน์
        <input type="checkbox" value="sport" name="hobby[]" /> เล่นกีฬา <br /></p>           
        <p class="lead mb-1"> สีที่ชอบ : 
        <input type="checkbox" value="Red" name="color[]" /> Red <br />
        <input type="checkbox" value="Blue" name="color[]" /> Blue <br />
        <input type="checkbox" value="Green" name="color[]" /> Green <br />
        <input type="checkbox" value="Orange" name="color[]" /> Orange <br />
        <input type="checkbox" value="Black" name="color[]" /> Black <br />
        </p>

        <div class="input-group mb-2">
        <input type="file" class="form-control" id="inputGroupFile02">
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>


      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="submit" class="btn btn-primary" onclick="alert('เสร็จสิ้น')">Submit</button>
      <button type="reset" class="btn btn-danger" onclick="alert('รีข้อมูลทั้งหมด')">RESET</button>
      </div>
    </div>
    </form>
  
    

</body>

</html>