export function randomName() {
    const adjectives = [
      "Đuro", "Štef", "Ivo", "Ankica", "Štefica" , "Jovanka", "Đurđica", "Milka", "Dragica", "Joža", "Drago"
    ];
    const nouns = [
      "Babić", "Perić", "Ljubičić", "Kovačević", "Perović", "Konjuh", "Ivanović"
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + " " + noun;
  }