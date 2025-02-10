/*
How do Promise APIs work?
• always return a promise object.
• program continues to execute even if function returning promise hasn’t completed.
• on completion, the promise object is triggered to perform further actions.
• attach handlers to the promise object, which are executed when the promise has
succeeded or failed.
*/
/** The fetch() method starts the process of fetching a resource
 * from the network. It returns a promise that eventually resolves
 * to the Response to that request,
 **/
var fetchPromise1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// logging the promise to aid in understanding
console.log(fetchPromise1);
// The promise is resolved when the response is received
fetchPromise1.then(function (response) {
    console.log("Received response? ".concat(response.ok ? "yes" : "no"));
    console.log("Response Status: ".concat(response.status));
});
// sequential execution; starts right after fetch() is called
console.log("Started request…");
for (var i = 0; i < 100; i++) {
    console.log("do other things ...");
}
console.log("End of script");
console.log("a lot of other things ...");
