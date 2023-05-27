// Bảng giá cước
const DAU_TIEN_CAR = 7000;
const KM1_19_CAR = 7500;
const KM_TREN19_CAR = 7000;
const TG_CHO_CAR = 2000;

const DAU_TIEN_SUV = 9000;
const KM1_19_SUV = 8500;
const KM_TREN19_SUV = 8000;
const TG_CHO_SUV = 3000;

const DAU_TIEN_BLACK = 10000;
const KM1_19_BLACK = 9500;
const KM_TREN19_BLACK = 9000;
const TG_CHO_BLACK = 3500;

// Main function
// Gọi các hàm nhỏ có chức năng cụ thể
function tinhThanhTien() {

    // Biến cục bộ
    var radioCar = document.getElementById('grabCar');
    var radioSUV = document.getElementById('grabSUV');
    var radioBlack = document.getElementById('grabBlack');

    var soKM = Number(document.getElementById('inputKM').value);
    var tgCho = Number(document.getElementById('inputTG').value);

    var loaiXe = kiemTraLoaiXe(radioCar, radioSUV, radioBlack);
    console.log(loaiXe);

    var thanhTien = 0;
    switch (loaiXe) {
        case 'Car':
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_CAR, KM1_19_CAR, KM_TREN19_CAR) + tinhTienCho(tgCho, TG_CHO_CAR);

            break;

        case 'SUV':
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_SUV, KM1_19_SUV, KM_TREN19_SUV) + tinhTienCho(tgCho, TG_CHO_SUV);
            break;

        case 'Black':
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_BLACK, KM1_19_BLACK, KM_TREN19_BLACK) + tinhTienCho(tgCho, TG_CHO_BLACK);
            break;

        default:
            alert('Hãy nhập loại xe !');
            break;
    }
    document.getElementById('xuatTien').innerHTML = thanhTien.toLocaleString();

    document.getElementById('divThanhTien').style.display = 'block';

}

function kiemTraLoaiXe(radio1, radio2, radio3) {

    if (radio1.checked) {
        return 'Car';
    } else if (radio2.checked) {
        return 'SUV';
    } else if (radio3.checked) {
        return 'Black';
    } else {
        alert('Hãy nhập loại xe !');
        return '';
    }

}

// Input: soKM, giaDauTien, gia1_19, giaTren19
// Xử lý: If ... Else If
// Output: thanhTien
function tinhTheoKM(soKM, giaDauTien, gia1_19, giaTren19) {
    
    if (0 < soKM && soKM <= 1) {
        console.log('Giá đầu');
        return Number(soKM * giaDauTien);
    } else if (1 < soKM && soKM <= 19) {
        console.log('Giá 1-19');
        return Number(giaDauTien + (soKM - 1) * gia1_19);
    } else if (soKM > 19) {
        console.log('Giá trên 19');
        return Number(giaDauTien + 18 * gia1_19 + (soKM - 19) * giaTren19);
    } else {
        alert('Hãy nhập số km !');
        return 0;
    }

}

// Input: thoiGianCho, giaCho
// Xử lý: Tính số lần phạt Math.floor(thoiGianCho / 3)
// tienCho = soLanPhat * giaCho
// Output: tienCho
function tinhTienCho(thoiGianCho, giaCho) {
    
    var soLanPhat = Math.floor(thoiGianCho / 3);
    var thanhTien = 0;
    if (thoiGianCho > 0) {
        thanhTien = soLanPhat * giaCho;
    }

    return thanhTien;
    
}