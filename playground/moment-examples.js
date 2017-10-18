var moment = require('moment')

console.log(moment().format())

var now = moment()
console.log(now.unix())

var timestamp = 1508347206

var currentTime = moment.unix(timestamp)

console.log('converted back: ' + currentTime.format('MMM D Qo'))