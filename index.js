// Code your solution in this file!

function distanceFromHqInBlocks(journey){
    return Math.abs(journey - 42)

}

function distanceFromHqInFeet(blocks){
    return Math.abs(blocks - 42) * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264

}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) <= 400){
    return 0 } 
    else if  (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000){
        return (distanceTravelledInFeet (start, end) - 400 ) * 0.02
    }
    else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500){
        return 25
    }
    else if (distanceTravelledInFeet(start, end) >= 2500){
        return "cannot travel that far"
    }

    
    
  }
