function calculateLove(){
    const name1= document.getElementById('name1').value
    const name2= document.getElementById('name2').value
    
    if (name1 && name2) {
        const hash = (name1 + name2).split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0)
        const lovePorcentage= hash % 101
        document.getElementById('result').style.color='green'
        
        document.getElementById('result').textContent=`TIENES UN ${lovePorcentage} DE COMPATIBILIDAD`
    }else{
        document.getElementById('result').style.color='red'

        document.getElementById('result').textContent=' POR FAVOR INGRESA AMBOS NOMBRES'
    }

}