document.getElementById('n1').addEventListener('click', function(){
    document.querySelector('.resultado a').appendChild(document.createTextNode ('1'))
})

document.addEventListener('keypress', (event) => {
    const keyName = event.key
    if (keyName != '0' &
        keyName != '1' &
        keyName != '2' &
        keyName != '3' &
        keyName != '4' &
        keyName != '5' &
        keyName != '6' &
        keyName != '7' &
        keyName != '8' &
        keyName != '9' &
        keyName != '+' &
        keyName != '-' &
        keyName != '/' &
        keyName != '*'
    ){
        
    }else{
        document.querySelector( '.resultado a').appendChild(document.createTextNode (keyName))
    }
})

document.addEventListener('keydown', (function(e){
    if(e.keyCode == 8){
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(0, -1);
        document.querySelector('.resultado a').innerText = ultresult1
    }
}))

document.addEventListener('keydown', (function(e){
    if(e.keyCode == 13){
        if(document.querySelector( '.resultado a').innerText == ''){
        
        }else{
            var resultado1 = document.querySelector( '.resultado a').innerText
            var ultresult1 = resultado1.slice(-1);
             
            if(ultresult1 == '+' | ultresult1 == '/' | ultresult1 == '*' | ultresult1 == '-'){
               var num = document.querySelector( '.resultado a').innerText.slice(0, -1)
               document.querySelector( '.resultado a').innerText = num
            }else{
                var resultado = document.querySelector( '.resultado a').innerText;
                document.querySelector( '.resultado a').innerText = eval(resultado)
            }
        }   
    }
}))

document.addEventListener('keydown', (function(e){
    if(e.keyCode == 27){
        document.querySelector('.resultado a').innerHTML = "";
    }
}))


document.getElementById('n2').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (2))
})

document.getElementById('n3').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (3))
})

document.getElementById('n4').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (4))
})

document.getElementById('n5').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (5))
})

document.getElementById('n6').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (6))
})

document.getElementById('n7').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (7))
})

document.getElementById('n8').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (8))
})

document.getElementById('n9').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (9))
})

document.getElementById('n0').addEventListener('click', function(){
    document.querySelector( '.resultado a').appendChild(document.createTextNode (0))
})


document.getElementById('nplus').addEventListener('click', function(){

    if(document.querySelector( '.resultado a').innerText == ''){
        
    }else{
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(-1);
         
        if(ultresult1 == '-' | ultresult1 == '/' | ultresult1 == '*'){
           var num = document.querySelector( '.resultado a').innerText.slice(0, -1) + '+'
           document.querySelector( '.resultado a').innerText = num
        }else if (ultresult1 == '+'){

        }else{
            document.querySelector( '.resultado a').appendChild(document.createTextNode ('+'))
        }
    }    
})

document.getElementById('n/').addEventListener('click', function(){

    if(document.querySelector( '.resultado a').innerText == ''){
        
    }else{
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(-1);
         
        if(ultresult1 == '-' | ultresult1 == '+' | ultresult1 == '*'){
           var num = document.querySelector( '.resultado a').innerText.slice(0, -1) + '/'
           document.querySelector( '.resultado a').innerText = num
        }else if (ultresult1 == '/'){

        }else{
            document.querySelector( '.resultado a').appendChild(document.createTextNode ('/'))
        }
    }    
})

document.getElementById('n*').addEventListener('click', function(){

    if(document.querySelector( '.resultado a').innerText == ''){
        
    }else{
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(-1);
         
        if(ultresult1 == '-' | ultresult1 == '/' | ultresult1 == '+'){
           var num = document.querySelector( '.resultado a').innerText.slice(0, -1) + '*'
           document.querySelector( '.resultado a').innerText = num
        }else if (ultresult1 == '*'){

        }else{
            document.querySelector( '.resultado a').appendChild(document.createTextNode ('*'))
        }
    }    
})

document.getElementById('n-').addEventListener('click', function(){

    if(document.querySelector( '.resultado a').innerText == ''){
        document.querySelector( '.resultado a').appendChild(document.createTextNode ('-'))
    }else{
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(-1);
         
        if(ultresult1 == '+' | ultresult1 == '/' | ultresult1 == '*'){
           var num = document.querySelector( '.resultado a').innerText.slice(0, -1) + '-'
           document.querySelector( '.resultado a').innerText = num
        }else if (ultresult1 == '-'){

        }else{
            document.querySelector( '.resultado a').appendChild(document.createTextNode ('-'))
        }
    }    
})



document.getElementById('nc').addEventListener('click', function(){
    document.querySelector('.resultado a').innerText = ""
})


document.getElementById('nenter').addEventListener('click', function(){

    if(document.querySelector( '.resultado a').innerText == ''){
        
    }else{
        var resultado1 = document.querySelector( '.resultado a').innerText
        var ultresult1 = resultado1.slice(-1);
         
        if(ultresult1 == '+' | ultresult1 == '/' | ultresult1 == '*' | ultresult1 == '-'){
           var num = document.querySelector( '.resultado a').innerText.slice(0, -1)
           document.querySelector( '.resultado a').innerText = num
        }else{
            var resultado = document.querySelector( '.resultado a').innerText;
            var resultadof = eval(resultado)
            if(resultado.slice(0, 1) == 0){
                document.querySelector('.resultado a').innerText = document.querySelector('.resultado a').innerText.substring(1);
            }else{
                document.querySelector('.resultado a').innerText = resultadof
            }
        }
    }    
})