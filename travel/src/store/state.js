// 因为有的用户禁用了localStorage，或者采用了隐身模式
// 此时无法使用localStorage，如果直接使用localStorage会报错
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
