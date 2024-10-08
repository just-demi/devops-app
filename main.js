if(push) {
    if(branch === main) {
        console.log("Deploying to production")
    }
}

if(pull_request) {
    if(branch === main) {
        console.log("Deploying to production")
    }
    if(paths === "README.md" || ".github/workflows/**") {
        console.log("Deploying to production")
    }
}

myMangos = ["Mango1" ]
myMango = "mango1"

console.log(myMango)

