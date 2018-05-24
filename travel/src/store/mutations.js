export default {
  changeCity (state, city) {
    state.city = city
    // 同理，防止浏览器不支持localStorage
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
