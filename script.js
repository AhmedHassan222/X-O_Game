

let turn = 'x'
let title=document.querySelector('#title')
let player1=document.querySelector('#player1')
let player2=document.querySelector('#player2')

player1.innerHTML=0;
player2.innerHTML=0;
let squars=[]

if(localStorage.getItem('player1')!==0 ||localStorage.getItem('player2')!==0  ){
    player1.innerHTML=Number(localStorage.getItem('player1'))
    player2.innerHTML=Number(localStorage.getItem('player2'))


}else 
{
    player1.innerHTML=0
    player2.innerHTML=0
}



function end(num1,num2,num3){
    title.innerHTML=`<span>the winner is : ${squars[num1]}</span>`
        document.getElementById('item'+num1).style.cssText='background-color: #688B58;'
        document.getElementById('item'+num2).style.cssText='background-color: #688B58;'
        document.getElementById('item'+num3).style.cssText='background-color: #688B58;'
        if(squars[num1]=='<h2>X</h2>'){
            localStorage.setItem('player1',`${player1.innerHTML+1}`)
        }else{
            localStorage.setItem('player2',`${player2.innerHTML+1}`)

        }
        setInterval(function(){title.innerHTML+='.'},1000)
        setTimeout(function (){location.reload()},4000)

}
function winer(){
    for(let i=1 ; i<10; i++){
        squars[i]=document.getElementById('item'+i).innerHTML
    }
    if(squars[1] == squars[2] && squars[2] == squars[3] && squars[1] !=''){
        end(1,2,3)
        
    }else if(squars[4] == squars[5] && squars[4] == squars[6] && squars[4] !=''){
        end(4,5,6)
        
    }else if(squars[7] == squars[8] && squars[8] == squars[9] && squars[7] !=''){
        end(7,8,9)

    }else if(squars[1] == squars[4] && squars[4] == squars[7] && squars[7] !=''){
        end(1,4,7)

    }else if(squars[2] == squars[5] && squars[5] == squars[8] && squars[2] !=''){
        end(2,5,8)

    }else if(squars[3] == squars[6] && squars[3] == squars[9] && squars[3] !=''){
        end(3,6,9)

    }else if(squars[1] == squars[5] && squars[5] == squars[9] && squars[1] !=''){
        end(1,5,9)

    }else if(squars[3] == squars[5] && squars[5] == squars[7] && squars[3] !=''){
        end(3,5,7)

    }
    
}
function game(id){
    let element = document.getElementById(id)
    if(turn==='x' ){
        element.innerHTML='<h2>X</h2>'
        turn='o'
        title.innerHTML=' next step : O'
    }else{
        element.innerHTML='<h2>O</h2>'
        turn='x'
        title.innerHTML='next step : X'
    }
    winer()
}




function newGame(){
    localStorage.clear()
    location.reload()
}

function draw(){
    location.reload()
}