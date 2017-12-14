	var Client = require('./Client');
	module.exports.chat = {
		send: function(message) {
			gClient.sendArray([{m:"a", message: message}]);
		}
	}
	var channel_id = "";
	if(channel_id.substr(0, 1) == "/") channel_id = channel_id.substr(1);
	if(channel_id == "") channel_id = "lobby";

	var gClient = new Client("ws://www.multiplayerpiano.com");
	module.exports.client = gClient;
	gClient.setChannel(channel_id);
	gClient.start();
	module.exports.piano = {
		keys: ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a-1", "as0", "as1", "as2", "as3", "as4", "as5", "as6", "as-1", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b-1", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "cs0", "cs1", "cs2", "cs3", "cs4", "cs5", "cs6", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "ds0", "ds1", "ds2", "ds3", "ds4", "ds5", "ds6", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "fs0", "fs1", "fs2", "fs3", "fs4", "fs5", "fs6", "fs7", "g0", "g1", "g2", "g3", "g4", "g5", "g6", "gs0", "gs1", "gs2", "gs3", "gs4", "gs5", "gs6"]
	}
	module.exports.press = function press(note, vel) {
		gClient.startNote(note, vel);
	}


	// Setting status
	(function() {
		gClient.on("status", function(status) {
			
		});
		gClient.on("count", function(count) {

		});
	});

	// Handle changes to participants
	(function() {
		gClient.on("participant added", function(part) {

		});
		gClient.on("participant removed", function(part) {

		});
		gClient.on("participant update", function(part) {

		});
		gClient.on("ch", function(msg) {
			for(var id in gClient.ppl) {
				if(gClient.ppl.hasOwnProperty(id)) {
					var part = gClient.ppl[id];
					
				}
			}
		});
		function updateCursor(msg) {
			const part = gClient.ppl[msg.id];
			
		}
		gClient.on("m", updateCursor);
		gClient.on("participant added", updateCursor);
		gClient.on("a", function(msg){
			if (msg.a == "@info@") {
				module.exports.chat.send("MPP.js made by: SonicCoding1180(FluffehKitteh48)")
			} else if (msg.a == "@help@") {
				module.exports.chat.send("Core Commands: @info@, @help@, @invite@, @discord@, @git@, @github@");
			} else if (msg.a == "@invite@" || msg.a == "@discord@") {
				module.exports.chat.send("Discord Invite: discord.gg/EfUwTBn");
			} else if (msg.a == "@git@" || msg.a == "@github@") {
				module.exports.chat.send("MPP.js Github: https://github.com/Herofied1180/mppjsnpm")
			}
		});
	})();