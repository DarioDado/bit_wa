const Festival = require('./entities/Festival');
const controller = require('./actions/controller');

  

  function createFestivalEvent() {
    const fest = new Festival("Fest", 7);
    const bitef = new Festival("Bitef", 8);

    const tuesdayProgram = controller.createProgram("12/6/2018");
    const wednesdayProgram = controller.createProgram("12/7/2018");

    const transporter = controller.createMovie("Transporter", "action", 95);
    const punisher = controller.createMovie("Punisher", "action", 105);
    const shutterIsland = controller.createMovie("Shutter Island", "action", 138);
    const fightClub = controller.createMovie("Fight Club", "action", 12555);
    const doniDarko = controller.createMovie("Doni Darko", "action", 125);

    tuesdayProgram.addMovie(transporter);
    tuesdayProgram.addMovie(punisher);
    tuesdayProgram.addMovie(shutterIsland);
    tuesdayProgram.addMovie(fightClub);
    wednesdayProgram.addMovie(transporter);
    wednesdayProgram.addMovie(punisher);
    wednesdayProgram.addMovie(shutterIsland);
    wednesdayProgram.addMovie(fightClub);
    wednesdayProgram.addMovie(doniDarko);

    fest.addProgram(tuesdayProgram);
    fest.addProgram(wednesdayProgram);

    console.log(bitef.getData());
    console.log(fest.getData())
  }

  (function() {
    try {
      createFestivalEvent();
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  })();
