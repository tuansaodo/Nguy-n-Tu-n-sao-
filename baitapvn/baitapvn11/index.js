function doC(doF){
    return `${doF}\xB0F : ${(doF - 32) / 1.8 }\xB0C`;
}

function doF(doC){
    return `${doC}\xB0C : ${(doC * 1.8) + 32}\xB0F`; 
}

function theKy(soNam) {
    let TheKy = Math.ceil((soNam)/100 );
    console.log(TheKy);
}

function kiemTraTheKy(nam) {
    if (nam % 100 == 0) {
        console.log(`Nam ${nam} thuoc the ky thu ${nam/100}`)
    } 
    else {
        console.log(`Nam ${nam} thuoc the ky thu ${Math.floor(nam/100) + 1}`)
    }
}

function catChuoi(x) {
    let y;
    if (typeof x == "string") {
      y = x;
    } else {
      y = x.toString();
    }
  
    return y.substring(0, 10) + "...";
  }

function chuHoa(text){
    return (`${(text.substring(0,1)).toUpperCase()}${(text.substring(1)).toLowerCase()}`)
}