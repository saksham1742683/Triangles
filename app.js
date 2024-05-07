const angles = document.querySelectorAll('.input-angle');
const isTringleBtn = document.querySelector('#is-triangle-btn')
let output = document.querySelector('#output')

function calculateSumOfAngles(angle1,angle2,angle3){
    const sum = angle1+angle2+angle3;
    return sum;
}

function isTringle()
{
    const sumOfAngles = calculateSumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
    if(sumOfAngles === 180){
        output.innerText = "yay , the angles form a triangle"
    }
    else{
        output.innerText= "oh oh! the angles not form a triangle"
    }
}


isTringleBtn.addEventListener("click", isTringle)
