// const Units = () => {
//   let units= [{ title = "PHYS1002"}, { title= "MATH1005"},{ title= "MATH1023"},{ title= "INFO1110"},{ title= "ELEC1103"}];
// };

//Display age
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Create a Person object
// var myFather = new Person("John", "Doe", 50, "blue");

// Constructor function for Person objects
// export const Test = () => myFather.age;

// const Test =() => {
//   return myFather.age
// } 이것은 Test()해야지 50이 나오고 Test만 하면 함수가 전체를 의미하니. 허허.

//위의 constructor, instance과정을 걸쳐 나온 다는 것을 확인했다.
//첫 째로 object의 틀을 짜준다. function Person이 될 것이다.
//두 번째로는 constructor를 한다. 틀에 넣을 값들을 만들어주는 변수를 선언하며 new property를 쓴다.
//세 번째로는 constructor는 기본적으로 instance가 동반된다. instance는 instance object를 말하며 틀에 들어가 새로 만들어진 객체를 의미한다.
//즉, instance는 myFather이 될 것이고 console로 찍으면, myFather = {firstName = 'John', lastName = 'Doe', age = 50, eyeColor = 'blue'}가 나온다.
//틀은 똑같은데 안에 있는 변수만 다를 경우 이렇게 object를 하나 하나 만들어 줄 바에는 차라리 틀 하나만 만들고 찍어내는 것이 코드의 효율성을 높일 수 있다.

//처음 repl.it에서 봤을 때는 ??????????????????????가 내 머릿속에 맴돌았는데 지금 MDN과 VsCode를 활용하니 훨씬 잘 이해가 되는 것 같다.

//왜 갑자기 javascript의 class, construct, instance를 보게 되었냐면 index.js:1에서 내가 1학기에 듣는 과목의 title를 객체화 해서 array에 넣고 싶은데, title이 너무
//중복이 많이 된다. 그래서 좀 더 깔끔하게 할 수 없나?? 생각했는데 바로 repl.it의 class가 떠올라서 이렇게 만들게 되었다.
//아래부터 한번 다시 해보자.

import Link from "next/link";

function Units(title, lecturer) {
  (this.subject = title), (this.tutor = lecturer);
}

var PHYS1002 = new Units("PHYS1002", "abc");
var MATH1005 = new Units("MATH1005", "Munir Hiabu");
var MATH1023 = new Units("MATH1023", "cdefe");
var INFO1110 = new Units("INFO1110", "ddasf");
var ELEC1103 = new Units("ELEC1103", "efdasfa");

let units = [PHYS1002, MATH1005, MATH1023, INFO1110, ELEC1103];

export const PostLink = props => (
  <li>
    <Link href="/Unit/[id]" as={`/Unit/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export const list = units.map(el => {
  return <PostLink id={el.subject} />;
});
