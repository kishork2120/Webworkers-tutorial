let cities = [];
this.onmessage = ({data})=>{
  data.map(d=>d.states).forEach(data=>{
    data.map(d=>d.cities).map(d=>d.map(c=>cities.push(c.name)))
  })
  this.postMessage(cities)
}