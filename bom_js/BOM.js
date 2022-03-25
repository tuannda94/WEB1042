// window là đối tượng cung cấp bởi js
// window là đối tượng hoá của trình duyệt
// console.log(window);
// alert là phương thức đc cung cấp bởi đối tượng window
// sử dụng bằng window.tên_phương thức
// hoặc sử dụng trực tiếp tên_phương_thức
// window.alert('Alert của window');

// Mo ra 1 trang moi bang duong dan
// window.open('https://google.com');
// hoac open('https://google.com');

// Danh sach san pham,
// bam vao xem chi tiet se mo 1 trang moi
// open('http://localhost/products/1');

// location
console.log(window.location);

// document
// write dung de ghi 1 nd len man hinh
document.write('<h1>FPT Poly</h1>');
document.write('<h2>FPT Poly</h2>');
document.write('<h3>FPT Poly</h3>');
document.write('<h4>FPT Poly</h4>');

// setTimeout
// 2 tham số, đầu tiên là đoạn mã JS muốn chạy,
// thứ 2 là thời gian sẽ chạy (ms)
function nap_tien() {
    var interval;

    var money = prompt('Bạn đã hết 5s dùng thử, nạp tiền');
    // Money là số và money lớn hơn 5 nghìn
    if ((isNaN(money) == false) && (money > 5000)) {
        alert('Nạp tiền thành công, xem tiếp');
        clearInterval(interval);
    } else {
        interval = setInterval(
            "alert('Nạp tiền lỗi')",
            3000
        );
    }
}
// window.setTimeout("alert('Alert sau 5s')", 5000);
setTimeout("nap_tien()", 5000);

// setInterval
// var interval = setInterval("console.log('interval')", 1000);
// clearInterval(interval);

// Bài tập Lab 3:
// Bài 2 + Bài 3 trong Lab 4
var user = {
    id: 1,
    name: 'tuanda3',
    say: function () {
        console.log('user say: my name is ' + this.name);
        // this chinh la doi tuong user no dang thuoc ve
    }
};

user.say();
