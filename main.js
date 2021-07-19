const myTable = document.getElementById('myTable');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn')
const removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', () => {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');

  let nameInput = document.getElementById('nameInput').value;
  let dateInput = document.getElementById('dateInput').value;
  let amountInput = document.getElementById('amountInput').value;
  let removeBtn = document.createElement('button');
  
  tr.className = 'row';
  td1.className = 'data';
  td2.className = 'data';
  td3.className = 'data';
  td4.className = 'data';
  removeBtn.id = 'removeBtn';
  
  td1.innerText = nameInput;
  td2.innerText = dateInput;
  td3.innerText = amountInput;
  removeBtn.innerText = 'x'
  
  td4.append(removeBtn);
  tr.append(td1, td2, td3, td4);
  myTable.appendChild(tr);

    // removing a data from the list
    removeBtn.addEventListener('click', () => {
      td1.remove();
      td2.remove();
      td3.remove();
      td4.remove();
    });
})