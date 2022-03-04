var newUsrList = [];



function addUsr(inombre, itelefono, iemail, ipassword) {
    this.nombre = inombre;
    this.telefono = itelefono;
    this.emal = iemail;
    this.password = ipassword;
        
        newUsr = {
        nombre: inombre,
        telefono: itelefono,
        email: iemail,
        password: ipassword
              
    };
    
    newUsrList.push(newUsr);
    localStorage.setItem("user", JSON.stringify(newUsrList))
        

};
