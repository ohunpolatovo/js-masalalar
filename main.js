// рџ§  1. Tezlikni topish

// Masofa s va vaqt t berilgan.
// Tezlikni toping.
//Formula  v=s/t

//let s = 100;
//let t = 2;

//let v = s / t;
//console.log(v);

//==========================================================================
// рџ§  2. Masofani topish

// Tezlik v va vaqt t berilgan.
// Masofani toping.

//let v = 60;
//let t = 3;
//let s = v * t;
//console.log(s);

// Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// L= 2 * ПЂ * R, S = ПЂ * R^2

//let R = +prompt("Radiusni kiriting:");

//let L = 2 * Math.PI * R;
//let S = Math.PI * R * R;

//console.log("Doira uzunligi (L): " + L);
//console.log("Doira yuzasi (S): " + S);
//=============================================================================
// Begin2. Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
//let a = 5;
//let b = 10;
//let c = a; // 1. A dagi 5 ni C ga olib qo'ydik
//a = b; // 2. B dagi 10 ni A ga berdik
//b = c; // 3. C dagi 5 ni B ga berdik

//console.log("A ning yangi qiymati:", a); // 10
//console.log("B ning yangi qiymati:", b); // 5
//=============================================================================
// Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yigвЂ™indisini chiqaruvchi programma tuzilsin.

//let a = 82;

//let onlik = Math.floor(a / 10);

//let birlik = Math.floor(a % 10);

//console.log("O'nlik:", onlik); // 8
//console.log("Birlik:", birlik); // 2

//=============================================================================
// Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.
//let a = 538; // Ixtiyoriy uch xonali son

//let yuzlar = Math.floor(a / 100);

//console.log("Yuzlar xonasidagi raqam:", yuzlar);

//=============================================================================

// To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b
// P = 2 * (a + b)
//let a = 10; // 1-tomon
//let b = 5; // 2-tomon

//let s = a * b;

//let p = 2 * (a + b);

//console.log("To'g'ri to'rtburchak yuzasi:", s); // 50
//console.log("To'g'ri to'rtburchak perimetri:", p); // 30
//=============================================================================
// Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// M = (a + b) / 2
//let a = 5;
//let b = 10;
//let M = (a + b) / 2;
//console.log(M);
//=============================================================================
// Abdulaziz X kg olmani A soвЂ™mdan, Y kg olmani B soвЂ™mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?
//let x = 5;
//let a_narx = 10000;

//let y = 3;
//let b_narx = 12000;

//let jami = x * a_narx + y * b_narx;

//console.log("Abdulaziz jami " + jami + " so'mlik savdo qildi.");
//==================================================================================
// Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin

let N = 1200;
let M = 60;
let A = N / M;
console.log("kun boshidan boshlab" + A + "minut otdi");
