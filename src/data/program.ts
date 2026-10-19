/**
 * CHALLO KIDS CLUB — single source of truth for all editable landing-page content.
 * Search for "EDIT" to find every value that needs your real details before launch.
 */

// ───────────────────────── EXTERNAL INTEGRATIONS ─────────────────────────
export const integrations = {
  // <!-- VIDEO / YOUTUBE EMBED URL -->  EDIT: e.g. 'https://www.youtube.com/embed/VIDEO_ID'. Leave '' to show the logo instead.
  videoEmbedUrl: '',

  // <!-- WEB3FORMS ACCESS KEY -->  Public by design (safe in browser code). Delivers to the inbox you chose at web3forms.com
  web3formsAccessKey: '37b183f3-e17c-4781-bad0-a19063b3b758',
  // Formspree alternative: set to 'https://formspree.io/f/yourFormId' (the access key is then ignored).
  formEndpoint: 'https://api.web3forms.com/submit',
};

// ───────────────────────── PROGRAM FACTS ─────────────────────────
export const program = {
  name: 'CHALLO Kids Club',
  descriptor: 'Character Enrichment Program',
  tagline: 'Instilling kindness, one heart at a time.',
  intro:
    'CHALLO Kids Club is an eight-week character enrichment program for children in Grades 1–3. Through stories, conversations and hands-on activities, children practise gratitude, kindness, empathy, friendship, respect, courage and helping others.',
  grades: 'Grades 1–3',
  sessions: 8,
  sessionLength: '60 minutes',
  frequency: 'Once a week',
  maxGroupSize: 15,

  // EDIT: real dates / day / time / venue once a program is confirmed
  upcomingNote: 'Upcoming dates and locations will be announced.',
  schedule: 'Once a week, 60 minutes',
  city: 'Burlington, Ontario',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Burlington%2C+Ontario',

  dropOff: 'Drop-off and pick-up details will be shared once a program’s dates and location are confirmed.',

  // EDIT before launch: add the contact details you have confirmed. While empty, the site shows no email or phone
  // and points people to the enquiry form instead.
  contactEmail: '',
  contactPhone: '',

  // What to bring — applies to both lunchtime and after-school programs.
  materials:
    'All materials are provided. Children can attend in their regular school clothes or uniform. No change of clothes is needed.',
};

// ───────────────────────── WHAT DOES CHALLO STAND FOR? ─────────────────────────
export const challo = [
  { letter: 'C', word: 'Compassion', text: 'Understand and care about others.' },
  { letter: 'H', word: 'Helping', text: 'Lend a hand.' },
  { letter: 'A', word: 'Appreciation', text: 'Notice the good and express gratitude.' },
  { letter: 'L', word: 'Listening', text: 'Listen with empathy and respect.' },
  { letter: 'L', word: 'Love', text: 'Show kindness and include others.' },
  { letter: 'O', word: 'Openness', text: 'Welcome differences and try new things.' },
];

// ───────────────────────── SESSION STRUCTURE ─────────────────────────
export const sessionSteps = [
  {
    word: 'Learn It',
    text: 'A story and conversation introduce the week’s value.',
    icon: 'tabler:book-2',
  },
  {
    word: 'Experience It',
    text: 'Hands-on activities bring the value to life.',
    icon: 'tabler:hand-click',
  },
  {
    word: 'Remember It',
    text: 'Children reflect and complete an activity page.',
    icon: 'tabler:pencil',
  },
  {
    word: 'Put It into Action',
    text: 'Children think of ways to practise the value.',
    icon: 'tabler:heart-handshake',
  },
];

// ───────────────────────── EDUCATOR ─────────────────────────
// EDIT: confirm these credentials are accurate before launch; every mention on the page reads from here.
export const educator = {
  name: 'Rekha Mahbubani',
  credential: 'AMS-Trained Montessori Educator',
  badge: 'AMS-trained Montessori educator',
  role: 'Character Enrichment Program Creator',
  initials: 'RM',
};

// ───────────────────────── SAFETY (flip to true only when accurate) ─────────────────────────
// Each flag shows a trust badge + safety line ONLY when true. Set to true once you can truthfully claim it.
export const safety = {
  backgroundChecked: false, // e.g. current police Vulnerable Sector Check
  firstAidCertified: false,
};

// ───────────────────────── CURRICULUM (overview only) ─────────────────────────
export const weeks = [
  {
    n: 1,
    theme: 'Gratitude',
    title: 'Notice the Good',
    icon: 'tabler:sun',
    text: 'Learning to recognize and appreciate the people, things and little moments that make life meaningful.',
    doing: 'Stories, conversation and hands-on activities that help children notice the good around them.',
  },
  {
    n: 2,
    theme: 'Kindness',
    title: 'Small Acts, Big Impact',
    icon: 'tabler:heart-handshake',
    text: 'Discovering how simple acts of kindness can make a meaningful difference in someone else’s day.',
    doing: 'Stories, conversation and hands-on activities that turn kind ideas into kind actions.',
  },
  {
    n: 3,
    theme: 'Empathy',
    title: 'Seeing Through Someone Else’s Eyes',
    icon: 'tabler:eye-heart',
    text: 'Learning to notice how others may feel and taking the time to understand, ask and listen.',
    doing: 'Practicing real-life situations to explore how others might feel, and what we can do about it.',
  },
  {
    n: 4,
    theme: 'Friendship',
    title: 'What Makes a Good Friend?',
    icon: 'tabler:users-group',
    text: 'Exploring how care, listening, respect and inclusion help friendships grow.',
    doing: 'Partner and group activities that build listening, sharing and including others.',
  },
  {
    n: 5,
    theme: 'Respect',
    title: 'How We Treat Others Matters',
    icon: 'tabler:hand-love-you',
    text: 'Discovering that respect is reflected in the way we speak, listen, disagree, handle mistakes and treat others.',
    doing: 'Practicing speaking kindly, disagreeing respectfully and handling mistakes with grace.',
  },
  {
    n: 6,
    theme: 'Courage',
    title: 'Being Brave Enough to Do What’s Right',
    icon: 'tabler:flame',
    text: 'Learning that courage doesn’t mean never being afraid — it means taking the next brave step even when something feels difficult.',
    doing: 'Stories and discussion about brave choices, plus a chance to practice taking a “next brave step”.',
  },
  {
    n: 7,
    theme: 'Helping Others',
    title: 'We Can Make a Difference',
    icon: 'tabler:heart-plus',
    text: 'Discovering how we can use what we have — our time, words, attention and actions — to help someone else.',
    doing: 'Children brainstorm and practice real ways to help others, at school and at home.',
  },
  {
    n: 8,
    theme: 'Celebration',
    title: 'Look How We’ve Grown!',
    icon: 'tabler:confetti',
    text: 'Looking back on the journey, recognizing how we’ve grown and choosing how we want to keep growing.',
    doing: 'A joyful celebration of growth, and each child’s CHALLO Kids Club certificate.',
  },
];

// ───────────────────────── GALLERY ─────────────────────────
// EDIT: to use real photos, drop images in /public/gallery/ and set `src: '/gallery/your-photo.jpg'`.
// Tiles without a `src` render as illustrations.
export type GalleryArt = 'book' | 'craft' | 'certificate';
export const gallery: Array<{
  title: string;
  caption: string;
  art: GalleryArt;
  tone: 'rose' | 'green' | 'cream';
  src?: string;
  alt?: string;
}> = [
  {
    title: 'Stories & Conversations',
    caption: 'Age-appropriate stories spark big questions.',
    art: 'book',
    tone: 'rose',
  },
  {
    title: 'Hands-on Activities',
    caption: 'Activity pages collected into a booklet to keep.',
    art: 'craft',
    tone: 'green',
  },
  {
    title: 'Certificate & Celebration',
    caption: 'Celebrating how far they’ve grown in Week 8.',
    art: 'certificate',
    tone: 'cream',
  },
];

// ───────────────────────── FAQ ─────────────────────────
export const faqs = [
  {
    q: 'Is this right for my child’s grade or skill level?',
    a: 'CHALLO Kids Club is designed for children in Grades 1–3. There are no prerequisites — no reading level, experience or special skills needed. Activities flex naturally, so a Grade 1 child can draw and share while a Grade 3 child writes more, and everyone takes part together.',
  },
  {
    q: 'What does my child need to bring?',
    a: program.materials,
  },
  {
    q: 'Is there homework?',
    a: 'No homework. Children take home simple reminder cards to share their learning with their families, along with optional everyday ways to practise the values — entirely up to you.',
  },
  {
    q: 'How big are the groups?',
    a: 'We cap every group at 15 children so each child is seen, heard and included. Small groups also make it easier for quieter children to share and take part.',
  },
  {
    q: 'What if my child has allergies or medical needs?',
    a: 'We’ll ask about allergies and medical needs when your child is enrolled, and keep those notes on hand during sessions.',
  },
  {
    q: 'How do drop-off and pick-up work?',
    a: program.dropOff,
  },
  {
    q: 'What if my child is sick or misses a session?',
    a: 'Please keep your child home when unwell. If a session is missed, let us know and we’ll send home that week’s take-home reminder card so your child can stay connected to the group.',
  },
  {
    q: 'What happens in an emergency?',
    a: 'We’ll collect an emergency contact for every child when they’re enrolled and keep it with us at every session. You will be contacted right away if anything comes up.',
  },
];

// ───────────────────────── LAUNCH CHECK ─────────────────────────
// Placeholder values that must be replaced before the site goes live (used for a console warning at build/dev time).
export const placeholderWarnings = (): string[] => {
  const warnings: string[] = [];
  if (integrations.web3formsAccessKey.startsWith('YOUR_')) warnings.push('integrations.web3formsAccessKey');
  if (!program.contactPhone) warnings.push('program.contactPhone');
  if (!program.contactEmail) warnings.push('program.contactEmail');
  return warnings;
};

// ───────────────────────── LEGAL ─────────────────────────
// EDIT: confirm each value below matches how you actually operate, and have a lawyer review /terms and /privacy before launch.
export const legal = {
  effectiveDate: 'October 8, 2026',
  // Name the policies use for "we". Replace with your registered business name if you have one.
  entity: 'CHALLO Kids Club',
  operator: educator.name,
  // How long medical, allergy and emergency-contact details are kept after the program ends.
  medicalRetentionMonths: 12,
  // Days we commit to answering a privacy request.
  responseDays: 30,
};
