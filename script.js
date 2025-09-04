const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


setInterval(() => {
     let Date = new Date()
     let dhour = Date.getHours()
      let dmin = Date.getMinutes()
       let dsec = Date.getSeconds()

       hour.innerHTML = `${formatTime(dhour)}`
       min.innerHTML = `${formatTime(dminute)}`
       sec.innerHTML = `${formatTime(dsec)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? '0' + time : time
}