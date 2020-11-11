
function bai1(a, b) {
    if (a > b) {
        return "b phải lớn hơn a. Nhập lại";
    }
    let count = 0;
    function isPrime(n) {
        if (typeof (n) != 'number') {
            return "Đây không phải số";
        }
        if (n < 2) {
            return false;
        }
        else if (n == 2) {
            return true;
        }
        else if (n % 2 == 0) {
            return false;
        }
        else if (n > 2) {
            if (n == 3) {
                return true;
            }
            for (var i = 3; i <= n / 2; i++) {
                if (n % i == 0) {
                    return false;
                    break;
                }
                return true;
            }
        }
    }
    if (typeof (a) != 'number' || typeof (b) != 'number' || typeof (a) == 'NaN' || typeof (a) == 'NaN') {
        return "Yêu cầu nhập số";
    }
    for (let n = a; n <= b; n++) {
        if (isPrime(n) == true) {
            console.log(n);
            count = count + 1;
        }
    }
    return "Tổng số nguyên tố trong khoảng " + a + " và " + b + " là: " + count;
}


function bai2(months, years) {
    if (typeof (months) != 'number' || typeof (years) != 'number') {
        return "Phải nhập số. Yêu cầu nhập lại";
    }
    if (months < 1 || months > 12) {
        return "số phải trong khoảng từ 1 đến 12";
    }
    switch (months) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return "Tháng " + months + "/" + years + " có 31 ngày.";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return "Tháng " + months + "/" + years + " có 30 ngày.";
            break;
        case 2:
            if (years % 4 == 0 && years % 100 !=0 || years % 400 ==0) {
                return "Tháng " + months + "/" + years + " có 29 ngày.";
                break;
            }
            else
                return "Tháng " + months + "/" + years + " có 28 ngày.";
            break;
    }
}


function bai4(Array1, x) {
    Array1.sort(function (a, b) { return a - b });
    Array1.push(x);
    return Array1;
}


function bai5(Array2, x) {
    let n = Array2.length;
    
    Array2.sort(function (a, b) { return a - b });
   
    for (let i = 0; i < Array2.length; i++) {
        if ((Array2[i] >= x && i == 0)) {
            n++;
            for (j = n - 1; j >= i; j--) {
                Array2[j] = Array2[j - 1];
            }
            Array2[i] = x;
            return Array2;
            break;
        } else if ((Array2[i] <= x && Array2[i + 1] > x && i != n - 1) || (Array2[i] <= x && i == n - 1)) {
            
            n++;
            for (j = n - 1; j > i; j--) {
                Array2[j] = Array2[j - 1];
            }
            Array2[i + 1] = x;
            return Array2;
            break;
        }
    }
}


function bai6(a) {
    var tong = 0;
    if (a <= 0) {
        return "Nhập số lớn hơn 0. Nhập lại";
    }
    while (a > 0) {
        var sodu = a % 10;
        a = Math.floor(a / 10);
        tong += sodu;
    }
    return "Tổng của các chữ số trong " + a + " là: " + tong;
}


function bai7(numbers) {
    if (typeof (numbers) != 'number') {
        return "Phải nhập số. Nhập lại";
    }
    function timSoDao(n) {
        let sodao = 0;
        let sodu;
        while (n > 0) {
            sodu = n % 10; 
            sodao = sodao * 10 + sodu;
            n = Math.floor(n / 10);
        }
        return sodao;
    }
    if (numbers == timSoDao(numbers)) {
        return numbers + " số đối xứng"
    }
    else
        return numbers + " không phải số đối xứng";
}


function bai9(m, n) {
    if (m <= 1 || n <= 1) {
        return "Phải nhập số lớn hơn 1"
    }
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= m; k++) {
            if (i == 1 || k == 1 || i == n || k == m) {
                document.write("*");
            }
            else {
                document.write("#");
            }
        }
        document.write("<br>");
    }
}


function bai10(h) {
    if (h <= 1) {
        return "Số nhập phải lớn hơn 1. Nhập lại";
    }
    for (let i = 1; i <= h; i++) {
        for (let k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br>");
    }
}


function bai11(n) {
    if (n <= 1) {
        return " số lớn hơn 1"
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (j >= n - i - 1 && j <= n + i - 1) {
                document.write('*')
            } else {
                document.write('\xa0\xa0');
            }
        }
        document.write("<br>");
    }
}


function bai12(h) {
    if (h < 1 || h % 2 == 0) {
        return "số phải lớn hơn 0 và là số lẻ";
    }
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= h; j++) {
            if (j == i || j == (h - i + 1)) {
                document.write('*');
            }else {
                document.write('#');
            }
        }
        document.write('<br>');
    }
}