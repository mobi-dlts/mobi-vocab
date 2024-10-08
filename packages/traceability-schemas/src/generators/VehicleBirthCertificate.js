const faker = require('faker');

const getVehicleBirthCertificate = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema'],
        type: 'VehicleBirthCertificate',
        certURI: 'dOQKyOs1nUfj5svRato3bCM1XUOpGpxeBnLZDHiLUswgkHh55lyIuZmpTBGG4ixr',
        colorOemCode: 'Bl',
        countryOfOrigin: 'United States of America',
        productionDate: '01/01/2021',
        engineCode: 'None',
        engineSerialNumber: 'DJ51279',
        fuelType: 'unleaded gasoline',
        issuer: 'did:mobi:c276e14rc81ebfeb1f782ebd6e',
        manufacturer: 'Ford',
        model: 'Taurus',
        modelYear: '2015',
        plantCode: 'H',
        previousVBC: '0LmbSknoaLjkVnPkFQt5N3LxJydTOKS9o4ITgEjo9IqYnMh7gPPLZJ5U0zEXlJ5j',
        sigAlg: 'ECDSA',
        transmissionSerialNumber: '6F00001',
        trimType: 'SE',
        uvi: '36h948q767wuxUlzLk2dAIzWWVgTTN8X9F8nmr7upRgRdL4VomOqJLOg4ftP3Gkg',
        vin: 'JTERU5JR7M5861170'

    };
    return example;
};

module.exports = { getVehicleBirthCertificate };
