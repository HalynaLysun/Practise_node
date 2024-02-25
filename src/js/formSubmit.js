const listEl = document.querySelector('#task-list');
const STORAGE_KEY = 'cards';

export function formSubmit(event) {
  event.preventDefault();
  const taskName = event.currentTarget.taskName.value;
  const taskText = event.currentTarget.taskText.value;
  const id = Date.now();
  const card = { taskName, taskText, id };
  //   listEl.innerHTML += createMarkap(taskName, taskText);
  listEl.insertAdjacentHTML('beforeend', createMarkap(card));

  // const card = {
  //   taskName: taskName,
  //   taskText: taskText,
  //   id: id,
  // };

  const rawData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  rawData.push(card);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rawData));
}

export function showCards() {
  const rawData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  console.log(rawData);
  const list = rawData.map(createMarkap);
  console.log(list);
  listEl.insertAdjacentHTML('beforeend', list.join(''));
}

export function createMarkap({ taskName, taskText, id }) {
  return `<li class="task-list-item" data-id="${id}">
     <button class="task-list-item-btn">Видалити</button>
         <h3>${taskName}</h3>
          <p>${taskText}</p>
 </li>`;
}
