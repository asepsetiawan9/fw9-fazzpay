export const increaseCounter = (data) => {
    return {
        type: "INCREASE"
    }
}

export const decreaseCounter = (data) => {
    return{
        type: "DECREASE",
        data: data
    } 
}