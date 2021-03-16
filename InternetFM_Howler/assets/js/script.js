//   load stations json
var stationsList = {
  // RP: {
  //   name: "Radio Paradise",
  //   streamURL: "http://stream-dc1.radioparadise.com/mp3-128",
  //   shortCode: "RP",
  // },
  // BR: {
  //   name: "Beatles Radio",
  //   streamURL: "http://www.beatlesradio.com:8000/stream/1/",
  //   shortCode: "BR",
  // },
  // WFKU: {
  //   name: "WFKU",
  //   streamURL: "http://142.93.232.177:8000/wfku",
  //   shortCode: "WFKU",
  // },
  // SLCR: {
  //   name: "St. Louis Classic Rock",
  //   streamURL: "http://74.208.89.18:8000/SLCR_highdef.mp3",
  //   shortCode: "SLCR",
  // },
  // RSDT: {
  //   name: "Radio Shadow D.T.",
  //   streamURL: "http://162.244.80.131:8020/;stream.nsv",
  //   shortCode: "RSDT",
  // },
  // ADR: {
  //   name: "All Dixie Rock",
  //   streamURL: "https://ais-edge09-live365-dal02.cdnstream.com/a88164",
  //   shortCode: "ADR",
  // },
  // QCI: {
  //   name: "QC Indie",
  //   streamURL: "http://23.227.178.146/;stream.nsv",
  //   shortCode: "QCI",
  // },
  // PT: {
  //   name: "Paradise Tunes",
  //   streamURL: "http://192.99.177.195:8000/1?cb=726591.mp3",
  //   shortCode: "PT",
  // },
  // SLC3: {
  //   name: "Beatles & Friends",
  //   streamURL: "http://74.208.89.18:8030/SLCR3_highdef.mp3",
  //   shortCode: "SLC3",
  // },
  // TRR: {
  //   name: "Third Rock Radio",
  //   streamURL: "http://rfcmedia3.streamguys1.com/thirdrock.mp3",
  //   shortCode: "TRR",
  // },
  // DUR: {
  //   name: "Desert Underground",
  //   streamURL: "http://46.105.122.141:6878/;",
  //   shortCode: "DUR",
  // },
  // ZRTC: {
  //   name: "Zecom - The Choice",
  //   streamURL: "http://158.69.227.214:8149/live",
  //   shortCode: "ZRTC",
  // },
  // TCR: {
  //   name: "The Colorful Radio",
  //   streamURL: "http://91.121.59.45:8244/stream",
  //   shortCode: "TCR",
  // },
  // ASP: {
  //   name: "Ambient Sleeping Pill",
  //   streamURL: "https://radio.stereoscenic.com/asp-s",
  //   shortCode: "ASP",
  // },
  // ISXXL: {
  //   name: "ISKC XXL",
  //   streamURL: "http://cc6.beheerstream.com:8645/stream",
  //   shortCode: "ISXXL",
  // },

  // AFR: {
  //   name: "Acid Flashback Radio",
  //   oldstreamURL: "http://158.69.227.214:8023",
  //   streamURL: "http://158.69.227.214:8023",
  //   iosURL: "http://158.69.227.214:8023/listen.pls",
  //   shortCode: "AFR",
  //   description:
  //     "A psychedelic blend of classic rock, new wave, blues, alternative, and indie.",
  // },
  // PR: {
  //   name: "Planet Radio",
  //   streamURL: "http://66.85.88.18:5475/stream",
  //   shortCode: "PR",
  // },
  // HR: {
  //   name: "Handcrafted Radio",
  //   streamURL: "http://66.85.88.18:5044/live",
  //   shortCode: "HR",
  // },
  // RFP: {
  //   name: "Radio Free Phoenix",
  //   streamURL: "http://68.178.199.78:8000/;audio.mp3",
  //   shortCode: "RFP",
  // },
  // AFM: {
  //   name: "Acoustic FM",
  //   streamURL:
  //     "https://streaming.radionomy.com/Acoustic-FM?lang=en-US%2cen%3bq%3d0.9&ad=radionoweb&appName=website",
  //   shortCode: "AFM",
  // },
  // TO: {
  //   name: "The Oasis",
  //   streamURL: "http://162.244.80.140:8058/stream",
  //   shortCode: "TO",
  // },
  // FRR: {
  //   name: "Further Rock Radio",
  //   oldstreamURL:
  //     "http://edge1-a.exa.live365.net/a81821_live365?playerid=esPlayer",
  //   streamURL: "https://streaming.live365.com/a81821?cache=lyOSlSDSG3",
  //   shortCode: "FRR",
  // },
  // PSY: {
  //   name: "Psychedelicized",
  //   streamURL: "http://s1.castserver.net:8006/;",
  //   shortCode: "PSY",
  // },
  // RR: {
  //   name: "Radio Rocco",
  //   streamURL: "http://s46.myradiostream.com:7608/;",
  //   shortCode: "RR",
  // },
  // F89: {
  //   name: "Flaming 89",
  //   streamURL:
  //     "https://streaming.radionomy.com/flaming89?lang=en-US%2cen%3bq%3d0.9&ad=radionoweb&appName=website",
  //   shortCode: "F89",
  // },
  // DO: {
  //   name: "Deep Oldies",
  //   streamURL: "http://68.178.199.114:9000/",
  //   shortCode: "DO",
  // },
  // ISKC1: {
  //   name: "ISKC Rock Radio",
  //   original_streamURL: "https://www.iskc.rocks/rock320.m3u",
  //   streamURL: "http://livestream.shoutcaststream.com:8188/live",
  //   shortCode: "ISKC1",
  // },
  // ISOMR: {
  //   name: "ISKC Old Men's Rock",
  //   streamURL: "http://oldrock.shoutcaststream.com:8150/live",
  //   shortCode: "ISOMR",
  // },
  // ISOL: {
  //   name: "ISKC Only Live",
  //   streamURL: "http://onlylive.shoutcaststream.com:8138/live",
  //   shortCode: "ISOL",
  // },
  // ISBC: {
  //   name: "ISKC Blues Cafe",
  //   streamURL: "http://iskcblues.shoutcaststream.com:8286/live",
  //   shortCode: "ISBC",
  // },
  // ISRA: {
  //   name: "ISKC RadioActive",
  //   streamURL: "http://radiozctive.shoutcaststream.com:8084/live",
  //   shortCode: "ISRA",
  // },
  // ISHR: {
  //   name: "ISKC Hard Rock Radio",
  //   streamURL: "http://rock320.shoutcaststream.com:8156/live",
  //   shortCode: "ISHR",
  // },
  // KONG: {
  //   name: "Kong Monster Rock",
  //   streamURL: "http://38.107.242.152:8848/;stream.mp3",
  //   shortCode: "KONG",
  // },
  // KXFU: {
  //   name: "KXFU Alternative",
  //   streamURL: "http://38.107.242.152:8960/;stream.mp3",
  //   shortCode: "KXFU",
  // },
  // GEMZ: {
  //   name: "Marty Ziven's GEMZ",
  //   streamURL: "http://158.69.227.214:8088/live",
  //   shortCode: "GEMZ",
  // },

  AFR: {
    name: "Acid Flashback Radio",
    oldstreamURL: "http://158.69.227.214:8023",
    streamURL: "http://158.69.227.214:8023",
    iosURL: "http://158.69.227.214:8023/listen.pls",
    shortCode: "AFR",
    Description:
      "A psychedelic blend of classic rock, new wave, blues, alternative, and indie.",
    genre: "Rock",
  },
  PR: {
    name: "Planet Radio",
    streamURL: "http://thassos.cdnstream.com:5475/live",
    shortCode: "PR",
    genre: "Rock",
  },
  HR: {
    name: "Handcrafted Radio",
    streamURL: "http://thassos.cdnstream.com:5044/live",
    shortCode: "HR",
    genre: "Rock",
  },
  RFP: {
    name: "Radio Free Phoenix",
    streamURL: "http://209.95.50.189:8124",
    shortCode: "RFP",
    genre: "Alternative",
  },
  RP: {
    name: "Radio Paradise",
    streamURL: "http://stream.radioparadise.com/aac-320",
    shortCode: "RP",
    genre: "Alternative",
  },
  WFKU: {
    name: "WFKU",
    streamURL: "http://142.93.232.177:8000/wfku",
    shortCode: "WFKU",
    genre: "Alternative",
  },
  SLCR: {
    name: "St. Louis Classic Rock",
    streamURL: "http://74.208.89.18:8000/SLCR_highdef.mp3",
    shortCode: "SLCR",
    genre: "Rock",
  },
  ADR: {
    name: "All Dixie Rock",
    streamURL: "http://ais-edge07-live365-dal02.cdnstream.com/a88164",
    shortCode: "ADR",
    genre: "Rock",
  },
  RSDT: {
    name: "Radio Shadow",
    streamURL: "http://162.244.80.131:8020/;stream.nsv",
    shortCode: "RSDT",
    genre: "Rock",
  },
  FRR: {
    name: "Further Rock Radio",
    streamURL: "http://ais-edge07-live365-dal02.cdnstream.com/a81821",
    shortCode: "FRR",
    genre: "Jam Band",
  },
  QCI: {
    name: "QC Indie",
    streamURL: "http://23.227.178.146/;stream.nsv",
    shortCode: "QCI",
    genre: "Alternative",
  },
  PT: {
    name: "Paradise Tunes",
    streamURL: "http://192.99.177.195:8000/1?cb=726591.mp3",
    shortCode: "PT",
    genre: "Rock",
  },
  PSY: {
    name: "Psychedelicized",
    streamURL: "http://s1.castserver.net:8006/;",
    shortCode: "PSY",
    genre: "Rock",
  },
  BR: {
    name: "Beatles Radio",
    streamURL: "http://www.beatlesradio.com:8000/stream/1/",
    shortCode: "BR",
    genre: "Rock",
  },
  SLC3: {
    name: "Beatles & Friends",
    streamURL: "http://74.208.89.18:8030/SLCR3_highdef.mp3",
    shortCode: "SLC3",
    genre: "Rock",
  },
  TRR: {
    name: "Third Rock Radio",
    streamURL: "http://rfcmedia3.streamguys1.com/thirdrock.mp3",
    shortCode: "TRR",
    genre: "Alternative",
  },
  DUR: {
    name: "Desert Underground",
    streamURL: "http://46.105.122.141:6878/;",
    shortCode: "DUR",
    genre: "Alternative",
  },
  ZRTC: {
    name: "Zecom - The Choice",
    streamURL: "http://158.69.227.214:8149/live",
    shortCode: "ZRTC",
    genre: "Rock",
  },
  TCR: {
    name: "The Colorful Radio",
    streamURL: "http://91.121.59.45:8244/stream",
    shortCode: "TCR",
    genre: "Rock",
  },
  ASP: {
    name: "Ambient Sleeping Pill",
    streamURL: "https://radio.stereoscenic.com/asp-s",
    shortCode: "ASP",
    genre: "Chill",
  },
  DO: {
    name: "Deep Oldies",
    streamURL: "http://209.95.50.189:8142/",
    shortCode: "DO",
    genre: "Oldies",
  },
  ISKC1: {
    name: "ISKC Rock Radio",
    streamURL: "http://mediaserv68.live-streams.nl:8012/RockRadio",
    shortCode: "ISKC1",
    genre: "Rock",
  },
  ISOMR: {
    name: "ISKC Old Men's Rock",
    streamURL: "http://mediaserv68.live-streams.nl:8012/OldMenRock",
    shortCode: "ISOMR",
    genre: "Rock",
  },
  ISOL: {
    name: "ISKC Only Live",
    streamURL: "http://mediaserv68.live-streams.nl:8012/OnlyLive",
    shortCode: "ISOL",
    genre: "Rock",
  },
  ISBC: {
    name: "ISKC Blues Cafe",
    streamURL: "http://mediaserv68.live-streams.nl:8012/BluesCafe",
    shortCode: "ISBC",
    genre: "Blues",
  },
  KONG: {
    name: "Kong Monster Rock",
    streamURL: "http://s5.total-streaming.com:9786",
    shortCode: "KONG",
    genre: "Rock",
  },
  KXFU: {
    name: "KXFU Alternative",
    streamURL: "http://s5.total-streaming.com:9788",
    shortCode: "KXFU",
    genre: "Alternative",
  },
  GEMZ: {
    name: "Marty Zivin's GEMZ",
    streamURL: "http://158.69.227.214:8088/stream",
    shortCode: "GEMZ",
    genre: "Oldies",
  },
  ISXXL: {
    name: "ISKC XXL",
    streamURL: "http://mediaserv68.live-streams.nl:8012/XXL",
    shortCode: "ISXXL",
    genre: "Rock",
  },
  CRTV: {
    name: "Classic Rock: The Vault",
    streamURL: "http://ice6.securenetsystems.net/THEVAULT",
    shortCode: "CRTV",
    genre: "Rock",
  },
  GOJR: {
    name: "Giants of Jazz Radio",
    streamURL: "https://streaming.radio.co/s297e618a7/listen",
    shortCode: "GOJR",
    genre: "Jazz",
  },
  JEMP: {
    name: "JEMP Radio",
    streamURL: "https://streaming.radio.co/sd71de59b3/listen",
    shortCode: "JEMP",
    genre: "Jam Band",
  },
  ISRA: {
    name: "ISKC RadioActive",
    streamURL: "http://mediaserv68.live-streams.nl:8012/RadioActive",
    shortCode: "ISRA",
    genre: "Rock",
  },
  ISEM: {
    name: "ISKC Extreme Metal",
    streamURL: "http://mediaserv68.live-streams.nl:8012/ExtremeMetal",
    shortCode: "ISEM",
    genre: "Metal",
  },
  TBA: {
    name: "The Blues Alley",
    streamURL: "http://ice8.securenetsystems.net/BLUESALY",
    shortCode: "TBA",
    genre: "Blues",
  },
  EMW: {
    name: "Extreme Metalworx",
    streamURL: "http://ice5.securenetsystems.net/EMWORX",
    shortCode: "EMW",
    genre: "Metal",
  },
  R66: {
    name: "Route 66 Cruisin' Country",
    streamURL: "http://ice10.securenetsystems.net/ROUTE66",
    shortCode: "R66",
    genre: "Country",
  },
  PZR: {
    name: "Party Zone Radio",
    streamURL: "http://ice7.securenetsystems.net/PZRADIO",
    shortCode: "PZR",
    genre: " Pop",
  },
  BMFR: {
    name: "Blues Music Fan Radio",
    streamURL: "http://ais-sa2.cdnstream1.com/1992_128.mp3",
    shortCode: "BMFR",
    genre: "Blues",
  },
  CCR: {
    name: "Cruisin' Country Radio",
    streamURL: "https://usa2.fastcast4u.com/proxy/cruisincountry?mp=/stream",
    shortCode: "CCR",
    genre: "Country",
  },
};

var selectedStationCode = null;
var isPlay = false;
var sound;
$(document).ready(function () {
  let autoCompleteList = [];
  for (let station in stationsList) {
    autoCompleteList.push({
      value: stationsList[station]["name"],
      data: stationsList[station]["shortCode"],
    });
  }
  // console.log(autoCompleteList);

  $("#autocomplete").autocomplete({
    lookup: autoCompleteList,
    onSelect: function (suggestion) {
      console.log(suggestion);
      stationSelected(suggestion.data, true);
      // alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    },
  });

  //   populate DOM based on stations JSON
  var stationScroll = $(".station-list-wrapper");
  for (let station in stationsList) {
    var currentStation = stationsList[station];
    stationScroll.append(constructStationNode(currentStation));
  }
  initSlick();
  //---------------------------------------------shashi----------------------------------------*/
  //sort filter

  let collection = [];
  for (let i in stationsList) {
    var genreList = stationsList[i].genre;
    collection.push(`<li>${genreList}</li>`);
  }
  var filterContent = collection.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  var ul = document.querySelectorAll("ul");
  ul.forEach(x => {
    var childData = (x.children = filterContent.join(""));
    x.innerHTML = childData;
  });

  var li = document.querySelectorAll("#filterList li");
  li.forEach(x => {
    x.addEventListener("click", e => {
      var coll = [];
      for (var station in stationsList) {
        var currentStation = stationsList[station];
        coll.push(currentStation);
      }
      //rock
      let filteredRock = coll.filter(x => x.genre == "Rock");
      filteredRock.forEach(x => {
        if (e.target.textContent === "Rock") {
          stationScroll.append(constructStationNode(x));
        }
      });

      //Alternative
      let filteredAlternative = coll.filter(x => x.genre == "Alternative");
      filteredAlternative.forEach(x => {
        if (e.target.textContent === "Alternative") {
          stationScroll.append(constructStationNode(x));
        }
      });
    });
  });

  // let filtered = collection.filter(x => x.genre == "Rock");
  // filtered.forEach(x => {
  //   stationScroll.append(constructStationNode(x));
  // });
  // $(".station-list-wrapper .slick-list").css({ display: "none" });
  // });

  // Create Filters

  //--------------------------------------------------------------------------------------------------
  // event listener for click event on the station name
  $(".station-list-wrapper").on("click", ".single-station", function () {
    console.log($(this).attr("station-code"));
    stationSelected($(this).attr("station-code"), true);
  });

  // Set first station as selected;
  stationSelected("RP", false);
  $("#stop-control").css({ display: "none" });

  // $('#play-stop').attr('role','play')
  // event listener for click event on the play/stop btn
  $("#play-control").click(function () {
    playStation();

    // if($(this).attr('role') == 'play'){
    //   playStation();
    //   $(this).attr('role','stop')
    // }
    // else{
    //   stopStation();
    //   $(this).attr('role','play')
    // }
  });
  $("#stop-control").click(function () {
    stopStation();

    // if($(this).attr('role') == 'play'){
    //   playStation();
    //   $(this).attr('role','stop')
    // }
    // else{
    //   stopStation();
    //   $(this).attr('role','play')
    // }
  });
});

// Methods
function constructStationNode(station) {
  let node = "";
  node =
    node +
    `
        <div class="single-station" station-code="${station.shortCode}">
            <div class="inner-wrapper">
                <img src="./assets/images/${station.shortCode}.png" alt="">
                <p class="station-name">${station.name}</p>
                <p class="genre">${station.genre}</p>
                <!-- <p class="station-code">PR</p> -->
            </div>
        </div>
    `;
  return node;
}

function initSlick() {
  $(".station-list-wrapper").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: $("#slick-next"),
    prevArrow: $("#slick-previous"),
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
}

function stationSelected(stationCode, isAutoPlay) {
  selectedStationCode = stationCode;

  let currentSelectedStation = stationsList[stationCode];
  // populate the station info section
  $(".disk img").attr(
    "src",
    `./assets/images/${currentSelectedStation["shortCode"]}.png`
  );
  $(".station-title").text(currentSelectedStation["name"]);
  $(".station-description").html(
    currentSelectedStation["Description"]
      ? currentSelectedStation["Description"]
      : "No Description Found"
  );

  stopStation();
  if (isAutoPlay) {
    playStation();
  }
  // $("#play-stop").attr('role','stop')
}

function playStation() {
  $("#play-control").css({ display: "none" });
  $("#stop-control").css({ display: "inline-flex" });

  if (selectedStationCode) {
    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    console.log(stationsList[selectedStationCode]);
    if (stationsList[selectedStationCode]["howl"]) {
      sound = stationsList[selectedStationCode]["howl"];
    } else {
      sound = stationsList[selectedStationCode]["howl"] = new Howl({
        src: stationsList[selectedStationCode]["streamURL"],
        html5: true, // A live stream can only be played through HTML5 Audio.
        format: ["mp3", "aac"],
      });
    }
    // Begin playing the sound.
    sound.play();
    $(".disk img").addClass("rotate");
  }
}

function stopStation() {
  $("#stop-control").css({ display: "none" });
  $("#play-control").css({ display: "inline-flex" });

  if (selectedStationCode) {
    // var sound = self.stations[self.index].howl;

    // Toggle the display.
    // self.toggleStationDisplay(self.index, false);

    // Stop the sound.
    if (sound) {
      sound.unload();
      $(".disk img").removeClass("rotate");
    }
  }
}
//Sort stations alphabetically
// stationsList = Object.values(stationsList).sort((a, b) => {
//   const x = [a.name, b.name].sort();
//   console.log(x[0] === a.name ? -1 : 1);
// });
