export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  // 拆分并添加className
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 测试元素是否含有该类名
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
