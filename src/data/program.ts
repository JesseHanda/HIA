/**
 * HEARTS IN ACTION — single source of truth for all editable landing-page content.
 * Search for "EDIT" to find every value that needs your real details before launch.
 */

// ───────────────────────── EXTERNAL INTEGRATIONS ─────────────────────────
export const integrations = {
  // <!-- STRIPE PAYMENT LINK URL -->  EDIT: paste your Stripe Payment Link (Dashboard → Payment Links)
  stripePaymentLink: 'https://buy.stripe.com/placeholder',

  // <!-- VIDEO / YOUTUBE EMBED URL -->  EDIT: e.g. 'https://www.youtube.com/embed/VIDEO_ID'. Leave '' to show the placeholder.
  videoEmbedUrl: '',

  // <!-- WEB3FORMS ACCESS KEY -->  EDIT: free key from https://web3forms.com (delivered to the inbox you choose)
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  // Formspree alternative: set to 'https://formspree.io/f/yourFormId' (the access key is then ignored).
  formEndpoint: 'https://api.web3forms.com/submit',
};

// ───────────────────────── PROGRAM FACTS ─────────────────────────
export const program = {
  name: 'Hearts in Action',
  tagline: 'Instilling kindness, one heart at a time.',
  grades: 'Grades 1–3',
  sessions: 8,
  sessionLength: '60 minutes',
  frequency: 'Once a week',
  maxGroupSize: 15,

  // EDIT: real dates / day / time / venue
  startDate: 'Dates announced soon',
  schedule: 'Once a week, 60 minutes',
  city: 'Burlington, Ontario',
  venue: 'Exact address shared with registered families',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Burlington%2C+Ontario', // EDIT: link to exact venue

  // EDIT: drop-off / pick-up wording once your venue is confirmed
  dropOff:
    'Please walk your child to the classroom door at the start of each session and meet them there at pick-up. We will email detailed drop-off and pick-up instructions as soon as you register.',

  contactEmail: 'test@gmail.com', // EDIT
  contactPhone: '905-XXX-XXXX', // EDIT
};

// ───────────────────────── PRICING ─────────────────────────
export const pricing = {
  base: '$199',
  total: '$224.87',
  currency: 'CAD',
  includes: [
    '8 weekly 60-minute sessions',
    'Complete program materials',
    'Hands-on activities & reflection experiences',
    'A weekly take-home keepsake or experience',
    'Your child’s part in building the Hearts in Action Garden',
    'Hearts in Action Certificate of completion',
  ],
};

// ───────────────────────── INTERAC e-TRANSFER ─────────────────────────
export const etransfer = {
  email: 'payments@example.com', // EDIT: the email that receives e-Transfers
  amount: '$224.87 CAD',
  // EDIT: set a security question/answer (or enable auto-deposit and set securityQuestion to '').
  securityQuestion: 'What is the name of the program?',
  securityAnswer: 'heartsinaction',
  holdHours: 48, // how long a spot is held while you verify the transfer
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
    icon: 'tabler:seeding',
    garden: 'Seed',
    text: 'Learning to recognize and appreciate the people, things and little moments that make life meaningful.',
    doing: 'Children plant a real seed to care for at home and add their own Gratitude Seed to the class garden.',
  },
  {
    n: 2,
    theme: 'Kindness',
    title: 'Small Acts, Big Impact',
    icon: 'tabler:heart-handshake',
    garden: 'Roots',
    text: 'Discovering how simple acts of kindness can make a meaningful difference in someone else’s day.',
    doing: 'Stories, conversation and hands-on activities that turn kind ideas into kind actions.',
  },
  {
    n: 3,
    theme: 'Empathy',
    title: 'Seeing Through Someone Else’s Eyes',
    icon: 'tabler:eye-heart',
    garden: 'Sprout',
    text: 'Learning to notice how others may feel and taking the time to understand, ask and listen.',
    doing: 'Practicing real-life situations to explore how others might feel, and what we can do about it.',
  },
  {
    n: 4,
    theme: 'Friendship',
    title: 'What Makes a Good Friend?',
    icon: 'tabler:users-group',
    garden: 'Stem & Leaves',
    text: 'Exploring how care, listening, respect and inclusion help friendships grow.',
    doing: 'Partner and group activities that build listening, sharing and including others.',
  },
  {
    n: 5,
    theme: 'Respect',
    title: 'How We Treat Others Matters',
    icon: 'tabler:hand-love-you',
    garden: 'Bud',
    text: 'Discovering that respect is reflected in the way we speak, listen, disagree, handle mistakes and treat others.',
    doing: 'Practicing speaking kindly, disagreeing respectfully and handling mistakes with grace.',
  },
  {
    n: 6,
    theme: 'Courage',
    title: 'Being Brave Enough to Do What’s Right',
    icon: 'tabler:flame',
    garden: 'Bloom',
    text: 'Learning that courage doesn’t mean never being afraid — it means taking the next brave step even when something feels difficult.',
    doing: 'Stories and discussion about brave choices, plus a chance to practice taking a “next brave step”.',
  },
  {
    n: 7,
    theme: 'Helping Others',
    title: 'We Can Make a Difference',
    icon: 'tabler:heart-plus',
    garden: 'Pollination & Sharing',
    text: 'Discovering how we can use what we have — our time, words, attention and actions — to help someone else.',
    doing: 'Children brainstorm and practice real ways to help others, at school and at home.',
  },
  {
    n: 8,
    theme: 'Celebration',
    title: 'Look How We’ve Grown!',
    icon: 'tabler:flower',
    garden: 'Full Bloom & New Seeds',
    text: 'Looking back on the journey, recognizing how we’ve grown and choosing how we want to keep growing.',
    doing: 'A joyful celebration of growth, the finished garden, and each child’s Hearts in Action Certificate.',
  },
];

// ───────────────────────── GALLERY ─────────────────────────
// EDIT: to use real photos, drop images in /public/gallery/ and set `src: '/gallery/your-photo.jpg'`.
// Tiles without a `src` render as illustrated placeholders.
export const gallery: Array<{
  title: string;
  caption: string;
  icon: string;
  tone: string;
  src?: string;
  alt?: string;
}> = [
  {
    title: 'Plant a Little Gratitude',
    caption: 'Every child plants a seed to grow at home.',
    icon: 'tabler:seeding',
    tone: 'green',
  },
  {
    title: 'Stories & Conversations',
    caption: 'Age-appropriate stories spark big questions.',
    icon: 'tabler:book-2',
    tone: 'rose',
  },
  {
    title: 'The Hearts in Action Garden',
    caption: 'A portable garden that grows every week.',
    icon: 'tabler:flower',
    tone: 'amber',
  },
  {
    title: 'Hands-on Creating',
    caption: 'Drawing, writing and making together.',
    icon: 'tabler:palette',
    tone: 'sky',
  },
  {
    title: 'Take-Home Keepsakes',
    caption: 'A simple keepsake or experience every week.',
    icon: 'tabler:gift',
    tone: 'rose',
  },
  {
    title: 'Certificate & Celebration',
    caption: 'Celebrating how far they’ve grown in Week 8.',
    icon: 'tabler:certificate',
    tone: 'green',
  },
];

// ───────────────────────── FAQ ─────────────────────────
// EDIT: review the policy answers (refunds, sickness, missed sessions) so they match what you actually offer.
export const faqs = [
  {
    q: 'Is this right for my child’s grade or skill level?',
    a: 'Hearts in Action is designed for children in Grades 1–3. There are no prerequisites — no reading level, experience or special skills needed. Activities flex naturally, so a Grade 1 child can draw and share while a Grade 3 child writes more, and everyone takes part together.',
  },
  {
    q: 'What does my child need to bring?',
    a: 'Nothing — complete program materials are included. We suggest comfortable clothes that can get a little messy, since children plant a real seed in the very first session.',
  },
  {
    q: 'How big are the groups?',
    a: 'We cap every group at 15 children so each child is seen, heard and included. Small groups also make it easier for quieter children to share and take part.',
  },
  {
    q: 'What if my child has allergies or medical needs?',
    a: 'Please tell us on the registration form. We keep every child’s allergy and medical notes on hand during sessions, and we’ll follow up with you directly if we have any questions.',
  },
  {
    q: 'How do drop-off and pick-up work?',
    a: program.dropOff,
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'If you cancel before the first session, we’ll refund your payment in full. Once the program has begun, please reach out — we’ll do our best to work with you.',
  },
  {
    q: 'What if my child is sick or misses a session?',
    a: 'Please keep your child home when unwell. If a session is missed, let us know and we’ll send home that week’s take-home card and Hearts in Action Challenge so your child can stay connected to the group.',
  },
  {
    q: 'What happens in an emergency?',
    a: 'We collect an emergency contact for every child at registration and keep it with us at every session. You will be contacted right away if anything comes up.',
  },
  {
    q: 'How do I pay, and when is my spot confirmed?',
    a: 'Pay by credit card for instant confirmation, or by Interac e-Transfer. Your spot is held temporarily while we verify an e-Transfer, and we confirm it by email as soon as it arrives.',
  },
];
