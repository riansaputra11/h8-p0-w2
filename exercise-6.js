//exercise 6-1 while
console.log('Looping Pertama');  
var nilai = 1;
while(nilai <= 20 ) 
{
  if (nilai % 2 ==0)
  {
    console.log (nilai +'-'+ 'I love coding') 
  }
  else
  {
  }
  nilai++;
}

console.log('Looping Kedua');

while (nilai >= 1)
{
   if (nilai % 2 ==0)
  {
    console.log (nilai +'-'+ 'I will become full stack Developer') 
  }
  else
  {
  }
  nilai--;
}


//exercise 6-2 ForLooping

console.log('Looping Pertama');  
for(var nilai = 1; nilai < 21; nilai++)
{
  console.log (nilai +'-'+ 'I love coding')
}
console.log('Looping Kedua');  
for(var nilai = 20 ; nilai > 0; nilai--)
{
  console.log (nilai +'-'+ 'I will become full stack Developer')
}


//exercise 6-3 GANJIL GENAP
for (var counter = 1; counter <= 100; counter++)
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

//exercise 6-3 KELIPATAN
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