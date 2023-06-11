var openModalButtonLogin = document.getElementById("openModalButtonLogin");
var openModalButtonRegister = document.getElementById(
  "openModalButtonRegister"
);
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
var loginLink = document.getElementById("login-link");
var registerLink = document.getElementById("register-link");
var closeButton = document.getElementsByClassName("close")[0];

// Xử lý sự kiện khi nhấp vào nút đăng nhập
openModalButtonLogin.onclick = function () {
  loginModal.style.display = "flex";
};
// xử lý đăng kí
openModalButtonRegister.onclick = function () {
  registerModal.style.display = "flex";
};
// Xử lý sự kiện khi nhấp vào nút đóng cửa sổ đăng nhập
closeButton.onclick = function () {
  loginModal.style.display = "none";
  registerModal.style.display = "none";
};

// Xử lý sự kiện khi nhấp vào bất kỳ vị trí nào bên ngoài cửa sổ đăng nhập
window.onclick = function (event) {
  if (
    event.target == loginModal ||
    event.target == registerModal ||
    event.target == formTrial
  ) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
    formTrial.style.display = "none";
  }
};

//Chuyển trang index-user
// document.getElementById("loginModal").addEventListener("submit", function(event) {
//   event.preventDefault(); // Ngăn chặn form gửi đi

//   // Kiểm tra thông tin đăng nhập ở đây (có thể sử dụng Ajax để gửi yêu cầu đến máy chủ)

//   // Sau khi xác thực thành công, chuyển hướng đến trang khác
//   window.location.href = "index-user.html";
// });

// Lấy tham chiếu đến button
const button = document.getElementsByClassName("myButton");

// Thêm sự kiện khi di chuột vào button
button.addEventListener("mouseover", function () {
  button.classList.add("highlight");
});

// Thêm sự kiện khi di chuột ra khỏi button
button.addEventListener("mouseout", function () {
  button.classList.remove("highlight");
});

// Xử lý sự kiện click cho dòng chữ "Đã có tài khoản"
loginLink.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
  // Ẩn khung đăng ký và hiển thị khung đăng nhập
  registerModal.style.display = "none";
  loginModal.style.display = "flex";
});
// Xử lý sự kiện click cho dòng chữ "Chưa có tài khoản"
registerLink.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
  // Ẩn khung đăng nhập và hiển thị khung đăng ký
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
});
