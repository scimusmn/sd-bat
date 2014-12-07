/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data
if (Bats.find().count() === 0) {

  Bats.insert({
    _id: 'townsend-big-ear',
    order: 5,
    name: "Townsend's<br>Big-eared Bat",
    nameEs: "Murciélago orejón<br>de Townsend",
    nameLatin: "Corynorhinus townsendii",
    body: "<p>Watch the graph as this speedy call starts, then ends abruptly in a<br>few slower thuds.</p>",
    bodyEs: "<p>Mira el gráfico al empezar esta veloz llamada, que luego cesa abruptamente en unos pocos golpes sordos más lentos.</p>"
});

  Bats.insert({
    _id: 'yuma-myotis',
    order: 1,
    name: "Yuma Myotis",
    nameEs: "Miotis de Yuma",
    nameLatin: "Myotis yumanensis",
    body: "<p>Follow along on the graph as this high, rapid call comes to a halt,<br>then starts back up.</p>",
    bodyEs: "<p>Sigue el gráfico mientras se desarrolla para ver cómo esta aguda y veloz llamada se detiene abruptamente,<br>y luego comienza otra vez.</p>"
  });

  Bats.insert({
    _id: 'mexican-free-tailed',
    order: 4,
    name: "Mexican<br>Free-tailed Bat",
    nameEs: "Murciélago cola-<br>suelta brasileño",
    nameLatin: "Tadarida brasiliensis",
    body: "<p>See if you can pick out spots on the graph where the short chirps of this call get faster and louder.</p>",
    bodyEs: "<p>Fíjate a ver si puedes detectar los puntos en el gráfico donde los breves chirridos de esta llamada aumentan en<br>velocidad y volumen.</p> ",
  });

  Bats.insert({
    _id: 'canyon-bat',
    order: 2,
    name: "Canyon Bat",
    nameEs: "Pipistrelo del<br>oeste americano",
    nameLatin: "Parastrellus hesperus",
    body: "<p>Find the one place on the graph where this rapid call stops before racing along again.</p>",
    bodyEs: "<p>Encuentra el punto en el gráfico donde esta rápida llamada se detiene antes de comenzar velozmente otra vez.</p>",
  });

  Bats.insert({
    _id: 'western-mastiff',
    order: 3,
    name: "Western Mastiff Bat",
    nameEs: "Murciélago-<br>con bonete mayor",
    nameLatin: "Eumops perotis",
    body: "<p>One of the few bats with a call slow and low enough for people to hear without special equipment. Watch it progress on the graph from<br>low to high.</p>",
    bodyEs: "<p>Uno de los pocos murciélagos con una llamada lenta y lo suficientemente baja en frecuencia para que las personas la oigan sin equipos especiales. Mira cómo se desarrolla en el gráfico de<br>grave a agudo.</p> ",
  });

}

