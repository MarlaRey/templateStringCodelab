/* Opgave 1*/
const navn = "Mowgli";
const varighed = 67;

const besked = `<h2>Hej ${navn},</h2> du har nu arbejdet i vores virksomhed i ${varighed} år`;

let beskedElement = document.getElementById("message");
beskedElement.innerHTML = besked;

//opgave2:
const myData = [
    {
        "navn": "T-shirt",
        "beskrivelse": "En t-shirt lavet af bomuld",
        "pris": 99
    },
    {
        "navn": "Jeans",
        "beskrivelse": "Blå denim jeans med straight fit",
        "pris": 299
    },
    {
        "navn": "Hættetrøje",
        "beskrivelse": "En grå hættetrøje med lynlås",
        "pris": 199
    }
];

// Hent en reference til det element, hvor du vil vise produktlisten.
const produktListeElement = document.getElementById("produktListe");

// Brug .map() til at generere produktlinjerne og join() til at kombinere dem til en enkelt streng.
const produktLinjer = myData.map(produkt => `
<article class="produkt">
    <h2>${produkt.navn}</h2>
    <p>${produkt.beskrivelse}</p>
    <p>Pris: ${produkt.pris} kr.</p>
</article>
`).join('');

// Indsæt produktlinjerne i det ønskede element.
produktListeElement.innerHTML = produktLinjer;

/* Opgave 3 - skriv videre på koden her: */

        // Array med persondata
        const myPersons = [];

        // Find form elementer
        const myForm = document.getElementById('formular');
        const submitButton = document.getElementById('indsend-knap');
        const personList = document.getElementById('person-liste');

        // Tilføj en eventlistener til formens indsendelsesknap
        submitButton.addEventListener('click', function (e) {
            e.preventDefault(); // Forhindrer standardformularen i at blive sendt

            // Hent værdier fra inputfelterne
            const navnInput = document.getElementById('navn');
            const alderInput = document.getElementById('alder');

            // Valider input
            const navn = navnInput.value.trim();
            const alder = parseInt(alderInput.value);

            if (navn !== "" && !isNaN(alder)) {
                // Tilføj person til arrayet
                myPersons.push({ navn, alder });

                // Opdater og vis listen
                visListe();

                // Nulstil inputfelterne
                navnInput.value = "";
                alderInput.value = "";
            }
        });

        // Funktion til at vise den sorteret liste på siden
        function visListe() {
            // Sorter personer efter alder
            myPersons.sort((a, b) => a.alder - b.alder);

            // Opret en template string med navn og alder for hver person
            const listeHTML = `
                <h2>Sorteret Liste:</h2>
                <ul>
                    ${myPersons.map(person => `<li>${person.navn}, ${person.alder} år</li>`).join('')}
                </ul>
            `;

            // Opdater indholdet i elementet med id "person-liste"
            personList.innerHTML = listeHTML;
        }
