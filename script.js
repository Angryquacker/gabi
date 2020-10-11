const moreIns = ins => {
  fetch("https://type.fit/api/quotes")
  .then(res => res.json())
  .then(data => { 
    let quote = data[Math.floor(Math.random() * 1000)];
   
    if (quote.author == null) { quote.author = "?" }
    
    ins.innerHTML = `"${quote.text}" - ${quote.author}`;
  });
};

const moreHapp = img => {
  fetch("https://api.thecatapi.com/v1/images/search?size=full")
  .then(res => res.json())
  .then(data => {
    img.src = data[0].url;
  });
};

window.onload = () => {
  let ins = document.getElementById("quote");
  let img = document.getElementById("pic");
  
  document.getElementById("mI").addEventListener("click", e => {
    e.preventDefault();
    moreIns(ins);
  });
  
  document.getElementById("mH").addEventListener("click", e => {
    e.preventDefault();
    moreHapp(img);
  });
  
  moreIns(ins);
  moreHapp(img);
}

