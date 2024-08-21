export const formateTime = (inputDate) =>{
    const date = new Date(inputDate);
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())

    return `${hours}:${minutes}`
}

// helper function to pad single number digit with a leading zero;
function padZero(number) {
return number.toString().padStart(2, "0")
}