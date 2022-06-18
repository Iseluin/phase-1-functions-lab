// Code your solution in this file!

function distanceFromHqInBlocks(num) {

    const value = Math.abs(num-42)
    return  value;
}

function distanceFromHqInFeet(num) {
    const distanceInFeet = distanceFromHqInBlocks(num) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const value = Math.abs((destination - start) * 264)
    return value;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
      } else if (distance > 2000 && distance < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
}