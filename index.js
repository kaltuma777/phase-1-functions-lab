// Code your solution in this file
// function distanceFromHqInBlocks (block, hqblock) {
//     return block - hqblock
// }
// distanceFromHqInBlocks (43-42)
    
 


// function distanceFromHqInFeet () {

function distanceFromHqInBlocks (block) {
if (block <= 42 ) {
    return 42- block
} else {
    return block - 42
}
}

function distanceFromHqInFeet( block) {
    return distanceFromHqInBlocks (block) * 264
}

function distanceTravelledInFeet(start , destination) {
    return Math.abs ((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
    const farePrice = distanceTravelledInFeet (start , destination)
    if (farePrice < 400 ) {
        return 0
    }
    else if (farePrice > 400 && farePrice <= 2000 ) {
        return (farePrice - 400 ) * 0.02
    }
    else if (farePrice > 2000 && farePrice <= 2500) {
        return 25
     
    }
    else {
        return 'cannot travel that far'
    }

}
