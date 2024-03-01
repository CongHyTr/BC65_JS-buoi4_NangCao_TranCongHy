// bài 1:
// input: ngay, tháng, năm
// ---
// xử lí:
// ** tìm ngày hôm trước:
// ngày hôm trước = ngày - 1
// nếu ngày - 1 = 0 thì tháng - 1
// nếu tháng - 1 = thì năm - 1, tháng = 12 - 1

// output:

var ngay = +document.getElementById('ngay').value;
var thang = +document.getElementById('thang').value;
var nam = +document.getElementById('nam').value;

function soNgayTrongThang(){
    var soNgay;
    switch(ngay){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgay = 31;
            break;
        case 2:
            if(year%4==0 || year%400==0){
                days = 29;
            }else{
                days = 28;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        }
    }

    function namNhuan(){
        if(nam%4 == 0 && nam%100!==0 || nam/400 == 0){
            return true;
        }else{
            return false;
        }
    }
document.getElementById('find').onclick = function(){
    if()
}









// bài 2:
// ---
// input: month, year 
// ---
// nếu month = 1,3,5,7,8,10,12 --> tháng có 31 ngày
// nếu month = 4,6,9,11 --> tháng có 30 ngày
// kiểm tra năm nhuần:
// nếu year chia hết cho 4 ---> năm nhuần --> tháng 2 có 29 ngày
// nếu year không chia hết cho 4 ---> năm không nhuần --> tháng 2 có 28 ngày
// ---
// output: month year
document.getElementById('calculateMonth').onclick = function(){
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    var days;
    
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = "có 31 ngày";
            break;
        case 2:
            if(year%4==0 %% year%100!==0 || year%400==0){
                days = "có 29 ngày";
            }else{
                days = 'có 28 ngày';
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = "có 30 ngày";
            break;
    }
    document.getElementById('result2').innerHTML = days;
}


// bài 3:
// ---
// input: 
// số nguyên Int 3 chữ số 
// hàng trăm, 
// hàng chục, 
// hàng đơn vị
// ---
// xử lí:
// hàng trăm (1-9) : in ra cách đọc "một trăm -> chín trăm"
// hàng chục (0) : in ra cách đọc "lẻ"
// hàng chục (1-9): in ra cách đọc "mười, hai mươi...chín mươi"
// hàng đơn vị (1-9): in ra cach đọc " một, hai....chín"
// ---
// output:
// cách đọc

document.getElementById('read').onclick = function(){
    var Int = +document.getElementById('Int').value;
    var a = Math.round(Int/100);
    var b = Math.round((Int/10)%10);
    var c = Int%10;
    var hangTram;
    var hangChuc;
    var hangDonVi;
//hàng trăm
    switch(a){
        case 1:
            hangTram = "Một trăm";
            break;
        case 2:
            hangTram = "Hai trăm";
            break;
        case 3:
            hangTram = "Ba trăm";
            break;
        case 4:
            hangTram = "Bốn trăm";
            break;
        case 5:
            hangTram = "Năm trăm";
            break;
        case 6:
            hangTram = "Sáu trăm";
            break;
        case 7:
            hangTram = "Bảy trăm";
            break;
        case 8:
            hangTram = "Tám trăm";
            break;
        case 9:
            hangTram = "Chín trăm";
            break;
    }
// hàng chục
    switch(b){
        case 1:
            hangChuc = "mười";
            break;
        case 2:
            hangChuc = "hai mươi";
            break;
        case 3:
            hangChuc = "ba mươi";
            break;
        case 4:
            hangChuc = "bốn mươi";
            break;
        case 5:
            hangChuc = "năm mươi";
            break;
        case 6:
            hangChuc = "sáu mươi";
            break;
        case 7:
            hangChuc = "bảy mươi";
            break;
        case 8:
            hangChuc = "tám mươi";
            break;
        case 9:
            hangChuc = "chín mươi";
            break;
    }
//hàng đơn vị
    switch(c){
        case 1:
            hangDonVi = "mốt";
            break;
        case 2:
            hangDonVi = "hai";
            break;
        case 3:
            hangDonVi = "ba";
            break;
        case 4:
            hangDonVi = "bốn";
            break;
        case 5:
            hangDonVi = "năm";
            break;
        case 6:
            hangDonVi = "sáu";
            break;
        case 7:
            hangDonVi = "bảy";
            break;
        case 8:
            hangDonVi = "tám";
            break;
        case 9:
            hangDonVi = "chín";
            break;
    }

    document.getElementById('result3').innerHTML = `${hangTram} ${hangChuc} ${hangDonVi}`
}