console.log('GANJIL GENAP case')
for (var counter = 0; counter <= 100; counter++)
{
  console.log('Jumlah Counter: '+counter);
  if (counter % 2 == 0)
  {
      console.log ('GENAP')
  }
  else
  {
    console.log('GANJIL')
  }
}

console.log(' ');
console.log('KELIPATAN CASE')

for(i=1;i<=100; i+=2)
{ 
  if( i % 3 == 0)
  {
    console.log (i+' kelipatan 3')
  }
  else 
  {
    console.log("")
  }
}
  
for(i=1;i<=100; i+=5)
{ 
  if( i % 6 == 0)
  {
    console.log (i+' kelipatan 6')
  }
  else 
  {
    console.log("")
  }
}

for(i=1;i<=100; i+=9)
{ 
  if( i % 10 == 0)
  {
    console.log (i+' kelipatan 10')
  }
  else 
  {
    console.log("")
  }
}  



