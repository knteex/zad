document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("oblicz");
    const wynik = document.getElementById("wynik");

    btn.addEventListener("click", function() {
        const waga = parseFloat(document.getElementById("waga").value);
        const wzrost = parseFloat(document.getElementById("wzrost").value);

        if (isNaN(waga) || waga <= 0 || isNaN(wzrost) || wzrost <= 0) {
            wynik.style.color = "red";
            wynik.textContent = "Wprowadź poprawne dane!";
            return;
        }

        const bmi = waga / Math.pow(wzrost / 100, 2);

        let klasyfikacja = "";
        let kolor = "";

        if (bmi < 18.5) {
            klasyfikacja = "Niedowaga";
            kolor = "blue";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            klasyfikacja = "Waga prawidłowa";
            kolor = "green";
        } else if (bmi >= 25 && bmi <= 29.9) {
            klasyfikacja = "Nadwaga";
            kolor = "orange";
        } else {
            klasyfikacja = "Otyłość";
            kolor = "red";
        }

        wynik.style.color = kolor;
        wynik.textContent = `Twoje BMI wynosi: ${bmi.toFixed(2)} (${klasyfikacja})`;
    });
});
