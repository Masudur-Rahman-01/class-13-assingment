// for Digital clock
function zero(time) {
    return time < 10 ? '0' + time : time;
}

// for subject marks

function marks(mark) {
    
    if (mark >= 0 && mark < 40) {
        return `<p class="alert alert-danger"> Oh! You are Failed <img style= "width: 150px; height: 150px; padding-left: 3em" src="./assets/img/Untitled-1.png.png" alt=""></p>`
    } else if (mark >= 40 && mark <= 60) {
        return `<p class="alert alert-info"> You only pass the exam</p>`
    }else if (mark > 60 && mark <= 100) {
        return `<p class="alert alert-success"> You have done a great result <img style = "padding-left:2em" src="./assets/img/Untitled-2.png" alt=""></p>`
    }
}

const student = [
    {
        id: 1,
        roll: 1,
        name: 'Ahmed Abdullah',
        age: 20,
        bangla: 85
    }
    
]