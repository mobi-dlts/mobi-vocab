const { getPlace } = require('./Place');
const { getPostalAddress } = require('./PostalAddress');
const { getGeoCoordinates } = require('./GeoCoordinates');
const { getChemicalProperty } = require('./ChemicalProperty');
const { getMechanicalProperty } = require('./MechanicalProperty');
const { getMeasuredProperty } = require('./MeasuredProperty');
const { getMeasuredValue } = require('./MeasuredValue');
const { getInspector } = require('./Inspector');
const { getObservation } = require('./Observation');
const { getQualification } = require('./Qualification');
const { getInspectionReport } = require('./InspectionReport');
const { getIntentToSell } = require('./IntentToSell');
const { getQuantitativeValue } = require('./QuantitativeValue');
const { getOrganization } = require('./Organization');
const { getParcelDelivery } = require('./ParcelDelivery');
const { getPerson } = require('./Person');
const { getEntity } = require('./Entity');
const { getProduct } = require('./Product');
const { getAgInspectionReport } = require('./AgInspectionReport');
const { getAgProduct } = require('./AgProduct');
const { getAgPackage } = require('./AgPackage');
const { getppq203 } = require('./ppq203');
const { getPhytosanitary } = require('./Phytosanitary');
const { getLEIevidenceDocument } = require('./LEIevidenceDocument');
const { getProductRegistrationEvidenceDocument } = require('./ProductRegistrationEvidenceDocument');
const { getLegalEntityIdentifierCredential } = require('./LegalEntityIdentifierCredential');

const generatorConfig = {
  Place: getPlace,
  PostalAddress: getPostalAddress,
  GeoCoordinates: getGeoCoordinates,
  ChemicalProperty: getChemicalProperty,
  MechanicalProperty: getMechanicalProperty,
  MeasuredProperty: getMeasuredProperty,
  MeasuredValue: getMeasuredValue,
  Inspector: getInspector,
  Observation: getObservation,
  ParcelDelivery: getParcelDelivery,
  Qualification: getQualification,
  InspectionReport: getInspectionReport,
  IntentToSell: getIntentToSell,
  QuantitativeValue: getQuantitativeValue,
  Organization: getOrganization,
  Person: getPerson,
  Entity: getEntity,
  Product: getProduct,
  AgProduct: getAgProduct,
  AgPackage: getAgPackage,
  AgInspectionReport: getAgInspectionReport,
  Phytosanitary: getPhytosanitary,
  ppq203: getppq203,
  LEIevidenceDocument: getLEIevidenceDocument,
  ProductRegistrationEvidenceDocument: getProductRegistrationEvidenceDocument,
  LegalEntityIdentifierCredential: getLegalEntityIdentifierCredential,
};

module.exports = generatorConfig;
