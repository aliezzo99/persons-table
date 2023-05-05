Hallo und vielen Dank für Ihr Interesse an unsere Firma!

Um Ihren jetzigen Stand in der Programmierung besser einschätzen zu können, haben wir uns für Sie folgende Programmieraufgabe ausgedacht:

Sie sollen eine Webapplikation schreiben, die Daten von einer API lädt, diese aufbereitet und verschiedene Funktionen auf dem Datensatz bereitstellt. Bitte wählen Sie eines der folgenden Javascript Frameworks:

- [Angular](https://angular.io/)
- [React](https://react.dev/)
- [Vue](https://vuejs.org/)

Setzen Sie ein neues Projekt auf und committen Sie dieses Projekt in das bereitgestellte Repository.


## Aufgabe 1
Laden sie die Personen über die bereitgestellt API: https://aracom.de/api/persons.php

Eine Typescript Klasse Person wird vorgegeben.

```typescript
export class Person {
  firstName: string;
  lastName: string;
  birthday: date;
}
```

Stellen sie die Personen in einer Tabelle dar und formatieren Sie die Spalten entsprechend.

## Aufgabe 2
Sortieren Sie die Daten nach dem Vornamen in alphabetischer Reihenfolge.
Dies soll folgendes erfüllen:
- Ausgabe in folgendem Format: 1. Emma, 2. Ben, 3. Paul
- Effizienz auch bei vielen Vornamen
- Umgang mit Null Werten
 
## Aufgabe 3
Erstellen Sie eine Möglichkeit eine neue Person der bestehenden Liste hinzufügen. Dies soll über eine Benutzereingabe möglich sein.  
Halten Sie sich hier and die entsprechenden Richtlinien Ihres Frameworks.
