const questions = [
  {
    q: "What should you wear at all times on a construction site?\nनिर्माण स्थल पर हर समय क्या पहनना चाहिए?",
    options: [
      "PPE (Personal Protective Equipment) / PPE (व्यक्तिगत सुरक्षा उपकरण)",
      "Casual clothes / सामान्य कपड़े",
      "Only helmet / केवल हेलमेट",
      "Only shoes / केवल जूते"
    ],
    answer: 0
  },
  {
    q: "What does the color RED signify in safety signs?\nसुरक्षा चिन्हों में लाल रंग का क्या अर्थ है?",
    options: [
      "Caution / सावधानी",
      "Safe condition / सुरक्षित स्थिति",
      "Prohibition / Danger / Fire / निषेध / खतरा / आग",
      "Mandatory action / अनिवार्य कार्य"
    ],
    answer: 2
  },
  {
    q: "What should you do before starting any work at height?\nऊंचाई पर कोई भी कार्य शुरू करने से पहले क्या करना चाहिए?",
    options: [
      "Start immediately / तुरंत शुरू करें",
      "Check safety harness and get work permit / सेफ्टी हार्नेस जांचें और कार्य परमिट लें",
      "Inform a friend / एक दोस्त को बताएं",
      "Wear only a helmet / केवल हेलमेट पहनें"
    ],
    answer: 1
  },
  {
    q: "What is the full form of PPE?\nPPE का पूरा नाम क्या है?",
    options: [
      "Personal Protection Essentials / पर्सनल प्रोटेक्शन एसेंशियल्स",
      "Personal Protective Equipment / पर्सनल प्रोटेक्टिव इक्विपमेंट",
      "Private Protection Equipment / प्राइवेट प्रोटेक्शन इक्विपमेंट",
      "Public Protective Essentials / पब्लिक प्रोटेक्टिव एसेंशियल्स"
    ],
    answer: 1
  },
  {
    q: "What is the emergency number in India?\nभारत में आपातकालीन नंबर क्या है?",
    options: [
      "100 / 100",
      "108 / 108",
      "112 / 112",
      "911 / 911"
    ],
    answer: 2
  },
  {
    q: "What type of fire extinguisher is used for electrical fires?\nबिजली की आग के लिए किस प्रकार के अग्निशामक का उपयोग किया जाता है?",
    options: [
      "Water type / पानी वाला",
      "Foam type / फोम वाला",
      "CO2 type / CO2 वाला",
      "Sand bucket / रेत की बाल्टी"
    ],
    answer: 2
  },
  {
    q: "What should you do if you find an unsafe condition at the workplace?\nयदि कार्यस्थल पर असुरक्षित स्थिति दिखे तो क्या करना चाहिए?",
    options: [
      "Ignore it / इसे अनदेखा करें",
      "Report to supervisor immediately / तुरंत सुपरवाइजर को रिपोर्ट करें",
      "Tell a co-worker only / केवल सहकर्मी को बताएं",
      "Wait until break time / ब्रेक तक इंतजार करें"
    ],
    answer: 1
  },
  {
    q: "Which color helmet is generally worn by safety officers?\nसुरक्षा अधिकारी आमतौर पर किस रंग का हेलमेट पहनते हैं?",
    options: [
      "White / सफेद",
      "Yellow / पीला",
      "Green / Cross marked / हरा / क्रॉस चिन्हित",
      "Red / लाल"
    ],
    answer: 2
  },
  {
    q: "What is a Toolbox Talk?\nटूलबॉक्स टॉक क्या है?",
    options: [
      "A discussion about buying tools / औजार खरीदने की चर्चा",
      "A short safety meeting before starting work / काम शुरू करने से पहले एक छोटी सुरक्षा बैठक",
      "A training for engineers / इंजीनियरों के लिए प्रशिक्षण",
      "A lunch break meeting / दोपहर के भोजन की बैठक"
    ],
    answer: 1
  },
  {
    q: "What is the safe working load (SWL) of equipment?\nउपकरण का सुरक्षित कार्य भार (SWL) क्या है?",
    options: [
      "Maximum weight it can lift safely / अधिकतम वजन जो सुरक्षित रूप से उठा सकता है",
      "Weight of the equipment itself / उपकरण का अपना वजन",
      "Weight of the operator / ऑपरेटर का वजन",
      "Total weight of all workers / सभी कर्मचारियों का कुल वजन"
    ],
    answer: 0
  },
  {
    q: "When should a safety harness be used?\nसेफ्टी हार्नेस का उपयोग कब करना चाहिए?",
    options: [
      "When working at ground level / जमीन पर काम करते समय",
      "When working at a height of 1.8m (6 feet) or more / 1.8 मीटर (6 फीट) या अधिक ऊंचाई पर काम करते समय",
      "Only during inspection / केवल निरीक्षण के दौरान",
      "Only when supervisor is watching / केवल जब सुपरवाइजर देख रहा हो"
    ],
    answer: 1
  },
  {
    q: "What does MSDS stand for?\nMSDS का मतलब क्या है?",
    options: [
      "Material Safety Data Sheet / मटेरियल सेफ्टी डेटा शीट",
      "Maximum Safety Data System / मैक्सिमम सेफ्टी डेटा सिस्टम",
      "Manual Safety Document System / मैनुअल सेफ्टी डॉक्यूमेंट सिस्टम",
      "Material Standard Data System / मटेरियल स्टैंडर्ड डेटा सिस्टम"
    ],
    answer: 0
  },
  {
    q: "What is the first step in case of a fire emergency?\nआग की आपातकालीन स्थिति में पहला कदम क्या है?",
    options: [
      "Try to extinguish it yourself / खुद बुझाने का प्रयास करें",
      "Run away immediately / तुरंत भाग जाएं",
      "Raise the alarm and evacuate / अलार्म बजाएं और निकासी करें",
      "Call your family / अपने परिवार को कॉल करें"
    ],
    answer: 2
  },
  {
    q: "What is a work permit system?\nकार्य परमिट प्रणाली क्या है?",
    options: [
      "Permission to leave work early / जल्दी काम छोड़ने की अनुमति",
      "A formal written system to control high-risk work / उच्च जोखिम वाले कार्य को नियंत्रित करने की लिखित प्रणाली",
      "An ID card for workers / कर्मचारियों के लिए आईडी कार्ड",
      "A holiday permission form / छुट्टी की अनुमति का फॉर्म"
    ],
    answer: 1
  },
  {
    q: "What is the purpose of a safety induction?\nसुरक्षा प्रेरण (सेफ्टी इंडक्शन) का उद्देश्य क्या है?",
    options: [
      "To give salary information / वेतन की जानकारी देना",
      "To introduce new workers to site safety rules / नए कर्मचारियों को साइट सुरक्षा नियमों से परिचित कराना",
      "To assign overtime / ओवरटाइम देना",
      "To distribute uniforms / यूनिफॉर्म वितरित करना"
    ],
    answer: 1
  },
  {
    q: "What is the meaning of a yellow safety sign?\nपीले सुरक्षा चिन्ह का क्या अर्थ है?",
    options: [
      "Prohibition / निषेध",
      "Warning / Caution / चेतावनी / सावधानी",
      "Mandatory / अनिवार्य",
      "Safe condition / सुरक्षित स्थिति"
    ],
    answer: 1
  },
  {
    q: "What should you do before operating any machinery?\nकिसी भी मशीनरी को चलाने से पहले क्या करना चाहिए?",
    options: [
      "Just start it / बस शुरू कर दें",
      "Check the machine and ensure you are trained / मशीन जांचें और सुनिश्चित करें कि आप प्रशिक्षित हैं",
      "Ask a colleague to start it / सहकर्मी से शुरू करने को कहें",
      "Wait for an hour / एक घंटा इंतजार करें"
    ],
    answer: 1
  },
  {
    q: "What does LOTO stand for in safety?\nसुरक्षा में LOTO का क्या मतलब है?",
    options: [
      "Lock Out Tag Out / लॉक आउट टैग आउट",
      "Look Out Turn Off / लुक आउट टर्न ऑफ",
      "Leave Out Take Out / लीव आउट टेक आउट",
      "Load Out Turn Out / लोड आउट टर्न आउट"
    ],
    answer: 0
  },
  {
    q: "What is the purpose of wearing a safety helmet?\nसुरक्षा हेलमेट पहनने का उद्देश्य क्या है?",
    options: [
      "To look professional / पेशेवर दिखने के लिए",
      "To protect head from falling objects / गिरने वाली वस्तुओं से सिर की सुरक्षा",
      "To keep hair clean / बालों को साफ रखने के लिए",
      "To follow fashion / फैशन के लिए"
    ],
    answer: 1
  },
  {
    q: "What is a near-miss incident?\nनियर-मिस घटना क्या है?",
    options: [
      "An incident that caused injury / एक घटना जिसमें चोट लगी",
      "An event that could have caused injury but didn't / एक घटना जो चोट पहुंचा सकती थी लेकिन नहीं पहुंचाई",
      "A planned safety drill / एक नियोजित सुरक्षा अभ्यास",
      "A minor fire / एक छोटी आग"
    ],
    answer: 1
  },
  {
    q: "How often should fire extinguishers be inspected?\nअग्निशामक यंत्रों का निरीक्षण कितने समय में करना चाहिए?",
    options: [
      "Once a year / साल में एक बार",
      "Monthly / हर महीने",
      "Only when used / केवल उपयोग के बाद",
      "Every 5 years / हर 5 साल"
    ],
    answer: 1
  },
  {
    q: "What is the correct way to lift a heavy object?\nभारी वस्तु उठाने का सही तरीका क्या है?",
    options: [
      "Bend your back / पीठ झुकाएं",
      "Bend your knees and keep back straight / घुटने मोड़ें और पीठ सीधी रखें",
      "Lift with one hand / एक हाथ से उठाएं",
      "Twist while lifting / उठाते समय मुड़ें"
    ],
    answer: 1
  },
  {
    q: "What is the purpose of a safety barrier/barricade?\nसुरक्षा बैरियर/बैरिकेड का उद्देश्य क्या है?",
    options: [
      "Decoration / सजावट",
      "To prevent unauthorized entry to hazardous areas / खतरनाक क्षेत्रों में अनधिकृत प्रवेश रोकना",
      "To block traffic / ट्रैफिक रोकना",
      "To mark parking area / पार्किंग क्षेत्र चिन्हित करना"
    ],
    answer: 1
  },
  {
    q: "What should you check before using a ladder?\nसीढ़ी का उपयोग करने से पहले क्या जांचना चाहिए?",
    options: [
      "Its color / इसका रंग",
      "Whether it is damaged and properly placed / क्या यह क्षतिग्रस्त है और सही तरह रखी है",
      "Its brand / इसका ब्रांड",
      "Nothing / कुछ नहीं"
    ],
    answer: 1
  },
  {
    q: "What does the green color signify in safety signs?\nसुरक्षा चिन्हों में हरा रंग क्या दर्शाता है?",
    options: [
      "Danger / खतरा",
      "Warning / चेतावनी",
      "Safe condition / First aid / सुरक्षित स्थिति / प्राथमिक चिकित्सा",
      "Prohibition / निषेध"
    ],
    answer: 2
  },
  {
    q: "Why is housekeeping important at a construction site?\nनिर्माण स्थल पर साफ-सफाई क्यों महत्वपूर्ण है?",
    options: [
      "To impress visitors / आगंतुकों को प्रभावित करने के लिए",
      "To prevent accidents like trips, slips and falls / ट्रिप, स्लिप और गिरने जैसी दुर्घटनाओं को रोकने के लिए",
      "To save money / पैसे बचाने के लिए",
      "Not important / महत्वपूर्ण नहीं है"
    ],
    answer: 1
  },
  {
    q: "What is the correct action if someone gets an electric shock?\nयदि किसी को बिजली का झटका लगे तो सही कार्रवाई क्या है?",
    options: [
      "Touch the person immediately / तुरंत व्यक्ति को छुएं",
      "Switch off the power source first / पहले बिजली स्रोत बंद करें",
      "Pour water on the person / व्यक्ति पर पानी डालें",
      "Wait and watch / इंतजार करें और देखें"
    ],
    answer: 1
  },
  {
    q: "What is the purpose of a safety audit?\nसुरक्षा ऑडिट का उद्देश्य क्या है?",
    options: [
      "To punish workers / कर्मचारियों को दंडित करना",
      "To identify hazards and improve safety systems / खतरों की पहचान करना और सुरक्षा प्रणालियों में सुधार करना",
      "To reduce salaries / वेतन कम करना",
      "To increase work hours / काम के घंटे बढ़ाना"
    ],
    answer: 1
  },
  {
    q: "What should be done with damaged PPE?\nक्षतिग्रस्त PPE के साथ क्या करना चाहिए?",
    options: [
      "Continue using it / इसे इस्तेमाल करते रहें",
      "Report and replace immediately / तुरंत रिपोर्ट करें और बदलें",
      "Repair it yourself / खुद मरम्मत करें",
      "Give it to someone else / किसी और को दे दें"
    ],
    answer: 1
  },
  {
    q: "What does the blue color signify in safety signs?\nसुरक्षा चिन्हों में नीला रंग क्या दर्शाता है?",
    options: [
      "Prohibition / निषेध",
      "Warning / चेतावनी",
      "Safe condition / सुरक्षित स्थिति",
      "Mandatory action / अनिवार्य कार्य"
    ],
    answer: 3
  }
];

// Placeholder for Google Apps Script Web App URL
const API_URL = "https://script.google.com/macros/s/AKfycbzztz3yy1jngN2YmgiNOhg6X8lxtyS75URf6gRudoNB8e9-yJ0RgCm9KwzLHpZy1mv0kQ/exec";
// Ensure this script can be imported or used directly by defining it appropriately.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions };
}
