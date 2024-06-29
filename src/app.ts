const heading = document.querySelector('h1');
if (heading) {
  heading.textContent = 'Hello, TypeScript and HTML!';
}
const descrption = document.querySelector('p');
if(descrption){
  descrption.textContent = 'This is script language';
}
function greeting(e:Event):void{
  e.preventDefault();
  
  var data=document.getElementById('username');
  console.log(data);
}