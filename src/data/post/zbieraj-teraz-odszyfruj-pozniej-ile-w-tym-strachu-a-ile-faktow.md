---
publishDate: 2025-11-25T00:00:00Z
title: Zbieraj teraz, odszyfruj później — ile w tym strachu, a ile faktów?
author: Michal Pietrus
excerpt: Krótka analiza, na ile realne jest zagrożenie "Zbieraj teraz, odszyfruj później" i kiedy faktycznie warto myśleć o zabezpieczeniach post-kwantowych.
image: ~/assets/images/posts/qubits_game.png
tags:
  - pqc
  - hndl
metadata:
  canonical: https://postq.pl/blog/zbieraj-teraz-odszyfruj-pozniej-ile-w-tym-strachu-a-ile-faktow
---

Wynik rozgrywki jest jednoznaczny: drużyna preQuantumCrypto zawsze przegra z drużyną QuantumComputer. ⚡

Cała dzisiejsza kryptografia klucza publicznego (DH, ECDSA, Noise, RSA, TLS), na której budujemy poufność/prywatność w komunikacji cyfrowej, jest — mówiąc wprost — zaorana przez możliwości komputera kwantowego.

O ile taki do zastosowań kryptograficznych zostanie zbudowany…

Cała rzecz o komputerze kwantowym polega w jakiejś części na manipulacji strachem, a w szczególności dotyczy to specyficznego rodzaju ataku "Zbieraj teraz, odszyfruj później" (Harvest Now, Decrypt Later, HNDL).

HNDL oznacza, że potencjalnie w przyszłości powstanie komputer pozwalający odczytać cokolwiek zostało zaszyfrowane dziś. ⏳
Dlatego pojawiają się zachęty, aby zaszyfrowany ruch cyfrowy agregować już teraz.

Potencjalnie zaszyfrowany ruch cyfrowy każdego z nas może być agregowany, ale w praktyce jest to trochę bardziej subtelne. Spróbuj wyobrazić sobie świat, w którym cały ruch cyfrowy podróżuje w sposób niezaszyfrowany.

Kogo najpierw chciał(a)byś podsłuchiwać, żeby odnieść z tego największe korzyści? Aha — załóż, że kierujesz którymś dużym i bogatym państwem, bo tylko takie będzie stać na komputer kwantowy zdolny do zastosowań kryptograficznych.

Problem HNDL to pewna gra ryzyk, ale jednocześnie już dziś istnieje relatywnie proste zabezpieczenie przed tym problemem: rozwiązania hybrydowe, łączące dzisiejsze i przyszłe algorytmy kryptograficzne.

To nie tylko zabezpiecza przed przyszłym komputerem kwantowym, ale też przed scenariuszem, w którym nowe algorytmy PQC okażą się wadliwe.

Czy przejmować się HNDL powinno wynikać wprost z analizy ryzyka (zapraszam, pomogę). 📊
W większości przypadków odpowiedź będzie negatywna, ale... mniejszość przypadków wymaga analizy.

W skrócie:
— jeśli dziś robisz e-commerce 🛒📦, nie przejmuj się.
— jeśli jesteś bankiem 🏦 albo dostawcą infrastruktury krytycznej — analiza i działanie.
