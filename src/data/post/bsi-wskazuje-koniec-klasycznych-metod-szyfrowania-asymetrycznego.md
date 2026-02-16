---
publishDate: 2026-02-16T00:00:00Z
title: BSI wyznacza daty końca klasycznej kryptografii asymetrycznej
author: Michal Pietrus
excerpt: Początek końca kryptografii preQ
image: ~/assets/images/posts/bsi2.png
tags:
  - bsi
  - pqc-migration
metadata:
  canonical: https://postq.pl/bsi-wskazuje-koniec-klasycznych-metod-szyfrowania-asymetrycznego
---

Niemiecki Federalny Urząd ds. Bezpieczeństwa Informacji (BSI) zaktualizował swoje coroczne rekomendacje kryptograficzne ([TR-02102](https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Technische-Richtlinien/TR-nach-Thema-sortiert/tr02102/tr02102_node.html)) i po raz pierwszy wprowadził konkretne daty końcowe do stosowania klasycznej kryptografii asymetrycznej.

OK, ale co się zmienia?

Klasyczne schematy klucza publicznego (tj. RSA/ECIES do szyfrowania, ECDH do uzgadniania klucza) nie powinny być używane samodzielnie po końcu 2031r, a w zastosowaniach o wysokiej wrażliwości już po końcu 2030r.

Zamiast tego rekomendowane są schematy hybrydowe, łączące algorytmy klasyczne (preQ) z kryptografią post-quantum (postQ/PQC).

Dla klasycznych podpisów cyfrowych planowane jest zakończenie wyłącznego stosowania do końca 2035r.

Jednocześnie, BSI rekomenduje szerszy zestaw algorytmów PQC niż tylko "NIST":
- dla KEM: ML-KEM, FrodoKEM, Classic McEliece, HQC
- dla podpisów: ML-DSA, SLH-DSA, oraz schematy bazujące na XMSS/XMSSMT oraz LMS/HSS.

Ogólnie rzecz biorąc, jeśli nadal traktujesz PQC jako temat "na potem", BSI właśnie podało roadmapę z datami.
