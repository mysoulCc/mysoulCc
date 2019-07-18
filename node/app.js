var express=require('express');
var app =express();
 
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});
 
var questions=[
{
    data:213,
    num:444,
    age:12
},
{
    data:456,
    num:678,
    age:13
}];
var questions2=[
    {
        data:111,
        num:222,
        age:12
    },
    {
        data:"aaa",
        num:"vvv",
        age:"ee"
    }];
 
//写个接口123
app.get('/123',function(req,res){
    res.status(200),
    res.json(questions)
});
app.get('/456',function(req,res){
    res.status(200),
    res.json(questions2)
});
 
//配置服务端口
 
var server = app.listen(3000, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
 
    console.log('Example app listening at http://%s:%s', host, port);

})