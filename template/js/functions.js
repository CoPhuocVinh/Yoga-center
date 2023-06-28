var openModalButtonRegister = document.getElementById("openModalButtonRegister");
var registerModal = document.getElementById("registerModal");
var settingModal = document.getElementById("modal-user-settings");
var registerLink = document.getElementById("register-link");
var closeButton = document.getElementsByClassName("close")[0];


// xử lý đăng kí
openModalButtonRegister.onclick = function () {
  registerModal.style.display = "flex";
}
// Xử lý sự kiện khi nhấp vào nút đóng cửa sổ đăng nhập
closeButton.onclick = function () {
  registerModal.style.display = "none";
}



// Xử lý sự kiện khi nhấp vào bất kỳ vị trí nào bên ngoài cửa sổ đăng nhập
window.onclick = function (event) {
    if (event.target == registerModal || event.target == requestModal || event.target == settingModal) {
      registerModal.style.display = "none";
      settingModal.style.display = "none";
      requestModal.style.display = "none";
    }
}




// Lấy tham chiếu đến button
const button = document.getElementById("myButton");

// Thêm sự kiện khi di chuột vào button
button.addEventListener('mouseover', function () {
  button.classList.add('highlight');
});

// Thêm sự kiện khi di chuột ra khỏi button
button.addEventListener('mouseout', function () {
  button.classList.remove('highlight');
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

