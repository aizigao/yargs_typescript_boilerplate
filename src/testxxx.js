// const type = "varchar(32)";
const type = "enum('121','333','444')"

// const typeWithLen = type.replace(/\(.*\)$/)
// console.log(typeWithLen)
const matches = /.*(\((.*)\))$/.exec(type)
console.log(matches)

if (matches) {
  const [origin, extraWithparentheses, extra] = matches
  let extraResult = null
  const realType = type.replace(extraWithparentheses, '')
  const extraIsNum = /^\d$/.test(extra)
  const extraIsEnum = /^[\d'",]+$/.test(extra)
  if (extraIsNum) {
    extraResult = extra
  }
  if (extraIsEnum) {
    extraResult = extra.replace(/["']/g, '').split(',')
  }
  console.log('rrr', realType, extraResult)
}
