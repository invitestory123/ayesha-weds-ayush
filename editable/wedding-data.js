/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Wedding Invitation: Ayush & Ayesha
 */

window.WEDDING_DATA = {
  couple: {
    order: "groom-first",
    groom: "Ayush",
    bride: "Ayesha",
    groomFull: "Ayush Awasthi",
    brideFull: "Ayesha Chauhan",
    monogram: "A & A",
    hashtag: "#AyushWedsAyesha",
  },

  heroKicker: "You are invited",

  heroDate: {
    month: "NOV",
    day: "30",
    year: "2026",
    time: "Monday",
    subtitle: "Monday",
  },

  mainEvent: {
    title: "Ayush & Ayesha — Wedding Celebrations",
    startsAt: "2026-11-30T19:00:00+05:30",
    durationMinutes: 300,
    dateLabel: "29th – 30th November 2026",
    timeLabel: "Kanpur, Uttar Pradesh",
  },

  families: {
    groomSide: {
      parents: "Mr. & Mrs. Awasthi",
      line: "cordially invite you to celebrate the wedding of their son",
    },
    brideSide: {
      parents: "Col & Mrs Chauhan",
      line: "together with the family of their daughter",
    },
  },

  invitationNote: "With the blessings of our elders and the Almighty, we warmly invite you to share in the joy and celebrations as we unite in marriage. Your presence and blessings mean the world to us.",

  story: [
    {
      year: "2025",
      title: "How It Began",
      text: "A chance meeting and an effortless connection that quickly blossomed into something truly magical.",
      image: "./editable/assets/story-1.jpg",
      aspectRatio: "3/4",
      objectPosition: "center",
    },
    {
      year: "2025",
      title: "The Promise",
      text: "Surrounded by smiles, sweets, and the blessings of both families, two hearts chose a lifetime together.",
      image: "./editable/assets/story-2.jpg",
      aspectRatio: "3/4",
      objectPosition: "center",
    },
    {
      year: "2026",
      title: "Forever Begins",
      text: "Stepping hand-in-hand into a sacred union, eager to celebrate every moment with the ones we cherish most.",
      image: "./editable/assets/story-3.jpg",
      aspectRatio: "3/4",
      objectPosition: "center",
    },
  ],

  events: [
    {
      key: "haldi",
      name: "The Golden Hour",
      startsAt: "2026-11-29T10:00:00+05:30",
      durationMinutes: 180,
      venue: "Courtyard",
      address: "Hotel Imperial Grand, Kanpur",
      dressCode: "Haldi Yellow",
      dressCodeColor: "#EAB308",
      note: "Doused in yellow sunshine, vibrant music, and boundless joy! Let the celebrations begin!",
      noteColor: "#b91c5c",
    },
    {
      key: "sangeet",
      name: "Symphony of Love",
      startsAt: "2026-11-29T20:30:00+05:30",
      durationMinutes: 240,
      venue: "The Ballroom",
      address: "Hotel Imperial Grand, Kanpur",
      dressCode: "Evening Glamour / Indo-Western",
      dressCodeColor: "#C9A84C",
      note: "Put on your dancing shoes for an electric night of music, cocktails, and non-stop celebration!",
      noteColor: "#b91c5c",
    },
    {
      key: "baraat",
      name: "Baraat",
      startsAt: "2026-11-30T17:00:00+05:30",
      durationMinutes: 120,
      venue: "Near courtyard",
      address: "Hotel Imperial Grand, Kanpur",
      dressCode: "Traditional Formals",
      dressCodeColor: "#C9A84C",
      note: "Assembly at 5:00 PM near Courtyard! Get ready to dance our hearts out with the dhol!",
      noteColor: "#b91c5c",
    },
    {
      key: "wedding",
      name: "Wedding",
      startsAt: "2026-11-30T19:00:00+05:30",
      durationMinutes: 300,
      venue: "Green Park",
      address: "Hotel Imperial Grand, Kanpur",
      dressCode: "Royal Traditional Formals",
      dressCodeColor: "#7B1E2B",
      note: "Join us for the grand Varmala and sacred Pheras, followed by a lavish royal feast!",
      noteColor: "#b91c5c",
    },
  ],

  venue: {
    name: "Hotel Imperial Grand",
    address: "259, Mainawati Marg, Sambharpur, Kanpur, Uttar Pradesh 208017",
    lat: 26.52937,
    lng: 80.27334,
    directionsNote: "Located on Mainawati Marg, Sambharpur, Kanpur. Valet parking is available for all guests.",
    googleMapsUrl: "https://maps.app.goo.gl/F2AAdfkUw8Pe6nFz6?g_st=ic",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Mehndi night with henna and marigolds" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet dance floor with music and celebration" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Decorated wedding mandap at golden hour" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Baraat procession with joyful celebrations" },
  ],

  closing: {
    blessing: "Two families united in joy, eagerly looking forward to celebrating this sacred milestone with you.",
    signOff: "With love and gratitude,",
  },

  emergencyContacts: [
    { name: "Pratyush", relation: "Groom’s Brother", phone: "+91 95551 55519" },
    { name: "Akansha", relation: "Groom’s Sister", phone: "+91 88007 77010" },
    { name: "Abhimanyu", relation: "Bride’s Brother", phone: "+91 88607 76997" },
  ],

  contacts: [
    { name: "Pratyush (Groom’s brother)", phone: "+91 95551 55519" },
    { name: "Akansha (Groom’s sister)", phone: "+91 88007 77010" },
    { name: "Abhimanyu (Bride’s brother)", phone: "+91 88607 76997" },
  ],

  media: {
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/vaaroon.mp3",
  },
};
