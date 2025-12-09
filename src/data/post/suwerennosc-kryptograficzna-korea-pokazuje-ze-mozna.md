---
publishDate: 2025-12-09T00:00:00Z
title: 'Suwerenność kryptograficzna: Korea pokazuje, że można'
author: Michal Pietrus
excerpt: Korea Południowa jako jedyny kraj „Zachodu” (poza USA) stworzyła własne, narodowe standardy post-quantum crypto. To decyzja nie tylko techniczna, lecz strategiczna, pokazująca, że suwerenność cyfrowa zaczyna się nie od kryptografii, lecz od odwagi.
image: ~/assets/images/posts/nist_nsr.png
tags:
  - pqc
  - crypto_sovereignty
metadata:
  canonical: https://postq.pl/blog/suwerennosc-kryptograficzna-korea-pokazuje-ze-mozna
---

Niezależność myślenia wymaga odwagi i pewności we własne możliwości. Nie wiary, że będzie dobrze, a przekonania, że ponieważ to my to zrobiliśmy, to wiemy, jak to jest poskładane.

Niewielki kraj na niewielkim półwyspie poszedł swoją drogą i postawił na swoje post-quantum crypto. Korea Południowa, bo o niej mowa, wybrała drogę, jakiej nie wybrał żaden inny kraj z tzw. świata zachodniego. Choć zarówno schemat SPHINCS+, jak i CRYSTALS-Dilithium to rezultat współpracy zespołów wielonarodowych, przede wszystkim z Europy, to organem standaryzacyjnym pozostaje NIST. Ani niemieckie BSI, ani francuskie ANSSI nie wzięły odpowiedzialności za własne programy post-quantum crypto.

Czy suwerenność kryptograficzna ma jakieś znaczenie?

Rzecz w tym, żeby w sprawie własnego (cyfrowego) bezpieczeństwa narodowego rozumieć, na czym się stoi. Wybranie własnych rozwiązań to jednocześnie wzięcie za nie odpowiedzialności.

Dodatkowo, jeśli uwzględnić sytuację geopolityczną Korei Południowej (i jej sąsiadów), a przede wszystkim świadomość władzy i strategiczne decyzje, że robimy swoje i po swojemu, to okaże się, że ich suwerenność kryptograficzna to tylko jeden z elementów większej całości. Przemysł wojskowy i przemysł elektroniczny jest na miejscu. Eksportuje, a nie importuje.

Podejście Korei Południowej jest unikalne w skali „świata zachodniego”. Liczba propozycji biorących udział w [koreańskim konkursie](https://kpqc.or.kr/competition.html) wyboru schematów post-quantum pokazuje, że silne zaplecze naukowe jest jednym z fundamentów tej niezależności.

Dla jasności, dla sygnatur cyfrowych Koreańczycy proponują schemat [AIMer](https://kpqc.or.kr/images/pdf/AIMer_Document.pdf), bazujący na nieinteraktywnych dowodach wiedzy o zerowej wiedzy (non-interactive zero-knowledge proof of knowledge, NIZKPoK) i funkcji jednokierunkowej [AIM2](https://eprint.iacr.org/2023/1474.pdf). Żeby zgeneralizować, jest to wariant MPC-in-the-Head, czyli dowód oparty na symulacji klasycznego [MPC](https://en.wikipedia.org/wiki/Secure_multi-party_computation) „sam ze sobą”, a nie na faktycznym obliczaniu wielu stron. Innymi słowy, Korea w tym wariancie poszła w zupełnie inną stronę niż NIST.

Schemat drugi, tj. [HAETAE](https://kpqc.or.kr/images/pdf/HAETAE_Document.pdf), jest lattice-based, a zatem konceptualnie podobny do [NIST ML-DSA](https://csrc.nist.gov/pubs/fips/204/final) (CRYSTALS-Dilithium).

W przypadku KEM-ów jest podobnie: jeden konceptualnie jest podobny do [NIST ML-KEM](https://csrc.nist.gov/pubs/fips/203/final) ([SMAUG-T](https://kpqc.or.kr/images/pdf/SMAUG-T_Document.pdf)), a drugi ([NTRU+](https://kpqc.or.kr/images/pdf/NTRU+_Document.pdf)) to zupełnie inna rodzina.

W każdym z tych wyborów widać jedną rzecz: to nie kopiowanie cudzych standardów, lecz projektowanie własnych rozwiązań, zgodnych z własnym interesem.

Korea zatem pokazuje, że kompetencje to nie wszystko. Potrzebna jest odwaga, aby powiedzieć: „bierzemy odpowiedzialność za własne bezpieczeństwo”.

Czy Europa jest gotowa zrobić to samo?

A może my w Polsce powinniśmy przynajmniej rozważyć standardy koreańskie na rzecz cyfrowego bezpieczeństwa narodowego w wariancie post-quantum?
