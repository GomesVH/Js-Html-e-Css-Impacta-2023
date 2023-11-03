       //responsabilidade unica
        function primeira(num1,num2){
            let res = num1 * num2
            alert(res)
        }
       window.document.getElementById('tres').onclick = primeira;
       document.getElementById('quatro').onmouseout = function(){
           primeira(25,4)
       }  
       document.getElementById('cinco').onmouseover = function(){
           let numero =  prompt('Entre com um numero')
           let answer = numero * 5
           alert(answer) 
       }