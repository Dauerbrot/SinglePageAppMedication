# angular-ivy-z21xn1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-z21xn1)


Aufgabe:
Erstelle eine Single Page App, welche folgende Features beeinhaltet:

- Auswahl eines Patienten aus einer Liste
- Anzeige der detailierten Patienteninformationen in einem eigenen Master-Detail-View erstellen
- Anzeige der der Medikamente die für einen aktiven Patienten zur Verfügung stehen
- Ein neues Medikament dem Patienten hinzufügen

=================================

Aufgabe 1)
Erstellung einer Liste mit der Auswahl der aktiven Patienten in einem System:

- Zugriff auf die "patientsList.json" über den "patientlistmock.service" und diese Daten in einer Liste zur Verfügung stellen
- Mit dem Anklicken eines Patienten sollte es möglich sein zwischen verschiedene Patienten im System zu springen

=================================

Aufgabe 2)
Erstellung eines Master Details Views mit den Daten des Patienten.
- Auslesen des Patientens, welcher aus der Patientenliste gewählt wurde und den jeweiligen Patienten mit seinen Informationen aus der patients.js über  "patientlistmock.service" darstellen/präsentieren
- Die Information sollte in einem Header/Detailed View für den Benutzer immer sichtbar sein

=================================

Aufgabe 3)
Erstellung einer View für die Medikamente eines Patienten:
Medikamente des Patienten aus der "medication.js" über "patientlistmock.service" auslesen.
Darstellung der der einzelenen Medikamente ist dem Benutzer überlassen
- folgendes ist noch zu beachten
- hat ein Medikament den Status offen (open) und ist nach dem aktuellen Datum, dann wird das Medikament "Rot" hervorgehoben.
- ist ein Mediklament vom Status gegenen (given) dann wird das Medikament nicht hervorgehoben
- Ist ein Medikament verweigert worden (denied) dann wird das Medikament Gelb hervorgehoben

=================================

Aufgabe 4)
Möglichkeit ein weiteres Medikament der Liste hinzufügen.
Der Benutzer sollte in wenigen Schritten dem Patitenten ein neues Medikament hinzufügen können.
Beim Hinzufügen eines neuen Medikaments ist folgendes zu beachten:
- Name(label) ist frei einzugeben.
- Menge (amount) ist frei einzugeben
- Datum der Gabe (adminitrationTIme) ist ein Datumsfeld + Zeit
- Status (status) Select-Box mit den Zuständen "offen", "gegeben", "verweigert"
-Kommentar (comment): ist nur anzugeben, wenn das Medikament den Status "verweigert" bekommt, dann ist eine Pflichtangabe notwendig.
- akzeptieren fügt das Medikament in der LIste der bestehenden Medikamente hinzu.
 
