let Name = document.querySelector("#name");
let categories = document.querySelector("#categories");
let price = document.querySelector("#price");
let discount = document.querySelector("#discount");
let button = document.querySelector("#button");
let form = document.querySelector("form");
let container = document.querySelector("tbody");
let count = document.querySelector("#count");
let delete_all = document.getElementById("delete_all");
let search = document.getElementById("S_input");
let btn_mood = "create";
let index

let data = [];
form.onsubmit = function (Abdullah) {
  Abdullah.preventDefault();
  let products = {
    name: Name.value,
    price: price.value,
    categories: categories.value,
    discount: discount.value,
    count: count.value,
  };
  if(btn_mood==="create"){

    data.push(products);
    displayproducts();

  }else{
    data[index] = products;
    displayproducts();
    data[index] = products
      button.innerText = "Add";
      button.style.backgroundColor = "black";
      btn_mood = "create";
      index = number;
  }
};

function displayproducts() {
  var item = "";
  for (let i = 0; i < data.length; i++) {
    item += `
    <tr>
      <td>${data[i].name}</td>
      <td>${data[i].categories}</td>
      <td>$${data[i].price}</td>
      <td>$${data[i].discount}</td>
      <td>${data[i].count}</td>
      <td><button onclick='delete_one(${i})' >delete</button></td>
      <td><button class='update' onclick = 'update_products(${i})'>update</button></td>
    </tr>
    `;
  }
  container.innerHTML = item;
  delete_all_products();
}

function delete_one(num) {
  data.splice(num, 1);
  displayproducts();
}
function delete_all_products() {
    if (data.length > 0) {
      delete_all.style.display = "block";
    } else {
      delete_all.style.display = "none";
    }
    delete_all.onclick = function () {
      data.splice(0);
      displayproducts();
    };
  }

  

delete_all_products();

search.onkeyup = function () {
  var item = "";
  for (var i = 0; i < data.length; i++) {
    if (
      data[i].name.includes(search.value.trim().toLowerCase()) ||
      data[i].categories.includes(search.value.trim().toLowerCase())
    ) {
      item += `
      <tr>
        <td>${data[i].name}</td>
        <td>${data[i].categories}</td>
        <td>$${data[i].price}</td>
        <td>$${data[i].discount}</td>
        <td>${data[i].count}</td>
        <td><button onclick='delete_one(${i})' >delete</button></td>
        <td><button class='update'>update</button></td>
      </tr>
      `;
    }
  }

  container.innerHTML = item;
};
function update_products(number) {
  Name.value = data[number].name;
  categories.value = data[number].categories;
  price.value = data[number].price;
  discount.value = data[number].discount;

  button.innerText = "update";
  button.style.backgroundColor = "orange";
  btn_mood = "update";
  index = number;
}
