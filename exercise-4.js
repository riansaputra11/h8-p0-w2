
var tanggal = 10
var bulan = 2
var tahun = 2000


if (tanggal > 0 && tanggal <= 31)
{
  console.log(tanggal)
}
else 
{
  console.log('tanggal invalid')
}

switch (bulan) {

            case 1:

                  console.log("January");

                  break;

            case 2:

                  console.log("February");
                  
                  break;

            case 3:

                  console.log("March");

                  break;

            case 4:

                  console.log("April");

                  break;

            case 5:

                  console.log("May");

                  break;

            case 6:

                  console.log("June");

                  break;

            case 7:

                  console.log("July");

                  break;

            case 8:

                  console.log("August");

                  break;

            case 9:

                  console.log("September");

                  break;

            case 10:

                  console.log("October");

                  break;

            case 11:

                  console.log("November");

                  break;

            case 12:

                  console.log("December");

                  break;

            default:

                  console.log("Invalid month.");

                  break;

            }

if (tahun >= 1900 && tahun <= 2200)
{
  console.log(tahun)
}
else 
{
  console.log('tahun invalid')
}

console.log(tanggal, bulan, tahun)