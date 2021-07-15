this.onmessage = function(data){
  console.log('Data from js',data);
  this.postMessage('Hi from worker');
  this.close();
}