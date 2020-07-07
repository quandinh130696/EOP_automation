async function numberFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

async function getOrderId(str) {
    var res = str.split("#")[1];
    return res;
}
async function upperCase(str) {
    var res = str.toUpperCase();
    return res;
  }
module.exports =  {
    numberFormat,
    getOrderId,
    upperCase
}
