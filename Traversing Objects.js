let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let ans = "";

for (let key in book){
  ans += key + ": " + book[key] + " ";
}
console.log(ans);