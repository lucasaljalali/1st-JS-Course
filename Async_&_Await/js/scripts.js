//syntax
function firstFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Lets wait this!');
            resolve();
        }, 2000)
    })
}

async function secondFunction() {
    console.log('Started second function');

    await firstFunction();

    console.log('Finished second function');
}

secondFunction();


//real life example
function getUser(id) {

    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))

}

async function showUserName(id) {

    const user = await getUser(id)

    console.log(`The user name is: ${user.data.first_name}`)

}

showUserName(2);


async function showUserLastName(id) {

    try {

        const user = await getUser(id)

        console.log(`The user last name is: ${user.data.last_name}`)
        
    } catch(err) {

        console.log(`Error: ${err}`)

    }
}
showUserLastName(2);