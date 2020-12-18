//bai1//

function tinhtong(a,b){
    let sum=0;

    for (let i= a + 1; i < b ; i++){
     sum += i;    
    }
    return sum;

}

//bai2//
function tinhtongnguyenduong(a){
    let sum=a;

    for (let i = 1; i <= a /2; i++ ){
        if(a % i ==0){
            sum +=i;
        }
    }
    return sum;
     
}


//bai3//

function kiem_tra_snt(number){
   for (let i =2 ; i< number/2 ; i++){
       if(number % i ==0 ){
           return false
       }
    }
   return true
}

//bai4//
function songuyenTo(number){
    let sum = 0;
    for (let i =2 ; i<= number ; i ++){
        if(songuyenTo(i)){
            sum +=i ;
        }
    }
    return sum
}

//bai5//
function chuHoa(string) {
    string = string.split(" ");
    for (var i = 0, x = string.length; i < x; i++) {
      string[i] = string[i][0].toUpperCase() + string[i].substring(1).toLowerCase();
    }
    return string.join(" ");
  
  }
  
//bai6//
function dauNgang(string) {
    string = string.substring(0).toLowerCase();
    string = string.replace(/ /g, "-");
  
    return string;
  
  }
//bai7//
function chuDoiSung(string) {
    string = string.toLowerCase();
    string = string.replace(/ /g, "");
    var len = string.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
