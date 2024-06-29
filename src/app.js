window.onload = function() {
  let pronoun = ["the", "out"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let newArray = [];
  let word = "";
  let website = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        word = pronoun[i] + adj[j] + noun[k] + ".com";
        //debug.log(string)

        newArray.push(word);
      }
    }
  }

  website = newArray.toString();
  document.querySelector(".module").innerHTML = website;

  //write your code here
  return;
};
