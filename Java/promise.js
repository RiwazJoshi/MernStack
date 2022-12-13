let promise = new Promise((resolve, reject) => {
    // resolve("success")
    reject({
     msg:"Error Occured"}
        )
})
promise
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})




// try catch
// try {
//     a = "b" + "c"
//     console.log({ a });
// } catch (error) {
//     console.log(error.message);
// }