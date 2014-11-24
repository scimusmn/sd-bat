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
    nameEs: "Corynorhinus townsendii",
    nameLatin: "Corynorhinus townsendii",
    body: " <p>This call starts so fast it almost sounds like a machine gun.</p> <p>See if you can follow along as it ends abruptly in a few slower thuds.</p> ",
    bodyEs: " <p>Esta llamada comienza tan rápido que casi suena como una ametralladora.</p> <p>Vea si usted puede seguir a lo largo ya que termina abruptamente en pocos golpes más lentos.</p>"
});

  Bats.insert({
    _id: 'yuma-myotis',
    order: 1,
    name: "Yuma Myotis",
    nameEs: "Yuma Myotis",
    nameLatin: "Myotis yumanensis",
    body: " <p>Quick and high, this call starts out strong.<br>Follow along on the graph as it comes to a halt then picks back up.</p>",
    bodyEs: " <p>Rápida y alta, esta llamada comienza fuerte. Seguir a lo largo de la gráfica, ya que llega a su fin luego toma una copia de seguridad.</p>"
  });

  Bats.insert({
    _id: 'mexican-free-tailed',
    order: 4,
    name: "Mexican<br>Free-tailed Bat",
    nameEs: "Mexicano de cola libre Bat",
    nameLatin: "Tadarida brasiliensis",
    body: "<p>The chirps of this call sound a bit like a bird.</p> <p>See if you can pick out spots where it gets faster and louder on the graph.</p>",
    bodyEs: "<p>Los chirridos de esta convocatoria suenan un poco como un pájaro.</p> <p>Vea si usted puede seleccionar los puntos donde se hace más rápido y más fuerte en el gráfico.</p>",
  });

  Bats.insert({
    _id: 'canyon-bat',
    order: 2,
    name: "Canyon Bat",
    nameEs: "Cañón Bat",
    nameLatin: "Parastrellus hesperus",
    body: " <p>This call gets higher than any of the other calls.</p> <p>Look for extreme changes in its speed and volume on the graph below.</p>",
    bodyEs: " <p>Este llamado se hace mayor que cualquiera de las otras llamadas.</p> <p>Mira tfor cambios extremos en su velocidad y el volumen en la siguiente gráfica .</p>",
  });

  Bats.insert({
    _id: 'western-mastiff',
    order: 3,
    name: "Western Mastiff Bat",
    nameEs: "Western mastín Bat",
    nameLatin: "Eumops perotis",
    body: " <p>One of the few bats that calls slow and low enough for people to hear without special equipment.</p> <p>Watch the graph to see how it begins slower and lower than any of the other calls before it picks up speed.</p>",
    bodyEs: " <p>Uno de los pocos murciélagos que llama lenta y lo suficientemente bajo como para que la gente escuche sin equipo especial .</p> <p>Vea el gráfico para ver cómo empieza lento y menor que cualquiera de las otras llamadas antes de que se acelera .</p>",
  });

}

