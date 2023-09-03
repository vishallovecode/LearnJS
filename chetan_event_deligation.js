/*
  <div class="parent">
    <div class="child child1"></div>
  </div>
*/

const parent = document.querySelector('.parent');
const child = document.querySelector('.child1');

// Event Propagation

// with capturing phase

child.addEventListener('click', (e) => {
    console.log('child');
}, true);

parent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('parent');
    console.log(1 + 3);
}, true);

// with bubbling phase

// child.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('child');
// }, false);

// parent.addEventListener('click', (e) => {
//     console.log('parent');
//     console.log(1 + 3); // heavy computation which we don't want to called again :D
// }, false);


// Event Deligation


parent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(e.target);
    const elem = e.target;
    if (elem.classList.contains('card-button')) {
        console.log(elem.dataset.idProductData);
    }
}, true);

const createCard = ({ id, title, thumbnail }) => {
    return `<div id=${id} data-id-product-data=${id} class="product">
            <h1>${title}</h1>
            <img src=${thumbnail} />
            <button class="card-button" data-id-product-data=${id}>Show More</button>
        </div>`;
}

const renderData = (products) => {
    console.log(products);
    const html = products.map((product, index, array) => {
        return createCard(product);
    }).join('');
    parent.innerHTML = html;
}

console.log(this);
const fetchData = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/`);
        const data = await res.json();
        console.log(data);
        const products = data.products;
        renderData(products);
    } catch (error) {
        console.log(error);
    }
}

fetchData();



// const obj = {
//     brand: "Apple",
//     category: "smartphones",
//     description: "An apple mobile which is nothing like apple",
//     discountPercentage: 12.96,
//     id: 1,
//     array: [1, 2, 3]
// }


// const arr = [1, 2, 3];
// const [first, , third] = arr;

// console.log('arrr ', first, third);

// const { discountPercentage: discount, brand, category, chetan } = obj;

// console.log();
// // const discount = obj.discountPercentage;
// const fun = () => {
//     const fun1 = () => { return 2 };
//     return [fun1];
// }

// const [func] = fun();
