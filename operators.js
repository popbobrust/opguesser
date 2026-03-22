const OPERATORS = [
  // Y1S1
  { name: "Sledge", side: "Attacker", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["breach", "soft-breach"] },
  { name: "Thatcher", side: "Attacker", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["emp", "utility-denial"] },
  { name: "Ash", side: "Attacker", speed: 3, armor: 1, season: "Y1S1", gadgetTags: ["ranged-breach", "soft-breach"] },
  { name: "Thermite", side: "Attacker", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["hard-breach"] },
  { name: "Montagne", side: "Attacker", speed: 1, armor: 3, season: "Y1S1", gadgetTags: ["shield"] },
  { name: "Twitch", side: "Attacker", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["drone", "electronics"] },

  { name: "Smoke", side: "Defender", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["smoke", "area-denial"] },
  { name: "Mute", side: "Defender", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["jammer", "intel-denial"] },
  { name: "Castle", side: "Defender", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["barricade"] },
  { name: "Pulse", side: "Defender", speed: 3, armor: 1, season: "Y1S1", gadgetTags: ["heartbeat", "intel"] },
  { name: "Doc", side: "Defender", speed: 1, armor: 3, season: "Y1S1", gadgetTags: ["heal", "stim"] },
  { name: "Rook", side: "Defender", speed: 1, armor: 3, season: "Y1S1", gadgetTags: ["armor"] },
  { name: "Jäger", side: "Defender", speed: 2, armor: 2, season: "Y1S1", gadgetTags: ["ads", "projectile-denial"] },
  { name: "Bandit", side: "Defender", speed: 3, armor: 1, season: "Y1S1", gadgetTags: ["electric", "wall-denial"] },

  // Y1S2
  { name: "Buck", side: "Attacker", speed: 2, armor: 2, season: "Y1S2", gadgetTags: ["soft-breach", "shotgun"] },
  { name: "Frost", side: "Defender", speed: 2, armor: 2, season: "Y1S2", gadgetTags: ["trap"] },

  // Y1S3
  { name: "Blackbeard", side: "Attacker", speed: 2, armor: 2, season: "Y1S3", gadgetTags: ["shield", "gunshield"] },
  { name: "Valkyrie", side: "Defender", speed: 2, armor: 2, season: "Y1S3", gadgetTags: ["camera", "intel"] },

  // Y1S4
  { name: "Capitão", side: "Attacker", speed: 3, armor: 1, season: "Y1S4", gadgetTags: ["fire", "smoke"] },
  { name: "Caveira", side: "Defender", speed: 3, armor: 1, season: "Y1S4", gadgetTags: ["stealth", "interrogation"] },

  // Y2S1
  { name: "Hibana", side: "Attacker", speed: 3, armor: 1, season: "Y2S1", gadgetTags: ["hard-breach"] },
  { name: "Echo", side: "Defender", speed: 1, armor: 3, season: "Y2S1", gadgetTags: ["drone", "stun"] },

  // Y2S2
  { name: "Jackal", side: "Attacker", speed: 2, armor: 2, season: "Y2S2", gadgetTags: ["tracker", "footsteps"] },
  { name: "Mira", side: "Defender", speed: 1, armor: 3, season: "Y2S2", gadgetTags: ["vision", "window"] },

  // Y2S3
  { name: "Ying", side: "Attacker", speed: 2, armor: 2, season: "Y2S3", gadgetTags: ["flash", "crowd-control"] },
  { name: "Lesion", side: "Defender", speed: 2, armor: 2, season: "Y2S3", gadgetTags: ["trap", "poison"] },

  // Y2S4
  { name: "Dokkaebi", side: "Attacker", speed: 2, armor: 2, season: "Y2S4", gadgetTags: ["phone", "intel"] },
  { name: "Vigil", side: "Defender", speed: 3, armor: 1, season: "Y2S4", gadgetTags: ["stealth"] },

  // Y3S1
  { name: "Lion", side: "Attacker", speed: 2, armor: 2, season: "Y3S1", gadgetTags: ["scan", "global"] },
  { name: "Finka", side: "Attacker", speed: 2, armor: 2, season: "Y3S1", gadgetTags: ["buff", "heal"] },

  // Y3S2
  { name: "Maestro", side: "Defender", speed: 1, armor: 3, season: "Y3S2", gadgetTags: ["camera", "laser"] },
  { name: "Alibi", side: "Defender", speed: 3, armor: 1, season: "Y3S2", gadgetTags: ["decoy"] },

  // Y3S3
  { name: "Maverick", side: "Attacker", speed: 3, armor: 1, season: "Y3S3", gadgetTags: ["breach", "torch"] },

  // Y3S4
  { name: "Nomad", side: "Attacker", speed: 2, armor: 2, season: "Y3S4", gadgetTags: ["airjab", "push"] },
  { name: "Kaid", side: "Defender", speed: 1, armor: 3, season: "Y3S4", gadgetTags: ["electric"] },

  // Y4S1
  { name: "Gridlock", side: "Attacker", speed: 1, armor: 3, season: "Y4S1", gadgetTags: ["trap"] },
  { name: "Mozzie", side: "Defender", speed: 2, armor: 2, season: "Y4S1", gadgetTags: ["drone-hack"] },

  // Y4S2
  { name: "Nøkk", side: "Attacker", speed: 3, armor: 1, season: "Y4S2", gadgetTags: ["stealth"] },
  { name: "Warden", side: "Defender", speed: 2, armor: 2, season: "Y4S2", gadgetTags: ["vision"] },

  // Y4S3
  { name: "Amaru", side: "Attacker", speed: 2, armor: 2, season: "Y4S3", gadgetTags: ["mobility"] },
  { name: "Goyo", side: "Defender", speed: 2, armor: 2, season: "Y4S3", gadgetTags: ["fire"] },

  // Y4S4
  { name: "Kali", side: "Attacker", speed: 2, armor: 2, season: "Y4S4", gadgetTags: ["sniper", "utility-denial"] },
  { name: "Wamai", side: "Defender", speed: 2, armor: 2, season: "Y4S4", gadgetTags: ["projectile-denial"] },

  // Y5S1
  { name: "Iana", side: "Attacker", speed: 2, armor: 2, season: "Y5S1", gadgetTags: ["clone", "intel"] },
  { name: "Oryx", side: "Defender", speed: 2, armor: 2, season: "Y5S1", gadgetTags: ["mobility"] },

  // Y5S2
  { name: "Ace", side: "Attacker", speed: 2, armor: 2, season: "Y5S2", gadgetTags: ["hard-breach"] },
  { name: "Melusi", side: "Defender", speed: 3, armor: 1, season: "Y5S2", gadgetTags: ["slow", "trap"] },

  // Y5S3
  { name: "Zero", side: "Attacker", speed: 2, armor: 2, season: "Y5S3", gadgetTags: ["camera", "intel"] },

  // Y5S4
  { name: "Aruni", side: "Defender", speed: 2, armor: 2, season: "Y5S4", gadgetTags: ["laser-gate"] },

  // Y6S1
  { name: "Flores", side: "Attacker", speed: 2, armor: 2, season: "Y6S1", gadgetTags: ["explosive-drone"] },

  // Y6S2
  { name: "Thunderbird", side: "Defender", speed: 3, armor: 1, season: "Y6S2", gadgetTags: ["heal"] },

  // Y6S3
  { name: "Osa", side: "Attacker", speed: 2, armor: 2, season: "Y6S3", gadgetTags: ["shield", "vision"] },

  // Y6S4
  { name: "Thorn", side: "Defender", speed: 2, armor: 2, season: "Y6S4", gadgetTags: ["trap"] },

  // Y7S1
  { name: "Azami", side: "Defender", speed: 2, armor: 2, season: "Y7S1", gadgetTags: ["barrier"] },

  // Y7S2
  { name: "Sens", side: "Attacker", speed: 2, armor: 2, season: "Y7S2", gadgetTags: ["vision-block"] },

  // Y7S3
  { name: "Grim", side: "Attacker", speed: 3, armor: 1, season: "Y7S3", gadgetTags: ["tracker", "swarm"] },

  // Y7S4
  { name: "Solis", side: "Defender", speed: 3, armor: 1, season: "Y7S4", gadgetTags: ["electronics", "intel"] },

  // Y8S1
  { name: "Brava", side: "Attacker", speed: 2, armor: 2, season: "Y8S1", gadgetTags: ["drone-hack"] },

  // Y8S2
  { name: "Fenrir", side: "Defender", speed: 2, armor: 2, season: "Y8S2", gadgetTags: ["fear", "trap"] },

  // Y8S3
  { name: "Ram", side: "Attacker", speed: 2, armor: 2, season: "Y8S3", gadgetTags: ["breach", "drone"] },

  // Y8S4
  { name: "Tubarao", side: "Defender", speed: 2, armor: 2, season: "Y8S4", gadgetTags: ["freeze", "area-denial"] },

  // Y9S1
  { name: "Deimos", side: "Attacker", speed: 2, armor: 2, season: "Y9S1", gadgetTags: ["tracker", "intel"] },

  // Y9S2 (latest)
  { name: "Striker", side: "Defender", speed: 2, armor: 2, season: "Y9S2", gadgetTags: ["area-denial", "utility"] },

  // Y9S3 – Denari
{ name: "Denari", side: "Attacker", speed: 2, armor: 2, season: "Y9S3", gadgetTags: ["intel", "tracking", "support"] },

// Y9S4 – Rauora
{ name: "Rauora", side: "Defender", speed: 2, armor: 2, season: "Y9S4", gadgetTags: ["area-denial", "utility", "trap"] },

// Y10S1 – Solid Snake
{ name: "Solid Snake", side: "Attacker", speed: 3, armor: 1, season: "Y10S1", gadgetTags: ["stealth", "intel", "mobility"] },

];
