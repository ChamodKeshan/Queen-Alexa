
const fs = require('fs');
if (fs.existsSync('exam.env')) require('dotenv').neon({ path: './exam.env' });

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Amazone.db' : process.env.DATABASE_URL;
// BASE : ex

module.exports = {
  VERSION: 'v1.0.0',
  TEST: 'mytest',
  EXAM: 'EXAM',
  OL: '*O/L*',
  AL: '*A/L*',
  
// ---Subjects----
  SIN: '*SINHALA*',
  SCI: '*SCIENCE*',
  MTS: '*MATHEMATICS*',
  HIS: '*HISTORY*',
  ENG: '*ENGLISH*',
  BUD: '*BUDDHISM*',
  TAM: '*TAMIL*',
  MUS: '*MUSIC*',
  DRA: '*DRAMA*',
  ART: '*ART*',
  DANO: '*DANCING (ORIANTAL)*',
  DANB: '*DANCING (BHARATH)*',
  TAML: '*TAMIL LITERATURE*',
  SINL: '*SINHALA LITERATURE*',
  ENGL: '*ENGLISH LITERATURE*',
  SLT: '*SECOND LANGUAGE TAMIL*' ,
  JAP: '*JAPAN*',
  HIN: '*HINDI*',
  GRO: '*GEOGRAPHY*',
  FRE: '*FRENCH *',
  ENTR: '*ENTRENEURSHIP STUDIES*',
  CIV: '*CIVIC*',
  BAST: '*BUSINAS ACCOUNTING STUDIES*',
  ICT: '*INFOMATION AND COMUNICATION TECHNOLOGY*'  ,
  HOMEC: '*HOME ECONOMIC*',
  HEL: '*HELTH*',
  DIST: '*DISIGN TECHNOLOGY*' ,
  MEDIA: '*COMUNICATION AND MEDIA*' ,
  CRAFT: '*ART AND CRAFT*',
  AGREE: '*AGREE CULTURE*',

  
// ---YEARS----
  Y14: '*2014*',
  Y15: '*2015*',
  Y16: '*2016*',
  Y17: '*2017*',
  Y18: '*2018*',
  Y19: '*2019*',
  Y20: '*2019*',
  Y21: '*2021*',
  
//FILE NAME SUB
USIN: 'SINHALA',
USCI: 'SCIENCE',
UMTS: 'MATHEMATICS',
UHIS: 'HISTORY',
UENG: 'ENGLISH',
UBUD: 'BUDDHISM',
UTAM: 'TAMIL',
UMUS: 'MUSIC',
UDRA: 'DRAMA',
UART: 'ART',
UDANO: 'DANCING (ORIANTAL)',
UDANB: 'DANCING (BHARATH)',
UTAML: 'TAMIL LITERATURE',
USINL: 'SINHALA LITERATURE',
UENGL: 'ENGLISH LITERATURE',
USLT: 'SECOND LANGUAGE TAMIL' ,
UJAP: 'JAPAN',
UHIN: 'HINDI',
UGRO: 'GEOGRAPHY',
UFRE: 'FRENCH ',
UENTR: 'ENTRENEURSHIP STUDIES',
UCIV: 'CIVIC',
UBAST: 'BUSINAS ACCOUNTING STUDIES',
UICT: 'ICT' , 
UHOMEC: 'HOME ECONOMIC',
UHEL: 'HELTH',
UDIST: 'DISIGN TECHNOLOGY',
UMEDIA: 'COMUNICATION AND MEDIA', 
UCRAFT: 'ART AND CRAFT',
UAGREE: 'AGREE CULTURE',



// ---FILE NAEM YEARS----
  UY14: '2014',
  UY15: '2015',
  UY16: '2016',
  UY17: '2017',
  UY18: '2018',
  UY19: '2019',
  UY20: '2019',
  UY21: '2021',

// LINKS



// MAIN SUBJECTS
//--------  SINHALA (A) ---------
  A2015: 'https://drive.google.com/u/1/uc?id=1U_t8jKrz18ddPQlK5rB8qpiEEFVddY-y&export=download',
  A2016: 'https://drive.google.com/u/1/uc?id=1peVcERkRhtmd7NEO_DC2A1pSGRguFVq3&export=download',
  A2017: 'https://drive.google.com/u/1/uc?id=1tvCVvVOinMRWSJ3wDABk3EXOlPg2t6wJ&export=download',
  A2018: 'https://drive.google.com/u/1/uc?id=1b0MbaxwVglsEEPQDHoooWBvKQZWI7zmv&export=download',
  A2019: 'https://drive.google.com/u/1/uc?id=1xR7XD1UmWsT34szD9rLYWIgk9Vs7GIh5&export=download',
 
//--------  SCIENCE (B) ---------
  B2015: 'https://drive.google.com/u/1/uc?id=1H3hNTTmWi0BrRHoIxm38y0WxY-MNGWMH&export=download',
  B2016: 'https://drive.google.com/u/1/uc?id=1yOrVwZ33d7pvNQBQU9oU5-NvOCaF4KL-&export=download',
  B2017: 'https://drive.google.com/u/1/uc?id=1Fr1o3xnpLP2b1CZjxpTAK8LztaFksQZV&export=download',
  B2018: 'https://drive.google.com/u/1/uc?id=1XdmtBupVoLhKLJQ1LIU0gFgNkfattbqL&export=download',
  B2019: 'https://drive.google.com/u/1/uc?id=1OA3oZnCoO0ulhpElrWVKbkHGUXdaQMcX&export=download',

//--------  MATHS (C) ---------
  C2015: 'https://drive.google.com/u/1/uc?id=1zDO2vh1sFXbS0ryB-gn7oUI0r1sz9PJx&export=download',
  C2016: 'https://drive.google.com/u/1/uc?id=1nd2SAxXqMaSP_ufpsLHl52IuQ_xC1gHA&export=download',
  C2017: 'https://drive.google.com/u/1/uc?id=1rdP-Pr4Z03MOObfrDrdxeXroWcPoucDL&export=download',
  C2018: 'https://drive.google.com/u/1/uc?id=1Lhmi9BhS5KpCX9cXWJhuNtGFShIE9JOJ&export=download',
  C2019: 'https://drive.google.com/u/1/uc?id=1Iaz4nvnQgFLXBSiWGcw-seSNF-VJ_TcZ&export=download',
 
//--------  HISTORY (D) ---------
  D2015: 'https://drive.google.com/u/1/uc?id=1SqX403DGSSaASyL2CrVgeXE62acOv2Ma&export=download',
  D2016: 'https://drive.google.com/u/1/uc?id=1pVo_v5WWn1EVjbeuCFzpFRqWJGvbLGZ5&export=download',
  D2017: 'https://drive.google.com/u/1/uc?id=1KlqXmqF-mr-YomNKzp-GcvTQARStVevc&export=download',
  D2018: 'https://drive.google.com/u/1/uc?id=1YRZ8EaBOK0cLBupq5G2iWq47o8ZaYI5S&export=download',
  D2019: 'https://drive.google.com/u/1/uc?id=1nbuNeGWjUfhv35XfeIhzStaTlIugakPo&export=download',

//--------  ENGLISH (E) ---------
  E2015: 'https://drive.google.com/u/1/uc?id=1bKb6Pga8Uj0UsptFlFC0Nk2K-soZSkYG&export=download',
  E2016: 'https://drive.google.com/u/1/uc?id=1gGZHaWKWV37iN_M_uB-KpdXWVMdSN7Dc&export=download',
  E2017: 'https://drive.google.com/u/1/uc?id=12GJyfoKAUzfWO-Kq0HwuNOJqgBpv1yli&export=download',
  E2018: 'https://drive.google.com/u/1/uc?id=1AN_sxwStnv3f9qHErZ787mJdNS55cRKm&export=download',
  E2019: 'https://drive.google.com/u/1/uc?id=1lWurxFWO_ac4LDMU2xihk6pNDWU0XWuL&export=download',

//-------- BUDDISM (F) ---------
  F2015: 'https://drive.google.com/u/1/uc?id=1rsZjWtlG_E4bBOfVvplhSjh8DCQf1oIr&export=download',
  F2016: 'https://drive.google.com/u/1/uc?id=1c83uWoiHRLRHH5WCSvl64W8uwH92nCz_&export=download',
  F2017: 'https://drive.google.com/u/1/uc?id=1pH6s_az5pHlsuLkEuezJsgSKqqYy-9Zu&export=download',
  F2018: 'https://drive.google.com/u/1/uc?id=1EAe5YlmAWxqOzpYYjKAZdNb56z4gretn&export=download',
  F2019: 'https://drive.google.com/u/1/uc?id=1YivtEv6GOKlHBKPMbgTNBZBmnVTVY82f&export=download',



//SECOND BRACKET SUBJECTS
//-------- TAMIL (G) ---------
  G2015: 'https://drive.google.com/u/1/uc?id=1ytZaaHkLOGRZfK7yQa-6feoKUV-thIDI&export=download',
  G2016: 'https://drive.google.com/u/1/uc?id=13CtZaHvaG6ZQJ-e58YF0648poVMr6myR&export=download',
  G2017: 'https://drive.google.com/u/1/uc?id=19w5CeGhQZw_jkTlFJE0xu9nVER3t3W1H&export=download',
  G2018: 'https://drive.google.com/u/1/uc?id=186J4lwjBqlyNiNyzjp2wU2Wu5eXKsKa1&export=download',
  G2019: 'https://drive.google.com/u/1/uc?id=19W26PHBt7HSwwhbIEhULVO4FTe_YwjFz&export=download',

//-------- MUSIC (H) ---------
  H2015: 'https://drive.google.com/u/1/uc?id=1zzEKOGG_zG3G4pgtPPbG82hg0fo1KGDy&export=download',
  H2016: 'https://drive.google.com/u/1/uc?id=1R1el_E5KAfNGu2RMqZRzy69uVXkBxz83&export=download',
  H2017: 'https://drive.google.com/u/1/uc?id=1Gnkp-Fq0Q2F0ps9peCBZS7MZnKl6j9hs&export=download',
  H2018: 'https://drive.google.com/u/1/uc?id=1RgkLM3yshybZSDVXYb7cSZOGDDfOoySP&export=download',
  H2019: 'https://drive.google.com/u/1/uc?id=1-H7VafLre7bSeqwVxh2i3GJ1g9ZFndlD&export=download',

//-------- DRAMA (I) ---------
  I2015: 'https://drive.google.com/u/1/uc?id=1O2h9f7sPpQRiiSIE3MDV0bjOKgbi38Nu&export=download',
  I2016: 'https://drive.google.com/u/1/uc?id=1RX3LOohzLdJNR0KhbUOWw5AR96oF8jtz&export=download',
  I2017: 'https://drive.google.com/u/1/uc?id=1FqJxrKIoKnlX9izo41AmzH7tcEZTYuNO&export=download',
  I2018: 'https://drive.google.com/u/1/uc?id=1WrJ5PaWLV-7E--a1khKfgbNePRu05WLr&export=download',
  I2019: 'https://drive.google.com/u/1/uc?id=18VJTP949Sunp-ucep7zpwKHIPwVKZ26N&export=download',  

//-------- DANCING ORIANTAL (J) ---------
  J2015: 'https://drive.google.com/u/1/uc?id=1YYIe2xykgVXKICmefLBVMj_jn5ciSblS&export=download',
  J2016: 'https://drive.google.com/u/1/uc?id=1ftfWUIXv3fV5N-iWbUuy_NcCeGipf-qU&export=download',
  J2017: 'https://drive.google.com/u/1/uc?id=1YCGeu_A5flDATehxKuWEyDsw-MXquSzR&export=download',
  J2018: 'https://drive.google.com/u/1/uc?id=1vCZm7bPnLVMCS9wxYd3YCwE0J6cIASUO&export=download',
  J2019: 'https://drive.google.com/u/1/uc?id=1fe_QIxgEif_Qn9cO--8VQX0aarx9JdV_&export=download',  

  //-------- DANCING BHARATH (K) ---------
  K2015: 'https://drive.google.com/u/1/uc?id=16bfXDUuZ72lz2_DRQbJUivj1q15yRAyk&export=download',
  K2017: 'https://drive.google.com/u/1/uc?id=12OeongQvWKgMdSoYhkhlzh47ZlYsS9PT&export=download',
  K2018: 'https://drive.google.com/u/1/uc?id=19rfCUaEUb_IAo6xEYEaeMj7q5s6YLh9b&export=download',
  K2019: 'https://drive.google.com/u/1/uc?id=1DSB2EdWzG2gaDpUT50R0iXy-oYFukOPV&export=download',  

//-------- ART (L) ---------
  L2015: 'https://drive.google.com/u/1/uc?id=1yHSQNE4hm6gPgH8E_FVdkTjZx2_J1jgR&export=download',
  L2016: 'https://drive.google.com/u/1/uc?id=11GoHBK0C-UWa5rsNPs_xZ-31DbClhfA4&export=download',
  L2017: 'https://drive.google.com/u/1/uc?id=1HBOXMvcUqGwvTkaOTJGTAvuYcm_2uNh0&export=download',
  L2018: 'https://drive.google.com/u/1/uc?id=1Xuz5QTDs6d8Bky0CWlwDRQHE_xQ272T5&export=download',
  L2019: 'https://drive.google.com/u/1/uc?id=1kIg5g9FM4CTa9jm-A3HLR73aj5MAvvmY&export=download',  

//-------- TAMIL LIT (M) ---------
  M2015: 'https://drive.google.com/u/1/uc?id=10Xqwx3X8hNdbMvnrEXdxAaOrd8vJgleT&export=download',
  M2016: 'https://drive.google.com/u/1/uc?id=1J6lJIufdFF65wzJOHTxj64iIftNpT_sM&export=download',
  M2017: 'https://drive.google.com/u/1/uc?id=1DtF3bDNLT6KtpEF7aX_7OcvuNqwFjdq6&export=download',
  M2018: 'https://drive.google.com/u/1/uc?id=1STof7uc05KGbnrNFTMsKuVMEnMPdF96o&export=download',

//-------- SINHALA LIT (N) ---------
  N2015: 'https://drive.google.com/u/1/uc?id=1AThWxYwumMcq7wYgPWHe_yyWS1GdRseV&export=download',
  N2016: 'https://drive.google.com/u/1/uc?id=11EsgZnEY_9r1Qp2037lS9vIcatnqwFKX&export=download',
  N2017: 'https://drive.google.com/u/1/uc?id=1-yPG5z46vSt6HlTgVypYkFEBfLU1UN6H&export=download',
  N2018: 'https://drive.google.com/u/1/uc?id=1zEQwndjlkDE3GIHyhrzl9OmFgB8TJGyq&export=download',
  N2019: 'https://drive.google.com/u/1/uc?id=10_flMq0B8c3kNeUqjO64WavsH93pAc8Z&export=download',  

//-------- ENGLISH LIT LIT (O) ---------
  O2015: 'https://drive.google.com/u/1/uc?id=1KTBaqHoUtQaUID88cq68g6g0apli2nvl&export=download',
  O2016: 'https://drive.google.com/u/1/uc?id=14Np2ItrYSHFzZgdparhg4XMSne2LMyzx&export=download',
  O2017: 'https://drive.google.com/u/1/uc?id=1L82DwFreYlJn4LyNj2g2nyh0R6cGGSQj&export=download',
  O2018: 'https://drive.google.com/u/1/uc?id=1-7nYuPMgLyc3wlBb9datsHPH55uiIatB&export=download',
  O2019: 'https://drive.google.com/u/1/uc?id=1PuEAzYCNYi5YPjkgYbG1bL-t-zYvf52g&export=download',  



//FIRST BRACKE SUBJECTS 

//tamil first
//-------- SECOND LANGUAGE TAMIL (P) ---------
P2015: 'https://drive.google.com/u/1/uc?id=1U8m6objQlsmjXNuyFkQRXZMmF_IonFGN&export=download',
P2016: 'https://drive.google.com/u/1/uc?id=1Dfd0scdRYhrgIRVHP-0PfxL4OZSrzxmr&export=download',
P2017: 'https://drive.google.com/u/1/uc?id=1Rec5WVaIH7HiutYRyIXJYDPGnH-fdouA&export=download',
P2018: 'https://drive.google.com/u/1/uc?id=1PogLK6AVAnoOFAgNo1vtEiVWwJXYViqB&export=download',
P2019: 'https://drive.google.com/u/1/uc?id=1Q0tTwtzEQGfUNBwkUz90T7I30TVOumes&export=download',

//-------- JAPAN (Q) ---------
Q2015: 'https://drive.google.com/u/1/uc?id=1ow5i0UTyu93crlncGfQyinnafpMcSDBv&export=download',
Q2016: 'https://drive.google.com/u/1/uc?id=1C0TKrvgrFk0Y6iaT6JCx3grIiBPIjSxT&export=download',
Q2017: 'https://drive.google.com/u/1/uc?id=1CjbYkbTaMGaP0Ex-jGS-Kt4hwOU-T-_3&export=download',
Q2018: 'https://drive.google.com/u/1/uc?id=13D6z7N5BIddR6K5qWwUJhoeyS5WM2RuO&export=download',
Q2019: 'https://drive.google.com/u/1/uc?id=10FGl80Wm_9oeAq6nBDQuNCZlr8jr5ji_&export=download',

//-------- HINDI (R) ---------
R2015: 'https://drive.google.com/u/1/uc?id=1Iab09yTnJQNlZZJG2lf_0TfsQbw7Gywc&export=download',
R2016: 'https://drive.google.com/u/1/uc?id=1RpuTM8Cy_uoOWE4ZfSVNWyr8j0gopN0I&export=download',
R2017: 'https://drive.google.com/u/1/uc?id=106dFvEDbGaTNTcMtffoi59l9PRahYH2x&export=download',
R2018: 'https://drive.google.com/u/1/uc?id=1J8crBS7mQMPUohRW_o0UqRK1ex6Btxrb&export=download',
R2019: 'https://drive.google.com/u/1/uc?id=1AxglJqckWzvTNx2xgYnv8xWDmBfryCB9&export=download',

//-------- GEOGROPHY (S) ---------
S2015: 'https://drive.google.com/u/1/uc?id=1wcFB9AuORbb0IzZ7tr4cpt0jZasAN8OC&export=download',
S2016: 'https://drive.google.com/u/1/uc?id=1T3N-8MfzY5GxumZV97Wy13dSsbkQerZV&export=download',
S2017: 'https://drive.google.com/u/1/uc?id=1BOqE9ev0AkmbJ8VXaaDqCsqoiKH0rYvq&export=download',
S2018: 'https://drive.google.com/u/1/uc?id=1pn_cmblAJsOeJVfazOW5iIirz8l5zm-O&export=download',
S2019: 'https://drive.google.com/u/1/uc?id=1dbkWmV7gZdARaJus_7kuzaI77jy5kRtK&export=download',
 
//-------- FRENCH (T) ---------
T2015: 'https://drive.google.com/u/1/uc?id=1VFKRJ11xc0-IS88Q7b5cBSa4eUWdk3vc&export=download',
T2016: 'https://drive.google.com/u/1/uc?id=1OrOzUd5IOApSRBp-YHJT4-FLEGKZ7hmf&export=download',
T2017: 'https://drive.google.com/u/1/uc?id=1c9lrgYkjM_DfJn5KTl9POo7JYTXXuURo&export=download',
T2018: 'https://drive.google.com/u/1/uc?id=1sEz_JjBx-_ZAKbKvAWFGAda2wzYcMu6R&export=download',
T2019: 'https://drive.google.com/u/1/uc?id=1mNdQcnCSw70MqS0cNxxUj4OD8AgASNuR&export=download',

//-------- ව්‍යවසායකත්වය (U) ---------
U2015: 'https://drive.google.com/u/1/uc?id=172p3DUYKlJD48c3kEqqNqyNsyXcw1I9N&export=download',
U2016: 'https://drive.google.com/u/1/uc?id=1U83NLizjhUy8WGl2AiswxQIVudkIlH1u&export=download',
U2017: 'https://drive.google.com/u/1/uc?id=1fUt1eYSK-RY6h2J0PimgJx80or3haxCs&export=download',
U2018: 'https://drive.google.com/u/1/uc?id=1ffScKRcrrxXUyM-1lPoEUXOjEksS4hET&export=download',
U2019: 'https://drive.google.com/u/1/uc?id=16CmZqw2TK_JlkIPu6md1MEdO6DJrY2Ln&export=download',

//-------- CIVIC (V) ---------
V2015: 'https://drive.google.com/u/1/uc?id=1GCV2ji7a_uy3qQGn7g4G1v1tgNk1VSQp&export=download',
V2016: 'https://drive.google.com/u/1/uc?id=1lpTxkgh8Kp3_GW5mbYFLMrid0bW8J-fz&export=download',
V2017: 'https://drive.google.com/u/1/uc?id=1DgVmcf7x3EKhrZy0uN8wKz0N0_z-JVZw&export=download',
V2018: 'https://drive.google.com/u/1/uc?id=1n5r4EVVinB_DGzEUgPXsLvtdFaP9LCns&export=download',
V2019: 'https://drive.google.com/u/1/uc?id=1S9G-CuqPYpfI6DhdNj2zFezpbvCHzyMN&export=download',

//-------- BUSINAS ACCOUNTING STUDIES (W) ---------
W2015: 'https://drive.google.com/u/1/uc?id=1BiY8ANejKzTvvqhPNz4xJf7vcrTdYo01&export=download',
W2016: 'https://drive.google.com/u/1/uc?id=1j0HUcBXtiEgK-2n9HlPaAiqnhk88SQ00&export=download',
W2017: 'https://drive.google.com/u/1/uc?id=1kY97vYGW1pwUCpNgqixQut_iAre5nlje&export=download',
W2018: 'https://drive.google.com/u/1/uc?id=1mBYriZlkhk16jHhsx9U1-hGD4nYVQO4F&export=download',
W2019: 'https://drive.google.com/u/1/uc?id=1y8m7pm4Hsh4w5OyPGK0BkI3Du6tQwqB1&export=download',

//============ 3RD BRA SUBJECTS===============

//INFOMATION AND COMUNICATION TECHNOLOGY (X)

X2015: 'https://drive.google.com/file/d/1YaCOr8a9ZA8oM6vcCWJ8rfOPberODDnC/view?usp=sharing',
X2016: 'https://drive.google.com/file/d/1AZU42nd7yPxTFtUaBzgtWb25d6vBiBiY/view?usp=sharing',
X2017: 'https://drive.google.com/file/d/1cy9mDpS-014nK0ZPy4irdhSfq2oovXNh/view?usp=sharing',
X2018: 'https://drive.google.com/file/d/1Rd4nwKVi9-igr56ylfWglUQBhT46ycU_/view?usp=sharing',
X2019: 'https://drive.google.com/file/d/176fGrblDF1AS7rYXKJHTeegeNMfDsN7O/view?usp=sharing',

//HOME ECONOMIC (Y)

Y2015: 'https://drive.google.com/file/d/1Ak1GzA0PzODG_3SVtlcLwEErh1QZatlZ/view?usp=sharing',
Y2016: 'https://drive.google.com/file/d/1MfF_7aYQhPy_z7eXXSmvQu7Yjjffy0R8/view?usp=sharing',
Y2017: 'https://drive.google.com/file/d/1-Ei0bYyvWAavULiYRg7dWn8aqh_9kMqF/view?usp=sharing',
Y2018: 'https://drive.google.com/file/d/1PyeQlAve-rUsqFPzb4__LaQUEOPcui85/view?usp=sharing',
Y2019: 'https://drive.google.com/file/d/1YzNZFvKjzszjglixVzI2Xbdo9Y2hcO-0/view?usp=sharing',

//HELTH(Z)

Z2015: 'https://drive.google.com/file/d/198BK50G-ZP-dnmjcmJl6Eb1861bcFJCa/view?usp=sharing',
Z2016: 'https://drive.google.com/file/d/1kbr9_Igy6nF4n5XQ5EBcGtcBPfyTd6Bq/view?usp=sharing',
Z2017: 'https://drive.google.com/file/d/1tNNFn8oank89rqIk7ptlYw3X5bMWpyTb/view?usp=sharing',
Z2018: 'https://drive.google.com/file/d/1730csNUpmZgsm68ZyBSyA5d5raMCwUDg/view?usp=sharing',
Z2019: 'https://drive.google.com/file/d/1rNhuC0upD3iQCoeCMeL4UGGI7cPuIvko/view?usp=sharing',

//DISIGN TECHNOLOGY (A1)

A12015: 'https://drive.google.com/file/d/1_4B8HzYym2QtkHsqfLtTTQ-Gui3dtXNX/view?usp=sharing',
A12017: 'https://drive.google.com/file/d/1AnGAyNB4kVRNWONi6C3lf5RHjtgrA9pi/view?usp=sharing',


//COMUNICATION AND MEDIA (A2)
A22015: 'https://drive.google.com/file/d/17dk4gRg0qQ-H3wQG4MRSHt-IHxQjUbpa/view?usp=sharing',
A22016: 'https://drive.google.com/file/d/10T7RkibXfLc5gnLZPUO7mSZTlGlTksUh/view?usp=sharing',
A22017: 'https://drive.google.com/file/d/1xqnz3Lij7nESLMzVXfZldYouxTmo0TEz/view?usp=sharing',
A22018: 'https://drive.google.com/file/d/1bqz_pH7G_6eZmXLR324caC8WsjiM4W8L/view?usp=sharing',
A22019: 'https://drive.google.com/file/d/1yT0wmglqIHy_qBZUQqqYV-T24MyO4w2k/view?usp=sharing',


//ART AND CRAFT (A3)
A32015: 'https://drive.google.com/file/d/1RbMYcQFuxZqxUiTeTghP8ka3xTjMwgIj/view?usp=sharing',
A32016: 'https://drive.google.com/file/d/1mEXaKjUPQLwGgXrrGFCQ25AZ5vkU-w0x/view?usp=sharing',
A32017: 'https://drive.google.com/file/d/1QkGXP16QM2CMFlZcRi2rslN7rQC4zRTN/view?usp=sharing',
A32018: 'https://drive.google.com/file/d/1X6BPmjBUs4K7yCmoCnTlQjjpSIsSgXNt/view?usp=sharing',
A32019: 'https://drive.google.com/file/d/1Sa9vtLz8iaEz7ZkozGF9IWe-mJsdR-Zs/view?usp=sharing',


//AGREE CULTURE (A4)
A42015: 'https://drive.google.com/file/d/1IgDUVtyHZZffc_JgKi3wmdhd-A6pNGdl/view?usp=sharing',
A42016: 'https://drive.google.com/file/d/1s84wOeQTxI1RMyQiYOseQm9DoOn4aZ0R/view?usp=sharing',
A42017: 'https://drive.google.com/file/d/1AdvrJqIVVN76XomLsyTY1klAJ-c6o-NR/view?usp=sharing',
A42018: 'https://drive.google.com/file/d/1zdkM1E8jZFJvc_FAHOKbfWDyc7wDTCMx/view?usp=sharing',
A42019: 'https://drive.google.com/file/d/1umZwhdLC4GSjnCx3Q-XQIVKgAWGeSC-A/view?usp=sharing',



};
