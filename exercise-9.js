//exercise 9 no 1
function shoutOut() 
{
  console.log('"Halo Function!"')
}

console.log(shoutOut())



//exercise 9 no 2
function calculateMultiply(num1,num2)
{
  return num1*num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


//exercise 9 nomor 3
function processSentence(name,age,address,hobby)
{
  return "Nama Saya "+name+","+"Umur Saya "+age+","+ "Alamat saya di "+ address+","+ "dan saya punya hobby yaitu "+hobby+ "!"; 
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

