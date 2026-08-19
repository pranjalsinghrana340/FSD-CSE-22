const bookdata = [
  {
    image:
      "https://th.bing.com/th/id/OIP.Cdu5VT22eifT_0qBaom6zwAAAA?w=202&h=264&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
    price: 234,
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/2/SA/IQ/HS/49559104/img-20210211-121925.jpg",
    price: 450,
},
  {
    image:
      "https://th.bing.com/th/id/OIP.xAw3BlGj0JLrlhe8QrLPjQAAAA?w=202&h=269&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
    price: 332,
  },
];

function Book(data) {
  const div = document.createElement("div");
  div.setAttribute("class", "book");

  const i = document.createElement("img");

  i.setAttribute("src", data.image);
  i.setAttribute("height", "200px");
  i.setAttribute("width", "200px");

  const h2 = document.createElement("h2");
  h2.innerText = "Price: " + data.price;

  const btn = document.createElement("button");
  btn.innerText = "Add to Cart";

  div.appendChild(i);
  div.appendChild(h2);
  div.appendChild(btn);

  return div;
}

const bookstore = bookdata.map((b) => Book(b));

const parent = document.getElementById("bookstore");

for (let i of bookstore) {
  parent.appendChild(i);
}