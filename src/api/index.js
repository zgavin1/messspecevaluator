function parseForMS (string) {
   var name = "";
   
   var openMS = string.indexOf("<ms>");
   var closeMS = string.indexOf("</ms>");
   if (openMS >= 0 && closeMS >=0) {
      
      name = string.slice(openMS + 4, closeMS);
      
   }
   // console.log(string.slice(4, 7))
   if (openMS !== -1) {
      var x = string.slice(0, openMS);
      
      if (messSpecs[name]) {
         x += messSpecs[name].eval();
      } else {
         
         x += "<ms>"+name+"</ms>";
      }
      // console.log(x);
      return x + parseForMS(string.slice(closeMS+5)); 
   }
   return string;
}

var MessageSpecification = function (name, spec) {
   this.name = name;
   this.spec = spec;
   
   this.eval = function () {
      return parseForMS(this.spec);
   }
}

export default MessageSpecification;