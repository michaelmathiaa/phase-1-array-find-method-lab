// code your solution here 

const superbowlWin = array => {
    for(const win of array){
        if(win.result === 'W'){
            return win.year;
        }
    }
}
