importScripts('countryCityState.js');
// console.log(locationData)
const webworker = new Worker('worker2.js');
let cities = [];

webworker.postMessage(locationData);

webworker.onmessage = ({data})=>{
  cities = data;
  this.postMessage(HtmlWrapper(data));
}

function HtmlWrapper(list){
  return list.map(d=>`<li>${d}</li>`).join('')
}

this.onmessage = ({data})=>{
  this.postMessage(HtmlWrapper(cities.filter(d=>d.match(new RegExp(data,'i')))));
}