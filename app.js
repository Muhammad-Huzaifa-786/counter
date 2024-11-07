var hour = 1
var min = 1
var sec = 1
var msec = 0

var dis1 = document.getElementById('dis1')
var dis2 = document.getElementById('dis2')
var dis3 = document.getElementById('dis3')
var dis4 = document.getElementById('dis4')



dis1.disabled = true
dis3.disabled = true
function start() {

  x = setInterval(function () {
    msec++
    document.getElementById('msec').innerHTML = msec

    if (msec >= 99) {
      msec = 0
      document.getElementById('sec').innerHTML = sec
      sec++
    }


    if (sec >= 60) {
      msec = 0
      document.getElementById('min').innerHTML = min
      min++
    }

    if (min >= 100) {
      min = 0
      document.getElementById('hour').innerHTML = hour
      hour++
    }
  }, 10)

  dis2.disabled = true
  dis1.disabled = false
}



function pause() {
  dis1.disabled = true
  dis2.disabled = false
  clearInterval(x)
}

function reset() {

  msec = 0
  sec = 0
  min = 0
  document.getElementById('msec').innerHTML = 0
  document.getElementById('sec').innerHTML = 0
  document.getElementById('min').innerHTML = 0
  document.getElementById('hour').innerHTML = 0

  clearInterval(x)

  dis1.disabled = true
  dis2.disabled = false
}

var inpmin = document.getElementById('inpmin')
var inpsec = document.getElementById('inpsec')
function star() {
  dis4.disabled = true
  dis3.disabled = false
  if (document.getElementById('inpmin').value == '') {
    alert('Enter Minutes')
    return;
    
  } else if (document.getElementById('inpsec').value == '') {
    alert('Enter Seconds')
    return;
  }
  if (document.getElementById('inpsec').value == 0) {
    document.getElementById('inpmin').value = document.getElementById('inpmin').value - 1

    document.getElementById('inpsec').value = 59
  }
  var min = document.getElementById('inpmin').value
  var sec = document.getElementById('inpsec').value
  document.getElementById('mins').innerHTML = min
  document.getElementById('secs').innerHTML = sec

  a = setInterval(() => {

    sec--
    document.getElementById('secs').innerHTML = sec
    if (sec == 0) {
      sec = 60
      min--
      document.getElementById('mins').innerHTML = min
    }

    if (
      document.getElementById('mins').innerHTML <= -1
    ) {
      clearInterval(a)
      document.write(`<center  style ="font-size : 40px">Your Time is Finish
        <br><br>
        
        <button onclick="abc()" style = "background-color : yellow;font-size:30px;border:none;font-family: adobe arabic;border-radius:10px;width:120px">Back</button>
        </center>  
        `)

    }
  }, 1000)


}

function rese() {

  clearInterval(a)
  document.getElementById('mins').innerHTML = 0
  document.getElementById('secs').innerHTML = 0
  document.getElementById('inpmin').value = ''
  document.getElementById('inpsec').value = ''
  dis3.disabled = true
  dis4.disabled = false

}
function paus() {
  clearInterval(a)
  document.getElementById('inpmin').value = document.getElementById('mins').innerHTML
  document.getElementById('inpsec').value = document.getElementById('secs').innerHTML
  dis3.disabled = true
  dis4.disabled = false
}
function abc(){
  location.reload();}