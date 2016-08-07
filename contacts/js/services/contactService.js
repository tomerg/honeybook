app.service('contacts', function ($http) {

var contactService = {
  contactsData: []
};

contactService.getALL = function () {
  return $http.get('https://candidate-test.herokuapp.com/contacts').then(function(response){
    contactService.contactsData = response.data;
  });
}

return contactService;

});