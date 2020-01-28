export class App {
  message = '';//'Hello World!';
  usersData = [];
  getRes(){
    let url="https://api.github.com/search/users?q=" + this.message + "&page=1&per_page=10";
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
      console.log(myJson);
      let data = myJson.items;
      this.usersData = data;
  }); 
  console.log(this.message);

}


};
