document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('fuelLevel');
    const fractionDisplay = document.getElementById('fractionValue');
    const fuelProgress = document.getElementById('fuelProgress');

    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    function simplifyFraction(numerator, denominator) {
        const common = gcd(numerator, denominator);
        return (numerator / common) + '/' + (denominator / common);
    }

    function updateFuelMeter() {
        const value = parseInt(slider.value);
        const percentage = (value / 32) * 100;
        fuelProgress.style.width = percentage + '%';

        if (value === 0) {
            fractionDisplay.textContent = '0';
        } else if (value === 32) {
            fractionDisplay.textContent = 'Lleno';
        } else {
            fractionDisplay.textContent = simplifyFraction(value, 32);
        }

        fuelProgress.className = `h-full transition-all ${
            percentage < 25 ? 'bg-red-500' : 
            percentage < 50 ? 'bg-orange-400' : 
            percentage < 75 ? 'bg-yellow-400' : 
            'bg-green-500'
        }`;
    }

    // Crear segmentos
    const segmentsTemplate = document.getElementById('segmentsTemplate').content;
    const segmentsContainer = fuelProgress.parentElement.querySelector('.absolute');

    for(let i = 1; i < 32; i++) {
        segmentsContainer.appendChild(segmentsTemplate.cloneNode(true));
    }

    slider.addEventListener('input', updateFuelMeter);
    
    // Inicializar el medidor
    updateFuelMeter();
}); 