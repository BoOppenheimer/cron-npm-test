import { CronJob } from 'cron';

const job = new CronJob(
	'1 * * * * *', // cronTime
	function () {
		console.log('You will see this message every minute');
		console.log(Date(Date.now()).toString());

	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);

console.log("some love?")
// job.start() is optional here because of the fourth parameter set to true.


module.exports = (req, res) => {
	res.status(200).json ({ message: "hello from mars"};)
}