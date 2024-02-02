// Import the required module
import inquirer from "inquirer";

// Define the Room class
class Room {
  public description: string;
  public exits: { [direction: string]: Room };

  constructor(description: string, exits: { [direction: string]: Room }) {
    this.description = description;
    this.exits = exits;
  }
}

// Define the Game class
class Game {
  private currentRoom: Room;

  constructor(startRoom: Room) {
    this.currentRoom = startRoom;
  }

  // Method to start the game
  public async start() {
    let gameRunning = true;

    while (gameRunning) {
      console.log(this.currentRoom.description);

      const { direction } = await inquirer.prompt([
        {
          type: "input",
          name: "direction",
          message: "Which direction do you want to go?",
        },
      ]);

      if (this.currentRoom.exits[direction]) {
        this.currentRoom = this.currentRoom.exits[direction];
      } else {
        console.log("You can't go that way.");
      }
    }
  }
}

// Define the rooms
const rooms = {
  room1: new Room("You are in room 1.", {}),
  room2: new Room("You are in room 2.", {}),
};

// Define the exits for each room
rooms.room1.exits["north"] = rooms.room2;
rooms.room2.exits["south"] = rooms.room1;

// Create a new game and start it
const game = new Game(rooms.room1);
game.start();
