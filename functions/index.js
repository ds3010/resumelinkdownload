const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const cors = require("cors")({
    origin: "https://dsfrontdev.web.app",
});

exports.download = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        //console.log("DOWNLOADING RESUME")
        res.download("./daniel_seijas_resume.pdf");
    })  
})
