async function numberFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

async function clionaNumberFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

async function getOrderId(str) {
    var res = str.split("#")[1];
    return res;
}
async function upperCase(str) {
    var res = str.toUpperCase();
    return res;
}

async function getClionaOrderId(str) {
    var patt1 = /\d+/i;
    var result = str.match(patt1);
    return result
}

module.exports = {
    numberFormat,
    getOrderId,
    upperCase,
    getClionaOrderId,
    clionaNumberFormat
}
