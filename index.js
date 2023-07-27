const sujets = ['Le chat', 'Le chien', "L\'oiseau", 'Le lion'];
const verbes = ['mange', 'dort', 'court', 'saute'];
const complements = ['un poisson', 'sur le canapé', 'dans le jardin', 'par-dessus la clôture'];

function genererMessage(){
    const sujet = sujets[Math.floor(Math.random() * sujets.length)];
  const verbe = verbes[Math.floor(Math.random() * verbes.length)];
  const complement = complements[Math.floor(Math.random() * complements.length)];
  const message = `${sujet} ${verbe} ${complement}.`;
  return message;
}