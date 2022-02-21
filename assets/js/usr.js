var newUsrList = [];

function addUsr(inombre, itelefono, iemail, ipassword) {

    var newUsr = {
        nombre: inombre,
        telefono: itelefono,
        email: iemail,
        password: ipassword
    };

    newUsrList.push(newUsr);
    console.log(newUsr);
    // localStorageUsr(newUsrList)
}
// function getUsrList() {
//     var storedList = localStorage.getItem('localUsrList');
//     if (storedList == null) {
//         newUsrList = [];
//     }
//     else {
//         newUsrList = JSON.parse(storedList);
//     }
//     return newUsrList;
// }

// function localStorageUsr(iList) {
//     localStorage.setItem('localStorageUsr', JSON.stringify(iList));
// };