async function getDataSkill (){
    const url = '/api/skill';
    const option = {
        method : 'GET',
        headers:{
            'Content-type':'application/json'
        }
    }

    const promisse = await fetch(url, option);
    const response = await promisse.json();

    handdlerPromisse(promisse, response);

};getDataSkill();

const handdlerPromisse = (promisse, response) => {
    switch (promisse.status) {
        case 200:
            insertDataReturned(response)
            break;
        default:
            window.alert(`Error code ${promisse.status}`)
            break;
    }
};

function insertDataReturned (response){

}
