// setTimeout(function() { fireRedLaser(); }, 2500);
// setTimeout(function() { fireBlueLaser(); }, 7000);
// setTimeout(function() { fireGreenLaser(); }, 3000);

// INTRO //
// A.a //

var fireSong = function() {
  var sectionA = 0;
  var introAa = function () {
    setTimeout(function() { fireRedLaser(); }, 000);
    setTimeout(function() { fireBlueLaser(); }, 250);
    setTimeout(function() { fireGreenLaser(); }, 500);

    setTimeout(function() { fireRedLaser(); }, 1500);
    setTimeout(function() { fireGreenLaser(); }, 1750);
    setTimeout(function() { fireBlueLaser(); }, 2000);

    setTimeout(function() { fireBlueLaser(); }, 3500);
    setTimeout(function() { fireGreenLaser(); }, 3750);
    setTimeout(function() { fireRedLaser(); }, 4000);
    setTimeout(function() { fireBlueLaser(); }, 4250);
    setTimeout(function() { fireGreenLaser(); }, 4500);

    setTimeout(function() { fireBlueLaser(); }, 5500);
    setTimeout(function() { fireGreenLaser(); }, 5750);
    setTimeout(function() { fireRedLaser(); }, 6000);
    setTimeout(function() { fireBlueLaser(); }, 6250);
    setTimeout(function() { fireGreenLaser(); }, 6500);

    if (sectionA === 1) {
      return;
    };

    setTimeout(function() { fireBlueLaser(); }, 6750);
    setTimeout(function() { fireGreenLaser(); }, 7000);
    setTimeout(function() { fireBlueLaser(); }, 7250);
    setTimeout(function() { fireRedLaser(); }, 7500);
    setTimeout(function() { fireBlueLaser(); }, 7750);
    sectionA++;
  };

  // FIRE Section A.a //
  setTimeout(function() { introAa(); }, 7000);
  setTimeout(function() { introAa(); }, 15000);

  // A.b
  var introAb = function () {
    setTimeout(function() { fireBlueLaser(); }, 500);
    setTimeout(function() { fireGreenLaser(); }, 750);
    setTimeout(function() { fireRedLaser(); }, 1000);
    setTimeout(function() { fireBlueLaser(); }, 1250);
    setTimeout(function() { fireGreenLaser(); }, 1500);
    setTimeout(function() { fireRedLaser(); }, 1750);
    setTimeout(function() { fireBlueLaser(); }, 2000);
    setTimeout(function() { fireGreenLaser(); }, 2250);
  }
  // FIRE Section A.b //
  setTimeout(function() { introAb(); }, 22000);
  setTimeout(function() { introAb(); }, 24000);
  setTimeout(function() { introAb(); }, 26000);
  setTimeout(function() { introAb(); }, 28000);
};

