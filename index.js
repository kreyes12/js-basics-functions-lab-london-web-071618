// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
  return blocks - 42;}
  else {
  return 42 - blocks;
}
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;

}

function distanceTravelledInFeet(block1, block2) {
  if (block1 < block2) {
  return (block2 - block1) * 264;}
  else {
  return (block1 - block2) * 264;
}
}

function calculatesFarePrice(block1, block2) {
  const distance = distanceTravelledInFeet(block1, block2);

  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }

}
