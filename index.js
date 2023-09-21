// Code your solution in this file!
const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function () {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function () {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num) {
    return function (fare) {
        return fare * num
    }
}


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0,2)
    } else if (selectingDrivers === returnLastTwoDrivers) {
        return arrayOfDrivers.slice(-2)
    }
}