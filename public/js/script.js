document.addEventListener("DOMContentLoaded", () => {
    // Xử lý đăng nhập
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Đăng nhập thành công!");
            window.location.href = "list.html";
        });
    }

    // Xử lý đăng ký
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Đăng ký thành công!");
            window.location.href = "login.html";
        });
    }

    // Xử lý cập nhật thông tin
    const updateForm = document.getElementById("updateForm");
    if (updateForm) {
        updateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Cập nhật thành công!");
            window.location.href = "list.html";
        });
    }
});
