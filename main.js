function guardar(){
        var name=document.getElementById("nome")
        var password=document.getElementById("pass")
        var res1=document.getElementById("res1")
        var res2=document.getElementById("res2")
        if(name.value,password.value == ""){
                res1.innerHTML="verificar os dados"
        }
        else{
                res1.innerHTML="Conta logada"
                res2.innerHTML="Bem vindo "+name.value
        }
}
