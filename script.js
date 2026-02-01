// قراءة بيانات الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "المرحوم"; // اسم المرحوم
const img = params.get("img") || "photos/default.jpg"; // صورة المرحوم

// عرض الاسم والصورة
document.getElementById("name").textContent = name;
document.getElementById("photo").src = img;

// إمساكية رمضان (لبغداد) - مثال ثابت
const imsakeya = [
  { day: 1, fajr: "04:18", dhuhr: "11:55", asr: "15:18", maghrib: "17:58", isha: "19:17" },
  { day: 2, fajr: "04:17", dhuhr: "11:55", asr: "15:18", maghrib: "17:59", isha: "19:18" },
  { day: 3, fajr: "04:17", dhuhr: "11:55", asr: "15:18", maghrib: "17:59", isha: "19:18" },
  // ... أكمل باقي الأيام حسب التوقيت الرسمي لبغداد
];

// إنشاء الجدول داخل الصفحة
const table = document.getElementById("imsakeya-table");

imsakeya.forEach(day => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${day.day}</td>
    <td>${day.fajr}</td>
    <td>${day.dhuhr}</td>
    <td>${day.asr}</td>
    <td>${day.maghrib}</td>
    <td>${day.isha}</td>
  `;
  
  table.appendChild(tr);
});
