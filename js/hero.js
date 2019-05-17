class Hero
{
    constructor(){
        this.height = 10;
        //this.message =  '0110110101101111011101110110001001100001';
        this.message = 'mowba'
        this.messageLength = this.message.length;
        this.nCases = this.height * this.message.length; 
    }

    init(){
        let table =  document.createElement('table');
        let id = 0;
        for(let j = 0 ; j<this.height; j++){
             
            let tr = document.createElement('tr');
            for(let i = 0; i<this.messageLength; i++){
                let td = document.createElement('td');
                let span = document.createElement('span');
                span.appendChild(document.createTextNode(this.message.charAt(i)));
                id++;
                this.randomColor(td, Math.floor(Math.random()* 500)+100);
                
                if(j>0){span.setAttribute('class', 'td-off')};
                span.setAttribute('id', id);
                td.appendChild(span);
                tr.appendChild(td);
                
            }
            table.appendChild(tr);

        }
        
        document.getElementById('hero').appendChild(table);
        this.randomPosition();
    }

    randomColor(td, duration){
        setInterval(function(){
            td.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
            td.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        }, duration)
    }

    randomPosition(){
        setInterval(function(){
            console.log(Math.floor(Math.random()* this.nCases)+this.messageLength);
            document.getElementById(Math.floor(Math.random()* this.nCases)).classList.add('td-off');
            document.getElementById(Math.floor(Math.random()* this.nCases)).classList.remove('td-off');
        }.bind(this), 50)
    }


}