'use strict';

const HABBIT_KEY = 'HABBIT_KEY'
let globalActiveHabbitId = '';
let habbits = [];
/* structor of page */

const page = {
    menu: document.querySelector('.menu'),
    header: {
        h1: document.querySelector('.title'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar'),
        titleAddNewHabbit: document.querySelector('.title__add-new-habbit'),
        habbitButtonAddNew: document.querySelector('.menu__add'),
    },
    content: {
        main: document.querySelector('main'),
        blockDays: document.querySelector('.days'),
        habbitDayForm: document.querySelector('.habbit__day.habbit__day-form'),
        habbitForm: document.querySelector('habbit__form'),
        habbitFormInputComment: document.querySelector('input__comment'),
        habbitFormAdd: document.querySelector('.habbit__add-form'),
    },
    popup: document.querySelector('.cover'),
}

/* utils */
function validateFormAndGetFormData(form, listFields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of listFields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('input--error');
        if (!fieldValue) {
            form[field].classList.add('input--error');
        }
        res[field] = fieldValue;
    }
    let isValid = true;

    for (const field of listFields) {
        if (!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) { return; }
    return res;
}

function resetForm(form, listFields) {
    for (const field of listFields) {
        form[field].value = "";
    }

}

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

function initTemplateWithoutData() {
    page.header.h1.innerText = "Add new habbit";
    page.header.habbitButtonAddNew.classList.add('habbit__add--animate');
    page.content.habbitFormAdd.classList.add('habbit--none');
}


/* global re-render */
function rerender(activeHabbitMenuId) {
    globalActiveHabbitId = activeHabbitMenuId;

    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitMenuId);

    if (!activeHabbit) {
        return;
    };

    document.location.replace(document.location.pathname + '#' + activeHabbitMenuId);

    rerenderMenu(activeHabbit);
    rerenderHeader(activeHabbit);
    rerenderContent(activeHabbit);
}

// re-render menu
function rerenderMenu(activeHabbitMenu) {
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
            element.addEventListener('click', () => rerender(habbit.id))
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
// re-render header
function rerenderHeader(activeHabbit) {
    page.header.h1.innerText = activeHabbit.name;

    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;

    page.header.progressPercent.innerText = `${progress.toFixed(0)}%`;
    page.header.progressCoverBar.setAttribute('style', `width:${progress.toFixed(0)}%`);
}

function rerenderContent(activeHabbit) {
    page.content.blockDays.innerHTML = "";
    for (const index in activeHabbit.days) {
        const blockHabbit = document.createElement('div')
        blockHabbit.setAttribute('class', 'habbit');
        blockHabbit.innerHTML = `<div class="habbit__day">Day ${Number(index) + 1}</div><div class="habbit__comment">${activeHabbit.days[index].comment}</div>
        <button class="habbit__delete" onclick="removeHabbitDay(${index})"><img src="./images/delete.svg" alt="delete habbit"></button>`;
        page.content.blockDays.appendChild(blockHabbit);
    }
    page.content.habbitDayForm.innerText = `Day ${page.content.blockDays.children.length + 1}`;

}

function removeHabbitDay(idRemove) {
    habbits = habbits.map((habbit) => {
        if (habbit.id === globalActiveHabbitId) {
            habbit.days.splice(idRemove, 1)
            return {
                ...habbit,
                days: habbit.days,
            }
        }
        return habbits;
    })

    saveData();
    rerender(globalActiveHabbitId);
}


function createNewHabbit(event) {
    event.preventDefault();
    const data = validateFormAndGetFormData(event.target, ['name', 'target', 'icon']);
    if (!data) { return; }
    const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
    habbits.push({ id: maxId + 1, name: data.name, target: data.target, icon: data.icon, days: [] });

    if (page.content.habbitFormAdd.classList.contains('habbit--none')) {
        page.content.habbitFormAdd.classList.remove('habbit--none');
    }
    if (page.header.habbitButtonAddNew.classList.contains('habbit__add--animate')) {
        page.header.habbitButtonAddNew.classList.remove('habbit__add--animate');
    }

    saveData();
    resetForm(event.target, ['name', 'target']);
    togglePopup();
    rerender(maxId + 1);
}

/* work with days */
function addDays(event) {
    event.preventDefault();
    const data = validateFormAndGetFormData(event.target, ['comment']);
    if (!data) { return; }
    habbits = habbits.map((habbit) => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.concat([{ comment: data.comment }])
            }
        }
        return habbit;
    })
    saveData();
    resetForm(event.target, ['comment'])
    rerender(globalActiveHabbitId);
}

function togglePopup() {
    page.popup.classList.toggle('cover--hidden');
}

function setIcon(context, icon) {
    page.popupInputIcon.value = icon;
    const activeIcon = document.querySelector('.icon.icon--active');

    activeIcon.classList.remove('icon--active');
    context.classList.add('icon--active');
}


/* init */
(() => {
    loadData();

    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabbit = habbits.find((habbits) => habbits.id === hashId)

    if (urlHabbit) {
        rerender(urlHabbit.id)
    } else {
        if (habbits.length !== 0) {
            rerender(habbits[0].id)
        } else {
            initTemplateWithoutData();
        }
    }
})();
