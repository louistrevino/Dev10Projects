function findMax(){
  var maxNum;
  var array = [1,2,3,4,2,3,6,2,8,123,543,23,2,1,463,1000000];
  maxNum = array[0];
  for (var i=0; i <= array.length-1; i++){
    var currentMax = array[0];
    var currentElement = array[i];
    var nextElement = array[i+1];

    if(currentElement <= nextElement){
      currentMax = nextElement;
    } else {
      currentMax = currentElement;
    }
    if(currentMax > maxNum){
      maxNum = currentMax;
    }
  }
  document.getElementById("maxNum").innerText = maxNum;
}
