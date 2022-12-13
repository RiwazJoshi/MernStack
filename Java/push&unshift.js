// let arr = [1, 2, 3, 5, 6, 7, 8, 9]
// arr.push(4) // adds value at the end
// arr.unshift(0) // adds valur at the begining
// arr.pop() // removes value from the end
// arr.shift() // removes value from the begining
// arr.splice(1, 0, "new value") // adds value in the desired place in the middle
// // arr.splice(index where you want to add value , number of value you want to delete , new value)
// let arr2 = arr.slice(1,5) // Takes value from-to given index and duplicates it in another array
// console.log(arr);
// console.log(arr2);



// Using Push

let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania",
        "continent": "Asia"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria",
        "continent": "Asia"
    },
    {
        "code": "as",
        "name": "American Samoa",
        "path": "americansamoa"
    },
    {
        "code": "ad",
        "name": "Andorra",
        "path": "andorra"
    },
    {
        "code": "ao",
        "name": "Angola",
        "path": "angola"
    },
    {
        "code": "ai",
        "name": "Anguilla",
        "path": "anguilla"
    },
    {
        "code": "aq",
        "name": "Antarctica",
        "path": "antarctica"
    },
    {
        "code": "ag",
        "name": "Antigua and Barbuda",
        "path": "antiguaandbarbuda"
    },
    {
        "code": "ar",
        "name": "Argentina",
        "path": "argentina",
        "continent": "Asia"
    },
    {
        "code": "am",
        "name": "Armenia",
        "path": "armenia",
        "continent": "Asia"
    },
    {
        "code": "aw",
        "name": "Aruba",
        "path": "aruba"
    },
    {
        "code": "au",
        "name": "Australia",
        "path": "australia"
    },
    {
        "code": "at",
        "name": "Austria",
        "path": "austria"
    },
    {
        "code": "az",
        "name": "Azerbaijan",
        "path": "azerbaijan",
        "continent": "Asia"
    },
    {
        "code": "bs",
        "name": "Bahamas",
        "path": "bahamas"
    },
    {
        "code": "bh",
        "name": "Bahrain",
        "path": "bahrain",
        "continent": "Asia"
    },
    {
        "code": "bd",
        "name": "Bangladesh",
        "path": "bangladesh",
        "continent": "Asia"
    },
    {
        "code": "bb",
        "name": "Barbados",
        "path": "barbados",
        "continent": "Asia"
    },
    {
        "code": "by",
        "name": "Belarus",
        "path": "belarus",
        "continent": "Asia"
    },
    {
        "code": "be",
        "name": "Belgium",
        "path": "belgium",
        "continent": "Asia"
    }
]
let asianCountries = [

];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].continent == "Asia") {
        asianCountries.push(countries[i])
    }
}
console.log(asianCountries);

// let asianCountries2 = countries.fiiler((element) => {
//     if (element.continent == "Asia") {
//         return true;

//     }
// })
// console.log("length is", asianCountries2.length);



// let asianCountries2 = countries.filter((element) => {
//     if (element.continent == "Asia") {
//         return true;
//     }
// })
// console.log("length is", asianCountries2.length); 