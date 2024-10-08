const getControlAcceptance = () => {
    const example = {
        '@context': ['https://dlt.mobi/mobility-schema/schemas'],
        type: 'ControlAcceptance',
        SellerID: 'did:mobi:e436e12ec21ebfeb1f712ebc3f',
        BuyerID: 'BuyerID',
        ExchangeRate: 'ExchangeRate',
        SuccessCriteria: 'SuccessCriteria',
        SettlementURI: 'SettlementURI',
        PaymentPlatform: 'PaymentPlatformPaymentPlatform',
    };
    return example;
};

module.exports = { getControlAcceptance };
