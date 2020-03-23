import * as mysql from 'mysql'
import * as _ from 'lodash'
import { tranToMockjsStructure } from './utils'

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '777888999',
  database: 'DD01',
})

// step-3
con.connect(function(err) {
  if (err) throw err
  // DB connected
  console.log('Connected!')

  const tableName = 'eve_app_config'
  var sql = `select * from INFORMATION_SCHEMA.COLUMNS FULL where TABLE_NAME='${tableName}'`

  // step-4
  con.query(sql, function(err, result) {
    if (err) throw err
    const tables = [...result].map((item) => {
      const itemData = _.pick(item, [
        'DATA_TYPE',
        'COLUMN_TYPE',
        'COLUMN_DEFAULT',
        'EXTRA',
        'COLUMN_COMMENT',
        'COLUMN_NAME',
        'IS_NULLABLE',
      ])
      return tranToMockjsStructure({
        // TODO: add option use comment as name
        comment: itemData.COLUMN_COMMENT || itemData.COLUMN_NAME,
        value: itemData.COLUMN_NAME,
        // TODO: map mockjs type
        type: itemData.COLUMN_TYPE,
        default: itemData.COLUMN_DEFAULT,
        isNullable: itemData.IS_NULLABLE,
      })
    })
    // console.log(result)
    console.log('result')
    console.log(`{\n${tables.join('\n')}\n}`)

    // console.log(result[1].address)
    // console.log(result[3].name)
  })
  con.end()
})
