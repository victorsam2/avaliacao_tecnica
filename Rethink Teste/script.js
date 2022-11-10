const pessoas = [
  { id: 0, name: "Fabiana Araújo", age: 33, profissao: "" , fone: "", email: "", nascimento: ""},
  { id: 0, name: "Gabriel Gomes", age: 25, profissao: "", fone: "", email: "", nascimento: "" },
  { id: 0, name: "Fernando Henrique", age: 17, profissao: "", fone: "", email: "", nascimento: "" },
  { id: 0, name: "Ana Luiza", age: 2, profissao: "", fone: "", email: "", nascimento: "" },
  { id: 0, name: "Geralda Nascimento", age: 93, profissao: "", fone: "", email: "", nascimento: "" },
  { id: 0, name: "Miguel Souza", age: 70, profissao: "", fone: "", email: "", nascimento: "" },
  { id: 0, name: "Antonio Miguel", age: 2, profissao: "", fone: "", email: "", nascimento: "" },
];

function exec3() {
  let nome=document.getElementById("name");
  let ul= document.getElementById("resposta");
  pessoas.forEach((item) => {
    if (nome==item.name) {
  let li=document.createElement("li");
  li.innerText=item.name;
  ul.appendchild(li);
  }
   })
  console.log(item.name);
}


function exec4() {
  let people={};
  pessoas.forEach((item) => {
  people.push(item.name);
  });
  let ul= document.getElementById("resposta");
  let li=document.createElement("li");
  li.innerText=people;
  ul.appendchild(li);
  console.log(people);

}


function exec5() {
  let contador=0
  pessoas.forEach((item) => {
    contador++
    item.id=contador;
    });
  let ul= document.getElementById("resposta");
  let li=document.createElement("li");
  li.innerText=pessoas;
  ul.appendchild(li);
  console.log(pessoas);

}


function exec6() {
  let ul= document.getElementById("resposta");
  pessoas.forEach((item) => {
    if (item.age>17) {
  let li=document.createElement("li");
  li.innerText=item.name;
  ul.appendchild(li);
  }
   })
  console.log(item.name);

}


function exec7() {
  let contador=0;
  let media=0;
  let total=0;
  pessoas.forEach((item) => {
    contador++
    total=total+item.age;
    });
  let ul= document.getElementById("resposta");
  let li=document.createElement("li");
  media=total/contador;
  li.innerText=media;
  ul.appendchild(li);
  console.log(media);
}