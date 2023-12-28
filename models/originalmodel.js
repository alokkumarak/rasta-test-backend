const mongoose = require("mongoose");

const originalDataSchema = new mongoose.Schema(
    {
      Username: {
        type: String,
        unique: true,
        required: true,
      },
      FirstName: {
        type: String,
      },
      LastName: {
        type: String,
      },
      Typeofuser: {
        type: String,
      },
      TypeofGovt: {
        type: String,
      },
      Authority: {
        type: String,
      },
      Jurisdiction: {
        type: String,
      },
      Posting: {
        type: String,
      },
      Designation: {
        type: String,
      },
      zone: {
        type: String,
      },
      Statelist: {
        type: String,
      },
      Districtlist: {
        type: String,
      },
      Citylist: {
        type: String,
      },
      UT_name: {
        type: String,
      },
      Ward: {
        type: String,
      },
      Coorporation: {
        type: String,
      },
      Sectors: {
        type: String,
      },
      Company_Name: {
        type: String,
      },
      Project_Name: {
        type: String,
      },
      package_details: {
        type: String,
      },
      WorkOrderNumber: {
        type: String,
      },
      Front_ID: {
        type: String,
      },
      Back_ID: {
        type: String,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      Comment: {
        type: String,
      },
      Tags: {
        type: String,
      },
      Role: {
        type: String,
        required: true,
      },
      PlatformAccess: {
        type: Boolean,
        default: false,
      },
      DataCollectionAccess: {
        type: Boolean,
        default: false,
      },
      RouteNavAccess: {
        type: Boolean,
        default: false,
      },
    },
    { collection: "Original-data" }
  );

module.exports = mongoose.model("Original-data", originalDataSchema);