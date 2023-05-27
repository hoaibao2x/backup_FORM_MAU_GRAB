/**
 * Khối 1
 * Bảng giá cước
 * loaiXe
 * soKM
 * tgCho
 * 
 * Khối 2
 * B1: Tạo biến chứa các giá tiền (toàn cục)
 * B2: Lấy các giá trị từ form
 * B3: Kiểm tra loại xe
 * B4: Kiểm tra đoạn đường km
 * B5: Lập công thức theo loại xe và km
 * B6: Kiểm tra thòiw gian chờ
 *      => Tínht tiền phạt
 * 
 * B7: Hiển thị thành tiền
 * 
 * Khối 3
 * thanhTien 
 **/


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

// Hàm tính tiền cước
// Hàm chính được gắn lên UI
function tinhThanhTien() {
    var radioCar = document.getElementById('grabCar');
    var radioSUV = document.getElementById('grabSUV');
    var radioBlack = document.getElementById('grabBlack');

    var soKM = Number(document.getElementById('inputKM').value);
    var tgCho = Number(document.getElementById('inputTG').value);


    // Kiểm tra loại xe
    var loaiXe = '';
    if (radioCar.checked) {
        loaiXe = 'Car';
    } else if (radioSUV.checked) {
        loaiXe = 'SUV';
    } else if (radioBlack.checked) {
        loaiXe = 'Black';
    } else {
        alert('Hãy nhập loại xe !');
    }

    console.log(loaiXe);

    // Tính tiền theo KM của từng loại xe
    var thanhTien = 0;
    switch (loaiXe) {
        case 'Car':
            console.log('Car km');
            // Lập công thức theo KM
            if (0 < soKM && soKM <= 1) {
                console.log('Giá đầu');
                thanhTien = Number(soKM * DAU_TIEN_CAR);
            } else if (1 < soKM && soKM <= 19) {
                console.log('Giá 1-19');
                thanhTien = Number(DAU_TIEN_CAR + (soKM - 1) * KM1_19_CAR);
            } else if (soKM > 19) {
                console.log('Giá trên 19');
                thanhTien = Number(DAU_TIEN_CAR + 18 * KM1_19_CAR + (soKM - 19) * KM_TREN19_CAR);
            } else {
                alert('Hãy nhập số km !');
            }
            break;

        case 'SUV':
            console.log('SUV km');
            // Lập công thức theo KM
            if (0 < soKM && soKM <= 1) {
                console.log('Giá đầu');
                thanhTien = Number(soKM * DAU_TIEN_SUV);
            } else if (1 < soKM && soKM <= 19) {
                console.log('Giá 1-19');
                thanhTien = Number(DAU_TIEN_SUV + (soKM - 1) * KM1_19_SUV);
            } else if (soKM > 19) {
                console.log('Giá trên 19');
                thanhTien = Number(DAU_TIEN_SUV + 18 * KM1_19_SUV + (soKM - 19) * KM_TREN19_SUV);
            } else {
                alert('Hãy nhập số km !');
            }
            break;

        case 'Black':
            console.log('Black km');
            // Lập công thức theo KM
            break;

        default:
            alert('Loại xe không tồn tại !');
            break;
    }

    console.log(thanhTien);

}