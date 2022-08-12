
function towelSort (matrix){
  typeof matrix !== "undefined"
  if(!matrix) {return []} 
  else {  
    for (let i=0; i<matrix.length; i++){

    for( let j=0; j< matrix[i].length; j++){
       let index = i%2===0
       ? j
       : (matrix[i].length -j -1);

       console.log(matrix[i][index])
    }
  }
  }
}
module.exports = function towelSort (matrix) {
  return [];
}
