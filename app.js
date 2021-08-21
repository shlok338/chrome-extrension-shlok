let button = document.getElementById('getTimeZone')
if(button !==null){

    button.addEventListener('click', TimeZone)
    
    function TimeZone(){ 
    let showTime = document.getElementById ('showTimeZone')
    showTime.innerHTML=Date()