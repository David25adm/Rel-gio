const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')


setInterval(() => {
     let Date = new Date()
     let dhour = Date.getHours()
      let dmin = Date.getMinutes()
       let dsec = Date.getSeconds()

       hour.innerHTML = `${formatTime(dHour)}`
       min.innerHTML = `${formatTime(dMinute)}`
       sec.innerHTML = `${formatTime(dSecond)}`

}, 1000)

function formatTime(time) {
    return time < 10 ? '0' + time : time
}