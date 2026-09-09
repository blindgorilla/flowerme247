import type { Locale, Interest } from "./types";

export interface Dictionary {
  header: {
    tagline: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  bouquets: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { name: string; description: string }[];
  };
  waitlist: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    interestLabel: string;
    interestOptions: Record<Interest, string>;
    submit: string;
    submitting: string;
    errorEmail: string;
    errorInterest: string;
    errorGeneric: string;
  };
  counter: {
    prefix: string;
    suffix: string;
  };
  thankYou: {
    title: string;
    body: string;
  };
  footer: {
    note: string;
  };
}

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    header: {
      tagline: "Fresh flowers, any hour",
    },
    hero: {
      eyebrow: "Launching October in Cyprus",
      headline: "Fresh flowers, whenever the moment calls for them.",
      subheadline:
        "FlowerMe is Cyprus' first 24/7 fresh flower vending machine. No shop hours, no waiting around — just walk up, choose, and go.",
      cta: "Join the waitlist",
    },
    bouquets: {
      eyebrow: "A preview",
      title: "A glimpse of what's blooming",
      subtitle:
        "A few examples of the bouquets you'll find at launch. The full range arrives in October.",
      items: [
        {
          name: "The Happy Day",
          description: "A bright, cheerful mix for birthdays and good news.",
        },
        {
          name: "The Mediterranean",
          description: "Sun-warmed tones inspired by the Cyprus coastline.",
        },
        {
          name: "The Signature",
          description: "Our house arrangement — classic, refined, always in season.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Be the first to know",
      title: "Join the waitlist",
      subtitle:
        "Leave your details and we'll let you know the moment FlowerMe opens near you.",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+357 99 123456",
      interestLabel: "What are you interested in?",
      interestOptions: {
        one_time: "One-time bouquet",
        subscription: "Subscription",
        either: "Either",
      },
      submit: "Join the waitlist",
      submitting: "Joining…",
      errorEmail: "Please enter a valid email address.",
      errorInterest: "Please choose an option.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    counter: {
      prefix: "Join",
      suffix: "flower lovers on the waitlist",
    },
    thankYou: {
      title: "You're on the list!",
      body: "Thank you for joining FlowerMe. We'll be in touch before we open our doors this October.",
    },
    footer: {
      note: "FlowerMe · flowerme247.com · Launching October in Cyprus",
    },
  },
  el: {
    header: {
      tagline: "Φρέσκα λουλούδια, κάθε ώρα",
    },
    hero: {
      eyebrow: "Έρχεται τον Οκτώβριο στην Κύπρο",
      headline: "Φρέσκα λουλούδια, όποτε τα χρειαστείτε.",
      subheadline:
        "Το FlowerMe είναι το πρώτο μηχάνημα φρέσκων λουλουδιών 24/7 στην Κύπρο. Χωρίς ωράριο, χωρίς αναμονή — απλά πλησιάζετε, διαλέγετε και φεύγετε.",
      cta: "Εγγραφή στη λίστα αναμονής",
    },
    bouquets: {
      eyebrow: "Μια πρόγευση",
      title: "Μια ματιά σε ό,τι ανθίζει",
      subtitle:
        "Μερικά παραδείγματα από τις ανθοδέσμες που θα βρείτε στην έναρξη. Η πλήρης συλλογή έρχεται τον Οκτώβριο.",
      items: [
        {
          name: "The Happy Day",
          description: "Ένας ζωηρός, χαρούμενος συνδυασμός για γενέθλια και καλά νέα.",
        },
        {
          name: "The Mediterranean",
          description: "Ηλιόλουστες αποχρώσεις εμπνευσμένες από τις ακτές της Κύπρου.",
        },
        {
          name: "The Signature",
          description: "Η υπογραφή μας — κλασική, φινετσάτη, πάντα στην εποχή της.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Μάθετε πρώτοι",
      title: "Εγγραφή στη λίστα αναμονής",
      subtitle:
        "Αφήστε τα στοιχεία σας και θα σας ενημερώσουμε μόλις ανοίξει το FlowerMe κοντά σας.",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Τηλέφωνο (προαιρετικό)",
      phonePlaceholder: "+357 99 123456",
      interestLabel: "Τι σας ενδιαφέρει;",
      interestOptions: {
        one_time: "Μεμονωμένη ανθοδέσμη",
        subscription: "Συνδρομή",
        either: "Και τα δύο",
      },
      submit: "Εγγραφή στη λίστα",
      submitting: "Εγγραφή…",
      errorEmail: "Παρακαλώ εισάγετε ένα έγκυρο email.",
      errorInterest: "Παρακαλώ επιλέξτε μία επιλογή.",
      errorGeneric: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
    },
    counter: {
      prefix: "Ήδη",
      suffix: "λάτρεις των λουλουδιών στη λίστα αναμονής",
    },
    thankYou: {
      title: "Είστε στη λίστα!",
      body: "Ευχαριστούμε που εγγραφήκατε στο FlowerMe. Θα επικοινωνήσουμε μαζί σας πριν ανοίξουμε τον Οκτώβριο.",
    },
    footer: {
      note: "FlowerMe · flowerme247.com · Έρχεται τον Οκτώβριο στην Κύπρο",
    },
  },
};
