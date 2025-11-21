
import React from 'react';
import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 'intro',
    title: 'Understanding the WISC-V',
    subtitle: 'A Guide for Classroom Teachers',
    description: "The Wechsler Intelligence Scale for Children (Fifth Edition) is a cognitive assessment used to identify a student's learning profile. It's not just about a 'score'—it's a roadmap to how a student processes information.",
    learningImpact: [
      "Identifies specific cognitive strengths and weaknesses.",
      "Helps differentiate instruction effectively.",
      "Explains the 'why' behind learning struggles."
    ],
    behavioralImpact: [
      "Cognitive fatigue can look like defiance.",
      "Processing speed issues often look like inattention.",
      "Frustration stems from a mismatch between ability and demand."
    ],
    strategies: {
        instructional: [
            "Use this guide to understand the five primary index scores.",
            "Focus on the pattern of scores, not just the Full Scale IQ."
        ],
        environmental: [
            "Create a classroom culture that normalizes different learning styles.",
            "Collaborate with the school psychologist to interpret data."
        ],
        assessment: [
            "Use cognitive data to support IEP/504 goal setting.",
            "Monitor progress based on specific interventions, not just general grades."
        ]
    },
    color: "bg-indigo-600",
    iconName: 'BookOpen'
  },
  {
    id: 'vci',
    title: 'Verbal Comprehension Index (VCI)',
    subtitle: 'The "Word Knowledge" Center',
    description: "VCI measures a student's ability to access and apply acquired word knowledge. It involves verbal concept formation, reasoning, and expression.",
    learningImpact: [
      "Difficulty following multi-step verbal instructions.",
      "Struggles with reading comprehension despite good decoding.",
      "Hard time expressing complex ideas in writing."
    ],
    behavioralImpact: [
      "May appear 'quiet' or disengaged during class discussions.",
      "Might act out to avoid writing tasks.",
      "Can seem forgetful if they didn't understand the verbal instruction initially."
    ],
    strategies: {
        instructional: [
            "Pre-teach critical vocabulary before starting a new unit.",
            "Use graphic organizers (Venn diagrams, concept maps) to make verbal relationships visual.",
            "Provide concrete examples and analogies when explaining abstract concepts."
        ],
        environmental: [
            "Provide a 'word bank' or sentence starters for written assignments.",
            "Allow the student to sit near the source of instruction to reduce auditory distractions."
        ],
        assessment: [
            "Allow oral responses for tests or assignments to bypass written expression barriers.",
            "Rephrase test questions to simpler language without changing the construct being measured."
        ]
    },
    color: "bg-blue-500",
    iconName: 'MessageSquare'
  },
  {
    id: 'vsi',
    title: 'Visual Spatial Index (VSI)',
    subtitle: 'The "Architect" Skillset',
    description: "VSI measures the ability to evaluate visual details and understand visual-spatial relationships to construct geometric designs. It's about seeing patterns and how parts fit into a whole.",
    learningImpact: [
      "Difficulty aligning numbers in math columns.",
      "Struggles with reading maps, graphs, or geometry.",
      "May get lost easily in the school or struggle with organization."
    ],
    behavioralImpact: [
      "May have a messy desk or locker.",
      "Avoids puzzles or construction tasks.",
      "Might excel in art or building but struggle with lined paper tasks."
    ],
    strategies: {
        instructional: [
            "Use manipulatives (blocks, tiles) to teach math concepts concretely.",
            "Verbalize visual materials; describe charts and graphs out loud.",
            "Teach cues for spatial organization (e.g., 'left to right', 'top to bottom')."
        ],
        environmental: [
            "Use graph paper for math problems to assist with alignment.",
            "Minimize visual clutter on worksheets (increase white space).",
            "Color-code materials to help with organization."
        ],
        assessment: [
            "Allow use of a calculator if calculation errors are due to spatial alignment.",
            "Provide extra time for tasks requiring complex visual scanning.",
            "Limit the number of problems per page."
        ]
    },
    color: "bg-teal-500",
    iconName: 'Shapes'
  },
  {
    id: 'fri',
    title: 'Fluid Reasoning Index (FRI)',
    subtitle: 'The "Problem Solving" Engine',
    description: "FRI detects the ability to detect the underlying conceptual relationship among visual objects and use reasoning to identify and apply rules. It's 'on-the-spot' problem solving.",
    learningImpact: [
      "Difficulty generalizing a math rule to a new problem type.",
      "Struggles with inferential thinking in reading.",
      "Hard time understanding cause-and-effect relationships."
    ],
    behavioralImpact: [
      "May give up easily when a task changes slightly.",
      "Can seem rigid in thinking.",
      "Frustration when explicit instructions aren't provided for every step."
    ],
    strategies: {
        instructional: [
            "Explicitly teach the 'rule' or pattern underlying a concept.",
            "Model 'think-alouds' to demonstrate how to solve novel problems.",
            "Use 'If-Then' checklists to guide decision making."
        ],
        environmental: [
            "Provide concrete examples of the finished product before they start.",
            "Use analogies to link new learning to previously mastered concepts."
        ],
        assessment: [
            "Allow open-book or open-note testing to emphasize application over memorization.",
            "Avoid 'trick' questions; keep questions straightforward.",
            "Give partial credit for showing the correct process even if the answer is wrong."
        ]
    },
    color: "bg-purple-500",
    iconName: 'Activity'
  },
  {
    id: 'wmi',
    title: 'Working Memory Index (WMI)',
    subtitle: 'The "Mental Sticky Note"',
    description: "WMI measures the ability to register, maintain, and manipulate visual and auditory information in conscious awareness. It is the scratchpad of the brain.",
    learningImpact: [
      "Forgets the beginning of a sentence by the time they reach the end.",
      "Difficulty with mental math.",
      "Struggles to copy from the board while listening."
    ],
    behavioralImpact: [
      "Often asks, 'What are we doing?' after instructions are given.",
      "Appears dreamy or distracted.",
      "May abandon tasks halfway through."
    ],
    strategies: {
        instructional: [
            "Chunk information into small, manageable bites.",
            "Ask the student to paraphrase instructions back to you ('Tell me what you need to do').",
            "Teach mnemonics to help hold information."
        ],
        environmental: [
            "Provide written checklists for daily routines.",
            "Provide a copy of notes or teacher presentation slides.",
            "Post visual schedules and reminders."
        ],
        assessment: [
            "Allow use of 'cheat sheets' with formulas or facts.",
            "Break long assessments into shorter sessions.",
            "Read test questions aloud to reduce cognitive load."
        ]
    },
    color: "bg-orange-500",
    iconName: 'HardDrive'
  },
  {
    id: 'psi',
    title: 'Processing Speed Index (PSI)',
    subtitle: 'The "Efficiency" Rate',
    description: "PSI measures the speed and accuracy of visual identification, decision making, and decision implementation. It's not about how smart they are, but how fast they can output what they know.",
    learningImpact: [
      "Last one to finish copying from the board.",
      "Homework takes hours instead of minutes.",
      "Good accuracy but very slow completion rate on tests."
    ],
    behavioralImpact: [
      "Avoidance of work due to exhaustion.",
      "May act out to get sent out of class to avoid the pressure of speed.",
      "High anxiety during timed tasks."
    ],
    strategies: {
        instructional: [
            "Emphasize quality over quantity (e.g., do evens only).",
            "Provide wait time when asking oral questions.",
            "Teach keyboarding skills if handwriting is a bottleneck."
        ],
        environmental: [
            "Provide guided notes (fill-in-the-blank) to reduce copying.",
            "Keep a set of textbooks at home to reduce transition time.",
            "Allow digital submission of assignments."
        ],
        assessment: [
            "Provide 50-100% extended time on tests.",
            "Reduce the length of assignments without changing content difficulty.",
            "Grade on content knowledge, not neatness or speed."
        ]
    },
    color: "bg-rose-500",
    iconName: 'Zap'
  },
  {
    id: 'summary',
    title: 'Putting It All Together',
    subtitle: 'A Holistic View',
    description: "A student is more than their scores. The WISC-V provides a snapshot of cognitive efficiency, but emotional factors, motivation, and environment play huge roles. Use this data to build bridges, not walls.",
    learningImpact: [
      "Look for the peaks and valleys in the profile.",
      "Teach to the strengths while supporting the weaknesses.",
      "Collaboration between teacher and psychologist is key."
    ],
    behavioralImpact: [
      "Behavior is communication—often of cognitive overload.",
      "Accommodations are not 'cheating'; they are leveling the playing field.",
      "Building confidence improves cognitive performance."
    ],
    strategies: {
        instructional: [
            "Use the 'Ask AI' feature to generate specific classroom scenarios.",
            "Differentiate instruction based on the student's strongest index."
        ],
        environmental: [
            "Create a safe environment for making mistakes.",
            "Review the student's IEP or 504 plan for alignment."
        ],
        assessment: [
            "Keep data on which interventions work best.",
            "Celebrate small wins to build academic resilience."
        ]
    },
    color: "bg-indigo-700",
    iconName: 'Brain'
  }
];
