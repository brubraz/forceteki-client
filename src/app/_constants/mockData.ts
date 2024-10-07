export const mockPlayer: Participant = {
  id: "player1",
  type: "player",
  deckSize: 30,
  cards: Array.from({ length: 10 }, (_, i) => {
    const unitType = Math.random() > 0.5 ? "ground" : "space";
    return {
      id: i + 1,
      name: `Player Card ${i + 1} (${
        unitType.charAt(0).toUpperCase() + unitType.slice(1)
      })`,
      unitType: unitType,
    };
  }),
};

export const mockOpponent: Participant = {
  id: "opponent1",
  type: "opponent",
  deckSize: 25,
  cards: Array.from({ length: 10 }, (_, i) => {
    const unitType = Math.random() > 0.5 ? "ground" : "space";
    return {
      id: i + 11,
      name: `Opponent Card ${i + 1} (${
        unitType.charAt(0).toUpperCase() + unitType.slice(1)
      })`,
      unitType: unitType,
    };
  }),
};
