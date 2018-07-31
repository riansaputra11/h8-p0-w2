var name = null;
var peran = null;

if (name == null && peran == null)  
{
  console.log('nama dan peran harus diisi!')
}
else if (peran == null)
{
   console.log('Hello' + name + 'pilih peranmu untuk bermain game')
}
else if (peran == 'Ksatria')
{
  console.log('Selamat datang di Dunia Proxytia,' + name)
  console.log('Halo'+ peran + name +  'kamu dapat menyerang dengan senjatamu!')
}
else if (peran == 'Tabib')
{
  console.log('Selamat datang di Dunia Proxytia,' + name)
  console.log('Halo'+ peran + name + 'kamu akan membantu temanmu yang terluka.')
}
else if (peran == 'Penyihir')
{
  console.log('Selamat datang di Dunia Proxytia,' + name)
  console.log('Halo'+ peran + name +  'ciptakan keajaiban yang membantu kemenanganmu!')
}