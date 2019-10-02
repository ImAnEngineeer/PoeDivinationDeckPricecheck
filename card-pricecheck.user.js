// ==UserScript==
// @name         PoE Deck Pricecheck
// @version      0.1
// @description  check what kind of money is there in your deck based on poe ninja!
// @author       ImAnEngineer
// @match        https://poe.ninja/*/divinationcards
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var contaienr = document.getElementsByClassName("container");
    var loadContainer = document.createElement("div");
    var loadInput = document.createElement('input');
    var loadButton = document.createElement('button');

    loadInput.placeholder = "Paste card stash data";
    loadButton.innerText = "LOAD CARD DATA";

    loadContainer.appendChild(loadInput);
    loadContainer.appendChild(loadButton);

    contaienr[0].appendChild(loadContainer);

    loadButton.addEventListener("click", function(){

            var dataJson = null;

            try{
             dataJson = JSON.parse(loadInput.value);
            }catch(e){
                alert("Wrong data in the input field, try again");
                return;
            }

            var showMoreButton = document.getElementsByClassName('show-more');
            var ownedCardNames = [];

            if(showMoreButton.length)
            {
                showMoreButton[0].click();
                showMoreButton[0].click();
                showMoreButton[0].click();
            }

            dataJson.items.forEach(function(item){
                ownedCardNames.push(item.typeLine);
            });

            Array.from(document.getElementsByClassName('f16dobzg')).forEach(function(item){
                if(ownedCardNames.indexOf(item.title) == -1)
                {
                    item.parentNode.parentNode.parentNode.remove();
                }
            });

            alert("Done!");
        });
})();


