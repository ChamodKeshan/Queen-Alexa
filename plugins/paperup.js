//උස්සන්න එපා බල්ලො අමාරුවෙන් හැදුවෙ
const lusifar = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
let work = Config.WORKTYPE == 'public' ? false : true
const EX = require('../Alexa/files');
// SINHALA
const SIN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y15
const SIN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y16
const SIN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y17
const SIN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y18
const SIN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y19

// SCIENCE
const SC15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y15
const SC16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y16
const SC17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y17
const SC18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y18
const SC19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y19

// MATHS
const MA15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y15
const MA16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y16
const MA17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y17
const MA18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y18
const MA19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y19

// HISTORY
const HIS15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y15
const HIS16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y16
const HIS17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y17
const HIS18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y18
const HIS19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y19

// ENGLISH
const EN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y15
const EN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y16
const EN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y17
const EN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y18
const EN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y19

// BUDDHISM
const BU15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y15
const BU16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y16
const BU17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y17
const BU18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y18
const BU19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y19

// TAMIL
const TAM115_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y15
const TAM116_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y16
const TAM117_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y17
const TAM118_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y18
const TAM119_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y19

// MUSIC
const MUS115_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y15
const MUS116_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y16
const MUS117_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y17
const MUS118_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y18
const MUS119_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y19

// DRAMA
const DR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y15
const DR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y16
const DR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y17
const DR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y18
const DR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y19

//DANCE ORIANTAL
const DO15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y15
const DO16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y16
const DO17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y17
const DO18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y18
const DO19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y19

//DANCE BHARATH
const DB15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y15
const DB16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y16
const DB17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y17
const DB18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y18
const DB19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y19

//TAMIL LIT
const TAML15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y15
const TAML16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y16
const TAML17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y17
const TAML18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y18
const TAML19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y19

//SINHALA LIT
const SLIT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y15
const SLIT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y16
const SLIT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y17
const SLIT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y18
const SLIT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y19

//ENGLISH LIT
const LITEN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y15
const LITEN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y16
const LITEN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y17
const LITEN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y18
const LITEN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y19

//ART
const AR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y15
const AR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y16
const AR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y17
const AR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y18
const AR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y19

//SECOND LANG TAMIL
const SLT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y15
const SLT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y16
const SLT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y17
const SLT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y18
const SLT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y19

//JAPAN
const JAP15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y15
const JAP16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y16
const JAP17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y17
const JAP18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y18
const JAP19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y19

//HINDI
const HIN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y15
const HIN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y16
const HIN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y17
const HIN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y18
const HIN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y19

//GEOGRAPHY
const GRO15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y15
const GRO16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y16
const GRO17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y17
const GRO18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y18
const GRO19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y19

//FRENCH
const FREN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y15
const FREN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y16
const FREN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y17
const FREN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y18
const FREN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y19

//ENTRENEURSHIP STUDIES
const ENTR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y15
const ENTR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y16
const ENTR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y17
const ENTR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y18
const ENTR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y19

//CIVIC
const CIV15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y15
const CIV16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y16
const CIV17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y17
const CIV18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y18
const CIV19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y19

//BUSINAS ACCOUNTING STUDIES
const BAST15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y15
const BAST16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y16
const BAST17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y17
const BAST18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y18
const BAST19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y19

//IT
const ICT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y15
const ICT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y16
const ICT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y17
const ICT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y18
const ICT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y19

//HOME economiv
const HOMEC15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y15
const HOMEC16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y16
const HOMEC17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y17
const HOMEC18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y18
const HOMEC19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y19

//helth
const HEL15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y15
const HEL16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y16
const HEL17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y17
const HEL18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y18
const HEL19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y19

//media
const MEDIA15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y15
const MEDIA16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y16
const MEDIA17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y17
const MEDIA18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y18
const MEDIA19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y19

//art and craft
const CRAFT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y15
const CRAFT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y16
const CRAFT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y17
const CRAFT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y18
const CRAFT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y19

//agree
const AGREE15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y15
const AGREE16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y16
const AGREE17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y17
const AGREE18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y18
const AGREE19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y19

//DISIGN TECHNOLOGY
const DIST15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DIST + "\n*📂YEAR:* " + EX.Y15
const DIST17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DIST + "\n*📂YEAR:* " + EX.Y17




// LIST
const EFFECT_DESC = "to download past papers."
const NEED_WORD = "*input command*"
const DFG = "Searching your paper"
const UPD = "*📤UPLOADING...*"


//SINHALA (A)
lusifar.addCommand({pattern: 'osin 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SIN15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USIN + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osin 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SIN16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USIN + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osin 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SIN17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USIN + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osin 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SIN18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USIN + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osin 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SIN19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USIN + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//science (B)
lusifar.addCommand({pattern: 'osci 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SC15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USCI + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osci 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SC16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USCI + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osci 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SC17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USCI + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osci 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SC18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.EX.USCI + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osci 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SC19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USCI + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));  

//maths (C)     
lusifar.addCommand({pattern: 'omaths 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MA15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMTS + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omaths 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MA16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMTS + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omaths 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MA17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMTS + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omaths 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MA18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMTS + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omaths 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MA19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMTS + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//HISTORY  (D)    
lusifar.addCommand({pattern: 'ohis 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIS15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIS + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohis 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIS16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIS + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohis 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIS17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIS + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohis 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIS18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIS + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohis 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIS19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIS + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));      

//ENGLISH  (E)    
lusifar.addCommand({pattern: 'oen 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,EN15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENG + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oen 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,EN16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENG + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oen 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,EN17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENG + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oen 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,EN18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENG + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oen 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,EN19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENG + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//BUDDISM  (F)    
lusifar.addCommand({pattern: 'obu 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BU15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBUD + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obu 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BU16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBUD + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obu 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BU17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBUD + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obu 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BU18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBUD + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obu 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BU19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBUD + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//TAMIL  (G)    
lusifar.addCommand({pattern: 'otamil 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAM115_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAM + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otamil 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAM116_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAM + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otamil 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAM117_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAM + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otamil 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAM118_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAM + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otamil 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAM119_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAM + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//MUSIC   (H)   
lusifar.addCommand({pattern: 'omusic 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MUS115_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMUS + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omusic 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MUS116_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMUS + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omusic 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MUS117_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMUS + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omusic 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MUS118_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMUS + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omusic 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MUS119_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMUS + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//DRAMA(I)
lusifar.addCommand({pattern: 'odrama 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DR15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDRA + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odrama 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DR16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDRA + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odrama  2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DR17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDRA + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odrama  2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DR18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDRA + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odrama  2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DR19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDRA + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//DANCE ORIANTAL   (J)   
lusifar.addCommand({pattern: 'odanceori 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DO15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANO + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceori 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DO16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANO + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceori 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DO17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANO + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceori 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DO18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANO + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceori 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DO19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANO + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//DANCE BHARATH  (K)    
lusifar.addCommand({pattern: 'odanceb 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DB15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANB + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceb 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DB17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANB + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceb 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DB18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANB + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'odanceb 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DB19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDANB + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//ART  (L)     
lusifar.addCommand({pattern: 'oart 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AR15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UART + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oart 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AR16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UART + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oart 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AR17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UART + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oart 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AR18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UART + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oart 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AR19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UART + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//TAMIL LIT  (M)     
lusifar.addCommand({pattern: 'otlit 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAML15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAML + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otlit 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAML16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAML + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otlit 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAML17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAML + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'otlit 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,TAML18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UTAML + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

//SINHALA LIT (N)     
lusifar.addCommand({pattern: 'osilit 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLIT15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USINL + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osilit 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLIT16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USINL + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osilit 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLIT17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USINL + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osilit 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLIT18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USINL + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'osilit 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLIT19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USINL + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//ENGLISH LIT (O)     
lusifar.addCommand({pattern: 'oliten 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,LITEN15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENGL + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oliten 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,LITEN16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENGL + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oliten 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,LITEN17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENGL + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oliten 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2018}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,LITEN18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENGL + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oliten 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2019}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,LITEN19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENGL + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//SECOND LANGUAGE TAMIL (P)
lusifar.addCommand({pattern: 'oslant 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLT15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USLT + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oslant 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLT16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USLT + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oslant 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLT17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USLT + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oslant 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLT18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USLT + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oslant 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,SLT19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.USLT + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//JAPAN (Q)
lusifar.addCommand({pattern: 'ojapan 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,JAP15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UJAP + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ojapan 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,JAP16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UJAP + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ojapan 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,JAP17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UJAP + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ojapan 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,JAP18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UJAP + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ojapan 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,JAP19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UJAP + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//HINDI (R)
lusifar.addCommand({pattern: 'ohindi 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIN15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIN + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohindi 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIN16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIN + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohindi 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIN17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIN + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohindi 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIN18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIN + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohindi 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HIN19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHIN + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//GEOGROPHY (S)
lusifar.addCommand({pattern: 'ogeog 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,GRO15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UGRO + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ogeog 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,GRO16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UGRO + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ogeog 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,GRO17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UGRO + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ogeog 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,GRO18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UGRO + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ogeog 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,GRO19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UGRO + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//FRENCH (T)
lusifar.addCommand({pattern: 'ofrench 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,FREN15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UFREN + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ofrench 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,FREN16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UFREN + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ofrench 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,FREN17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UFREN + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ofrench 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,FREN18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UFREN + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ofrench 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,FREN19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UFREN + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//ENTRENEURSHIP STUDIES (U)
lusifar.addCommand({pattern: 'oentrenstu 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ENTR15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENTR + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oentrenstu 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ENTR16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENTR + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oentrenstu 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ENTR17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENTR + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oentrenstu 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ENTR18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENTR + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oentrenstu 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ENTR19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UENTR + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//CIVIC (V)
lusifar.addCommand({pattern: 'ocivic 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CIV15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCIV + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ocivic 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CIV16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCIV + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ocivic 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CIV17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCIV + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ocivic 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CIV18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCIV + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ocivic 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CIV19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCIV + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//BUSINAS ACCOUNTING STUDIES (W)
lusifar.addCommand({pattern: 'obusiac 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.W2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BAST15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBAST + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obusiac 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BAST16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBAST + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obusiac 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BAST17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBAST + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obusiac 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BAST18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBAST + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'obusiac 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,BAST19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UBAST + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//IT (x)
lusifar.addCommand({pattern: 'oict 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ICT15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UICT + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oict 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ICT16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UICT + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oict 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ICT17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UICT + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oict 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ICT18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UICT + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oict 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,ICT19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UICT + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//HOME economic (y)
lusifar.addCommand({pattern: 'ohomec 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HOMEC15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHOMEC + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohomec 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HOMEC16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHOMEC + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohomec 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HOMEC17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHOMEC + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohomec 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HOMEC18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHOMEC + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohomec 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HOMEC19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHOMEC + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

      //Helth (z)
lusifar.addCommand({pattern: 'ohelth 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HEL15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHEL + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohelth 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HEL16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHEL + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohelth 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HEL17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHEL + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohelth 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HEL18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHEL + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'ohelth 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,HEL19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UHEL + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//media (A2)
lusifar.addCommand({pattern: 'omedia 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MEDIA15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMEDIA + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omedia 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MEDIA16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMEDIA + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omedia 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MEDIA17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMEDIA + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omedia 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MEDIA18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMEDIA + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'omedia 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,MEDIA19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UMEDIA + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));


//art and craft (A3)
lusifar.addCommand({pattern: 'oarcraft 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CRAFT15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCRAFT + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oarcraft 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CRAFT16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCRAFT + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oarcraft 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CRAFT17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCRAFT + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oarcraft 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CRAFT18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCRAFT + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oarcraft 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,CRAFT19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UCRAFT + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//agree (A4)
lusifar.addCommand({pattern: 'oagree 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AGREE15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UAGREE + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oagree 2016', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42016}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AGREE16_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UAGREE + ' ' + EX.UY16 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oagree 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AGREE17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UAGREE + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oagree 2018', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AGREE18_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UAGREE + ' ' + EX.UY18 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oagree 2019', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,AGREE19_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UAGREE + ' ' + EX.UY19 ,mimetype: Mimetype.pdf})
  
      }));

//DISIGN TECHNOLOGY (A4)
lusifar.addCommand({pattern: 'oisigntech 2015', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12015}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DIST15_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDIST + ' ' + EX.UY15 ,mimetype: Mimetype.pdf})
  
      }));

lusifar.addCommand({pattern: 'oisigntech 2017', fromMe: work, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12017}`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,DFG,MessageType.text, {quoted: message.data});
      await message.client.sendMessage(message.jid,DIST17_UP,MessageType.text);
      await message.client.sendMessage(message.jid,UPD,MessageType.text, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {quoted: message.data , filename: EX.UDIST + ' ' + EX.UY17 ,mimetype: Mimetype.pdf})
  
      }));









