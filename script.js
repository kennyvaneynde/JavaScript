// link with game
var game = document.querySelector("#gamepje");  //# will connect with the id in html
var amount = 0;
var characters = [
    {
        id: 1,
        name: "harry"
    },
    {
        id: 2,
        name: "harry"
    },
    {
        id: 3,
        name: "ron"
    },
    {
        id: 4,
        name: "ron"
    },
    {
        id: 5,
        name: "hermione"
    },
    {
        id: 6,
        name: "hermione"
    },
    {
        id: 7,
        name: "voldemort"
    },
    {
        id: 8,
        name: "voldemort"
    }
];

characters = characters.sort(() => Math.random() - 0.5)

// Create the html card
for ( var index = 0; index < characters.length; index++) {
    var element = document.createElement("div");
    element.innerHTML = characters[index].name;
    element.dataset.name = characters[index].name;
    element.classList.add("cards");

    game.append(element);
}

// Let them listen + play the game
var cards = document.querySelectorAll(".cards");
var selectedCards = [];

for (var index = 0; index < cards.length; index++ ) {
    cards[index].addEventListener("click", function() {
        if (this.classList.contains("guessed") == false) {
            // NOT YET GUESSED SHOW THE IMAGE
            selectedCards.push(this);

            this.classList.add("clicked");
        }

        if (selectedCards.length == 2 ) {
            if (selectedCards[0].dataset.name == selectedCards[1].dataset.name) {
                // WE GOT A MATCH
                selectedCards[0].classList.add("guessed");
                selectedCards[1].classList.add("guessed");

                selectedCards = [];

                // check if game is done
                console.log(document.querySelectorAll(".cards.guessed").length );
                if (document.querySelectorAll(".cards.guessed").length == 8) {
                    alert("GAME IS DONE");
                }
            } else {
                // NO MATCH GO BACK
                amount++
                document.querySelector("#amounts").innerHTML = amount;  //# will connect with the id in html

                setTimeout(function() {
                    selectedCards[0].classList.remove("clicked");
                    selectedCards[1].classList.remove("clicked");

                    selectedCards = [];

                }, 1000)
            }
        }
    });
}
