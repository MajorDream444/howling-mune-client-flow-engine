import { Pathway, ReflectionQuestion, ClientLetter, VaultItem } from "./types";

export const PATHWAYS: Pathway[] = [
  {
    id: "grounded-presence",
    title: "The Grounded Presence",
    subtitle: "A returning to the physical vessel, restoring somatic safety.",
    duration: "3-Day Bali Intensive",
    coreFocus: "Nervous system regulation, somatic safety, and physical grounding.",
    somaticFocus: "Diaphragmatic release, fascia decompression, and nature-attuned silence.",
    photographyFocus: "Quiet, macro-focused portraiture documenting visual softening and structural release.",
    description: "Designed for those trapped in the exhaustion of hyper-vigilance, intellectual fatigue, or profound life transitions. This pathway silences the analytical chatter and gently guide your consciousness back into your skin.",
    suitableFor: [
      "Over-intellectualizing professionals",
      "Somatic fatigue or burnout",
      "Individuals seeking grounding after rapid changes"
    ],
    ritualProcess: [
      "Somatic holding pattern assessment and fascia exploration",
      "Vagus nerve stimulation through sound and silent forest immersion",
      "Quiet micro-portraiture capture in natural shaded canopies",
      "Post-session integration and sensory alignment blueprint"
    ]
  },
  {
    id: "sovereign-identity",
    title: "The Sovereign Identity",
    subtitle: "Reclaiming internal authority and crafting a genuine visual voice.",
    duration: "5-Day Immersive",
    coreFocus: "Overcoming self-abandonment, asserting boundaries, and aligning private essence with public presence.",
    somaticFocus: "Postural assertion, vocal integration, and raw stance work.",
    photographyFocus: "Direct-light cinematic photography capturing unapologetic gaze and honest posture.",
    description: "For guides, creators, and leaders standing at a career crossroads. This is a rigorous, elegant space to drop the masks of general acceptability and step into the absolute truth of your raw authority.",
    suitableFor: [
      "Founders and creators reclaiming their true personal narrative",
      "Guides and teachers stepping into heightened visibility",
      "Those recovering from long periods of emotional codependency"
    ],
    ritualProcess: [
      "Core value and narrative deconstruction",
      "Physical boundary and stance-work embodiment",
      "Cinematic portraiture session using Bali's raw black sand shores",
      "Visual identity blueprint and digital expression alignment plan"
    ]
  },
  {
    id: "sacred-unveiling",
    title: "The Sacred Unveiling",
    subtitle: "Integrating grief, releasing shadow, and honoring rebirth.",
    duration: "7-Day Devotional Journey",
    coreFocus: "Grief integration, ancestral somatic clearing, and honoring profound transitions.",
    somaticFocus: "Cathartic heart-opening movement, water release, and deep-tissue emotional release.",
    photographyFocus: "Moody, low-light atmospheric photography capturing catharsis, raw skin, and unposed emergence.",
    description: "A sanctuary for those traversing the heavy thresholds of divorce, death, creative rebirth, or identity collapse. We do not skip the dark; we walk through it until it yields its medicine.",
    suitableFor: [
      "Navigating intense transitions (divorce, loss, career death)",
      "Creatives seeking radical, uncompromising artistic rebirth",
      "Those carrying heavy inherited intergenerational patterns"
    ],
    ritualProcess: [
      "Grief mapping and somatic shadow dialogues",
      "Sacred Balinese spring water purification and release ceremony",
      "Atmospheric low-light portrait session documenting pure vulnerability",
      "Integration mirroring session and lifetime transition journal setup"
    ]
  }
];

export const REFLECTION_QUESTIONS: ReflectionQuestion[] = [
  {
    id: "primary-ache",
    text: "Where is the heaviest weight currently resting?",
    choices: [
      {
        text: "In my over-active mind",
        description: "I am constantly planning, analyzing, and exhausted. I feel disconnected from my physical body.",
        pathwayId: "grounded-presence",
        iconName: "Brain"
      },
      {
        text: "In my diluted voice",
        description: "I am playing small, over-compromised, or feeling like my public face doesn't match my private truth.",
        pathwayId: "sovereign-identity",
        iconName: "VolumeX"
      },
      {
        text: "In an unexpressed transition",
        description: "I am standing in mid-air between who I was and who I must become. There is grief or fear blocking me.",
        pathwayId: "sacred-unveiling",
        iconName: "Compass"
      }
    ]
  },
  {
    id: "desired-shift",
    text: "When you look at a photograph of yourself, what do you yearn to see?",
    choices: [
      {
        text: "Rest and softness",
        description: "I want to see shoulders that have dropped, a soft jaw, and eyes that are truly, deeply present.",
        pathwayId: "grounded-presence",
        iconName: "Eye"
      },
      {
        text: "Strength and truth",
        description: "I want to see someone who occupies space without asking for permission or apologizing.",
        pathwayId: "sovereign-identity",
        iconName: "Sparkles"
      },
      {
        text: "Genuineness and depth",
        description: "I want to see the complexity of my story, my raw human texture, and the magic of having survived.",
        pathwayId: "sacred-unveiling",
        iconName: "Layers"
      }
    ]
  },
  {
    id: "somatic-holding",
    text: "Where does tension speak loudest in your body?",
    choices: [
      {
        text: "My forehead, neck, and upper chest",
        description: "I am shallow-breathing and carrying an intense mental load that holds me up.",
        pathwayId: "grounded-presence",
        iconName: "Activity"
      },
      {
        text: "My throat and restricted posture",
        description: "I swallow my words, over-adjust my posture to fit in, and hold back my genuine gut reactions.",
        pathwayId: "sovereign-identity",
        iconName: "ShieldAlert"
      },
      {
        text: "My deep gut, hips, and heart center",
        description: "I carry old emotional residues, unshed tears, and a feeling of heavy bracing against life.",
        pathwayId: "sacred-unveiling",
        iconName: "Heart"
      }
    ]
  }
];

export const CLIENT_LETTERS: ClientLetter[] = [
  {
    id: "letter-1",
    author: "Elena R.",
    location: "London & Bali",
    context: "After stepping down from her tech startup",
    text: "I arrived in Bali after four years of pure mental hyper-vigilance. My nervous system was entirely cooked, and I had forgotten what it felt like to occupy my body. Z didn't offer me pseudo-spiritual cures. Through silent somatic work and the mirror of her camera, she showed me where I was still bracing. Seeing the final portraits of myself looking soft and grounded was the exact moment I realized I had finally returned home. The pathway she laid out wasn't just a container; it was a bridge.",
    date: "March 2026"
  },
  {
    id: "letter-2",
    author: "Marcus T.",
    location: "Sydney",
    context: "Sought clarity during a major leadership pivot",
    text: "Z’s work is clinical in its precision but deeply sacred in its execution. She helped me identify the subtle self-abandonment I had coded into my leadership style. The Sovereign Identity intensive stripped away my polished masks and showed me how to lead from my chest, not my jaw. The visual portraits we shot in the black sands of Keramas are not branding photos—they are historical artifacts of my reclaimed sovereignty.",
    date: "January 2026"
  },
  {
    id: "letter-3",
    author: "Sarah L.",
    location: "California",
    context: "Navigating post-divorce and creative blockage",
    text: "I was standing in the ash of a 15-year marriage. Z created a space that allowed me to grieve without trying to 'fix' me. The water purification and lineage clearing helped me unload a heavy weight I didn't even know was mine. Her lens captured me in my rawest, most unpolished, most beautiful state. If you are standing at a threshold, do not rush. Walk this pathway. It will return you to yourself.",
    date: "April 2026"
  }
];

export const VAULT_ITEMS: VaultItem[] = [
  {
    id: "vault-item-1",
    title: "The Dissolution of Stance",
    collection: "Black Sand Chronicles",
    imageUrl: "/src/assets/images/vault_black_sands_1783021644412.jpg",
    usageType: "Exclusive License",
    licensingStatus: "Available",
    story: "Captured on the mineral-heavy black sands of Keramas shore, Bali. This image records the precise moment of somatic release in the shoulders and throat, captured after a 3-hour breath sequence. No direction was given; the environment and nervous system safety dictated the frame.",
    tags: ["Somatic Release", "Sovereignty", "Bali Black Sands", "Cinematic Light"]
  },
  {
    id: "vault-item-2",
    title: "Moss and Monolith",
    collection: "Rainforest Decompression",
    imageUrl: "/src/assets/images/vault_sacred_stone_1783021657688.jpg",
    usageType: "Archival Print Only",
    licensingStatus: "Reserved",
    story: "In Ubud's high-canopy valleys, moisture gathers on ancient volcanic stone structures. This micro-exploration tracks the harmony between organic decay and structural endurance. Designed to act as a silent anchor when placed in a busy studio or living space.",
    tags: ["Sacred Nature", "Macro Texture", "Ubud Silence", "Wabi-Sabi Detail"]
  },
  {
    id: "vault-item-3",
    title: "The Silent Canopy",
    collection: "Bali Sanctuaries",
    imageUrl: "/src/assets/images/vault_sanctuary_interior_1783021672133.jpg",
    usageType: "Co-creative Study",
    licensingStatus: "Licensed",
    story: "An early-morning architectural composition of the private sanctuary's timber rafters. Light falls through raw linen curtains, holding a soft golden texture that mimics the somatic breathing cycles taught by Z. It records space itself, unfiltered.",
    tags: ["Interior Sanctuary", "Soft Gold", "Timber Structure", "Quiet Space"]
  }
];

