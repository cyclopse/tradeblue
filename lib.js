function getToday(){
    var today = new Date();
    var date = today.getDay() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    document.getElementById("txtToday").value = date;
}
