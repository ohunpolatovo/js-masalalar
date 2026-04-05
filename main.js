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

let v = 60;
let t = 3;
let s = v * t;
console.log(s);

// Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// L= 2 * ПЂ * R, S = ПЂ * R^2

let R = +prompt("Radiusni kiriting:");

let L = 2 * Math.PI * R;
let S = Math.PI * R * R;

console.log("Doira uzunligi (L): " + L);
console.log("Doira yuzasi (S): " + S);
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

//let onlik = a / 10;

//let birlik = a % 10;

//console.log("O'nlik:", onlik); // 8
//console.log("Birlik:", birlik); // 2

//=============================================================================
// Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.
let a = 538; // Ixtiyoriy uch xonali son

// 100 ga bo'lamiz (5.38 chiqadi) va butun qismini olamiz
let yuzlar = a / 100;

console.log("Yuzlar xonasidagi raqam:", yuzlar); // Natija: 5
