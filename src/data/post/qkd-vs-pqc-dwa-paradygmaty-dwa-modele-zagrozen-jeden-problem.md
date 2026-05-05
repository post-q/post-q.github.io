---
publishDate: 2026-05-05T00:00:00Z
title: QKD vs. PQC | dwa paradygmaty, dwa modele zagrożeń, jeden problem
author: Michal Pietrus
excerpt: Zabezpieczenia hardware (QKD), zabezpieczenia software (PQC), a może jak zwykle, to zależy?
image: ~/assets/images/posts/qkd_pqc.png
tags:
  - pqc
  - qkd
metadata:
  canonical: https://postq.pl/qkd-vs-pqc-dwa-paradygmaty-dwa-modele-zagrozen-jeden-problem
---
Dwa odrębne paradygmaty zabezpieczeń w komunikacji cyfrowej, ale powstałe w kontekście jednego zagrożenia, wprost związanego z kryptograficznie efektywnym komputerem kwantowym (CRQC).

Choć większe agencje rządowe, jak BSI, ANSSI czy NSA (nie wchodzę w teorie spiskowe), już jakiś czas temu wyraziły swoją opinię na ten temat[\[1\]](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Crypto/Quantum_Positionspapier.html)[\[2\]](https://cyber.gouv.fr/nous-connaitre/publications/publications-internationales/position-paper-on-quantum-key-distribution/)[\[3\]](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/), tematu tego jeszcze nie poruszałem, zatem dziś wchodzi na stół. Opinia powyższych jest jednoznaczna, tj. traktuje o praktycznej (pragmatycznej w znakomitej większości przypadków) przewadze PQC nad QKD.

Z każdej z w/w opinii wyłowisz pewien kontekst "dlaczego nie idź tą drogą", natomiast, jak to zwykle bywa, odpowiedzi jest kilka.

QKD, czyli Quantum Key Distribution, to koncept oparty o istnienie bramek (nadawca->odbiorca, p2p), gdzie nadawca, Grażyna, korzystając z własności mechaniki kwantowej, jest dostawcą entropii, a odbiorca, Janusz, jej biorcą (tutaj poprzez protokół [\[BB84\]](https://pl.wikipedia.org/wiki/BB84)). Idąc dalej, warto by wejść w mechanikę kwantową celem zrozumienia na jakich zasadach funkcjonują QKD, albo co jest tym źródłem entropii, ale celowo to pomijam.

#### No dobra, ale po co ta entropia?

Zwróc uwagę czym jest wsad do [algorytmów symetrycznych](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) jak AES czy ChaCha20. W szczególności, że w tych algorytmach poza  szyfrowaną wiadomością, do szyfrowania potrzebujesz klucza szyfrującego i dokładnie taką rolę pełni infrastruktura QKD, tj. dostawcy losowego klucza, wynikającego wprost z własności mechaniki kwantowej. Zatem jeśli Grażyna i Janusz posiadają bramki QKD, wykorzystują je do przesyłania tego klucza. Jeśli natomiast pojawia Andrzej i próbuje podsłuchać komunikację, Grażyna i Janusz, są w stanie wykryć że są podsłuchiwani, co znowu wynika z własności mechaniki kwantowej.

W praktyce w infrastrukturze QKD masz dwa kanały komunikacji: kwantowy (niezaufany) i klasyczny (uwierzytelniony). Ten pierwszy jest w pewnym sensie kanałem przesyłania entropii, natomiast żeby zweryfikować poprawność odczytu, strony komunikują się dodatkowo kanałem klasycznym.

W QKD potrzebujesz zatem dodatkową infrastrukturę (hardware + software), masz większy narzut komunikacyjny (synchronizacja stanu), potrzebujesz kanał klasyczny zabezpieczony (uwierzytelniony) klasyczną kryptografią, a bramki są de facto SPOF (single point of failure).

W zamian otrzymujesz protokół kwantowej dystrybucji klucza. Tylko tyle. Zatem szyfrowanie (i deszyfrowanie) danych, bo na nich Ci przecież zależy, zostaje po staremu. Nic się nie zmienia.

Nasuwa mi się skojarzenie perimeter model (castle-and-moat network model) (QKD) vs. paradygmat Zero Trust Architecture (ZTA) [\[NIST SP 800-207\]](https://www.nist.gov/publications/zero-trust-architecture) (PQC). Przejmujesz kontrolę nad bramką (trust anchor) dostępową QKD i dostajesz pełną kontrolę. Z kolei w przypadku PQC (i analogią ZTA) masz zupełnie inną granularność. Zupełnie inny model zagrożeń.

Ale... jeśli przyjmiesz, że dzisiejsze routery z IPsec wzbogacasz jakimś wariantem wyposażonym w komponent QKD, otrzymujesz na poziomie szkieletowym możliwość transmisji informacji, które wrzucasz tam jako plaintext, a przesyłasz jaki ciphertext, bo za szyfrowanie odpowiada infrastruktura i sprzęt.

Praktyczne zastosowanie takiego podejścia to wewnątrz korporacyjna komunikacja, gdzie przesyłasz dane z A do B. Jeden z banków, konkretnie H\*\*C dokładnie dlatego wszedł w QKD. Zatem delegując szyfrowanie (oraz uwierzytelnianie) do zupełnie innej warstwy w modelu OSI, zakładając QKD, dostajesz pewne benefity, ale jak to zwykle bywa, nie za darmo.

Wkładając dane w "szyfrującą rurę", ogólnie rzecz biorąc, w pewnych sytuacjach jest prościej, np. wiele źródeł danych, z których każde z osobna trzeba by wyposażyć w bezpieczny kanał komunikacyjny (np. TLS). Co możesz zrobić zamiast tego to puścić wszystko via IPsec+QKD.

Inny przykład: wiele źródeł danych, ale geograficznie rozproszonych, zatem trudno je spiąć fizycznie w jeden (albo trzy) kanał(y) komunikacyjny(e). Taniej pójść w PQC.

Jeszcze inny przykład: Ty i Twoja cyfrowa komunikacja z Twoim bankiem. QKD czy PQC?

Zupełnie osobną kwestią jest też dojrzałość dzisiejszych systemów opartych na QKD, ale z czasem i to się zmieni.

Oceń sam praktyczną aplikowalność QKD w Twoim ekosystemie.

Na koniec warto wspomnieć, że WOC także [działa](https://www.wojsko-polskie.pl/woc/articles/aktualnosci-w/pierwsze-polaczenie-przy-uzyciu-polskiej-technologii-kwantowej-za-nami/) w tym temacie. Niezależnie po której stronie stoisz w kontekście QKD, zbieranie doświadczenia w technologiach potencjalnie istotnych możliwe jest tylko wówczas, gdy rzeczywiście robisz to sam.
