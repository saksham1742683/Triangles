 const baseOfTriangle = document.querySelector('#base')
 const heightOfTriangle = document.querySelector('#height')
 const checkAreaBtn = document.querySelector('#check-area-btn')
 const outputEl = document.querySelector('#output')

 function calculateArea()
 {
        const areaOfTriangle = (Number(baseOfTriangle.value) * Number(heightOfTriangle.value))/2;
        outputEl.innerText = "The area of triangle is " + areaOfTriangle +"cm²"
        // console.log(areaOfTriangle)
  }

 checkAreaBtn.addEventListener("click" , calculateArea)