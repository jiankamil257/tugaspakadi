var belanja = parseInt(prompt("masukan total belanja"));
document.write(`anda belanja: ${belanja}`);
document.write("\n");
let diskon = 0;
switch(true){
  case (belanja < 100000) :
    document.write(`tidak mendapatkan diskon`);
  case (belanja >= 100000 && belanja < 200000) :
   diskon = (belanja * 10) / 100
    document.write(`anda mendapatkan diskon 10% total menjadi ${belanja - diskon}`);
  case (belanja > 200000) :
    diskon = belanja * 10 / 100
    document.write(`anda mendapatkan diskon 25% total menjadi ${belanja - diskon}`);
}