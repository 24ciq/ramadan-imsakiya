console.log("Imsakiya script loaded");
// قراءة بيانات الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "—";
const img = params.get("img") || "photos/default.jpg";

// وضع البيانات
document.getElementById("name").textContent = name;
document.getElementById("photo").src = img;
