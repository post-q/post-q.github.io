---
publishDate: 2026-04-24T00:00:00Z
title: Czy zmiana paradygmatu architektury przyspiesza Q-Day?
author: Michal Pietrus
excerpt: "Końcówka Q1 2026 wyznacza nowy kierunek: hardware rozwija się swoim torem, a ciężar prac przesuwa się w stronę architektury i modeli obliczeniowych. Wszystko wciąż pozostaje na papierze i poza realną weryfikacją, ale wyraźnie wpływa na percepcję rynku."
image: ~/assets/images/posts/quantum-landscape.gif
tags:
 - where-are-we
metadata:
  canonical: https://postq.pl/czy-zmiana-paradygmatu-architektury-przyspiesza-q-day
---

Końcówka I kwartału 2026 wrzuca na stół interesujący paradygmat, bo po raz pierwszy w takiej skali proponowane rozwiązania [pierwsze](https://arxiv.org/pdf/2603.28627), [drugie](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf), [trzecie](https://arxiv.org/abs/2604.06319) nie celują w optymalizacje sprzętowe, a w model obliczeniowy i architekturę. Choć wszystkie te prace to modele czysto teoretyczne, które dopiero po latach będą mogły być sprawdzone w praktyce, rynek odebrał je jednoznacznie, tj. Q-Day jest bliżej niż dalej. Z pewnością pompowanie bańki na komputer kwantowy trwa i zapewne jeszcze długo potrwa.

## ZKP & PQ

Jeden z papierów jest szczególnie interesujący, tj. ten [drugi](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf) od Google, bo jednocześnie proponuje rozwiązanie architektoniczne, ale bez ujawniania samego rozwiązania. Autorzy dostarczają natomiast dowód z wiedzą zerową (Zero Knowledge Proof; ZKP), którym udowadniają, że posiadają koncept układu kwantowego, który spełnia konkretne założenia. Innymi słowy autorzy nie publikują samego układu, ale udowadniają (via ZKP), że taki posiadają oraz że zachowuje się w konkretny sposób. Zwróć uwagę, że piszą że ich układ potrafi dodawać punkty na krzywej secp256k1 (krzywa Bitcoina, nie NISTowa) i dostarczają na to testy rozmyte (fuzz testing) w postaci 9024 pseudolosowych wejść, które produkują poprawny wynik dodawania na krzywej secp256k1 (po pełne co i jak – rzuć okiem w Appendix A).

Mają zatem dowód na istnienie algorytmu (obwodu), który poprawnie robi dodawanie punktów i mieści się w zadanych zasobach (liczba kubitów oraz liczba bramek Toffoli).

Choć w środowisku ludzie mają różne zdania na ten temat, tj. publikowania papieru bez namacalnego dowodu, a zamiast tego dostarczenie ZKP, nie sposób nie przyznać, że w jakiejś formie jest to eleganckie.

<div class="ciekawostka">
💡 <strong>Ciekawostka</strong><br/>
w zeszłym tygodniu goście z Trail of Bits <a href="https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/">opublikowali wpis</a>, w którym znaleźli błędy w implementacji zkVM i wykorzystali je, żeby wygenerować fałszywy dowód, który przechodził weryfikację.

Niewątpliwie, dzieje się.
</div>


## Krajobraz kwantowy

Jako grafikę do tego wpisu wrzuciłem dość znany diagram, dostępny [tutaj](https://sam-jaques.appspot.com/quantum_landscape_2026), który wielu służył jako zrozumienie gdzie jesteśmy w kontekście Q-Day. Zauważ jak z jednej strony nie wiele się zmieniło w kontekście hardware względem 2025 roku, a jak z drugiej strony w/w papiery wpływają na wciąż tylko teoretyczny stan obecny.



## Podsumowanie


Możesz się zastanawiać co to wszystko oznacza w praktyce, ale, również w praktyce, bez szklanej kuli się nie obejdzie.

Jak to wpływa na Twoją perspektywę modelowania zagrożeń związanych z tym konkretnym problemem, nie ma potrzeby wyjaśniać. Ocena domeny rynku + ekspozycja, zwłaszcza w kontekście poufności (atak [HNDL, tj. zbieraj teraz, odszyfruj później](https://postq.pl/zbieraj-teraz-odszyfruj-pozniej-ile-w-tym-strachu-a-ile-faktow/)), kieruje dziś wielu w stronę kryptografii postkwantowej.

Albo w skrócie, zwłaszcza w kontekście HNDL, np. dla TLS, aktualizacja OpenSSL/BoringSSL + aktualizacja serwera HTTP.
