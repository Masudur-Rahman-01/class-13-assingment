// Digital clock start here

const clock = document.querySelector('.clock');
setInterval(function () {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = h >= 12 ? 'PM' : 'AM'
    let h1 = h > 12 ? h - 12 : h
    
    clock.innerHTML = `${zero(h) && zero(h1)}:${zero(m)}:${zero(s)}${ampm}`
}, 1000);
// Digital clock end here

// counter with loader start here
const start = document.querySelector('#start');
const output = document.querySelector('#output');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let counter_value = 0
let counter

start.addEventListener('click', function () {
    
    counter = setInterval(function () {
        output.innerHTML = counter_value;
        counter_value++;
    }, 1000)
})

stop.addEventListener('click', function () {
    clearInterval(counter)
})

reset.addEventListener('click', function () {
    counter_value = 0
    output.innerHTML = counter_value
    clearInterval(counter)

})
// counter with loader end here


// basic to do start here

const doing = document.querySelector('#doing')
const add = document.querySelector('#add')
const list = document.querySelector('#list')

add.addEventListener('click', function () {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerText = doing.value
    list.appendChild(li)
    doing.value = ''

})
// basic to do end here


// subject marks start here
const box = document.querySelector('.box')
student.map(data => {

    box.innerHTML = `
    Id      : ${data.id}
    Roll    : ${data.roll}
    Name    : ${data.name}
    Age     : ${data.age}
    Bangla  : ${data.bangla}

     ${marks(data.bangla)}

    `   
})
// subject marks end here


