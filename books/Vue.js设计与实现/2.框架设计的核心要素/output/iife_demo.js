var Vue = (function(exports) {
  function createApp() {
    console.log('iife createApp!')
  }
  exports.createApp = createApp
  return exports
})({})
// var Vue = {
//   createApp: function () {
//     console.log('obj createApp!')
//   }
// }