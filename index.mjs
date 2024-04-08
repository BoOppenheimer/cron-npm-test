import { CronJob } from 'cron';
import { DateTime } from 'luxon';
import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000; //vercel will define or 3000
const startOfTodayUTC = DateTime.utc().startOf('day');

console.log("this is now:" ,startOfTodayUTC);

let myCountMin = 0;
let dailyCountTotal = 0;
console.log("---NODE CRON RUNNING-----");

const jobA = new CronJob(
	'0 * * * * *', // cronTime every mins setting sec to 0
	function () {
		myCountMin++
		checkBlockAward();
		

	}, // onTick
	null, // onComplete
	true, // start
	'UTC' // timeZone
);

const jobB = new CronJob(
	'0 */5 * * * *', // cronTime every mins setting sec to 0
	function () {
		dailyCountTotal++
		dailySummery();
		

	}, // onTick
	null, // onComplete
	true, // start
	'UTC' // timeZone
);

function checkBlockAward () {
	console.log(`Every Min: ${Date.now().toString()}`);
	console.log(`Min count Total: ${myCountMin}`);
	
}

function dailySummery () {
	console.log(`Every 5 Min: ${Date.now().toString()}`);
	console.log(`5 Min count Total: ${dailyCountTotal}`);
}

app.get('/', function (req, res) {
  res.send(`- Ready sir! ES6 - Minutes: ${myCountMin} Every 5: ${dailyCountTotal}`)
})


// create route w/middleware to forward hook to twitter
app.listen(PORT, () => {
  //console.log(`Example app listening on port ${PORT}`)
})


