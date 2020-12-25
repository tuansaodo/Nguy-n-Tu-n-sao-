//bai1//
function Bai1(arr) {
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
// bai 2
function  Bai2(arr1,arr2){
    arr = []
    for(let i = 0 ; i < arr1.length ; i++){
        if ( arr2.indexOf(arr1[i],0) == -1){
            arr.push(arr1[i])
            
        }
    }
    for(let j = 0 ; j < arr2.length ; j++){
        if ( arr1.indexOf(arr2[j],0) == -1 ){
            arr.push(arr2[j])
        }
    }
    return arr
}
//bai4 
function bai4(arr){
    let Tb = []
    let tong = 0

    for(let i = 0 ; i < arr.length ; i++){
        Tb.push(arr[i]['age'])
    }

    for(let j of Tb ){
        tong = tong + j
        agetb = tong / 2
    }
    return agetb
}
// bai 5
function Bai5(arr){
    return arr.sort(function(a,b){return b.age - a.age})
}
//bai 6
function Bai6(arr){
    return arr.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
}