// Initialize Firebase





var config = {
    apiKey: "AIzaSyBDg_e9HnE7xCncpJGnCt7O1FYVFq1U9fw",
    authDomain: "traindata-8a076.firebaseapp.com",
    databaseURL: "https://traindata-8a076.firebaseio.com",
    projectId: "traindata-8a076",
    storageBucket: "traindata-8a076.appspot.com",
    messagingSenderId: "721050013733"
};
firebase.initializeApp(config);

var database = firebase.database();

var table = $("#displaytrain");

var table = $(".trainT");
var currentTime = new Date();
var time = moment().format("HH:mm");
var momentadd = moment().format("HH:mm");
console.log(momentadd);



database.ref("/Train_Info/").on("child_added", function (snapshot) {




    snapshot.forEach(function (childsnap) {

        var object_name = childsnap.val();
        var timein = moment(object_name.frequency, "MM");
        var trainStop = moment(object_name.militaryTime, "HH:mm")
        var trainstopvone = moment().set({
            "hour": object_name.militaryTime[0],
            "minute": object_name.militaryTime[1]
        })
        var freqTime = object_name.frequency;
        var trainNew = trainStop.add(object_name.frequency, "m").format("HH:mm")
        var initialTime = moment(trainstopvone).format("HH:mm");
        var differnce = moment.utc(moment(trainNew, "HH:mm").diff(moment(initialTime, "HH:mm"))).format("mm");
        var formtime = moment(object_name.militaryTime, "HH:mm").add(4, "mm");
        var findthetime = moment();
        var i = 0;

        ////////////////////////////////



        console.log(differnce);
        console.log(trainStop);
        console.log(trainstopvone);
        console.log(trainNew);
        console.log(formtime);
        console.log(object_name.militaryTime);
        console.log(timein);
        console.log(findthetime);
        ////////////////////////////////
        var row = "<tr><td class='cell'>" + object_name.name + "</td><td class='cell'>" + object_name.destination + "</td><td class='cell'>" + object_name.frequency + "</td><td class='cell' id = 'nextA' >" + trainNew + "</td><td class='cell' id = 'diff'>" + differnce + "</td></tr>";

        table.append(row);
        /////////////////////////////////////

        function updateTime() {
            console.log("hi");
            if (object_name.frequency < 0) {

                object_name.frequency = 0;
                console.log(0)

            } else

                i++
            console.log(0)

        }


        setInterval(function () {
            ()
        }, 60000)



    })
});








$("#btnSubmit").on("click", function (event) {
    event.preventDefault();


    var trainNM = $("#tName").val().trim();
    var trainDest = $("#tDestination").val().trim();
    var trainM = $("#tFTT").val().trim();
    var trainMMM = trainM.split(":");
    var trainFreq = $("#tF").val().trim();

    database.ref("/Train_Info/" + trainNM).push({

        name: trainNM,
        destination: trainDest,
        frequency: trainFreq,
        militaryTime: trainMMM,



    })


})



database.ref().once("value", function (snapshot) {

    snapshot.forEach(function (snap) {


        object = snap.val()


    })



})


// save data into variable for each column in need 
// save data