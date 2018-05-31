const querystring = require('querystring');

/**
 * 第一个参数：需要
 * @type {number}
 */
// var result = querystring.parse('foo=bar;abc=xyz;abc=123',';',null,{maxKeys:2});
// var result =querystring.stringify({ foo: 'bar', abc: [ 'xyz', '123' ] },'#',':');


// var result = querystring.escape('阿里巴巴');
var  result = querystring.unescape('%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4');
console.log(result);