//bai1
function doC(doF){
    return `${doF}\xB0F : ${(doF - 32) / 1.8 }\xB0C`;
}

//bai2
function findNumber(number){
    number.sort(function(a,b){return b-a});
    return number[1];
}

//bai3
function findTheString(arr) {
    let max = arr[0].length;
    let maxstring=arr[0];
    for (i = 1; i < arr.length; i++) {
      if (max < arr[i].length) {
        max = arr[i].length;
        maxstring = arr[i];
      }
    }
    return maxstring;
  }

  //bai4
  function checkTheChain(string, ending) {
    if (ending == null || string == null) {
      return "Hãy nhập dữ liệu!";
    } else {
      let end = string.endsWith(ending);
      return end;
    }
  }

  //bai5
  function checkElement(arr){
    let check = false;
    for (let i = 0; i < arr.length; i++){
      for (let j = i + 1 ; j < arr.length; j++){
          if (arr[i] === arr[j]){
              check = true ;
              break;
           }
        }
    }
    return check;
  }