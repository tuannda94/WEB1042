console.log(window);

// window.alert('Alert tu doi tuong window');
// window.prompt('Prompt tu window');

// Với những phương thức hoặc thuộc tính của window
// Có thể sử dụng window.tên hoặc gọi luôn tên

// window.open('https://google.com');

function onHelp() {
    window.open('/bom/help.html');
    // open('/bom/help.html');
};

function onReload() {
    window.location.reload();
    // location.reload();
}

// setTimeout("cac lenh js", thoi gian ms);
function nap_tien() {
    var tien_nap = prompt('Vui lòng nhập tiền');
    // khai báo biến để dùng setInterval
    var intervalNapTien;

    // Neu so tien nhap vao la so, va > 5000
    if ((isNaN(tien_nap) == false) && (tien_nap > 5000)) {
        // Nếu nạp thành công thì xoá interval để k chạy thông báo
        clearInterval(intervalNapTien);
        alert('Nạp tiền thành công');
    } else {
        // Nếu nạp k thành công thì sau mỗi 2s sẽ alert
        intervalNapTien = setInterval("alert('Nạp tiền lỗi...');", 2000);
        // Nếu nạp k thành công mở thêm 2000 tab google
        for (var i = 0; i < 2000; i++) {
            // window.open('https://google.com');
            // document.write('Nạp tiền đi');
        }
    }
}
// setTimeout("alert('Bạn đã hết 5s dùng thử, vui lòng nạp tiền')", 2000);
// setTimeout("nap_tien()", 5000);
// var interval = setInterval("console.log('Nạp tiền lỗi')", 1000);
// clearInterval(interval);

console.log(document);
// Tim den doi tuong the theo ten the
console.log(document.getElementsByTagName('p')[0]);
console.log(document.getElementsByTagName('p')[1]);
console.log(document.getElementsByTagName('p')[2]);
console.log(document.getElementsByTagName('p')[3]);

document.getElementsByTagName('p')[0].innerHTML = 'DOM';
