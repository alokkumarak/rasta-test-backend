const mongoose = require('mongoose');

const unverifiedUserSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  FirstName: { type: String },
  LastName: { type: String },
  TypeOfUser: { type: String },
  TypeOfGovt: { type: String },
  Authority: { type: String },
  Jurisdiction: { type: String },
  Posting: { type: String },
  Designation: { type: String },
  Zone: { type: String },
  StateList: [{ type: String }],
  DistrictList: [{ type: String }],
  CityList: [{ type: String }],
  UtName: { type: String },
  Sectors: [{ type: String }],
  Corporation: { type: String },
  Ward: { type: String },
  CompanyName: { type: String },
  ProjectName: { type: String },
  PackageDetails: { type: String },
  FrontId: { type: String },
  BackId: { type: String },
  WorkOrderNo: { type: String },
  IsVerified: { type: Boolean, default: false },
  Comment: { type: String },
  Tags: [{ type: String }],
  Role: { type: String },
  PlatformAccess: { type: Boolean },
  DataCollectionAccess: { type: Boolean },
  RouteNavAccess: { type: Boolean },
}, { collection: 'unverified-user-data' });

const UnverifiedUser = mongoose.model('UnverifiedUser', unverifiedUserSchema);

module.exports = UnverifiedUser;