---
publishDate: 2026-04-27T00:00:00Z
title: Demistyfikacja SLH-DSA i jego praktyczne użycie
author: Michal Pietrus
excerpt: Z jednej strony elegancja i "prostota", ale z drugiej mnogość wariantów i specyficzna aplikowalność.
image: ~/assets/images/posts/slh-dsa.png
tags:
  - pqc-migration
  - slh-dsa
metadata:
  canonical: https://postq.pl/demistyfikacja-slh-dsa-i-jego-praktyczne-uzycie
---

Być moze interesowałeś się już konceptami schematów (algorytmów) post-quantum, ale jeśli nie, przynajmniej spośród tych, które NIST dotychczas opublikował jako FIPSowy standard, SLH‑DSA ([FIPS 205](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf)) jest w moim przekonaniu najbardziej elegancki.

Pisałem już o nim kiedyś [tutaj (końcówka wpisu)](https://medium.com/p/76baa57fea53), natomiast cała rzecz wokół SLH-DSA jest o jego prostocie i nie poleganiu na własnościach matematycznych, jak np. w przypadku ML-DSA. W SLH-DSA opierasz się na "plain-old hash functions"(!).

Oczywiście musisz to włożyć w jakiś koncept, który pozwoli Ci przejść z właśności integralności (hash functions) do autentyczności, gdzie posiadasz klucz prywatny i publiczny. Tu wchodzisz w [XMSS](https://csrc.nist.gov/pubs/sp/800/208/final), ale XMSS są "stateful", czyli potrzebują zewnętrzny stan, np. jakiś licznik zarządzany przez Ciebie, żeby generować kolejne podpisy. Jeśli o to nie zadbasz, kończysz jak kiedyś [Sony i Playstation 3](https://niebezpiecznik.pl/post/game-over-ps3-wyciagnieto-root-key-konsoli/) z "nonce reuse" w ECDSA.

Ale SLH-DSA przychodzi jako "stateless" (w końcu sama nazwa to "Stateless Hash-Based Digital Signature Algorithm"), gdzie nie musisz dbać o stan. Wynika to z połączenia kilku koncepcji: deterministyczny i pseudolosowy wybór indeksów na podstawie hasha wiadomości, połączony z Hypertree i Forest of Random Subsets (FORS).

### Przegląd wariantów SLH-DSA

Elegancja SLH-DSA przychodzi z kosztem, zarówno zasobów i niezbędnych cykli CPU, jak i wielkości (w bajtach) samej sygnatury.

Zobacz:
| Scheme  | Parameter set | NIST level | Pk bytes | Sig bytes | pk+sig | Sign (cycles)|Verify (cycles)|
|--------|--------------|------------|----------|-----------|--------|------|------|
| SLH-DSA | SHAKE-128f  | 1          | 32       | 17,088    | 17,120 |239,793,806|4,764,084|
| SLH-DSA | SHAKE-128s  | 1          | 32       | 7,856     | 7,888  |4,682,570,992|12,909,924|
| SLH-DSA | SHAKE-192f  | 3          | 48       | 35,664    | 35,712 |386,861,992|19,876,926|
| SLH-DSA | SHAKE-192s  | 3          | 48       | 16,224    | 16,272 |8,091,419,556|6,465,506|
| SLH-DSA | SHAKE-256f  | 5          | 64       | 49,856    | 49,920 |763,942,250|19,886,032|
| SLH-DSA | SHAKE-256s  | 5          | 64       | 29,792    | 29,856 |7,085,272,100|10,216,560

_[za PQ signatures ZOO](https://pqshield.github.io/nist-sigs-zoo/)_

Masz 6 wariantów ze względu na rozróżnienie "f" (fast) oraz "s" (small) względem sygnatur, tj. albo masz szybsze podpisywanie i mniej cykli CPU, albo masz mniejszą sygnaturę kosztem większej liczby niezbędnych cykli CPU.

Aha, zapomniałem, każdy powyższy wariant masz też dostępny z funkcją haszującą SHA2 (SHA2-128f albo SHA2-256s), czyli de facto masz 12 wariantów.

Spośród tych 12 wariantów, wszystkie spełniają EUF-CMA, tj. w/w standardy bezpieczeństwa (w/g NIST) są spełnione dla przypadku, gdzie dana para kluczy podpisuje najwyżej 2^64 wiadomości.

Żeby nie było za łatwo, początkiem kwietnia 2026 NIST opublikował [draft(!), SP 800-230](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-230.ipd.pdf) z dodatkowymi wariantami SLH-DSA, gdzie masz dodatkowo:

| Scheme  | Parameter set | NIST level | Pk bytes | Sig bytes
|--------|--------------|------------|----------|-----------|
| SLH-DSA-*-128-24 | SHA2 albo SHAKE  | 1          | 32       | 3,856    |
| SLH-DSA-*-192-24 | SHA2 albo SHAKE  | 3          | 48       | 7,752    |
| SLH-DSA-*-256-24 | SHA2 albo SHAKE  | 5          | 64       | 14,944    |

Te 6 nowych wariantów masz dostępnych w wariancie, gdzie dany klucz podpisuje najwyżej 2^24 wiadomości. Innymi słowy, tą propozycją do wariantów "f" i "s" (powyżej) dokładamy de facto trzeci wariant, tj. "24".

Dodatkowo, w publikacji podają, że aby uzyskać rozmiary sygnatur wariantu "24", proces podpisywania jest jeszcze wolniejszy niż wariantu "s" (small) powyżej (zatem jeszcze wolniej i więcej CPU(!)). Nasuwa się zatem paradygmat "sign-once,
verify-many". Tutaj istotną informacją jest, że weryfikacja powinna być mniej kosztowna.


### Wybór wariantu SLH-DSA

Na początek, SLH-DSA w dowolnym wariancie wybierasz przede wszystkim wówczas, kiedy dziś projektujesz system i jest duża szansa, że system ten będzie dalej w użyciu po 10-20 latach, np. systemy IoT/OT albo device identity. Wszędzie tam, gdzie nie możesz w prosty sposób wymienić kryptografii i zapewnić crypto agility (NIST CSWP 39). Do wykorzystania SLH-DSA rysują się zatem przypadki użycia z silnym powiązaniem z hardware i długim czasem użytkowania.

#### ML-DSA czy SLH-DSA-24 w X.509 PKI?

Choć najtańszy wariant SLH-DSA-*-128-24 daje Ci sygnaturę długości 3,856 bajtów, czyli jakieś dwa i pół dzisiejszego certyfikatu X.509 WEB PKI z podpisem ECDSA (jeden cert ~1440 bajtów), a do tego jeszcze trzeba dorzucić resztę danych certyfikatu. Przyszłościowo zatem (NIST.SP.800-230 to dopiero draft) rozważ na tym root certificate, a CAs i leafs na ML-DSA.

#### SHA2 czy SHAKE?

Implementacyjnie: SHAKE. Ekosystemowo, prawdopodobnie SHA2 (np. sprzętowe wsparcie CPU).
