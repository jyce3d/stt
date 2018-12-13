
var mongoose = require("mongoose");

setTimeout(function () { 
    mongoose.connect();
}, 60000);

var patientSchema = new mongoose.Schema( patientID:String, batchNumber : String, site:siteSchema);
var cohortRangeSchema = new mongoose.Schema({ rangeMin:Number, renageMax:Number, interval:Number, targetEvent:studyEventSchema, triggerEvent:studyEventSchema,
patients:[patientSchema] }) ;
var cohortSchema = new mongoose.Schema({cohortCode : String, predecessor: cohortSchema, interval:Number, targetEvent:studyEventSchema, triggerEvent:studyEventSchema,
cohortRange:cohortRangeSchema });
var armSchema = new mongoose.Schema( {armCode : String, cohort : cohortSchema} );
var studyEventInstSchema = new mongoose.Schema( {baseline:Date, forecast:Date, planned:Date, actual:Date} );
var studyEventSchema = new mongoose.Schema( {studyEventCode : String, predecessor:studyEventSchema, 
interval:Number, studyEventInst:studyEventInstSchema });

var segmentSchema = new mongoose.Schema({ segmentCode : String, predecessor:segmentSchema, interval:Number, targetEvent:studyEventSchema, triggerEvent:studyEventSchema,
arm:[armSchema]});
var weekCalendarSchema = new mongoose.Schema( { day:Number, closed:Number});
var siteSchema = new mongoose.Schema({siteCode:String, weekCalendars:[weekCalendarSchema]});
var studySchema = new mongoose.Schema( {studyName: String, studyCode:String, 
studyStartDate:Date, segments:[segmentSchema], sites:[siteSchema]} );

var Study = mongoose.model('Study', studySchema);
var Segment = mongoose.model('Segment', segementSchema);
var Site = mongoose.model('Site', siteSchema);
var WeeklyCalendar = mongoose.model('WeeklyCalendar', weeklyCalendar);
var Arm = mongoose.model('Arm', armSchema);
var Cohort = mongoose.model('Cohort', cohortSchema);
var StudyEvent = mongoose.model('StudyEvent', studyEventSchema);
var StudyEventInst = mongoose.model('StudyEventInst', studyEventInstSchema);
var CohortRange = mongoose.model('CohortRange', cohortRangeSchema);
var Patient = mongoose.model('Patient', patientSchema);
