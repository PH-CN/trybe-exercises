import Colors from "./colors";
import Directions from "./directions";
import Doors from "./doors";
import Car from "./car";

const gol = new Car('volkswagen', Colors.SILVER, 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);