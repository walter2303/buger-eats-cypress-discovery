var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

  deliver:function(){

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      'name': `${firstName} ${lastName}`,
      'cpf': cpf.generate(),
      'email': faker.internet.email(firstName),
      'whatsapp': '11999999999',
      'address': {
        'postalcode': '06311001',
        'street': 'Avenida Rui Barbosa',
        'number': '3366',
        'details': '2001',
        'district': 'Vila Santa Terezinha',
        'city_uf': 'Carapicuíba/SP'
      },
      'delivery_method': 'Moto',
      'cnh': 'cnh-digital.jpg'
    }
    
    return data

  }

}