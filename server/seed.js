/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data
if (Bats.find().count() === 0) {

  Bats.insert({
    name: "Townsend's Big-eared Bat",
    nameEs: "Corynorhinus townsendii",
    nameLatin: "Corynorhinus townsendii",
    body: " <p>This call starts so fast it almost sounds like a machine gun.</p> <p>See if you can follow along as it ends abruptly in a few slower thuds.</p> ",
    bodyEs: " <p>Esta llamada comienza tan rápido que casi suena como una ametralladora.</p> <p>Vea si usted puede seguir a lo largo ya que termina abruptamente en pocos golpes más lentos.</p>"
});

  Bats.insert({
    name: "Yuma Myotis",
    nameEs: "Yuma Myotis",
    nameLatin: "Myotis yumanensis",
    body: " <p>Quick and high, this call starts out strong. Follow along on the graph as it comes to a halt then picks back up.</p>",
    bodyEs: " <p>Rápida y alta, esta llamada comienza fuerte. Seguir a lo largo de la gráfica, ya que llega a su fin luego toma una copia de seguridad.</p>"
  });

  Bats.insert({
    name: "Mexican Free-tailed Bat",
    nameEs: "Mexicano de cola libre Bat",
    nameLatin: "Tadarida brasiliensis",
    body: "<p>The chirps of this call sound a bit like a bird.</p> <p>See if you can pick out spots where it gets faster and louder on the graph.</p>",
    bodyEs: "<p>Los chirridos de esta convocatoria suenan un poco como un pájaro.</p> <p>Vea si usted puede seleccionar los puntos donde se hace más rápido y más fuerte en el gráfico.</p>",
  });

  Bats.insert({
    name: "Canyon Bat",
    nameEs: "Cañón Bat",
    nameLatin: "Parastrellus hesperus",
    body: " <p>This call gets higher than any of the other calls.</p> <p>Look for extreme changes in its speed and volume on the graph below.</p>",
    bodyEs: " <p>Este llamado se hace mayor que cualquiera de las otras llamadas.</p> <p>Mira tfor cambios extremos en su velocidad y el volumen en la siguiente gráfica .</p>",
  });

}

