var x=new XMLHttpRequest();//create xmlhttp req
x.onload=function()//when response has loaded
//the following conditional check will not work localli-onli on a server
{
  if(x.status===200)  //if server status was okay
  {
    document.getElementById('content').innerHTML=x.responseText;//update
  }
};
x.open('GET','data.html',true);//prepare the request
x.send(null);//send the request
