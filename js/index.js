//App.start();
// .get = OK   .post =Nok    .put = Nok    .delete = OK
//Test API Rest

/*Rest.get({
    table: "product",
    id: 3,
    where: "active = true",
    orderby: "title ASC"
}).done((resp) => {
    $('#main').hide().html("Select : " + resp).fadeIn();
})*/

/*Rest.post({
    table: "product",
    fields: {
        title: "camionn",
        active: true,
        onsale: false
    }
}).done((resp) => {
    $('#main').hide().html("Insert : " + resp).fadeIn();
})*/

/*Rest.put({
    table: "product",
    id: 3,
    fields: {
        title: "CAMION",
        active: true,
        onsale: false         
    }
}).done((resp) => {    
    $('#main').hide().html("Update : " + resp).fadeIn();
})*/

/*Rest.delete({
    table: "product",
    id: 4
}).done((resp) => {
    $('#main').hide().html("Delete : " + resp).fadeIn();
})*/