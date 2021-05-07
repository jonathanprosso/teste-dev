module.exports = function validaData(data){
  const arrayData = data.split("/");
  return arrayData[0]+arrayData[1]+arrayData[2];
}