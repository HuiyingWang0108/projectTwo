// Get references to page elements
var $locationBtn = $(".locationBtn");

// The API object contains methods for each kind of request we'll make
var API = {
      saveLocation: function (location) {
            return $.ajax({
                  headers: {
                        "Content-Type": "application/json"
                  },
                  type: "post",
                  url: "api/createpost",
                  data: JSON.stringify(location)
            });
      },
      getLocation: function () {
            return $.ajax({
                  url: "api/createpost",
                  type: "get"
            });
      }
}
var refreshLocation = function () {
      API.getLocation().then(function (data) {
            console.log("**888****", data);
            // $("#testId").text(data);
      });
};
var handleLocationFormSubmit = function (event) {
      event.preventDefault();

      var location = {
            location: $("input[name='location']:checked").val().trim()
      };
      console.log("location------", location);
      if (!location.location) {
            alert("You must choice a location!");
            return;
      }

      API.saveLocation(location).then(function () {
            refreshLocation();
      });
      //Load createpostType page
      window.location.href = "/createpostType";
};
$(document).on("click", ".locationBtn", handleLocationFormSubmit);

// $(document).ready(function () {
//       $(document).on("click", ".locationBtn", function () {

//             console.log("------click---------");

//             event.preventDefault();

//             console.log("---------------");
//             var location = {
//                   location: $("input[name='location']:checked").val().trim()
//             };
//             console.log("-----location----------", location);

//             if (!location.location) {
//                   alert("You must choice a location!");
//                   return;
//             }
//             $.ajax({
//                   url: "/api/createpost",
//                   method: "post",
//                   data: JSON.stringify(location)
//             }).then(function (err, data) {
//                   if (err) throw err;
//                   console.log("/api/createpost---data.body---", data.body);
//             });
//             //Load createpostType page
//             window.location.href = "/createpostType";
//             // window.oepn("/createpostType");
//       });
//       // $(".locationBtn").on("click", function (event) {
//       //       console.log("------click---------");

//       //       event.preventDefault();

//       //       console.log("---------------");
//       //       var location = {
//       //             location: $("input[name='location']:checked").val().trim()
//       //       };
//       //       console.log("-----location----------", location);

//       //       if (!location.location) {
//       //             alert("You must choice a location!");
//       //             return;
//       //       }
//       //       $.ajax({
//       //             url: "/api/createpost",
//       //             method: "post"
//       //       }).then(function (err, data) {
//       //             if (err) throw err;
//       //             console.log("/api/createpost---data.body---", data.body);
//       //       });
//       //       //Load createpostType page
//       //       window.location.href = "/createpostType";
//       //       // window.oepn("/createpostType");
//       // });
// });