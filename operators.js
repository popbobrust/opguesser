const OPERATORS = [
{name:"Striker",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"N/A",role:"n/a",speed:2,armor:2,season:"Y9S2"},
{name:"Sentry",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"N/A",role:"n/a",speed:2,armor:2,season:"Y9S2"},
{name:"Sledge",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"SAS",role:"soft-breach",speed:2,armor:2,season:"Y1S1"},
{name:"Thatcher",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"SAS",role:"gadget-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Ash",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"FBI SWAT",role:"soft-breach",speed:3,armor:1,season:"Y1S1"},
{name:"Thermite",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"FBI SWAT",role:"hard-breach",speed:2,armor:2,season:"Y1S1"},
{name:"Montagne",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"GIGN",role:"shield",speed:1,armor:3,season:"Y1S1"},
{name:"Twitch",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"GIGN",role:"gadget-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Blitz",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"GSG9",role:"shield",speed:2,armor:2,season:"Y1S1"},
{name:"IQ",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"GSG9",role:"intel",speed:3,armor:1,season:"Y1S1"},
{name:"Fuze",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"Spetsnaz",role:"area-denial",speed:1,armor:3,season:"Y1S1"},
{name:"Glaz",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"Spetsnaz",role:"intel",speed:3,armor:1,season:"Y1S1"},
{name:"Smoke",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"SAS",role:"area-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Mute",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"SAS",role:"gadget-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Castle",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"FBI SWAT",role:"area-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Pulse",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"FBI SWAT",role:"intel",speed:3,armor:1,season:"Y1S1"},
{name:"Doc",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"GIGN",role:"support",speed:1,armor:3,season:"Y1S1"},
{name:"Rook",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"GIGN",role:"support",speed:1,armor:3,season:"Y1S1"},
{name:"Jäger",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"GSG9",role:"gadget-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Bandit",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"GSG9",role:"gadget-denial",speed:3,armor:1,season:"Y1S1"},
{name:"Kapkan",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"Spetsnaz",role:"area-denial",speed:2,armor:2,season:"Y1S1"},
{name:"Tachanka",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"Spetsnaz",role:"area-denial",speed:1,armor:3,season:"Y1S1"},
{name:"Buck",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"JTF2",role:"soft-breach",speed:2,armor:2,season:"Y1S2"},
{name:"Frost",side:"Defender",gender:"Female",uniqueWeapon:true,squad:"JTF2",role:"trap",speed:2,armor:2,season:"Y1S2"},
{name:"Blackbeard",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"Navy SEALs",role:"shield-gun",speed:2,armor:2,season:"Y1S3"},
{name:"Valkyrie",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"Navy SEALs",role:"intel",speed:2,armor:2,season:"Y1S3"},
{name:"Capitão",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"BOPE",role:"area-denial",speed:3,armor:1,season:"Y1S4"},
{name:"Caveira",side:"Defender",gender:"Female",uniqueWeapon:true,squad:"BOPE",role:"stealth",speed:3,armor:1,season:"Y1S4"},
{name:"Hibana",side:"Attacker",gender:"Female",uniqueWeapon:true,squad:"SAT",role:"hard-breach",speed:3,armor:1,season:"Y2S1"},
{name:"Echo",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"SAT",role:"intel",speed:1,armor:3,season:"Y2S1"},
{name:"Jackal",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"GEO",role:"tracking",speed:2,armor:2,season:"Y2S2"},
{name:"Mira",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"GEO",role:"vision-control",speed:1,armor:3,season:"Y2S2"},
{name:"Ying",side:"Attacker",gender:"Female",uniqueWeapon:true,squad:"SDU",role:"crowd-control",speed:2,armor:2,season:"Y2S3"},
{name:"Lesion",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"SDU",role:"poison-trap",speed:2,armor:2,season:"Y2S3"},
{name:"Dokkaebi",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"707th SMB",role:"intel-disruption",speed:3,armor:1,season:"Y2S4"},
{name:"Vigil",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"707th SMB",role:"stealth",speed:3,armor:1,season:"Y2S4"},
{name:"Lion",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"CBRN",role:"global-scan",speed:2,armor:2,season:"Y3S1"},
{name:"Finka",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"CBRN",role:"buff",speed:2,armor:2,season:"Y3S1"},
{name:"Maestro",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"GIS",role:"intel-denial",speed:1,armor:3,season:"Y3S2"},
{name:"Alibi",side:"Defender",gender:"Female",uniqueWeapon:true,squad:"GIS",role:"decoy",speed:3,armor:1,season:"Y3S2"},
{name:"Maverick",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"Delta Force",role:"hard-breach",speed:3,armor:1,season:"Y3S3"},
{name:"Clash",side:"Defense",gender:"Female",uniqueWeapon:false,squad:"Delta Force",role:"shield",speed:3,armor:1,season:"Y3S3"},
{name:"Nomad",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"GIGR",role:"area-denial",speed:2,armor:2,season:"Y3S4"},
{name:"Kaid",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"GIGR",role:"gadget-denial",speed:1,armor:3,season:"Y3S4"},
{name:"Gridlock",side:"Attacker",gender:"Female",uniqueWeapon:true,squad:"SASR",role:"area-denial",speed:1,armor:3,season:"Y4S1"},
{name:"Mozzie",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"SASR",role:"gadget-denial",speed:2,armor:2,season:"Y4S1"},
{name:"Nøkk",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"Jaeger Corps",role:"n/a",speed:3,armor:1,season:"Y4S2"},
{name:"Warden",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"Secret Service",role:"vision-control",speed:2,armor:2,season:"Y4S2"},
{name:"Amaru",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"APCA",role:"mobility",speed:2,armor:2,season:"Y4S3"},
{name:"Goyo",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"FES",role:"area-denial",speed:2,armor:2,season:"Y4S3"},
{name:"Kali",side:"Attacker",gender:"Female",uniqueWeapon:true,squad:"NIGHTHAVEN",role:"gadget-denial",speed:2,armor:2,season:"Y4S4"},
{name:"Wamai",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"NIGHTHAVEN",role:"gadget-denial",speed:2,armor:2,season:"Y4S4"},
{name:"Iana",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"REU",role:"intel",speed:2,armor:2,season:"Y5S1"},
{name:"Oryx",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"UNAFFILIATED",role:"movement",speed:2,armor:2,season:"Y5S1"},
{name:"Ace",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"NIGHTHAVEN",role:"hard-breach",speed:2,armor:2,season:"Y5S2"},
{name:"Melusi",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"INKABA",role:"area-denial",speed:3,armor:1,season:"Y5S2"},
{name:"Zero",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"CIA",role:"intel",speed:3,armor:1,season:"Y5S3"},
{name:"Aruni",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"NIGHTHAVEN",role:"gadget-denial",speed:2,armor:2,season:"Y5S4"},
{name:"Flores",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"UNAFFILIATED",role:"gagdet-denial/soft-breach",speed:2,armor:2,season:"Y6S1"},
{name:"Thunderbird",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"Nakoda",role:"heal",speed:3,armor:1,season:"Y6S2"},
{name:"Osa",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"NIGHTHAVEN",role:"shield",speed:2,armor:2,season:"Y6S3"},
{name:"Thorn",side:"Defender",gender:"Female",uniqueWeapon:true,squad:"Garda ERU",role:"area-denial",speed:2,armor:2,season:"Y6S4"},
{name:"Azami",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"UNAFFILIATED",role:"barrier",speed:2,armor:2,season:"Y7S1"},
{name:"Sens",side:"Attacker",gender:"Nonbinary",uniqueWeapon:true,squad:"NIGHTHAVEN",role:"vision-block",speed:3,armor:1,season:"Y7S2"},
{name:"Grim",side:"Attacker",gender:"Male",uniqueWeapon:false,squad:"NIGHTHAVEN",role:"swarm-tracking",speed:3,armor:1,season:"Y7S3"},
{name:"Solis",side:"Defender",gender:"Female",uniqueWeapon:false,squad:"UNAFFILIATED",role:"electronics-intel",speed:3,armor:1,season:"Y7S4"},
{name:"Brava",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"Viperstrike",role:"drone-hack",speed:3,armor:1,season:"Y8S1"},
{name:"Fenrir",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"UNAFFILIATED",role:"fear-trap",speed:2,armor:2,season:"Y8S2"},
{name:"Ram",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"UNAFFILIATED",role:"breach-drone",speed:2,armor:2,season:"Y8S3"},
{name:"Tubarao",side:"Defender",gender:"Male",uniqueWeapon:false,squad:"UNAFFILIATED",role:"freeze-denial",speed:2,armor:2,season:"Y8S4"},
{name:"Deimos",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"UNAFFILIATED",role:"intel-tracker",speed:2,armor:2,season:"Y9S1"},
{name:"Denari",side:"Defender",gender:"Male",uniqueWeapon:true,squad:"UNAFFILIATED",role:"gadget/area denial",speed:3,armor:1,season:"Y10S3"},
{name:"Rauora",side:"Attacker",gender:"Female",uniqueWeapon:false,squad:"UNAFFILIATED",role:"trap",speed:2,armor:2,season:"Y10S1"},
{name:"Solid Snake",side:"Attacker",gender:"Male",uniqueWeapon:true,squad:"UNAFFILIATED",role:"stealth",speed:3,armor:1,season:"Y11S1"}
];
































































