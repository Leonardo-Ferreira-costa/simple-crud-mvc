class UserController{ 

    
    constructor(formUserId){

    this.formEl = document.getElementById(formUserId);
   



    this.onSubmit();
   

    }


    onSubmit(){

        this.formEl.addEventListener("submit", event => {
    
            event.preventDefault(); 
    
            alert("Meu alerta");
            
            });
    }

}