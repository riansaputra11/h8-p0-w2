//exercise 7 -1

var rows1 = 5;
while (rows1 > 0)
{
  console.log('*')
  rows1--;
}



//exercise 7-2
var rows2 = 5;
for (var baris=1; baris<=rows2;baris++)
{
  var bintang='';
  for(var kolom =1 ; kolom <=rows2; kolom++)
  {
    bintang=bintang+'*';
  }
  console.log(bintang);
}

//exercise 7-3
var rows3 = 5;
for (var baris=1; baris<=rows3;baris++)
{
  var bintang='';
  for(var kolom =1 ; kolom <= baris; kolom++)
  {
    bintang=bintang+'*';
  }
  console.log(bintang);
}