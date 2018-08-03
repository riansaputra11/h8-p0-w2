var tanggal = 11
var bulan = 4
var tahun = 1988


var tipeTanggal;                
  if (tanggal >= 1 && tanggal <= 31)
  {
  tipeTanggal = tanggal;
  }
  else
  {
  console.log("Tanggal tidak valid")
  }

var tipeBulan;
switch (bulan) {
            case 1:
                  tipeBulan = "January";
                  break
            case 2:
                  tipeBulan = "February";              
                  break;
            case 3:
                  tipeBulan = "Maret";
                  break;
            case 4:
                  tipeBulan = "April";
                  break;
            case 5:
                  tipeBulan = "Mei";
                  break;
            case 6:
                  tipeBulan = "Juni";
                  break;
            case 7:
                  tipeBulan = "July";
                  break;
            case 8:
                  tipeBulan = "Agustus";
                  break;
            case 9:
                  tipeBulan = "September";
                  break;
            case 10:
                  tipeBulan = "October";
                  break;
            case 11:
                  tipeBulan = "November";
                  break;
            case 12:
                  tipeBulan = "Desember";
                  break;
            default:
                  console.log("Bulan tidak valid");
                  break;
            }
  var tipeTahun                
  if (tahun >= 1900 && tahun <= 2200)
  {
  tipeTahun = tahun;
  }
  else
  {
  console.log("Tahun tidak valid")
  }
console.log(tipeTanggal+' '+tipeBulan+ ' '+ tipeTahun)