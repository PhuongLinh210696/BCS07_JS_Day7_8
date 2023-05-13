var arr =[]
var arr2 =[]
function nhapSoNguyen() {
    var soNguyen = document.getElementById("soNguyen").value*1;
    arr.push(soNguyen)
    document.getElementById("mangNguoiDungNhap").innerHTML = arr;
}

function tongSoNguyenDuong() {
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(typeof element)
        if(element>0){
            result += element
        } 
    }
    document.getElementById("ketquaSoNguyenDuong").innerHTML = result;
}

function timSoNhoNhat() {
    var min = "";
    min = Math.min.apply(null, arr);
    document.getElementById("ketquaTimSoNhoNhat").innerHTML = min;
}

function timSoDuongNhoNhat() {
    var newArr = [];
    var min ="";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 0) {
            newArr.push(element)
        }
    }
    min = Math.min.apply(null, newArr);
    document.getElementById("ketquaTimSoDuongNhoNhat").innerHTML = min;
}

function timSoChanCuoiCung() {
    for (let i = arr.length; i >= 0; i--) {
        const element = arr[i];
        if (element % 2 == 0) {
            document.getElementById("ketquaTimSoChanCuoiCung").innerHTML = element;
            break;
        }
    }
}


function doiCho() {
    var viTri1 = document.getElementById("viTri1").value *1;
    var viTri2 = document.getElementById("viTri2").value *1;
    arr[viTri1] = arr.splice(viTri2,1,arr[viTri1])[0]
    document.getElementById("ketquaDoiCho").innerHTML = arr;
}

function sapXepTangDan() {
    var sort = arr.sort();
    document.getElementById("ketquaSapXep").innerHTML = sort;
}

function isPrime(num) { // returns boolean
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
  

function soNguyenTo() {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (isPrime(element)==true) {
            document.getElementById("ketquaSoNguyenTo").innerHTML = element;
            break
        }
    }
}

function nhapSoNguyen2() {
    var soNguyen = document.getElementById("soNguyen2").value*1;
    arr2.push(soNguyen)
    document.getElementById("mangMoi").innerHTML = arr2;
}

function demSoNguyen() {
    var count = 0;
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if(Number.isInteger(element)==true){
            count++
        }
    }
    document.getElementById("ketquaDemSoNguyen").innerHTML = count;
}

function soSanh() {
    var countAm = 0;
    var countDuong = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element >= 0){
            countDuong++;
        }else{
            countAm++;
        }
    }
    if (countDuong > countAm) {
        document.getElementById("ketquaSoSanh").innerHTML = "Số dương > Số Âm (" + countDuong + ">" + countAm + ")";
    }else{
        document.getElementById("ketquaSoSanh").innerHTML = "Số dương < Số Âm (" + countDuong + "<" + countAm + ")";
    }
}

  