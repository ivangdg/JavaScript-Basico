const menssaje = document.querySelector("#btAlerta") 
console.log(menssaje)
menssaje.addEventListener("click", () => {
    alert("click en el boton")
}
)

$(() => {
    $("#btAlerta").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})