let checkRole = () => {
    let role = "buyer"
    return role
}
checkRole()
let createProduct = () => {
    let role = checkRole()
    if (role == "seller") {
        console.log(" can create product");
    }
    else {
        console.log(" cannot create product");
    }
}
createProduct()
