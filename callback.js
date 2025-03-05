function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback();
}
function alertFinished() {
    alert('Finish')
}
doHomework('math', alertFinished)