'use strict';

const HABBIT_KEY = 'HABBIT_KEY'

let habbits = [];
/* structor of page */
const page = {
    menu: document.querySelector('.menu')
}

/* utils */

function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitsArray = JSON.parse(habbitsString);

    if (Array.isArray(habbitsArray)) {
        habbits = habbitsArray;
    }
}


function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* init */
(() => {
    loadData();
    rerender(habbits[0].id)
})()


/* global re-render */
function rerender(activeHabbitMenuId) {
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitMenuId);
    rerenderMenu(activeHabbit);
}

// re-render menu
function rerenderMenu(activeHabbitMenu) {
    if (!activeHabbitMenu) { return; }
    for (const habbit of habbits) {
        const exsisted = document.querySelector(`[menu-habbit-id = "${habbit.id}"]`);
        if (!exsisted) {
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__btn');
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`
            if (activeHabbitMenu.id === habbit.id) {
                element.classList.add('menu__btn--active');
            }
            page.menu.appendChild(element);
            continue;
        }

        if (activeHabbitMenu.id === habbit.id) {
            exsisted.classList.add('menu__btn--active');
        } else {
            exsisted.classList.remove('menu__btn--active');
        }
    }
}
