import sqlMap from './sqlMap'
export const tranToMockjsStructure = (item) => {
  console.log({ item })
  const {
    //
    comment,
    value,
    type,
    default: defaultV,
    isNullable,
  } = item

  const matches = /.*(\((.*)\))$/.exec(type)
  let realType = type
  let extraResult = ''

  if (matches) {
    // eslint-disable-next-line no-unused-vars
    const [origin, extraWithparentheses, extra] = matches
    realType = type.replace(extraWithparentheses, '')
    const extraIsNum = /^\d+$/.test(extra)
    // const extraIsEnum = /^[\d'",]+$/.test(extra)
    extraResult = extra
    if (extraIsNum) {
      extraResult = String(Math.pow(10, Number(extra)))
    }
  }

  console.log('zzzzyy', { realType, sT: sqlMap[realType], extraResult })
  const mockV = (sqlMap[realType] || '').replace('$$', extraResult)
  const result = `  "${/^\[/.test(mockV) ? `${value}|1` : value}": ${mockV ||
    '""'}, // ${comment}; defaultValue ${defaultV}; isNullable ${isNullable}`
  return result
}
