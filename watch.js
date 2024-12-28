let watch = ()=>{
    let date = new Date()
    
    let updateDate = date.toDateString()

    console.log(updateDate)

    let hour = date.getHours()

    let minutes = date.getMinutes()

    let seconds = date.getSeconds()
    
    let updateTime = `${hour} : ${minutes} : ${seconds}`

    console.log(updateDate)
    console.log(updateTime)

    let time = document.getElementById("time")
    let dates = document.getElementById("dates")
    time.innerHTML = updateTime
    dates.innerHTML = updateDate
}

setInterval(()=>{
    watch()
},1000)