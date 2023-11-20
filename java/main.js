const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            activities : [
                {
                    text : `Giocare "GARA 7" alle Finals`,
                    done : false,

                },
                {
                    text : `Fare un combattimento di muay thai`,
                    done : true,

                },
                {
                    text : `Fare Snorkling in Sardegna`,
                    done : true,
                },

            ]
    
        }   
    },
    methods: {
        cancella(index){
                document.getElementsByClassName("cella")[index].classList.add("delete");
                document.getElementsByClassName("x")[index].classList.add("delete");
        },
        add(){
            let text=document.getElementById("text").value;
            let Isdone=document.getElementById("Isdone").value;


            let newact=
            {
            text : text , 
            done : Isdone ,
        };
        if(document.getElementById("text").value==""){
            alert("Non hai inserito alcuna attività");
        }
        else{
        this.activities.push(newact);
        console.log([this.activities])}
        }
    },
}

createApp(opzioni).mount('#app')


