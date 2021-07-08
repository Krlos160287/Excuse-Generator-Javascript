/* eslint-disable */
import "bootstrap";
import "./style.css";


let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function onLoad(){
  let str1 = (who[Math.round(Math.random()*(who.length-1))]);
  let str2 = (action[Math.round(Math.random()*(who.length-1))]);
  let str3 = (what[Math.round(Math.random()*(who.length-1))]);
  let str4 = (when[Math.round(Math.random()*(who.length-1))]);
  return(str1+" "+str2+" "+str3+" "+str4)
}
onLoad();