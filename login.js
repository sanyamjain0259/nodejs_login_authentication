var conn=require('./connect');
var g=conn();

module.exports=function(username,password,response){
  var query = 'SELECT * FROM login WHERE username=\''+username+'\'and password=\''+password+'\'';

  g.query(query,function(error,result){
    if(error) throw error;
    if(result[0]){
      response.writeHead(200,{'content-type': 'text/html'});
      response.write('you are logged in:');
      response.end();
    }
    else{
      response.writeHead(200, {'content-type':'text/html'});
      response.write('wrong data');
      response.end();
    }

  });
}
