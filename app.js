let count = prompt("โปรดระบุจำนวนนักศึกษาที่ท่านต้องการปลดล็อค :");
let sum = 0
for (var i = 1; i <= count; i++) {
  let stuid = prompt("รหัสนักศึกษาคนที่ :  " + i);
  sum = count;
  document.getElementById("std-unlock").innerHTML +=
    "ลำดับที่ " +
    i +
    "   รหัสนักศึกษา " +
    stuid +
    " ปลดล็อคการลงทะเบียนแล้ว" +
    "<br>";
}
document.getElementById("result").innerHTML =
  "ปลดล็อคการลงทะเบียนแล้ว " + sum + " คน";
