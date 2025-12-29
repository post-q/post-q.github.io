---
publishDate: 2025-12-29T00:00:00Z
title: NIST CSWP 39 – Kryptograficzna zwinność wchodzi do mainstreamu
author: Michal Pietrus
excerpt: Crypto agility jako fundament przyszłej kryptografii, elastycznej i gotowej na zmiany algorytmów. Ewolucja, nie rewolucja.
image: ~/assets/images/posts/chaningroom.png
tags:
  - pqc
  - nist
  - crypto_agility
metadata:
  canonical: https://postq.pl/blog/nist-cswp-39-kryptograficzna-zwinnosc-wchodzi-do-mainstreamu
---

Zaraz przed (dopiero co minionymi) Świętami, [NIST opublikował Cybersecurity White Paper (CSWP) 39](https://csrc.nist.gov/pubs/cswp/39/considerations-for-achieving-cryptographic-agility/final), który popchnął koncept kryptograficznej zwinności ([cryptographic agility](https://en.wikipedia.org/wiki/Cryptographic_agility)) do mainstreamu. Termin, który wcześniej kojarzony był głównie z Wikipedią, awansował do bycia strategicznym podejściem do migracji w kierunku kryptografii postkwantowej (PQC).

Dla przypomnienia, kryptograficzna zwinność to możliwość operowania różnymi algorytmami w czasie rzeczywistym. Bez zmiany polityk, czy dotykania kodu. Jak wymiana koła w samochodzie, wymieniasz i jedziesz dalej.

NIST proponuje włączenie kryptograficznej zwinności do strategicznego planu organizacji dotyczącego zarządzania ryzykiem kryptograficznym ([rozdział 5](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.39.pdf)). Wprowadzenie takiej zwinności obejmuje wiele warstw, od governance i zarządzania ryzykiem, przez protokoły, aż po niskopoziomowe szczegóły implementacyjne. Oznacza to również konieczność stworzenia wewnętrznych wykazów algorytmów kryptograficznych używanych w organizacjach (cryptographic bills of materials; CBOM), aby zwiększyć świadomość i zdefiniować ścieżki migracji. Dla większości, stworzenie CBOM będzie nie lada wyzwaniem i bez automatyzacji zadaniem w zasadzie niewykonalnym, zwłaszcza gdy uwzględnisz zależności, ich zależności itd.

Niektóre z tych ścieżek migracyjnych oprą się na powszechnych standardach, a inne będą wymagać podejścia bardziej wyrafinowanego. Część z nich wykorzysta protokoły takie jak TLS, które zanim ustanowią połączenie, umożliwią stronom negocjacje i wybór, jakie algorytmy kryptograficzne zostaną użyte podczas połączenia. Inne będą zależne od bardziej rygorystycznych metod, z predefiniowanymi listami opcji, jak w przypadku protokołu [Composable Event Streaming Representation (CESR)](https://trustoverip.github.io/kswg-cesr-specification/).

Niewątpliwie, kryptografia postkwantowa zmieni obecny porządek, nie tylko w obszarze algorytmów, ale także protokołów i modeli zaufania, które je wykorzystują. Nieuchronnie, pojawią się nowe podejścia mające na celu wsparcie kryptograficznej zwinności przy jednoczesnym zachowaniu interoperacyjności w obliczu ewoluujących wymogów governance.
