//bai1
function kiemTra(number){
    for(i=0;i<number.length;i++){
        if(number[i]<0){
            number[i]=0
        }
    }
    return `${number}`
}
//bai2
function minMax(numbers){
    const minNumber = Math.min.apply(null, numbers);
    const maxNumber = Math.max.apply(null, numbers);
    return `Số lớn nhất là ${maxNumber} và số nhỏ nhất là ${minNumber}`;
}
function minMax2(Array1){
    if (Array1.length < 0) {
        return "Hay nhap vao mang"
    }
    let min = Array1[0];
    let max = Array1[0];
    for (let i = 1; i < Array1.length; i++) {
        if (min > Array1[i]) {
            min = Array1[i];
        }        
    }
    for (let j = 1; j < Array1.length; j++) {
        if (max < Array1[j]) {
            max = Array1[j];
        }        
    }
    return "So nho nhat mang la "+ min + " so lon nhat cua mang la " + max + "."; 
}
//bai3
function chanLe(number){
    let soChan;
    let soLe;
    soChan = number.filter(numbers => (numbers % 2) == 0 );
    soLe = number.filter(numbers => (numbers % 2) != 0 );
    return (`Số Lẻ đầu tiên là ${sole[0]} va số chẵn cuối cùng là ${sochan[sochan.length-1]} `);
}

  