//bai1//
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
// bai 2
function arrcomparison(arr1,arr2){
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
function ageTb(arr){
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
function sortAge(arr){
    return arr.sort(function(a,b){return b.age - a.age})
}