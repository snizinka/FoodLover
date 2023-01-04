async function tryAsync() {
    const response = await fetch("https://api.github.com/users/snizinka")
    .then(response => response.json()).then((a)=>{
        console.log(a);
        console.log(12);
    })
}

async function tryAsync1() {
    const response = await fetch("https://api.github.com/users/snizinka")
    return response.json();
}

async function tryAsync2() {
    const response = await fetch("https://api.github.com/users/snizinka")
    return response.json();
}

async function tryAsync3() {
    const response = await fetch("https://api.github.com/users/snizinka")
    return response.json();
}

async function executeOne() {
    let a = await tryAsync1();
    console.log("1 ", a);
    let b = await tryAsync2();
    console.log("2", b);
    let c = await tryAsync3();
    console.log("3", c);
}


tryAsync();
executeOne();