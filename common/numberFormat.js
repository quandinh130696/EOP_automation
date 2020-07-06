// export function formatNumber(num) {
//     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
//   }
module.exports = function (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}