const Discord = require('discord.js')
const Bot = new Discord.Client()
const colors = require('colors');
var version = "0.3 remaster";
const http = require('http');
const fs = require('fs');
var prefix = '/';
const request = require("request");
var mysql = require('mysql');
var texts = JSON.parse(fs.readFileSync('datapack.json'));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234boss"
});
Bot.commands = new Discord.Collection();
console.log('======================================================\n'.yellow,'AiiunBot'.green,'AiiunBot version'.yellow,(version).green,'\nmade in','th'.red,'a'.white,'il'.blue,'a'.white,'nd'.red);
console.log('by KiwmonZ Ft.chan022\n'.green,'======================================================'.yellow);
fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0){
		console.log("No commands to load!\n");
		return
	}
	
	console.log(`Command Manager
====================
Loading ${jsfiles.length} commands!`.yellow);
	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`)
		console.log(`${i + 1}: ${f} loaded!`.green);
		Bot.commands.set(props.help.name, props);
	});
});

Bot.on('ready', () => {
	console.log(`======================================================`.yellow);
	Bot.user.setGame('คำสั่งบอท /?');
  console.log(`Logged in as ${Bot.user.tag}!`.green);
  console.log(Bot.commands);
  console.log()
  con.connect(function(err) {
  if (err) mysqllog("cannot connect!","red");
  mysqllog("Connected!","green");
})
});
Bot.on('message', async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
	//swearworddetect
		if(message.content.match(/suck|fuck|bitch|กาก|เห้ย|สัส|หน้าหี|ควย|ควาย|เย็ด|เหี้ย|หี|หำ|พ่อง|แม่ง|ตีน|ครวย|hee|kuy/gi)){
			var swearWordsed = message.content.replace(/suck|fuck|bitch|กาก|เห้ย|สัส|หน้าหี|ควย|ควาย|เย็ด|เหี้ย|หี|หำ|พ่อง|แม่ง|ตีน|ครวย|hee|kuy/gi, "****");
			message.delete();
			message.channel.sendMessage(`${message.author} พูดไม่เพราะอ่ะฮึ!`);
			message.channel.sendMessage(`https://media.giphy.com/media/jgn8kuNNx8mju/giphy.gif`)
		}
if(message.content === "/?"){
	message.channel.sendMessage('```'+`css
=====================================================
กรุณาเลือกว่าจะต้องความช่วยเหลือยังไงด้วยค่ะ
=====================================================
/emotion
- คำสั่งด้านอารมณ์
/help
- คำสั่งทั่วไป
/cmds
- คำสั่งขึ้นสูง (มั้ง)
/warp
- วาร์ปแจ่มๆ
=====================================================
`+'```');
}
if(message.content === "/Kawaii"){
	message.channel.sendMessage(`https://discord.gg/QnMaWtB!`)
}
if(message.content === "/cmds"){
	message.channel.sendMessage('```'+`css
=====================================================
คำสั่งขึ้นสูง (มั้ง)
=====================================================
/ac (ความสำเร็จที่อยากได้ ภาษาอังกฤษเท่านั้น!!)
- ความสำเร็จ
/invite
- สร้างลิ้งค์เชิญคนเข้า Discord
/ping
- เช็คค่าเน็ต
/profile
- ดูโปรไฟล์
/translate
- แปลภาษา
/server
- เช็คคน HostBot
=====================================================
`+'```');
}
if(message.content === "/warp"){
	message.channel.sendMessage('```'+`css
=====================================================
วาร์ป! เอาให้น้ำหมดตัวเลยค่ะ!
=====================================================
Hentai Pros
- https://www.hentaipros.com/
Hentai Pulse
- http://hentaipulse.com/
Hanime
- http://www.hanime.com/
Hentai Freak
- https://hentaifreak.org/
aipants
- https://aipants.com/en

Dojin 1
- https://hitomi.la/tag/male:yaoi-english-1.html
Dojin 2
-http://baramangaonline.com/category/english/

Porn
- ABP-092, ABS-130, ABS-141, ABS-170, ABS-217, ABS-047, ABS-070, ABS-074, ABS-083, ADN-032, AKB-056, AMBI-048, AOZ-173z, AOZ-189z, AOZ-212z, AOZ-217z, AP-154, AP-081, APAA-151, APAA-246, APAA-258, APAA-272, APAA-280, APAA-299, APAK-074, APAK-078, APAK-086, APAK-088, ARM-383, ARM-416, ARMF-003, ATID-157, ATID-207, ATOM-093, AUKG-276, AUKG-293, AUKG-045, AVOP-109, AVOP-155, AVOP-159, -167, AVOP-002, BAMS-001, BDSR-185, BDSR-202, BGN-018, BGN-005,
=====================================================
`+'```');
}
if(message.content === "/emotion"){
	message.channel.sendMessage('```'+`css
=====================================================
คำสั่งด้านอารมณ์
=====================================================
1. AiiunBot
- เรียกบอท
2. สวัสดี
- ทักทาย
3. จูบ
- จูบ -//////-
4. แบร่
- แกล้งบอท
5. เขิลหรอ
- ถามบอท
6. ง่วง
- บอกง่วง
6.1 นอน
- บอกฝรรดี
6.2 บาย
- ลาบอท
6.3 ฝรรดี
- บอกฝรรดี
7. ยิ้ม
- แสดงอาการยิ้ม
8. หิว
- ให้บอทป้อนอาหาร
9. หัวร้อน
- ให้บอทช่วย
10. เงี่ยน
- ก็เรื่องแบบนั้นหละ -/////-
11. บลาๆ
- บลาๆ (เล่นกับบอท)
13. เงอะ
- เงอะ (เล่นกับบอท)
14. มอง
- มองบอท
15. ขอโทด
- อ้อนบอท
16. เหงา
- ชวนบอทคุย
17. ฮับ / งับ / ครับ / ค่ะ
- ตอบรับ
18. ตื่น
- ปลุกบอท
19. ไม่เป็นไร
- บอกบอทว่าไม่เป็นไร
20. เป็นไร
- ถามบอทว่าเป็นไร
=====================================================
 ***ตอนใส่คำสั่งไม่ต้องใส่ / วิธีใช้เช่น หัวร้อน***
=====================================================
`+'```');
}
if(message.content === "/help"){
	message.channel.sendMessage('```'+`css
=====================================================
คำสั่งด้านเพลง
=====================================================
🍎 เปิดเพลง
/เปิดเพลง
🍍 ข้ามเพลง
/เปลี่ยนเพลง
🍉 คิวเพลง
/คิว
🍐 ปิดเพลง
/ปิดเพลง
=====================================================
 ***ตอนใส่คำสั่งไม่ต้องใส่ / วิธีใช้เช่น หัวร้อน***
=====================================================
`+'```');
}
if(message.content.match(/บอท(ทำไร|ทำอะไรได้|ได้บ้าง)/i)){
	var list = [`คุยกับคุณได้ไง ${message.author}`,`กันคำอยาบได้ (มั้ง) `];
	var listrandomed = (list[Math.floor(Math.random() * list.length)].toString());
	message.channel.sendMessage(listrandomed);
}
if(message.content.match(/บอทโง่/i)){
	message.channel.sendMessage(`มีปัญหามากหรอเจ้าคะ ${message.author}!
	แค่หนูบางทีไม่ได้ทำตามคำสั่งไม่จำเป็นต้องด่ากันหนิถ้ามีปัญหามากก็แจ้งที่"KiwmonZ"ค่ะ!
	https://sites.google.com/view/aiiun`)
}
if(message.content.match(/บอทกาก/i)){
	message.channel.sendMessage(`มีปัญหามากหรอเจ้าคะ ${message.author}!
	แค่หนูบางทีไม่ได้ทำตามคำสั่งไม่จำเป็นต้องด่ากันหนิถ้ามีปัญหามากก็แจ้งที่"KiwmonZ"ค่ะ!
	https://sites.google.com/view/aiiun`)
}
if(message.content.match(/AiiunBot/i)){
	message.channel.sendMessage(`เรียกหนูมีไรหยอ! //วิ่งมาด้วยความเร็วแสง ${message.author}!
	https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif`)
}
if(message.content.match(/ขอโทด/i)){
	message.channel.sendMessage(`ไม่เป็นไรค่ะ :smiley: ${message.author}!`)
}
if(message.content.match(/ไม่เป็นไร/i)){
	message.channel.sendMessage(`เจ้่าค่ะ :smiley: ${message.author}!`)
}
if(message.content.match(/เป็นไร/i)){
	message.channel.sendMessage(`ป--เปล่าค่ะ -/////- :smiley: ${message.author}!
	https://media.giphy.com/media/W2JiHcUyeev5u/giphy.gif`)
}
if(message.content.match(/สวัสดี/i)){
	message.channel.sendMessage(`สวัสดีงับ ${message.author}! :smiley: `)
		message.channel.sendMessage("สวัสดีจ่ะ")
              .then((msg)=>{
    msg.edit("ยินดีที่ได้รู้จักนะ")
    msg.edit("มาเป็นเพื่อนกันเถอะ")
	})
	}
if(message.content === "จูบ"){
	message.channel.sendMessage(`ท--ทำไรอ่ะ!!>/////< ${message.author}!
	https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif`)
		message.channel.sendMessage("ด--เดี๋ยว")
              .then((msg)=>{
    msg.edit("เดี๋ยวสิ -////////-")
    msg.edit("//หอบ -//////-")
	msg.delete()
	})
	}
if(message.content.match(/มอง/i)){
	message.channel.sendMessage(`ต้องการไรหรอเจ้าคะ ฮึๆ ${message.author}!
	https://media.giphy.com/media/862A6X2sooSsw/giphy.gif`)
		message.channel.sendMessage("ฮึๆ")
              .then((msg)=>{
    msg.edit("ต้องการจริงๆสินะ")
	msg.edit("จะพยายามทรมานให้น้อยที่สุดนะ")
	msg.edit("ไม่เจ็บนะ")
	msg.edit("ฮึๆ")
	msg.delete()
	})
	}
if(!message.content.match(/@|!|t!|;|__|!|www./ig)){
		if(message.content.match(/hello|hi|สวัสดี/ig)){
	var voiceChannel = message.member.voiceChannel;
	var video = await youtube.getVideo("https://youtu.be/Ufe6f-0OcQ8");
	await handleVideo(video, message, voiceChannel, true);
		}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`ไม่สามารถเข้าห้องได้เจ้าค่ะ T^T: ${error}`);
			queue.delete(message.guild.id);
			return
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return 
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	}
	}
	function tts(text){
const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'th-th', ssmlGender: 'NEUTRAL'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  // Write the binary audio content to a local file
  fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
	const dispatcher = connection.play('output.mp3');
    console.log('Audio content written to file: output.mp3');
  });
});
	}
if(message.content.match(/งับ/i)){
	message.channel.sendMessage(`${message.author}! เจ้าค่ะ >w<`)
}
if(message.content.match(/ฮับ/i)){
	message.channel.sendMessage(`${message.author}! เจ้าค่ะ >w<`)
}
if(message.content.match(/ค่ะ/i)){
	message.channel.sendMessage(`${message.author}! เจ้าค่ะ >w<`)
}
if(message.content.match(/ครับ/i)){
	message.channel.sendMessage(`${message.author}! เจ้าค่ะ >w<`)
}
if(message.content.match(/แบร่/i)){
	message.channel.sendMessage(`${message.author}! แบร่ 
	https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif`)
}
if(message.content.match(/เหงา/i)){
	message.channel.sendMessage(`${message.author} คุยกับหนูได้นะ -/////-
	https://media.giphy.com/media/W2JiHcUyeev5u/giphy.gif`)
}
if(message.content.match(/เขิลหรอ/i)){
	message.channel.sendMessage(`${message.author}! ป--เปล่านะ -///////-
	https://media.giphy.com/media/W2JiHcUyeev5u/giphy.gif`)
}
if(message.content.match(/เงอะ/i)){
	message.channel.sendMessage(`${message.author} เงอะ ! =w=
	https://media.giphy.com/media/W2JiHcUyeev5u/giphy.gif`)
}
if(message.content.match(/ง่วง/i)){
	var list = [`ง่วงก็นอนงับ ${message.author}! :zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`,`${message.author} นอนๆ:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`,`${message.author} ราตรีสวัสดิ์:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`,`${message.author} ฝรรดีค่ะ:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`];
	var listrandomed = (list[Math.floor(Math.random() * list.length)].toString());
	message.channel.sendMessage(listrandomed);
	}
if(message.content.match(/นอน/i)){
	message.channel.sendMessage(`${message.author} ฝรรดีค่ะ:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`)
}
if(message.content.match(/ฝรรดี/i)){
	message.channel.sendMessage(`${message.author} ฝรรดีค่ะ:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`)
}
if(message.content.match(/ตื่น/i)){
	message.channel.sendMessage(`${message.author} อรุณสวัสดิ์ค่ะ -w-:zzz:
	https://cdn.discordapp.com/attachments/496168130163245057/496862019761471513/1538502292452.gif`)
}
if(message.content.match(/บาย/i)){
	message.channel.sendMessage(`${message.author} บายเจ้าค่ะ:zzz:
	https://media.giphy.com/media/3tOCqYxFtdNzW/giphy.gif`)
}
if(message.content.match(/ยิ้ม/i)){
	var list = [`${message.author}! //ยิ้ม
	https://media.giphy.com/media/ellxlkgbPTiM0/giphy.gif`,`
${message.author}! //ยิ้ม
	https://media.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif`];
	var listrandomed = (list[Math.floor(Math.random() * list.length)].toString());
	message.channel.sendMessage(listrandomed);
	}
if(message.content.match(/หิว/i)){
	var list = [`${message.author} อา~~อ้ามม //ป้อนๆ♥`];
	message.channel.sendMessage(`https://media.giphy.com/media/6GgWVtG83mb5u/giphy.gif`)
	var listrandomed = (list[Math.floor(Math.random() * list.length)].toString());
	message.channel.sendMessage(listrandomed);
	}
if(message.content.match(/ง่ำ/i)){
	var list = [`${message.author} อา~~อ้ามม //ป้อนๆ♥`];
	message.channel.sendMessage(`https://media.giphy.com/media/6GgWVtG83mb5u/giphy.gif`)
	var listrandomed = (list[Math.floor(Math.random() * list.length)].toString());
	message.channel.sendMessage(listrandomed);
	}
if(message.content.match(/บลาๆ/i)){
	message.channel.sendMessage(`${message.author} บลาๆ ~~`)
	message.channel.sendMessage(`https://media.giphy.com/media/f0yOYF0EtwSVa/giphy.gif`)
	}
if(message.content.match(/หัวร้อน/i)){
	message.channel.sendMessage(`${message.author} ส่งฮอลล์คูลไปค่ะ
	https://youtu.be/arQQ8egmG7U`)
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return
	var video = await youtube.getVideo("https://youtu.be/pnLYnT1CMj0");
	await handleVideo(video, message, voiceChannel, true);
	}
if(message.content.match(/เงี่ยน/i)){
	message.channel.sendMessage(`${message.author} ช่วยตัวเองสิบอกหนูทำไม - -
	https://media.giphy.com/media/jgn8kuNNx8mju/giphy.gif`)
	}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`ไม่สามารถเข้าห้องได้เจ้าค่ะ T^T: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`ไม่สามารถเข้าห้องได้เจ้าค่ะ T^T: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** ถูกเพิ่มในคิวแล้วเจ้าค่ะ!`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('``เพลงนี้ถูกหยุดแล้วค่ะ.``');
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(wrap(`🎶 กำลังเล่นเพลง: **${song.title}**`));
	}
	if(!command.startsWith(prefix)) return;
	let cmd = Bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(Bot, message, args);
});
Bot.login('NDk2MTcwMjc1MDk2NzU2MjM1.DyIgkA.r7DlmjdtTs6NqPLk3_7PH9yKFC8');	
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyDhq_KVJHBBaFX6CV_aqydw0I3asY3ZlP4");
const queue = new Map();
var servers = {};
Bot.on("message", async message => {
	if(message.author.bot) return;
    var args = message.content.substring(prefix.length).split(" ");
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
if (message.content.match(/เปิดเพลง/i)){
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('ขอโทดค่ะ นายท่านต้องอยู่ในห้องพูดคุยก่อนนะเจ้าคะ');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('งื้อหนูไม่มีสิทธิ์เข้าห้องง่าา T^T');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('หนูไม่มีสิทธิ์ในการพูดง่าา T^T');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** ถูกเพิ่มลงในคิวแล้วเจ้าค่ะ!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					var videoIndex = "1";
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					console.log(video);
				} catch (err) {
					console.error(err);
					return message.channel.send('หนูไม่เจอสิ่งที่นายท่านคนกำลังค้นหาเจ้าค่ะ');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
}
if(message.content === "เปลี่ยนเพลง"){
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่สามารถเปลี่ยนได้เจ้าค่ะ');
		serverQueue.connection.dispatcher.end('เปลี่ยนเพลงแล้วเจ้าค่ะ!');
		return undefined;
}
if(message.content === "ปิดเพลง"){
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่สารถหยุดได้เจ้าค่ะ!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('ปิดเพลงแล้วเจ้าค่ะ');
		return undefined;
}
if(message.content.match(/(ลด|เบา)(เสียง|อีก)/i)){ 
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
		var args = (serverQueue.volume - 1);
		serverQueue.volume = args;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args / 5);
		return message.channel.send(`ปรับเสียงเป็น **${args}** แล้วเจ้าค่ะ`);
}
if(message.content.match(/(ดัง|เพิ่ม)(เสียง|อีก)/i)){
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
		var args = (serverQueue.volume + 1);
		serverQueue.volume = args;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args / 5);
		return message.channel.send(`ปรับเสียงเป็น **${args}** แล้วเจ้าค่ะ`);
}

    switch (args[0].toLowerCase()) {
      case "หยุด":
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่สารถหยุดได้เจ้าค่ะ');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('หยุดแล้วเจ้าค่ะ');
		return undefined;
break;
      case "เสียง":
		if (!message.member.voiceChannel) return message.channel.send('นายท่านต้องอยู่ในห้องกับหนูก่อนเจ้าค่ะ');
		if (!serverQueue) return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
		if (!args[1]) return message.channel.send(`ความดังเสียงตอนนี้: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`หนูปรับเสียงที่ระดับ: **${args[1]}**`);
break;
      case "เพลงตอนนี้":
		if (!serverQueue) return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
		return message.channel.send(`🎶 กำลังเล่นเพลง: **${serverQueue.songs[0].title}**`);
break;
      case "คิว":
		if (!serverQueue) return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
break;
      case "พัก":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ หยุดเพลงชั่วคราวแล้วค่ะ');
		}
		return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
break;
      case "เล่น":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('เพลงได้กลับมาเล่นอีกครั้งแล้วเจ้าค่ะ');
		}
		return message.channel.send('ไม่ได้เปิดเพลงในตอนนี้ค่ะ');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`หนูเข้าห้องไม่ได้ T^T: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`หนูเข้าห้องไม่ได้ T^T: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** ถูกเพิ่มในคิวแล้วเจ้าค่ะ`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('``เพลงนี้ถูกหยุดแล้วค่ะ``');
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(wrap(`🎶 เพลงที่กำลังเล่นคือ: **${song.title}**`));
}
});
function mysqllog(text, color) {
	console.log("mysql>".blue,text);
	return
}
function wrap(text) {
	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
}
const numberWithCommas = (x) => {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
