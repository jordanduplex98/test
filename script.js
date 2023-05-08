

function calculer() {
    let mise = document.getElementById("mise").value;
    let nbre_jour = document.getElementById("nbre_jour").value;
    // let gain = document.getElementById("gain");
    var result = 1;
    for (let i = 1; i <= nbre_jour; i++) {
        result = mise*1.54;
        mise = result;
        
    }
    // alert(nbre_jour*mise);
    document.getElementById("gain").value = result;
}