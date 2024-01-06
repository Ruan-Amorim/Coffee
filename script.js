
function ClickMenu() {
    var navMenu = document.getElementById('NAV-MENU')
    if (navMenu.style.display == 'none') {
        navMenu.style.display = 'block'
    }else{
        navMenu.style.display = 'none'
    }
}
function receita() {
    var bloco1 = document.getElementById('web4-bloco1')
    var bloco2 = document.getElementById('web4-bloco2')
    var back = document.getElementById('web4')
    if(bloco2.style.display == 'block') {
        bloco2.style.display = 'none'
        bloco1.style.display = 'block'
        
    }else {
        bloco1.style.display = 'none'
        bloco2.style.display = 'block'
        
    }
        }
            
