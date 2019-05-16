class Hero
{
    constructor(){
        this.height = 3;
        this.message =  '0110110101101111011101110110001001100001';
        this.nCases = this.height * this.message.length; 
    }

    init(){
        let table =  document.createElement('table');
        let id = 0;
        for(let j = 0 ; j<this.height; j++){
             
            let tr = document.createElement('tr');
            for(let i = 0; i<this.message.length; i++){
                let td = document.createElement('td');
                
                td.appendChild(document.createTextNode(this.message.charAt(i)));
                id++;
                this.randomColor(td, Math.floor(Math.random()* 500)+100);
                
                j>0 ? td.setAttribute('class', 'td-off') : this.randomPosition();
                td.setAttribute('id', id);
                tr.appendChild(td);
                
            }
            table.appendChild(tr);

        }
        
        document.getElementById('hero').appendChild(table);

    }

    randomColor(td, duration){
        setInterval(function(){
            td.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
        }, duration)
    }

    randomPosition(){
        let posAfterMessage = this.message.length+1;
        setInterval(function(){
            document.getElementById(posAfterMessage).classList.remove('td-off');
            posAfterMessage++;
        }, 500)
    }


}