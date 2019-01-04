const http=require('http');
const url=require('url');
var login=require('./login');

http.createServer(function(request,response){
  var q=url.parse(request.url,true);
  var m=q.pathname;
  if(m=='/login'){
  response.writeHead(200,{'content-type':'text/html'});
  response.write("<form action=\"/check\" method=\"get\">");
  response.write("<input type=\"text\" name=\"username\" placeholder=\"username\">");
  response.write("</br></br>");
  response.write("<input type=\"password\" name=\"password\" placeholder=\"password\">");
  response.write("</br></br>");
  response.write("<input type=\"submit\">");
  response.write("</form>");
  response.end();
}
if(m=='/check'){
 var data=q.query;
 var username=data.username;
 var password=data.password;
 login(username,password,response);
}

}).listen(8080);
