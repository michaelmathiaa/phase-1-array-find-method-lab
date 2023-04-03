// code your solution here 

const superbowlWin = array => {
    let winResult = array.find(cbArray => cbArray.result === 'W');
    if(winResult){
        return winResult.year;
    } 
}
