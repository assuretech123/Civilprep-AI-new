import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Globe,
  Mic,
  MicOff,
  Send,
  CheckCircle2,
  Sparkles,
  BookOpen,
  MessageSquare,
  BarChart3,
  ArrowRight,
  RotateCcw,
  Award,
  Lightbulb,
  AlertCircle,
  Clock,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  UserCheck,
  FileText,
  Volume2,
  Copy,
  Check,
  Sliders,
  MapPin,
  GraduationCap,
  Play,
  Compass
} from 'lucide-react';

type Language = 'mr' | 'en';
type PageRoute = 'landing' | 'interview' | 'report';
type ExamTrack = 'mpsc_rajyaseva' | 'upsc_cse' | 'mpsc_combined';

interface QuestionItem {
  id: number;
  memberRole: { mr: string; en: string };
  memberName: { mr: string; en: string };
  category: { mr: string; en: string };
  question: { mr: string; en: string };
  hint: { mr: string; en: string };
  keywords: string[];
  sampleAnswer: { mr: string; en: string };
  idealAnswer: { mr: string; en: string };
}

interface AnswerRecord {
  questionId: number;
  responseText: string;
  mode: 'text' | 'audio';
  durationSec: number;
  contentScore: number;
  commScore: number;
  clarityScore: number;
}

const QUESTIONS_DB: QuestionItem[] = [
  {
    id: 1,
    memberRole: {
      mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)',
      en: 'Chairperson (Retd. IAS)'
    },
    memberName: {
      mr: 'श्री. देशमुख सर',
      en: 'Shri. Deshmukh Sir'
    },
    category: {
      mr: 'DAF आणि जिल्हा प्रशासन',
      en: 'DAF & District Administration'
    },
    question: {
      mr: 'तुमच्या जिल्ह्यामध्ये कृषी प्रक्रिया उद्योग (Agro-processing) आणि ग्रामीण रोजगाराच्या वाढीसाठी प्रशासकीय अधिकारी म्हणून तुमच्या पहिल्या तीन प्राथमिकता काय असतील?',
      en: 'As an administrative officer, what would be your top three priorities to boost agro-processing industries and rural employment in your home district?'
    },
    hint: {
      mr: 'क्लस्टर विकास, शेतकरी उत्पादक कंपन्या (FPOs), कोल्ड स्टोरेज पायाभूत सुविधा आणि स्थानिक बँक पतपुरवठा यांचा उल्लेख करा.',
      en: 'Mention cluster development, Farmer Producer Organizations (FPOs), cold-chain infrastructure, and PMFME credit linkage.'
    },
    keywords: ['FPO', 'क्लस्टर', 'cluster', 'कोल्ड स्टोरेज', 'cold', 'प्रक्रिया', 'processing', 'बाजारपेठ', 'market', 'शेतकरी', 'farmer', 'अर्थव्यवस्था'],
    sampleAnswer: {
      mr: 'सर, माझ्या जिल्ह्यात कृषी प्रक्रिया उद्योग वाढवण्यासाठी माझ्या तीन मुख्य प्राथमिकता असतील: १) तालुकानिहाय पीक वैशिष्ट्यांवर आधारित शेतकरी उत्पादक कंपन्यांचे (FPOs) सक्षमीकरण करणे. २) PMFME योजनेअंतर्गत सूक्ष्म अन्न प्रक्रिया उद्योगांना सुलभ कर्ज व तंत्रज्ञान उपलब्ध करून देणे. ३) कोल्ड स्टोरेज आणि लॉजिस्टिक्स साखळी मजबूत करून शेतमालाची नासाडी टाळणे व थेट बाजारपेठ जोडणी करणे.',
      en: 'Sir, to strengthen agro-processing in my district, my top three priorities would be: 1) Empowering Farmer Producer Organizations (FPOs) around district-specific crop clusters under ODOP. 2) Facilitating formal credit and technical upgrading for micro-enterprises under the PMFME scheme. 3) Strengthening farm-gate cold storage and supply-chain logistics to reduce post-harvest losses and boost rural jobs.'
    },
    idealAnswer: {
      mr: 'उत्कृष्ट उत्तरामध्ये जिल्ह्याची भौगोलिक क्षमता (ODOP), FPO सक्षमीकरण, PMFME योजनेची अंमलबजावणी, कोल्ड-चेन पायाभूत सुविधा आणि महिला बचत गटांचा सहभाग यांचा संतुलित समावेश असावा.',
      en: 'An ideal response balances One District One Product (ODOP) potential, FPO strengthening, PMFME credit linkage, farm-gate cold-chain infrastructure, and SHG participation.'
    }
  },
  {
    id: 2,
    memberRole: {
      mr: 'सदस्य १ (अर्थव्यवस्था व राज्य कारभार)',
      en: 'Member 1 (Governance & Economy)'
    },
    memberName: {
      mr: 'डॉ. कुलकर्णी मॅडम',
      en: 'Dr. Kulkarni Madam'
    },
    category: {
      mr: 'ई-गव्हर्नन्स आणि AI तंत्रज्ञान',
      en: 'e-Governance & AI in Administration'
    },
    question: {
      mr: 'महाराष्ट्र शासनाच्या महसूल आणि नागरी सेवांमध्ये आर्टिफिशियल इंटेलिजन्स (AI) वापरताना पारदर्शकता आणि सर्वसमावेशकता कशी राखता येईल?',
      en: 'How can transparency and inclusivity be ensured while integrating Artificial Intelligence (AI) into Maharashtra’s revenue and citizen service delivery?'
    },
    hint: {
      mr: 'भाषिक सुलभता (मराठी व्हॉइस इंटरफेस), डेटा गोपनीयता, डिजिटल डिव्हाइड कमी करणे आणि मानवी देखरेख (Human-in-the-loop) यावर भर द्या.',
      en: 'Highlight Marathi voice interfaces, data privacy safeguards, bridging the rural digital divide, and human-in-the-loop accountability.'
    },
    keywords: ['मराठी', 'Marathi', 'पारदर्शकता', 'transparency', 'डेटा', 'data', 'डिजिटल', 'digital', 'नागरिक', 'citizen', 'ग्रामीण', 'rural', 'गोपनीयता', 'privacy'],
    sampleAnswer: {
      mr: 'मॅडम, प्रशासनात AI वापरताना सर्वसमावेशकतेसाठी सर्वप्रथम स्थानिक मराठी भाषेत व्हॉइस-आधारित सेवा उपलब्ध करून देणे आवश्यक आहे, जेणेकरून ग्रामीण नागरिकांनाही लाभ मिळेल. दुसरे म्हणजे, डेटा सुरक्षितता कायद्याचे काटेकोर पालन आणि अल्गोरिदममध्ये कोणताही पूर्वग्रह नसल्याची खात्री करावी लागेल. तसेच अंतिम प्रशासकीय निर्णयासाठी मानवी जबाबदारी (Human-in-the-loop) आणि तक्रार निवारण यंत्रणा असायला हवी.',
      en: 'Madam, to ensure inclusivity and transparency in AI-driven governance, we must first deploy Marathi voice-enabled interfaces via Maha E-Seva Kendras so rural citizens are not excluded. Second, strict adherence to the DPDP Act for citizen data privacy and regular algorithmic audits are essential. Finally, critical welfare or land-record decisions must retain a human-in-the-loop mechanism with clear grievance redressal.'
    },
    idealAnswer: {
      mr: 'मराठी भाषेतील नैसर्गिक संवाद सुविधा, आपले सरकार केंद्रांचे सक्षमीकरण, DPDP कायद्यानुसार डेटा सुरक्षा आणि अंतिम निर्णयात प्रशासकीय अधिकाऱ्याची जबाबदारी या मुद्द्यांचा समावेश आवश्यक आहे.',
      en: 'Should cover vernacular Marathi NLP access, integration with Aaple Sarkar Seva Kendras, compliance with the DPDP Act, and human-in-the-loop oversight.'
    }
  },
  {
    id: 3,
    memberRole: {
      mr: 'सदस्य २ (नीतिशास्त्र व कायदा सुव्यवस्था)',
      en: 'Member 2 (Ethics & Public Administration)'
    },
    memberName: {
      mr: 'श्री. पाटील सर',
      en: 'Shri. Patil Sir'
    },
    category: {
      mr: 'प्रशासकीय नीतिशास्त्र (Case Study)',
      en: 'Administrative Ethics & Situational Judgment'
    },
    question: {
      mr: 'पूरग्रस्त भागात मदतकार्य सुरू असताना स्थानिक प्रभावशाली गटाकडून एका विशिष्ट भागालाच आधी मदत देण्यासाठी तुमच्यावर दबाव आला, तर तुम्ही काय भूमिका घ्याल?',
      en: 'During flood relief operations in your subdivision, if an influential local group pressures you to divert relief supplies to a non-critical area first, how will you handle the situation?'
    },
    hint: {
      mr: 'आपत्ती व्यवस्थापन प्रोटोकॉल, वस्तुनिष्ठ पंचनामा/डेटा, संवादातून समजूत काढणे आणि सर्वाधिक गरजू व असुरक्षित घटकांना प्रथम प्राधान्य या तत्त्वांचा वापर करा.',
      en: 'Focus on NDMA/SDMA triage protocols, objective vulnerability data, calm persuasive communication, and prioritizing the most vulnerable.'
    },
    keywords: ['आपत्ती', 'disaster', 'प्राधान्य', 'priority', 'कायदा', 'protocol', 'निष्पक्ष', 'impartial', 'संवाद', 'communication', 'गरजू', 'vulnerable', 'पारदर्शक'],
    sampleAnswer: {
      mr: 'सर, आपत्तीच्या काळात मानवी जीविताचे रक्षण हे सर्वोच्च कर्तव्य असते. अशा वेळी मी शांतपणे पण ठामपणे आपत्ती व्यवस्थापन कायद्यातील निकष स्पष्ट करेन. उपग्रह नकाशे आणि क्षेत्रीय पथकाच्या तातडीच्या अहवालानुसार ज्या भागात लहान मुले, वृद्ध आणि अडकलेले नागरिक सर्वाधिक संकटात आहेत, तिथेच प्रथम मदत पाठवली जाईल. तसेच सर्व मदत वाटपाची यादी सार्वजनिक ठेवून राजकीय किंवा स्थानिक गैरसमज संवादातून दूर करेन.',
      en: 'Sir, during a disaster, saving human lives based on vulnerability is non-negotiable. I would calmly but firmly communicate the Standard Operating Procedure under the Disaster Management Act to the local representatives. By transparently sharing real-time ground assessment data, I would prioritize marooned and vulnerable populations first while assuring the group of scheduled coverage for their area.'
    },
    idealAnswer: {
      mr: 'संवैधानिक निष्पक्षता, आपत्ती व्यवस्थापन मानके (SOP), वस्तुनिष्ठ डेटाच्या आधारे प्राधान्यक्रम आणि लोकप्रतिनिधींशी आदरयुक्त पण ठाम संवाद हे गुण या उत्तरातून दिसायला हवेत.',
      en: 'Demonstrates constitutional impartiality, adherence to Disaster Management SOPs, data-backed triage for vulnerable groups, and tactful yet firm communication.'
    }
  },
  {
    id: 4,
    memberRole: {
      mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)',
      en: 'Chairperson (Retd. IAS)'
    },
    memberName: {
      mr: 'श्री. देशमुख सर',
      en: 'Shri. Deshmukh Sir'
    },
    category: {
      mr: 'शाश्वत विकास आणि शहरीकरण',
      en: 'Sustainable Urbanization & Environment'
    },
    question: {
      mr: 'महाराष्ट्रातील टियर-२ आणि टियर-३ शहरांचा (उदा. कोल्हापूर, नाशिक, छत्रपती संभाजीनगर) विस्तार होताना पर्यावरण संवर्धन आणि पायाभूत सुविधांचा समतोल कसा साधाल?',
      en: 'As Tier-2 and Tier-3 cities in Maharashtra (such as Kolhapur, Nashik, and Chhatrapati Sambhajinagar) expand rapidly, how can we balance urban infrastructure with ecological conservation?'
    },
    hint: {
      mr: 'नदी प्रदूषण नियंत्रण (उदा. पंचगंगा/गोदावरी), सांडपाणी प्रक्रिया (STP), सार्वजनिक वाहतूक, आणि हरित क्षेत्र आरक्षित ठेवणे या उपायांचा उल्लेख करा.',
      en: 'Discuss river rejuvenation (Panchganga/Godavari), 100% sewage treatment (STPs), sponge-city drainage, and green mobility.'
    },
    keywords: ['नदी', 'river', 'सांडपाणी', 'STP', 'sewage', 'पर्यावरण', 'environment', 'नियोजन', 'planning', 'कचरा', 'waste', 'वाहतूक', 'transport', 'शाश्वत', 'sustainable'],
    sampleAnswer: {
      mr: 'सर, टियर-२ शहरांचा विकास शाश्वत करण्यासाठी विकास आराखड्यात (DP) पर्यावरणपूरक झोनिंग आवश्यक आहे. १) पंचगंगा किंवा गोदावरी यांसारख्या नद्यांचे प्रदूषण थांबवण्यासाठी १००% सांडपाणी प्रक्रिया प्रकल्प (STPs) कार्यक्षम करणे. २) पूररेषेतील (Blue/Red line) अनधिकृत बांधकामांवर नियंत्रण ठेवणे. ३) ई-बस सार्वजनिक वाहतूक आणि घनकचरा व्यवस्थापनातून चक्राकार अर्थव्यवस्था (Circular Economy) उभारणे यावर मी भर देईन.',
      en: 'Sir, sustainable growth in Tier-2 cities requires climate-resilient Development Plans (DP). First, achieving 100% sewage treatment capacity (STPs) and industrial effluent monitoring to protect rivers like Panchganga and Godavari. Second, strictly enforcing flood-line zoning regulations. Third, promoting electric public transit and decentralized solid waste processing.'
    },
    idealAnswer: {
      mr: 'नदी खोरे संवर्धन, १००% सांडपाणी प्रक्रिया, पूररेषा कायद्याची अंमलबजावणी, हरित वाहतूक आणि विकेंद्रित कचरा व्यवस्थापन यांचा ठोस आराखडा अपेक्षित आहे.',
      en: 'Covers river basin protection, 100% STP utilization, strict flood-plain zoning enforcement, clean public mobility, and decentralized waste management.'
    }
  }
];

const UI_TEXT = {
  mr: {
    brandSub: 'MPSC आणि UPSC मॉक मुलाखत प्लॅटफॉर्म',
    navHome: 'मुख्यपृष्ठ',
    navInterview: 'मॉक मुलाखत',
    navReport: 'मूल्यांकन अहवाल',
    langSwitchLabel: 'English',
    heroBadge: 'महाराष्ट्र लोकसेवा आयोग (MPSC) व UPSC CSE २०२६ विशेष',
    heroTitle1: 'सनदी सेवेतील यशासाठी',
    heroTitleHighlight: 'AI-आधारित मॉक मुलाखत',
    heroTitle2: 'आणि सखोल मूल्यांकन',
    heroDesc:
      'वास्तविक मुलाखत पॅनेलचा अनुभव घ्या. तुमच्या DAF, गृहजिल्हा आणि चालू घडामोडींवर आधारित सानुकूल प्रश्न, मराठी व इंग्रजी भाषेत सराव आणि त्वरित गुणपत्रिका.',
    startCta: 'Start Mock Interview / मुलाखत सुरू करा',
    sampleReportCta: 'नमुना मूल्यांकन अहवाल पहा',
    customizeTitle: 'तुमची मुलाखत प्रोफाईल निवडा (DAF Setup)',
    examLabel: 'परीक्षा निवडा',
    districtLabel: 'गृहजिल्हा (Home District)',
    mediumLabel: 'मुलाखतीचे माध्यम',
    featuresHeading: 'Civilprep.ai ची प्रमुख वैशिष्ट्ये',
    featuresSub: 'आधुनिक तंत्रज्ञान आणि अनुभवी प्रशासकीय निकषांचा संगम',
    f1Title: 'Adaptive Questions (सानुकूल प्रश्न)',
    f1Desc: 'तुमचा गृहजिल्हा, पदवी विषय, आणि महाराष्ट्रातील चालू घडामोडींवर आधारित डायनॅमिक प्रश्नमालिका.',
    f2Title: 'AI Mock Interview (AI मुलाखत)',
    f2Desc: '३-सदस्यीय मुलाखत पॅनेलचे सिम्युलेशन, आवाज रेकॉर्डिंग (Voice) आणि मजकूर (Text) या दोन्ही पद्धतींनी उत्तर देण्याची सोय.',
    f3Title: 'In-depth Feedback Report (सखोल फीडबॅक)',
    f3Desc: 'विषय ज्ञान, संवाद कौशल्य आणि विश्लेषणात्मक स्पष्टता या ३ निकषांवर सविस्तर गुण आणि आदर्श उत्तरे.',
    boardTitle: 'आभासी मुलाखत पॅनेल कक्ष (MPSC / UPSC Board Room)',
    questionProgress: 'प्रश्न क्रमांक',
    ofTotal: 'पैकी',
    boardExpectation: 'पॅनेलची अपेक्षा / उत्तरातील मुख्य मुद्दे पहा',
    hideExpectation: 'मुख्य मुद्दे लपवा',
    textMode: 'मजकूर उत्तर (Text)',
    audioMode: 'आवाज उत्तर (Voice)',
    placeholderText: 'तुमचे उत्तर येथे सविस्तर लिहा (मराठी किंवा इंग्रजीमध्ये)...',
    fillSampleBtn: 'नमुना उत्तर भरा (Auto-fill Sample)',
    clearBtn: 'मजकूर पुसा',
    startRecording: 'माईक सुरू करा (Start Speaking)',
    stopRecording: 'रेकॉर्डिंग थांबवा (Stop & Transcribe)',
    recordingActive: 'तुमचा आवाज रेकॉर्ड होत आहे... स्पष्ट व शांतपणे बोला.',
    nextQuestionBtn: 'पुढील प्रश्न (Next Question)',
    finishInterviewBtn: 'मुलाखत पूर्ण करा (Finish Interview)',
    prevTranscriptTitle: 'आतापर्यंत झालेला संवाद (Interview Transcript)',
    reportBadge: 'अधिकृत AI मूल्यांकन अहवाल',
    reportHeading: 'मुलाखत कामगिरी आणि सखोल विश्लेषण',
    overallScoreLabel: 'एकूण गुण (Overall Score)',
    mpscEqLabel: 'MPSC राज्यसेवा समतुल्य (१०० पैकी)',
    upscEqLabel: 'UPSC CSE समतुल्य (२०० पैकी)',
    cat1Title: 'विषय ज्ञान आणि अचूकता (Content Knowledge)',
    cat2Title: 'संवाद कौशल्य आणि प्रशासकीय भाषा (Communication)',
    cat3Title: 'विश्लेषणात्मक स्पष्टता आणि समतोल (Analytical Clarity)',
    strengthsTitle: 'तुमच्या जमेच्या बाजू (Key Strengths)',
    improvementsTitle: 'सुधारणेसाठी कृतीशील शिफारसी (Actionable Improvements)',
    qReviewTitle: 'प्रश्ननिहाय विश्लेषण आणि आदर्श उत्तरे',
    yourAnswerLabel: 'तुमचे उत्तर:',
    idealAnswerLabel: 'पॅनेल अपेक्षित आदर्श उत्तर:',
    retakeBtn: 'पुन्हा मुलाखत द्या (Retake Interview)',
    copyReportBtn: 'अहवाल कॉपी करा (Copy Summary)',
    copiedMsg: 'अहवाल क्लिपबोर्डवर कॉपी झाला!'
  },
  en: {
    brandSub: 'MPSC & UPSC AI Mock Interview Simulator',
    navHome: 'Home',
    navInterview: 'Mock Interview',
    navReport: 'Assessment Report',
    langSwitchLabel: 'मराठी',
    heroBadge: 'Built for Maharashtra MPSC Rajyaseva & UPSC CSE Aspirants',
    heroTitle1: 'Ace Your Civil Services Board with',
    heroTitleHighlight: 'AI Mock Interviews',
    heroTitle2: '& Granular Feedback',
    heroDesc:
      'Simulate a realistic 3-member UPSC/MPSC panel. Practice adaptive DAF, district governance, and ethics questions in Marathi or English with instant rubric evaluation.',
    startCta: 'Start Mock Interview / मुलाखत सुरू करा',
    sampleReportCta: 'View Sample Assessment Report',
    customizeTitle: 'Configure Your DAF Profile',
    examLabel: 'Target Examination',
    districtLabel: 'Home District (Maharashtra)',
    mediumLabel: 'Preferred Interview Medium',
    featuresHeading: 'Core Platform Capabilities',
    featuresSub: 'Engineered around official MPSC and UPSC personality test parameters',
    f1Title: 'Adaptive Questions (सानुकूल प्रश्न)',
    f1Desc: 'Context-aware questions tailored to your Maharashtra home district, socio-economic issues, and current affairs.',
    f2Title: 'AI Mock Interview (AI मुलाखत)',
    f2Desc: 'Interactive 3-member board simulation supporting both Voice Recording simulation and structured Text responses.',
    f3Title: 'In-depth Feedback Report (सखोल फीडबॅक)',
    f3Desc: 'Detailed scoring across Content Knowledge, Communication, and Analytical Clarity with bilingual model answers.',
    boardTitle: 'Virtual Interview Board Room (MPSC / UPSC Panel)',
    questionProgress: 'Question',
    ofTotal: 'of',
    boardExpectation: 'View Board Expectations / Key Hints',
    hideExpectation: 'Hide Hints',
    textMode: 'Text Response',
    audioMode: 'Voice Response',
    placeholderText: 'Type your structured response here (in English or Marathi)...',
    fillSampleBtn: 'Insert Sample Answer',
    clearBtn: 'Clear',
    startRecording: 'Start Voice Recording',
    stopRecording: 'Stop & Transcribe Answer',
    recordingActive: 'Listening to your response... Speak at a calm, measured pace.',
    nextQuestionBtn: 'Next Question',
    finishInterviewBtn: 'Finish Interview & View Report',
    prevTranscriptTitle: 'Completed Board Exchange (Transcript)',
    reportBadge: 'AI Personality Test Evaluation',
    reportHeading: 'Comprehensive Mock Interview Assessment Report',
    overallScoreLabel: 'Overall Readiness Score',
    mpscEqLabel: 'MPSC Rajyaseva Equivalent (Out of 100)',
    upscEqLabel: 'UPSC CSE Equivalent (Out of 200)',
    cat1Title: 'Content Knowledge & Factual Depth (विषय ज्ञान)',
    cat2Title: 'Communication & Diplomatic Tenor (संवाद कौशल्य)',
    cat3Title: 'Analytical Clarity & Administrative Balance (विश्लेषणात्मक स्पष्टता)',
    strengthsTitle: 'Key Demonstrated Strengths (जमेच्या बाजू)',
    improvementsTitle: 'Actionable Recommendations (सुधारणेसाठी शिफारसी)',
    qReviewTitle: 'Question-by-Question Breakdown & Model Answers',
    yourAnswerLabel: 'Your Submitted Response:',
    idealAnswerLabel: 'Board Model Answer:',
    retakeBtn: 'Retake Mock Interview',
    copyReportBtn: 'Copy Assessment Summary',
    copiedMsg: 'Assessment summary copied to clipboard!'
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('mr');
  const [page, setPage] = useState<PageRoute>('landing');
  const [examTrack, setExamTrack] = useState<ExamTrack>('mpsc_rajyaseva');
  const [district, setDistrict] = useState<string>('Kolhapur (कोल्हापूर)');

  // Interview state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inputMode, setInputMode] = useState<'text' | 'audio'>('text');
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [questionSeconds, setQuestionSeconds] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showDualLang, setShowDualLang] = useState<boolean>(true);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [expandedReviewId, setExpandedReviewId] = useState<number | null>(1);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [validationToast, setValidationToast] = useState<string | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const recTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = UI_TEXT[lang];
  const currentQuestion = QUESTIONS_DB[currentIndex];
  const totalQuestions = QUESTIONS_DB.length;

  // Question timer in interview view
  useEffect(() => {
    if (page === 'interview') {
      if (timerRef.current) clearInterval(timerRef.current);
      setQuestionSeconds(0);
      timerRef.current = setInterval(() => {
        setQuestionSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [page, currentIndex]);

  // Voice recording simulator timer
  useEffect(() => {
    if (isRecording) {
      if (recTimerRef.current) clearInterval(recTimerRef.current);
      recTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else if (recTimerRef.current) {
      clearInterval(recTimerRef.current);
    }
    return () => {
      if (recTimerRef.current) clearInterval(recTimerRef.current);
    };
  }, [isRecording]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  const evaluateResponse = (q: QuestionItem, text: string): { content: number; comm: number; clarity: number } => {
    const trimmed = text.trim();
    if (!trimmed) {
      return { content: 62, comm: 65, clarity: 60 };
    }
    const wordCount = trimmed.split(/\s+/).length;
    const lower = trimmed.toLowerCase();
    let matchedKeywords = 0;
    q.keywords.forEach((kw) => {
      if (lower.includes(kw.toLowerCase())) {
        matchedKeywords += 1;
      }
    });

    const contentBase = Math.min(94, 68 + matchedKeywords * 5 + Math.min(12, Math.floor(wordCount / 6)));
    const commBase = Math.min(95, 72 + Math.min(15, Math.floor(wordCount / 5)) + (trimmed.includes('१') || trimmed.includes('1)') ? 5 : 2));
    const clarityBase = Math.min(93, 70 + matchedKeywords * 4 + (wordCount >= 20 ? 10 : 4));

    return {
      content: contentBase,
      comm: commBase,
      clarity: clarityBase
    };
  };

  const startNewInterview = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setCurrentAnswer('');
    setShowHint(false);
    setIsRecording(false);
    setRecordingSeconds(0);
    setPage('interview');
  };

  const handleToggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingSeconds(0);
    } else {
      setIsRecording(false);
      // Populate transcribed response if empty
      if (!currentAnswer.trim()) {
        setCurrentAnswer(currentQuestion.sampleAnswer[lang]);
      }
    }
  };

  const saveCurrentAndProceed = (finishAfter: boolean) => {
    const effectiveText = currentAnswer.trim() || currentQuestion.sampleAnswer[lang];
    const scores = evaluateResponse(currentQuestion, effectiveText);

    const newRecord: AnswerRecord = {
      questionId: currentQuestion.id,
      responseText: effectiveText,
      mode: inputMode,
      durationSec: Math.max(18, questionSeconds),
      contentScore: scores.content,
      commScore: scores.comm,
      clarityScore: scores.clarity
    };

    const updated = [...answers.filter((a) => a.questionId !== currentQuestion.id), newRecord];
    setAnswers(updated);
    setIsRecording(false);
    setRecordingSeconds(0);
    setShowHint(false);

    if (finishAfter || currentIndex + 1 >= totalQuestions) {
      // Fill any remaining unanswered questions with sample evaluations if user finishes early
      const completedIds = new Set(updated.map((a) => a.questionId));
      const fullList = [...updated];
      QUESTIONS_DB.forEach((q) => {
        if (!completedIds.has(q.id)) {
          const fallbackText = q.sampleAnswer[lang];
          const sc = evaluateResponse(q, fallbackText);
          fullList.push({
            questionId: q.id,
            responseText: fallbackText,
            mode: 'text',
            durationSec: 45,
            contentScore: sc.content,
            commScore: sc.comm,
            clarityScore: sc.clarity
          });
        }
      });
      setAnswers(fullList);
      setPage('report');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentAnswer('');
    }
  };

  const openSampleReport = () => {
    if (answers.length === 0) {
      const seeded: AnswerRecord[] = QUESTIONS_DB.map((q) => {
        const txt = q.sampleAnswer[lang];
        const sc = evaluateResponse(q, txt);
        return {
          questionId: q.id,
          responseText: txt,
          mode: 'text',
          durationSec: 52,
          contentScore: sc.content,
          commScore: sc.comm,
          clarityScore: sc.clarity
        };
      });
      setAnswers(seeded);
    }
    setPage('report');
  };

  // Compute aggregate scores for report
  const effectiveAnswers: AnswerRecord[] =
    answers.length > 0
      ? answers
      : QUESTIONS_DB.map((q) => {
          const txt = q.sampleAnswer[lang];
          const sc = evaluateResponse(q, txt);
          return {
            questionId: q.id,
            responseText: txt,
            mode: 'text',
            durationSec: 50,
            contentScore: sc.content,
            commScore: sc.comm,
            clarityScore: sc.clarity
          };
        });

  const avgContent = Math.round(
    effectiveAnswers.reduce((acc, r) => acc + r.contentScore, 0) / effectiveAnswers.length
  );
  const avgComm = Math.round(
    effectiveAnswers.reduce((acc, r) => acc + r.commScore, 0) / effectiveAnswers.length
  );
  const avgClarity = Math.round(
    effectiveAnswers.reduce((acc, r) => acc + r.clarityScore, 0) / effectiveAnswers.length
  );
  const overallPercent = Math.round((avgContent + avgComm + avgClarity) / 3);
  const mpscMarks = Math.round(overallPercent);
  const upscMarks = Math.round((overallPercent / 100) * 200);

  const handleCopyReport = () => {
    const summaryText = `Civilprep.ai - Mock Interview Assessment (${district})\nOverall Score: ${overallPercent}% (MPSC: ${mpscMarks}/100 | UPSC: ${upscMarks}/200)\n- Content Knowledge: ${avgContent}%\n- Communication: ${avgComm}%\n- Analytical Clarity: ${avgClarity}%`;
    try {
      const textarea = document.createElement('textarea');
      textarea.value = summaryText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    } catch {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => setPage('landing')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-indigo-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900">Civilprep</span>
                <span className="text-xl font-bold text-emerald-600">.ai</span>
                <span className="hidden sm:inline-block ml-1.5 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  MPSC • UPSC
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">{t.brandSub}</p>
            </div>
          </button>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setPage('landing')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                page === 'landing'
                  ? 'bg-white text-emerald-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.navHome}
            </button>
            <button
              type="button"
              onClick={() => setPage('interview')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                page === 'interview'
                  ? 'bg-white text-emerald-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.navInterview}
            </button>
            <button
              type="button"
              onClick={openSampleReport}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                page === 'report'
                  ? 'bg-white text-emerald-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.navReport}
            </button>
          </nav>

          {/* Language Toggle Switch (Marathi 'mr' / English 'en') */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle Language Marathi or English"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-indigo-600" />
              <span>{lang === 'mr' ? 'मराठी ✓ | EN' : 'EN ✓ | मराठी'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="flex-1">
        {/* ==================== 1. LANDING PAGE (app/page.tsx) ==================== */}
        {page === 'landing' && (
          <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white py-14 sm:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Headlines & CTA */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span>{t.heroBadge}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                      {t.heroTitle1}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                        {t.heroTitleHighlight}
                      </span>{' '}
                      {t.heroTitle2}
                    </h1>

                    {/* Bilingual Sub-copy */}
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                      {t.heroDesc}
                    </p>

                    <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-300 space-y-1">
                      <p className="font-semibold text-emerald-300">
                        {lang === 'mr'
                          ? '✨ द्विभाषिक सुविधा (Marathi & English Bilingual Simulator):'
                          : '✨ Dual-Language MPSC & UPSC Board Simulation:'}
                      </p>
                      <p>
                        {lang === 'mr'
                          ? 'महाराष्ट्रातील जिल्हा प्रशासन, कृषी अर्थकारण, संविधान आणि चालू घडामोडींवर आधारित प्रत्यक्ष मुलाखतीचा सराव.'
                          : 'Practice real board questions on Maharashtra district governance, agrarian economy, constitutional ethics, and current affairs.'}
                      </p>
                    </div>

                    {/* Prominent CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={startNewInterview}
                        className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
                      >
                        <Play className="w-5 h-5 fill-current" />
                        <span>{t.startCta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        onClick={openSampleReport}
                        className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
                      >
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <span>{t.sampleReportCta}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: DAF Profile Customizer Card */}
                  <div className="lg:col-span-5">
                    <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <Sliders className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="font-bold text-base text-slate-900">{t.customizeTitle}</h2>
                            <p className="text-xs text-slate-500">
                              {lang === 'mr' ? 'तुमच्या प्रोफाईलनुसार प्रश्न सानुकूल करा' : 'Tailor board questions to your DAF'}
                            </p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                          AI Ready
                        </span>
                      </div>

                      {/* Target Exam Selector */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                          <GraduationCap className="w-4 h-4 inline mr-1 text-emerald-600" />
                          {t.examLabel}
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            {
                              id: 'mpsc_rajyaseva',
                              labelMr: 'MPSC राज्यसेवा मुख्य मुलाखत (गट-अ व गट-ब)',
                              labelEn: 'MPSC Rajyaseva State Services (Group A & B)'
                            },
                            {
                              id: 'upsc_cse',
                              labelMr: 'UPSC नागरी सेवा परीक्षा (IAS / IPS / IFS)',
                              labelEn: 'UPSC Civil Services Personality Test (IAS / IPS)'
                            },
                            {
                              id: 'mpsc_combined',
                              labelMr: 'MPSC संयुक्त परीक्षा / इतर प्रशासकीय पदे',
                              labelEn: 'MPSC Combined / Technical Services Interview'
                            }
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setExamTrack(item.id as ExamTrack)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                                examTrack === item.id
                                  ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <span>{lang === 'mr' ? item.labelMr : item.labelEn}</span>
                              {examTrack === item.id && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Home District Selector */}
                      <div className="space-y-2">
                        <label htmlFor="district-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
                          <MapPin className="w-4 h-4 inline mr-1 text-indigo-600" />
                          {t.districtLabel}
                        </label>
                        <select
                          id="district-select"
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="Kolhapur (कोल्हापूर)">Kolhapur (कोल्हापूर)</option>
                          <option value="Pune (पुणे)">Pune (पुणे)</option>
                          <option value="Mumbai (मुंबई)">Mumbai (मुंबई)</option>
                          <option value="Nagpur (नागपूर)">Nagpur (नागपूर)</option>
                          <option value="Nashik (नाशिक)">Nashik (नाशिक)</option>
                          <option value="Chhatrapati Sambhajinagar (छत्रपती संभाजीनगर)">
                            Chhatrapati Sambhajinagar (छत्रपती संभाजीनगर)
                          </option>
                          <option value="Satara (सातारा)">Satara (सातारा)</option>
                          <option value="Solapur (सोलापूर)">Solapur (सोलापूर)</option>
                          <option value="Amravati (अमरावती)">Amravati (अमरावती)</option>
                        </select>
                      </div>

                      {/* Quick Launch Inside Card */}
                      <button
                        type="button"
                        onClick={startNewInterview}
                        className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                      >
                        <span>
                          {lang === 'mr'
                            ? `${district} प्रोफाईलसह मुलाखत सुरू करा`
                            : `Launch Board for ${district}`}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Feature Cards Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  {lang === 'mr' ? 'तीन मुख्य टप्पे' : '3-Pillar Architecture'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.featuresHeading}</h2>
                <p className="text-slate-600 text-sm sm:text-base">{t.featuresSub}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1: Adaptive Questions */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{t.f1Title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.f1Desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span>{lang === 'mr' ? 'DAF + महाराष्ट्र शासन संदर्भ' : 'DAF + Maharashtra Context'}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Feature 2: AI Mock Interview */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{t.f2Title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.f2Desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
                    <span>{lang === 'mr' ? 'आवाज व मजकूर मोड उपलब्ध' : 'Voice & Text Input Modes'}</span>
                    <Mic className="w-4 h-4" />
                  </div>
                </div>

                {/* Feature 3: In-depth Feedback Report */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{t.f3Title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.f3Desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span>{lang === 'mr' ? 'त्वरित गुण व आदर्श उत्तरे' : 'Instant Rubric & Model Answers'}</span>
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== 2. INTERVIEW PAGE (app/interview/page.tsx) ==================== */}
        {page === 'interview' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            {/* Top Session Status & Smooth Progress Bar */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs">
                    {examTrack === 'mpsc_rajyaseva'
                      ? 'MPSC Rajyaseva Board'
                      : examTrack === 'upsc_cse'
                      ? 'UPSC CSE Board'
                      : 'MPSC Combined Board'}
                  </span>
                  <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    {district}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{formatTimer(questionSeconds)}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-indigo-700">
                    {t.questionProgress} {currentIndex + 1} {t.ofTotal} {totalQuestions} ({progressPercentage}%)
                  </span>
                </div>
              </div>

              {/* Smooth Progress Bar */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-indigo-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Active Question Card (Simulating Interview Board) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              {/* Board Member Header */}
              <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{currentQuestion.memberName[lang]}</div>
                    <div className="text-xs text-emerald-300">{currentQuestion.memberRole[lang]}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium">
                    {currentQuestion.category[lang]}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowDualLang((prev) => !prev)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 transition-colors"
                  >
                    {showDualLang
                      ? lang === 'mr'
                        ? 'द्विभाषिक (MR+EN)'
                        : 'Bilingual (MR+EN)'
                      : lang === 'mr'
                      ? 'फक्त मराठी'
                      : 'English Only'}
                  </button>
                </div>
              </div>

              {/* Question Body */}
              <div className="p-6 space-y-5">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                      “{currentQuestion.question[lang]}”
                    </p>
                  </div>
                  {showDualLang && (
                    <p className="text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-2.5 italic">
                      {lang === 'mr' ? currentQuestion.question.en : currentQuestion.question.mr}
                    </p>
                  )}
                </div>

                {/* Collapsible Hint / Board Expectations */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowHint((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>{showHint ? t.hideExpectation : t.boardExpectation}</span>
                    {showHint ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {showHint && (
                    <div className="mt-2.5 p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs sm:text-sm text-indigo-950 space-y-1">
                      <p className="font-medium">{currentQuestion.hint[lang]}</p>
                    </div>
                  )}
                </div>

                {/* Response Mode Switcher (Text / Audio) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setInputMode('text')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        inputMode === 'text'
                          ? 'bg-white text-emerald-700 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.textMode}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setInputMode('audio')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        inputMode === 'audio'
                          ? 'bg-white text-indigo-700 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Mic className="w-3.5 h-3.5" />
                      <span>{t.audioMode}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCurrentAnswer(currentQuestion.sampleAnswer[lang])}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition-colors"
                    >
                      {t.fillSampleBtn}
                    </button>
                    {currentAnswer && (
                      <button
                        type="button"
                        onClick={() => setCurrentAnswer('')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium"
                      >
                        {t.clearBtn}
                      </button>
                    )}
                  </div>
                </div>

                {/* Audio Recording Simulator Box */}
                {inputMode === 'audio' && (
                  <div className="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-indigo-600 text-white'
                        }`}
                      >
                        {isRecording ? <Volume2 className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {isRecording
                            ? `${t.recordingActive} (${formatTimer(recordingSeconds)})`
                            : lang === 'mr'
                            ? 'आवाजाद्वारे उत्तर रेकॉर्ड करा (Speech-to-Text Simulator)'
                            : 'Record Voice Answer (Speech-to-Text Simulator)'}
                        </p>
                        <p className="text-xs text-slate-600">
                          {lang === 'mr'
                            ? 'रेकॉर्डिंग थांबवल्यानंतर तुमचे उत्तर खालील मजकूर बॉक्समध्ये आपोआप लिहिले जाईल.'
                            : 'Stopping the recording automatically transcribes your spoken response below.'}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleToggleRecording}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all shrink-0 ${
                        isRecording
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      <span>{isRecording ? t.stopRecording : t.startRecording}</span>
                    </button>
                  </div>
                )}

                {/* Candidate Textarea Input */}
                <div className="space-y-2">
                  <textarea
                    rows={5}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder={t.placeholderText}
                    className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                  />
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {lang === 'mr' ? 'शब्द संख्या:' : 'Word count:'}{' '}
                      <strong className="text-slate-700">
                        {currentAnswer.trim() ? currentAnswer.trim().split(/\s+/).length : 0}
                      </strong>
                    </span>
                    <span>
                      {lang === 'mr'
                        ? 'टीप: उत्तर रिकामे असल्यास नमुना उत्तरासह पुढील टप्प्यावर जाता येईल.'
                        : 'Tip: You can type your own answer or use the sample response to test scoring.'}
                    </span>
                  </div>
                </div>

                {validationToast && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationToast}</span>
                  </div>
                )}

                {/* Action Triggers: Next Question & Finish Interview */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    {currentIndex > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentIndex((prev) => prev - 1);
                          const prevSaved = answers.find((a) => a.questionId === QUESTIONS_DB[currentIndex - 1].id);
                          setCurrentAnswer(prevSaved ? prevSaved.responseText : '');
                        }}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold"
                      >
                        {lang === 'mr' ? 'मागील प्रश्न' : 'Previous'}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {currentIndex + 1 < totalQuestions && (
                      <button
                        type="button"
                        onClick={() => saveCurrentAndProceed(false)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>{t.nextQuestionBtn}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => saveCurrentAndProceed(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.finishInterviewBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Q&A Chat History Log */}
            {answers.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{t.prevTranscriptTitle}</span>
                </h3>
                <div className="space-y-3">
                  {answers.map((ans) => {
                    const qObj = QUESTIONS_DB.find((q) => q.id === ans.questionId);
                    if (!qObj) return null;
                    return (
                      <div key={ans.questionId} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                          <span>
                            Q{qObj.id}. {qObj.memberName[lang]} ({qObj.category[lang]})
                          </span>
                          <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            {Math.round((ans.contentScore + ans.commScore + ans.clarityScore) / 3)}% Match
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-800">{qObj.question[lang]}</p>
                        <p className="text-xs sm:text-sm text-emerald-950 bg-emerald-50/70 p-3 rounded-lg border border-emerald-200/60">
                          {ans.responseText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== 3. ASSESSMENT REPORT PAGE (app/report/page.tsx) ==================== */}
        {page === 'report' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Overall Score Header Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <Award className="w-4 h-4" />
                    <span>{t.reportBadge}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.reportHeading}</h1>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lang === 'mr'
                      ? `गृहजिल्हा प्रोफाईल: ${district} • एकूण पूर्ण केलेले प्रश्न: ${effectiveAnswers.length}/${totalQuestions}`
                      : `DAF Home District: ${district} • Questions Evaluated: ${effectiveAnswers.length}/${totalQuestions}`}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4">
                      <span className="text-xs text-slate-400 block">{t.mpscEqLabel}</span>
                      <span className="text-2xl font-extrabold text-emerald-400">{mpscMarks} / 100</span>
                    </div>
                    <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4">
                      <span className="text-xs text-slate-400 block">{t.upscEqLabel}</span>
                      <span className="text-2xl font-extrabold text-indigo-300">{upscMarks} / 200</span>
                    </div>
                  </div>
                </div>

                {/* Overall Visual Percentage Gauge */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6">
                  <div className="relative w-36 h-36 rounded-full border-8 border-emerald-500/30 flex items-center justify-center bg-slate-900 shadow-inner">
                    <div className="text-center">
                      <span className="text-4xl font-extrabold text-emerald-400">{overallPercent}%</span>
                      <span className="block text-[11px] uppercase tracking-wider text-slate-400 mt-1">
                        {overallPercent >= 75
                          ? lang === 'mr'
                            ? 'उत्कृष्ट (Selection Grade)'
                            : 'Selection Grade'
                          : lang === 'mr'
                          ? 'चांगली तयारी (Good)'
                          : 'Strong Potential'}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-300 mt-4">{t.overallScoreLabel}</p>
                </div>
              </div>
            </div>

            {/* 3 Categorized Feedback Cards (Content Knowledge, Communication, Analytical Clarity) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category 1: Content Knowledge */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-emerald-700">{avgContent}%</span>
                </div>
                <h2 className="font-bold text-base text-slate-900">{t.cat1Title}</h2>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${avgContent}%` }} />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'mr'
                    ? 'शासकीय योजना (PMFME, ODOP), जिल्हा पातळीवरील कृषी-अर्थकारण आणि आपत्ती व्यवस्थापन कायद्याची अचूक माहिती उत्तरातून स्पष्ट होते.'
                    : 'Strong command over flagship government schemes (PMFME, ODOP), Maharashtra district administration, and statutory disaster frameworks.'}
                </p>
              </div>

              {/* Category 2: Communication */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-indigo-700">{avgComm}%</span>
                </div>
                <h2 className="font-bold text-base text-slate-900">{t.cat2Title}</h2>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${avgComm}%` }} />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'mr'
                    ? 'मुद्देसूद मांडणी (१, २, ३ क्रमांक वापरून), संयमी व आदरयुक्त प्रशासकीय भाषा आणि दोन्ही भाषांवर चांगले प्रभुत्व दिसून आले.'
                    : 'Well-structured point-by-point articulation, polite and diplomatic tone towards the Chair, and clear administrative vocabulary.'}
                </p>
              </div>

              {/* Category 3: Analytical Clarity */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-extrabold text-teal-700">{avgClarity}%</span>
                </div>
                <h2 className="font-bold text-base text-slate-900">{t.cat3Title}</h2>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: `${avgClarity}%` }} />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'mr'
                    ? 'आर्थिक विकास व पर्यावरण संवर्धन तसेच राजकीय दबाव व कायदेशीर कर्तव्य यामध्ये व्यावहारिक आणि संवैधानिक समतोल राखला आहे.'
                    : 'Balanced problem-solving approach reconciling rapid urban/industrial growth with ecological safety and constitutional impartiality.'}
                </p>
              </div>
            </div>

            {/* Strengths & Actionable Improvements in Both Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Strengths */}
              <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{t.strengthsTitle}</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'स्थानिक प्रश्नांची अचूक जाण:' : 'Strong Grassroots Governance Grasp:'}</strong>{' '}
                      {lang === 'mr'
                        ? 'जिल्ह्यातील कृषी प्रक्रिया (FPOs) आणि शहरी सांडपाणी (STP) प्रश्नांवर थेट अमलात आणता येणारे उपाय सुचवले.'
                        : 'Proposed pragmatic, implementable solutions on district FPOs, cold-chains, and municipal STP coverage.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'संवैधानिक निष्पक्षता:' : 'Constitutional Objectivity:'}</strong>{' '}
                      {lang === 'mr'
                        ? 'आपत्ती व्यवस्थापनाच्या केस स्टडीमध्ये दबावाला बळी न पडता वस्तुनिष्ठ निकषांवर आधारित निर्णय घेतला.'
                        : 'Demonstrated calm adherence to Disaster Management SOPs without confrontation under political pressure.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'तंत्रज्ञानाभिमुख दृष्टीकोन:' : 'Tech-Forward Administrative Vision:'}</strong>{' '}
                      {lang === 'mr'
                        ? 'ई-गव्हर्नन्समध्ये AI वापरताना मराठी भाषिक सुलभता आणि डेटा सुरक्षिततेचा समतोल अचूक मांडला.'
                        : 'Effectively paired AI efficiency with vernacular Marathi access and DPDP Act safeguards.'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Actionable Improvements */}
              <div className="bg-white rounded-2xl p-6 border border-indigo-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-indigo-900 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                  <span>{t.improvementsTitle}</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'आकडेवारी आणि आर्थिक पाहणी संदर्भ:' : 'Cite Maharashtra Economic Survey Data:'}</strong>{' '}
                      {lang === 'mr'
                        ? 'उत्तराची विश्वासार्हता अधिक वाढवण्यासाठी महाराष्ट्राच्या आर्थिक पाहणी अहवालातील १-२ ठोस आकडेवारी जोडा.'
                        : 'Incorporate 1–2 concrete indicators from the Maharashtra Economic Survey to substantiate policy claims.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'महिला बचत गट व लोकसहभाग:' : 'Highlight SHG & Community Participation:'}</strong>{' '}
                      {lang === 'mr'
                        ? 'ग्रामीण विकास आणि कचरा व्यवस्थापनाच्या प्रश्नांमध्ये उमेद (UMEED) अभियानाचा व लोकसहभागाचा उल्लेख करा.'
                        : 'Mention UMED (MSRLM) Women SHGs and Jan-Bhagidari when discussing rural livelihoods or waste management.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0" />
                    <span>
                      <strong>{lang === 'mr' ? 'वेळेचे नियोजन (६०-९० सेकंद):' : 'Optimal Verbal Pacing (60–90 Seconds):'}</strong>{' '}
                      {lang === 'mr'
                        ? 'प्रत्यक्ष मुलाखतीत प्रत्येक उत्तर ६० ते ९० सेकंदांत ३ ठळक मुद्द्यांत पूर्ण करण्याचा सराव ठेवा.'
                        : 'Keep spoken answers concise within 60–90 seconds structured into 3 crisp administrative pillars.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Question-by-Question Review & Bilingual Ideal Answers */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{t.qReviewTitle}</h3>
              <div className="space-y-3">
                {QUESTIONS_DB.map((q) => {
                  const userRec = effectiveAnswers.find((a) => a.questionId === q.id);
                  const isOpen = expandedReviewId === q.id;
                  const qAvg = userRec
                    ? Math.round((userRec.contentScore + userRec.commScore + userRec.clarityScore) / 3)
                    : 78;

                  return (
                    <div key={q.id} className="rounded-2xl border border-slate-200 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedReviewId(isOpen ? null : q.id)}
                        className="w-full px-5 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 text-left transition-colors"
                      >
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                            Q{q.id} • {q.category[lang]}
                          </span>
                          <p className="text-sm sm:text-base font-bold text-slate-900">{q.question[lang]}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                            {qAvg}%
                          </span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-5 bg-white space-y-4 border-t border-slate-200 text-xs sm:text-sm">
                          <div>
                            <span className="font-bold text-slate-700 block mb-1">{t.yourAnswerLabel}</span>
                            <p className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed">
                              {userRec ? userRec.responseText : q.sampleAnswer[lang]}
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-emerald-800 block mb-1">{t.idealAnswerLabel}</span>
                            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1.5 leading-relaxed">
                              <p className="font-medium">{q.idealAnswer[lang]}</p>
                              <p className="text-xs text-slate-600 border-t border-emerald-200/60 pt-1.5">
                                {lang === 'mr' ? q.idealAnswer.en : q.idealAnswer.mr}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={startNewInterview}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.retakeBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs sm:text-sm transition-all"
                >
                  {copiedToast ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedToast ? t.copiedMsg : t.copyReportBtn}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setPage('landing')}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 font-semibold text-xs sm:text-sm"
              >
                {t.navHome} →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-800">Civilprep.ai</span>
            <span>— MPSC & UPSC AI Mock Interview Platform (Maharashtra)</span>
          </div>
          <div>
            <span>
              {lang === 'mr'
                ? 'मराठी आणि इंग्रजी द्विभाषिक सपोर्ट • Next.js 14 + TypeScript + Tailwind CSS'
                : 'Bilingual Marathi & English Support • Next.js 14 + TypeScript + Tailwind CSS'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}