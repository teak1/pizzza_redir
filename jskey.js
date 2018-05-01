((win)=>{
  function findMe(){
    win={location:{search:"?test=Number:1&b=Number:2"}};
//var win = window;
//start wrapper;
//window.location.search="test";
var data = [
  "<script",
  "[\\s]{0,}",
  "src=[\\\"]{0,}",
  ".+",
  "[\\\"]{0,}",
  ".+",
  "</[\\s]{0,}script>"
];
regex = new RegExp(data.join(""),"g");
  return win.document.head.match(regex);
  }
  function getURL(data){
    var search = window.location.search||data;
    if(search.length===0)return {};
    var out = {};
    search=decodeURI(search).substr(1,10000000);
    var pairs = search.split("&");
    console.log(pairs);
    for(var i = 0;i<pairs.length;i++){
      var name = pairs[i].split("=")[0];
      var type = pairs[i].split("=")[1].split(":")[0];
      var value = pairs[i].split("=")[1].split(":")[1];
      out[name]=new window[type](value);
    }
    return out;
  }
  var params = getURL();
  !if(params.key){
    validateKey(params.key);
  }
})(window);
