// قراءة بيانات الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "المرحوم";
const img = params.get("img") || "photos/default.jpg";

// عرض الاسم والصورة
document.getElementById("name").textContent = name;
document.getElementById("photo").src = img;

// إمساكية رمضان لبغداد كامل 30 يوم
const imsakeya = [
  { day:1,fajr:"04:18",dhuhr:"11:55",asr:"15:18",maghrib:"17:58",isha:"19:17" },
  { day:2,fajr:"04:17",dhuhr:"11:55",asr:"15:18",maghrib:"17:59",isha:"19:18" },
  { day:3,fajr:"04:17",dhuhr:"11:55",asr:"15:18",maghrib:"17:59",isha:"19:18" },
  { day:4,fajr:"04:16",dhuhr:"11:55",asr:"15:18",maghrib:"18:00",isha:"19:19" },
  { day:5,fajr:"04:16",dhuhr:"11:55",asr:"15:18",maghrib:"18:00",isha:"19:19" },
  { day:6,fajr:"04:15",dhuhr:"11:55",asr:"15:18",maghrib:"18:01",isha:"19:20" },
  { day:7,fajr:"04:15",dhuhr:"11:55",asr:"15:18",maghrib:"18:01",isha:"19:20" },
  { day:8,fajr:"04:14",dhuhr:"11:55",asr:"15:18",maghrib:"18:02",isha:"19:21" },
  { day:9,fajr:"04:14",dhuhr:"11:55",asr:"15:18",maghrib:"18:02",isha:"19:21" },
  { day:10,fajr:"04:13",dhuhr:"11:55",asr:"15:18",maghrib:"18:03",isha:"19:22" },
  { day:11,fajr:"04:13",dhuhr:"11:55",asr:"15:18",maghrib:"18:03",isha:"19:22" },
  { day:12,fajr:"04:12",dhuhr:"11:55",asr:"15:18",maghrib:"18:04",isha:"19:23" },
  { day:13,fajr:"04:12",dhuhr:"11:55",asr:"15:18",maghrib:"18:04",isha:"19:23" },
  { day:14,fajr:"04:11",dhuhr:"11:55",asr:"15:18",maghrib:"18:05",isha:"19:24" },
  { day:15,fajr:"04:11",dhuhr:"11:55",asr:"15:18",maghrib:"18:05",isha:"19:24" },
  { day:16,fajr:"04:10",dhuhr:"11:55",asr:"15:18",maghrib:"18:06",isha:"19:25" },
  { day:17,fajr:"04:10",dhuhr:"11:55",asr:"15:18",maghrib:"18:06",isha:"19:25" },
  { day:18,fajr:"04:09",dhuhr:"11:55",asr:"15:18",maghrib:"18:07",isha:"19:26" },
  { day:19,fajr:"04:09",dhuhr:"11:55",asr:"15:18",maghrib:"18:07",isha:"19:26" },
  { day:20,fajr:"04:08",dhuhr:"11:55",asr:"15:18",maghrib:"18:08",isha:"19:27" },
  { day:21,fajr:"04:08",dhuhr:"11:55",asr:"15:18",maghrib:"18:08",isha:"19:27" },
  { day:22,fajr:"04:07",dhuhr:"11:55",asr:"15:18",maghrib:"18:09",isha:"19:28" },
  { day:23,fajr:"04:07",dhuhr:"11:55",asr:"15:18",maghrib:"18:09",isha:"19:28" },
  { day:24,fajr:"04:06",dhuhr:"11:55",asr:"15:18",maghrib:"18:10",isha:"19:29" },
  { day:25,fajr:"04:06",dhuhr:"11:55",asr:"15:18",maghrib:"18:10",isha:"19:29" },
  { day:26,fajr:"04:05",dhuhr:"11:55",asr:"15:18",maghrib:"18:11",isha:"19:30" },
  { day:27,fajr:"04:05",dhuhr:"11:55",asr:"15:18",maghrib:"18:11",isha:"19:30" },
  { day:28,fajr:"04:04",dhuhr:"11:55",asr:"15:18",maghrib:"18:12",isha:"19:31" },
  { day:29,fajr:"04:04",dhuhr:"11:55",asr:"15:18",maghrib:"18:12",isha:"19:31" },
  { day:30,fajr:"04:03",dhuhr:"11:55",asr:"15:18",maghrib:"18:13",isha:"19:32" }
];

// إنشاء الجدول
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
