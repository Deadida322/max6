function analyse(){
    let source = document.querySelector('#arrays').value
    let to_work = source.split(/ {0,}\, {0,}/).filter(element => element != '')
    for(let i = 0; i < to_work.length; i++){
        if (parseInt(to_work[i])+parseInt(to_work[i+1]) == 10){
            let left = to_work[i]
            let right = to_work[i+1]
            to_work[i] = `<span class='blue'> ${left} </span>`
            to_work[i+1] = `<span class='red'> ${right} </span>`
        }
    }
    to_work = to_work.join(' ');
    document.getElementById("result").innerHTML = to_work
}