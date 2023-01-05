var url=require('url');
var adr='http:/localhost:8080/default.html?year=2020&month=january';
var q=url.parse(adr,true);

console.log(q.host);//return 'localhost:8080'
console.log(q.pathname);//returns '/default.html'
console.log(q.search);//returns '?year=2020&month=january'

var qdata=q.query;//returns an object:{year:2020, month:january}
console.log(qdata.month);//returns 'january'
console.log(qdata.year);