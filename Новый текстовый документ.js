//BEGIN
var a = prompt("Введите число","");
var b = prompt("Введите число","");
var sum = 0;
while (a<b)
{
  a++;
  
  if(a<b) 
    {
      sum+=a;
    }
}    
document.write(sum);
//END