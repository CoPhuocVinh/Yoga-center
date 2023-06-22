var openModalButtonRegister = document.getElementById("openModalButtonRegister");
var openModalRequest = document.getElementById("openModalRequest");
var requestModal = document.getElementById("requestModal");
var registerModal = document.getElementById("registerModal");
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

// xử lý đề xuất
openModalRequest.onclick = function () {
  requestModal.style.display = "flex";
}


// Xử lý sự kiện khi nhấp vào bất kỳ vị trí nào bên ngoài cửa sổ đăng nhập
window.onclick = function (event) {
    if (event.target == registerModal || event.target == requestModal ) {
      registerModal.style.display = "none";
      requestModal.style.display = "none";
    }
}

//xử lý nút bấm active và inactive
var activeBtn = document.getElementById('active-bnt');
var inactiveBtn = document.getElementById('inactive-btn');
var activeList = document.getElementById('active-list');
var inactiveList = document.getElementById('inactive-list');

activeBtn.addEventListener('click', function () {
    activeList.style.display = 'inline-table';
    inactiveList.style.display = 'none';
});


inactiveBtn.addEventListener('click', function () {
    activeList.style.display = 'none';
    inactiveList.style.display = 'inline-table';
});




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

