function verificarResposta() {
    const span1  = document.getElementById("100%")
    const span2  = document.getElementById("10%") 
    const span3 = document.getElementById("40%") 
    const span4  = document.getElementById("60%")

    const Respostas = document.querySelectorAll(".respostas")

    Respostas.forEach(Res=> {
        Res.style.fontSize = "15px"  
    });

    span1.style.backgroundColor = "rgba(255, 0, 0, 0.800)"
    span1.style.borderRadius = "5px"
    span1.style.width = "100px"
    
    span2.style.backgroundColor = "rgba(0, 128, 0, 0.600)"
    span2.style.borderRadius = "5px"
    span2.style.width = "100px"
    
    span3.style.backgroundColor = "rgba(255, 0, 0, 0.800)"
    span3.style.borderRadius = "5px"
    span3.style.width = "100px"

    span4.style.backgroundColor = "rgba(255, 0, 0, 0.800)"
    span4.style.borderRadius = "5px"
    span4.style.width = "100px"

}