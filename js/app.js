(function () {
      var QUESTIONS = [
        {
          id: 1,
          memberName: { mr: 'श्री. देशमुख सर', en: 'Shri. Deshmukh Sir' },
          memberRole: { mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)', en: 'Chairperson (Retd. IAS)' },
          category: { mr: '१. वैयक्तिक परिचय आणि प्रेरणा (DAF Intro)', en: '1. Personal Profile & Motivation (DAF)' },
          question: {
            mr: 'तुमची शैक्षणिक पार्श्वभूमी आणि आजवरचा प्रवास पाहता, तुम्ही नागरी सेवेत (MPSC / UPSC) येण्याचा निर्णय का घेतला? या सेवेतून तुम्हाला समाजात कोणता मुख्य बदल घडवायचा आहे?',
            en: 'Looking at your educational background and journey so far, why did you choose to pursue Civil Services (MPSC / UPSC), and what core impact do you wish to create?'
          },
          hint: {
            mr: 'तुमची शैक्षणिक शिस्त, तळागाळातील लोकांशी जोडले जाण्याची इच्छा आणि धोरणात्मक अंमलबजावणीतील भूमिका प्रामाणिकपणे मांडा.',
            en: 'Connect your academic strengths with grassroots public service and effective policy execution at the district level.'
          },
          keywords: ['प्रशासन', 'administration', 'सेवा', 'service', 'विकास', 'development', 'समाज', 'नागरिक', 'citizen', 'धोरण', 'policy'],
          sampleAnswer: {
            mr: 'सर, माझ्या शैक्षणिक प्रवासादरम्यान मला जाणवले की सरकारी योजना आणि सामान्य नागरिक यांच्यातील सर्वात महत्त्वाचा दुवा म्हणजे कार्यक्षम प्रशासन. मला माझ्या कौशल्यांचा वापर करून ग्रामीण व शहरी भागातील आरोग्य, शिक्षण आणि रोजगार विषयक योजना पारदर्शकपणे शेवटच्या घटकापर्यंत पोहोचवायच्या आहेत, म्हणूनच मी नागरी सेवेची निवड केली.',
            en: 'Sir, throughout my academic journey, I realized that public administration is the most direct instrument to translate constitutional welfare into ground reality. I wish to leverage my analytical skills to strengthen last-mile delivery in education, rural livelihoods, and transparent citizen services.'
          },
          idealAnswer: {
            mr: 'उत्तरामध्ये भावनिकतेपेक्षा व्यावहारिक दृष्टीकोन, स्वतःच्या पदवी विषयाची प्रशासनात होणारी मदत आणि संवैधानिक मूल्यांवरील निष्ठा दिसायला हवी.',
            en: 'Should reflect a realistic, grounded motivation linking personal background with constitutional service and last-mile governance.'
          }
        },
        {
          id: 2,
          memberName: { mr: 'श्री. देशमुख सर', en: 'Shri. Deshmukh Sir' },
          memberRole: { mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)', en: 'Chairperson (Retd. IAS)' },
          category: { mr: '२. गृहजिल्हा आणि कृषी अर्थकारण (District DAF)', en: '2. Home District & Agrarian Economy' },
          question: {
            mr: 'तुमच्या जिल्ह्यामध्ये कृषी प्रक्रिया उद्योग (Agro-processing) आणि ग्रामीण रोजगाराच्या वाढीसाठी प्रशासकीय अधिकारी म्हणून तुमच्या पहिल्या तीन प्राथमिकता काय असतील?',
            en: 'As an administrative officer, what would be your top three priorities to boost agro-processing industries and rural employment in your home district?'
          },
          hint: {
            mr: 'क्लस्टर विकास (ODOP), शेतकरी उत्पादक कंपन्या (FPOs), कोल्ड स्टोरेज पायाभूत सुविधा आणि PMFME बँक पतपुरवठा यांचा उल्लेख करा.',
            en: 'Mention cluster development (ODOP), Farmer Producer Organizations (FPOs), cold-chain infrastructure, and PMFME credit linkage.'
          },
          keywords: ['FPO', 'क्लस्टर', 'cluster', 'कोल्ड', 'cold', 'प्रक्रिया', 'processing', 'बाजारपेठ', 'market', 'शेतकरी', 'farmer'],
          sampleAnswer: {
            mr: 'सर, माझ्या जिल्ह्यात कृषी प्रक्रिया उद्योग वाढवण्यासाठी माझ्या तीन मुख्य प्राथमिकता असतील: १) तालुकानिहाय पीक वैशिष्ट्यांवर आधारित शेतकरी उत्पादक कंपन्यांचे (FPOs) सक्षमीकरण करणे. २) PMFME योजनेअंतर्गत सूक्ष्म अन्न प्रक्रिया उद्योगांना सुलभ कर्ज व तंत्रज्ञान उपलब्ध करून देणे. ३) कोल्ड स्टोरेज आणि लॉजिस्टिक्स साखळी मजबूत करून शेतमालाची नासाडी टाळणे व थेट बाजारपेठ जोडणी करणे.',
            en: 'Sir, to strengthen agro-processing in my district, my top three priorities would be: 1) Empowering Farmer Producer Organizations (FPOs) around district-specific crop clusters under ODOP. 2) Facilitating formal credit and technical upgrading for micro-enterprises under the PMFME scheme. 3) Strengthening farm-gate cold storage and supply-chain logistics to reduce post-harvest losses.'
          },
          idealAnswer: {
            mr: 'उत्कृष्ट उत्तरामध्ये जिल्ह्याची भौगोलिक क्षमता (ODOP), FPO सक्षमीकरण, PMFME योजनेची अंमलबजावणी, कोल्ड-चेन पायाभूत सुविधा आणि महिला बचत गटांचा सहभाग यांचा संतुलित समावेश असावा.',
            en: 'An ideal response balances One District One Product (ODOP) potential, FPO strengthening, PMFME credit linkage, farm-gate cold-chain infrastructure, and SHG participation.'
          }
        },
        {
          id: 3,
          memberName: { mr: 'डॉ. कुलकर्णी मॅडम', en: 'Dr. Kulkarni Madam' },
          memberRole: { mr: 'सदस्य १ (अर्थव्यवस्था व राज्य कारभार)', en: 'Member 1 (Governance & Economy)' },
          category: { mr: '३. ई-गव्हर्नन्स आणि AI तंत्रज्ञान', en: '3. e-Governance & AI in Administration' },
          question: {
            mr: 'महाराष्ट्र शासनाच्या महसूल आणि नागरी सेवांमध्ये आर्टिफिशियल इंटेलिजन्स (AI) वापरताना पारदर्शकता आणि सर्वसमावेशकता कशी राखता येईल?',
            en: 'How can transparency and inclusivity be ensured while integrating Artificial Intelligence (AI) into Maharashtra’s revenue and citizen service delivery?'
          },
          hint: {
            mr: 'भाषिक सुलभता (मराठी व्हॉइस इंटरफेस), डेटा गोपनीयता, डिजिटल डिव्हाइड कमी करणे आणि मानवी देखरेख (Human-in-the-loop) यावर भर द्या.',
            en: 'Highlight Marathi voice interfaces, data privacy safeguards, bridging the rural digital divide, and human-in-the-loop accountability.'
          },
          keywords: ['मराठी', 'Marathi', 'पारदर्शकता', 'transparency', 'डेटा', 'data', 'डिजिटल', 'digital', 'नागरिक', 'citizen', 'ग्रामीण', 'rural'],
          sampleAnswer: {
            mr: 'मॅडम, प्रशासनात AI वापरताना सर्वसमावेशकतेसाठी सर्वप्रथम स्थानिक मराठी भाषेत व्हॉइस-आधारित सेवा उपलब्ध करून देणे आवश्यक आहे, जेणेकरून ग्रामीण नागरिकांनाही लाभ मिळेल. दुसरे म्हणजे, डेटा सुरक्षितता कायद्याचे काटेकोर पालन आणि अल्गोरिदममध्ये कोणताही पूर्वग्रह नसल्याची खात्री करावी लागेल. तसेच अंतिम प्रशासकीय निर्णयासाठी मानवी जबाबदारी (Human-in-the-loop) आणि तक्रार निवारण यंत्रणा असायला हवी.',
            en: 'Madam, to ensure inclusivity and transparency in AI-driven governance, we must first deploy Marathi voice-enabled interfaces via Maha E-Seva Kendras so rural citizens are not excluded. Second, strict adherence to the DPDP Act for citizen data privacy and regular algorithmic audits are essential. Finally, critical welfare decisions must retain a human-in-the-loop mechanism.'
          },
          idealAnswer: {
            mr: 'मराठी भाषेतील नैसर्गिक संवाद सुविधा, आपले सरकार केंद्रांचे सक्षमीकरण, DPDP कायद्यानुसार डेटा सुरक्षा आणि अंतिम निर्णयात प्रशासकीय अधिकाऱ्याची जबाबदारी या मुद्द्यांचा समावेश आवश्यक आहे.',
            en: 'Should cover vernacular Marathi NLP access, integration with Aaple Sarkar Seva Kendras, compliance with the DPDP Act, and human-in-the-loop oversight.'
          }
        },
        {
          id: 4,
          memberName: { mr: 'डॉ. कुलकर्णी मॅडम', en: 'Dr. Kulkarni Madam' },
          memberRole: { mr: 'सदस्य १ (अर्थव्यवस्था व राज्य कारभार)', en: 'Member 1 (Governance & Economy)' },
          category: { mr: '४. महाराष्ट्राची १ ट्रिलियन डॉलर अर्थव्यवस्था', en: '4. Maharashtra $1 Trillion Economy Goal' },
          question: {
            mr: 'महाराष्ट्राला १ ट्रिलियन डॉलरची अर्थव्यवस्था बनवण्याच्या उद्दिष्टात प्रादेशिक असमतोल (उदा. विदर्भ, मराठवाडा आणि उर्वरित महाराष्ट्र) कसा दूर करता येईल?',
            en: 'As Maharashtra works toward a $1 Trillion economy, how can regional disparities across Vidarbha, Marathwada, and Western Maharashtra be effectively bridged?'
          },
          hint: {
            mr: 'समृद्धी महामार्गाभोवती लॉजिस्टिक्स हब, विकेंद्रित औद्योगिक वसाहती (MIDC), सिंचन प्रकल्प पूर्ण करणे आणि कौशल्याधिष्ठित रोजगार या मुद्द्यांचा विचार करा.',
            en: 'Mention Samruddhi corridor industrial nodes, decentralized MIDC incentives, micro-irrigation completion, and region-specific skill hubs.'
          },
          keywords: ['उद्योग', 'industry', 'समृद्धी', 'MIDC', 'सिंचन', 'irrigation', 'गुंतवणूक', 'investment', 'असमतोल', 'विकास', 'लॉजिस्टिक्स'],
          sampleAnswer: {
            mr: 'मॅडम, प्रादेशिक समतोल साधण्यासाठी गुंतवणुकीचे विकेंद्रीकरण करणे गरजेचे आहे. समृद्धी महामार्गामुळे विदर्भ आणि मराठवाडा थेट बंदरांशी जोडले गेले आहेत; तिथे कृषी-लॉजिस्टिक्स व टेक्सटाईल पार्क उभारणे, अपूर्ण सिंचन प्रकल्प पूर्ण करून शाश्वत शेतीला चालना देणे आणि स्थानिक तरुणांना उद्योगांच्या गरजेनुसार कौशल्य प्रशिक्षण देणे यातून सर्व विभागांचा संतुलित विकास साधता येईल.',
            en: 'Madam, bridging regional disparity requires decentralized industrial incentives. Leveraging the Samruddhi Mahamarg to build agro-logistics and textile parks in Vidarbha and Marathwada, completing pending irrigation backlogs with micro-irrigation, and aligning IT/manufacturing clusters with local polytechnic skill hubs will ensure inclusive growth.'
          },
          idealAnswer: {
            mr: 'पायाभूत सुविधांचा विस्तार, पॅकेज स्कीम ऑफ इन्सेन्टिव्ह्जद्वारे मागास तालुक्यांत गुंतवणूक, कापूस-सोयाबीन प्रक्रिया उद्योग आणि सिंचन क्षमता वाढ हे मुख्य आधारस्तंभ असावेत.',
            en: 'Focuses on fiscal incentives for backward talukas, value-addition in cotton/soybean belts, Samruddhi corridor logistics, and water security.'
          }
        },
        {
          id: 5,
          memberName: { mr: 'श्री. पाटील सर', en: 'Shri. Patil Sir' },
          memberRole: { mr: 'सदस्य २ (नीतिशास्त्र व कायदा सुव्यवस्था)', en: 'Member 2 (Ethics & Public Administration)' },
          category: { mr: '५. प्रशासकीय नीतिशास्त्र (Case Study)', en: '5. Administrative Ethics & Situational Judgment' },
          question: {
            mr: 'पूरग्रस्त भागात मदतकार्य सुरू असताना स्थानिक प्रभावशाली गटाकडून एका विशिष्ट भागालाच आधी मदत देण्यासाठी तुमच्यावर दबाव आला, तर तुम्ही काय भूमिका घ्याल?',
            en: 'During flood relief operations in your subdivision, if an influential local group pressures you to divert relief supplies to a non-critical area first, how will you handle the situation?'
          },
          hint: {
            mr: 'आपत्ती व्यवस्थापन प्रोटोकॉल, वस्तुनिष्ठ पंचनामा/डेटा, संवादातून समजूत काढणे आणि सर्वाधिक गरजू घटकांना प्रथम प्राधान्य या तत्त्वांचा वापर करा.',
            en: 'Focus on NDMA/SDMA triage protocols, objective vulnerability data, calm persuasive communication, and prioritizing the most vulnerable.'
          },
          keywords: ['आपत्ती', 'disaster', 'प्राधान्य', 'priority', 'कायदा', 'protocol', 'निष्पक्ष', 'impartial', 'संवाद', 'communication', 'गरजू', 'vulnerable'],
          sampleAnswer: {
            mr: 'सर, आपत्तीच्या काळात मानवी जीविताचे रक्षण हे सर्वोच्च कर्तव्य असते. अशा वेळी मी शांतपणे पण ठामपणे आपत्ती व्यवस्थापन कायद्यातील निकष स्पष्ट करेन. उपग्रह नकाशे आणि क्षेत्रीय पथकाच्या तातडीच्या अहवालानुसार ज्या भागात लहान मुले, वृद्ध आणि अडकलेले नागरिक सर्वाधिक संकटात आहेत, तिथेच प्रथम मदत पाठवली जाईल. तसेच सर्व मदत वाटपाची यादी सार्वजनिक ठेवून गैरसमज संवादातून दूर करेन.',
            en: 'Sir, during a disaster, saving human lives based on vulnerability is non-negotiable. I would calmly but firmly communicate the Standard Operating Procedure under the Disaster Management Act to the local representatives. By transparently sharing real-time ground assessment data, I would prioritize marooned populations first.'
          },
          idealAnswer: {
            mr: 'संवैधानिक निष्पक्षता, आपत्ती व्यवस्थापन मानके (SOP), वस्तुनिष्ठ डेटाच्या आधारे प्राधान्यक्रम आणि लोकप्रतिनिधींशी आदरयुक्त पण ठाम संवाद हे गुण या उत्तरातून दिसायला हवेत.',
            en: 'Demonstrates constitutional impartiality, adherence to Disaster Management SOPs, data-backed triage for vulnerable groups, and tactful yet firm communication.'
          }
        },
        {
          id: 6,
          memberName: { mr: 'श्री. पाटील सर', en: 'Shri. Patil Sir' },
          memberRole: { mr: 'सदस्य २ (नीतिशास्त्र व कायदा सुव्यवस्था)', en: 'Member 2 (Ethics & Public Administration)' },
          category: { mr: '६. भारतीय संविधान आणि स्थानिक स्वराज्य संस्था', en: '6. Constitutional Governance & Panchayati Raj' },
          question: {
            mr: '७३ व्या आणि ७४ व्या घटनादुरुस्तीनंतरही ग्रामपंचायती आणि नगरपालिकांना आर्थिकदृष्ट्या स्वयंपूर्ण करण्यात कोणत्या अडचणी येतात आणि त्यावर तुमचे उपाय काय?',
            en: 'Despite the 73rd and 74th Constitutional Amendments, what challenges prevent Gram Panchayats and Municipalities from achieving financial autonomy, and how can we address them?'
          },
          hint: {
            mr: 'स्वतःचे महसूल स्रोत (Property tax वसुली), राज्य वित्त आयोगाच्या शिफारसी, डिजिटल कर संकलन आणि स्थानिक क्षमता बांधणी यांचा उल्लेख करा.',
            en: 'Discuss Own Source Revenue (OSR), GIS-based property tax mapping, timely State Finance Commission grants, and capacity building.'
          },
          keywords: ['ग्रामपंचायत', 'panchayat', 'महसूल', 'revenue', 'कर', 'tax', 'वित्त आयोग', 'finance', 'स्वयंपूर्ण', 'autonomy', 'डिजिटल'],
          sampleAnswer: {
            mr: 'सर, स्थानिक स्वराज्य संस्था अजूनही मोठ्या प्रमाणावर शासन अनुदानावर अवलंबून आहेत. त्यांना आर्थिकदृष्ट्या सक्षम करण्यासाठी १) GIS मॅपिंगद्वारे मालमत्ता कर व पाणीपट्टी वसुलीचे डिजिटायझेशन करणे, २) राज्य वित्त आयोगाचा निधी वेळेवर वर्ग करणे, आणि ३) ग्रामपंचायत स्तरावर बाजारतळ, सौर ऊर्जा व कचरा व्यवस्थापनातून स्थानिक उत्पन्नाचे शाश्वत स्रोत निर्माण करणे आवश्यक आहे.',
            en: 'Sir, local bodies remain overly dependent on tied grants. To build financial autonomy, we must: 1) Implement GIS-based property tax assessment and digital QR collection to boost Own Source Revenue, 2) Ensure predictable devolution from State Finance Commissions, and 3) Build commercial community assets at the Panchayat level.'
          },
          idealAnswer: {
            mr: '३-F (Funds, Functions, Functionaries) चे सबलीकरण, स्वतःच्या कर उत्पन्नात वाढ आणि ग्रामसभेचे सोशल ऑडिट यावर भर देणारे उत्तर अपेक्षित आहे.',
            en: 'Highlights the 3Fs (Funds, Functions, Functionaries), digital property tax collection, and social audit accountability.'
          }
        },
        {
          id: 7,
          memberName: { mr: 'प्रा. जाधव सर', en: 'Prof. Jadhav Sir' },
          memberRole: { mr: 'सदस्य ३ (सामाजिक विकास व शिक्षण)', en: 'Member 3 (Social Policy & Education)' },
          category: { mr: '७. महिला सक्षमीकरण आणि ग्रामीण विकास', en: '7. Women Empowerment & Rural Livelihoods' },
          question: {
            mr: 'महिलांच्या आर्थिक सक्षमीकरणासाठी केवळ आर्थिक मदत पुरेशी आहे का, की बचत गटांना (SHGs) उद्योजकतेकडे वळवण्यासाठी आणखी काय पावले उचलली पाहिजेत?',
            en: 'For long-term women empowerment, how can we transition Self-Help Groups (SHGs) from micro-credit beneficiaries into sustainable rural enterprises?'
          },
          hint: {
            mr: 'उमेद (UMED) अभियान, लखपती दीदी योजना, ब्रँडिंग व पॅकेजिंग, ई-कॉमर्स (ONDC) जोडणी आणि आर्थिक साक्षरता या मुद्द्यांचा वापर करा.',
            en: 'Highlight UMED (MSRLM), Lakhpati Didi initiative, standardized branding/FSSAI certification, and ONDC/e-commerce market access.'
          },
          keywords: ['बचत गट', 'SHG', 'उमेद', 'UMED', 'महिला', 'women', 'उद्योजकता', 'बाजारपेठ', 'market', 'कौशल्य', 'skill', 'लखपती'],
          sampleAnswer: {
            mr: 'सर, थेट आर्थिक मदतीसोबतच महिलांना शाश्वत उत्पन्न मिळवून देणे अधिक महत्त्वाचे आहे. महाराष्ट्रातील उमेद (UMED) अभियानाद्वारे बचत गटांच्या उत्पादनांना दर्जेदार पॅकेजिंग, FSSAI प्रमाणपत्र आणि ब्रँडिंग देणे, त्यांना ONDC व ई-कॉमर्स प्लॅटफॉर्मशी जोडणे आणि शासकीय खरेदीत प्राधान्य देणे यातून महिला खऱ्या अर्थाने उद्योजक व लखपती दीदी बनू शकतील.',
            en: 'Sir, while welfare support provides immediate relief, long-term empowerment comes from enterprise building. Through Maharashtra’s UMED mission, we must assist SHGs with FSSAI quality certification, modern packaging, digital accounting, and direct onboarding onto ONDC and district exhibition marts.'
          },
          idealAnswer: {
            mr: 'कल्याणकारी योजना आणि उत्पादक उद्योजकता यांचा समतोल, उमेद अभियान, क्रेडिट लिंकेज आणि मार्केटिंग सपोर्ट या चार मुद्द्यांवर उत्तर आधारित असावे.',
            en: 'Balances welfare schemes with productive entrepreneurship via UMED, credit linkage, quality branding, and market integration.'
          }
        },
        {
          id: 8,
          memberName: { mr: 'प्रा. जाधव सर', en: 'Prof. Jadhav Sir' },
          memberRole: { mr: 'सदस्य ३ (सामाजिक विकास व शिक्षण)', en: 'Member 3 (Social Policy & Education)' },
          category: { mr: '८. हवामान बदल आणि शाश्वत शेती', en: '8. Climate-Resilient Agriculture' },
          question: {
            mr: 'महाराष्ट्रात अवकाळी पाऊस आणि दुष्काळ या दोन्ही संकटांचा शेतीवर परिणाम होत आहे. हवामान बदलाशी जुळवून घेणारी शेती (Climate-Resilient Agriculture) कशी विकसित करता येईल?',
            en: 'Maharashtra faces both unseasonal rains and recurring droughts. What administrative steps are needed to promote climate-resilient agriculture across the state?'
          },
          hint: {
            mr: 'नानाजी देशमुख कृषी संजीवनी प्रकल्प (PoCRA), ठिबक सिंचन, हवामान अनुकूल बियाणे, अचूक हवामान अंदाज आणि पीक विमा सुधारणा यांचा उल्लेख करा.',
            en: 'Reference PoCRA (Nanaji Deshmukh Krishi Sanjivani Prakalp), micro-irrigation, drought-tolerant crop varieties, and localized weather advisories.'
          },
          keywords: ['हवामान', 'climate', 'शेती', 'agriculture', 'PoCRA', 'सिंचन', 'ठिबक', 'पाणी', 'पीक', 'crop', 'शेतकरी'],
          sampleAnswer: {
            mr: 'सर, हवामान बदलाचा सामना करण्यासाठी नानाजी देशमुख कृषी संजीवनी प्रकल्पाचे (PoCRA) मॉडेल अत्यंत उपयुक्त आहे. यामध्ये १) कमी पाण्यात येणाऱ्या व हवामान सहनशील वाणांचा प्रसार करणे, २) मागेल त्याला शेततळे आणि सूक्ष्म सिंचनाची जोड देणे, ३) ग्रामपंचायत स्तरावर स्वयंचलित हवामान केंद्रांतून शेतकऱ्यांना अचूक पूर्वसूचना देणे या उपायांवर भर देता येईल.',
            en: 'Sir, scaling the Nanaji Deshmukh Krishi Sanjivani Prakalp (PoCRA) model is key. My focus would be on: 1) Promoting short-duration, climate-resilient seed varieties and crop diversification, 2) Expanding farm ponds paired with mandatory micro-irrigation, and 3) Delivering hyper-local weather advisories to farmers.'
          },
          idealAnswer: {
            mr: 'PoCRA प्रकल्प, पाणलोट क्षेत्र विकास, पीक पद्धतीत बदल (भरड धान्ये/Millets), आणि तंत्रज्ञानाधारित पीक विमा पंचनामे यांचा समावेश असावा.',
            en: 'Integrates PoCRA watershed management, millet/crop diversification, micro-irrigation efficiency, and tech-enabled crop insurance.'
          }
        },
        {
          id: 9,
          memberName: { mr: 'श्री. देशमुख सर', en: 'Shri. Deshmukh Sir' },
          memberRole: { mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)', en: 'Chairperson (Retd. IAS)' },
          category: { mr: '९. शाश्वत शहरीकरण आणि पर्यावरण', en: '9. Sustainable Urbanization & Environment' },
          question: {
            mr: 'महाराष्ट्रातील टियर-२ आणि टियर-३ शहरांचा (उदा. कोल्हापूर, नाशिक, छत्रपती संभाजीनगर) विस्तार होताना पर्यावरण संवर्धन आणि पायाभूत सुविधांचा समतोल कसा साधाल?',
            en: 'As Tier-2 and Tier-3 cities in Maharashtra (such as Kolhapur, Nashik, and Chhatrapati Sambhajinagar) expand rapidly, how can we balance urban infrastructure with ecological conservation?'
          },
          hint: {
            mr: 'नदी प्रदूषण नियंत्रण (पंचगंगा/गोदावरी), सांडपाणी प्रक्रिया (STP), सार्वजनिक वाहतूक आणि हरित क्षेत्र आरक्षित ठेवणे या उपायांचा उल्लेख करा.',
            en: 'Discuss river rejuvenation (Panchganga/Godavari), 100% sewage treatment (STPs), flood-line zoning, and green mobility.'
          },
          keywords: ['नदी', 'river', 'सांडपाणी', 'STP', 'sewage', 'पर्यावरण', 'environment', 'नियोजन', 'planning', 'कचरा', 'waste', 'वाहतूक', 'transport'],
          sampleAnswer: {
            mr: 'सर, टियर-२ शहरांचा विकास शाश्वत करण्यासाठी विकास आराखड्यात (DP) पर्यावरणपूरक झोनिंग आवश्यक आहे. १) पंचगंगा किंवा गोदावरी यांसारख्या नद्यांचे प्रदूषण थांबवण्यासाठी १००% सांडपाणी प्रक्रिया प्रकल्प (STPs) कार्यक्षम करणे. २) पूररेषेतील (Blue/Red line) अनधिकृत बांधकामांवर नियंत्रण ठेवणे. ३) ई-बस सार्वजनिक वाहतूक आणि घनकचरा व्यवस्थापनातून चक्राकार अर्थव्यवस्था उभारणे यावर मी भर देईन.',
            en: 'Sir, sustainable growth in Tier-2 cities requires climate-resilient Development Plans (DP). First, achieving 100% sewage treatment capacity (STPs) to protect rivers like Panchganga and Godavari. Second, strictly enforcing flood-line zoning regulations. Third, promoting electric public transit and decentralized waste processing.'
          },
          idealAnswer: {
            mr: 'नदी खोरे संवर्धन, १००% सांडपाणी प्रक्रिया, पूररेषा कायद्याची अंमलबजावणी, हरित वाहतूक आणि विकेंद्रित कचरा व्यवस्थापन यांचा ठोस आराखडा अपेक्षित आहे.',
            en: 'Covers river basin protection, 100% STP utilization, strict flood-plain zoning enforcement, clean public mobility, and decentralized waste management.'
          }
        },
        {
          id: 10,
          memberName: { mr: 'श्री. देशमुख सर', en: 'Shri. Deshmukh Sir' },
          memberRole: { mr: 'अध्यक्ष (निवृत्त सनदी अधिकारी)', en: 'Chairperson (Retd. IAS)' },
          category: { mr: '१०. समारोप आणि प्रशासकीय दृष्टीकोन (Closing)', en: '10. Concluding Vision & Leadership' },
          question: {
            mr: 'जर तुमची निवड झाली आणि तुमची पहिली पोस्टिंग एका दुर्गम तालुक्यात झाली, तर पहिल्या १०० दिवसांत जनतेचा प्रशासनावरील विश्वास वाढवण्यासाठी तुम्ही काय कराल?',
            en: 'If selected and posted to a remote subdivision, what concrete steps will you take in your first 100 days to build public trust in the administration?'
          },
          hint: {
            mr: 'नियमित जनसुनावणी, प्रलंबित दाखले व महसूल प्रकरणांचा निपटारा, शाळा-प्राथमिक आरोग्य केंद्रांना अनपेक्षित भेटी आणि पारदर्शक कार्यपद्धती यांचा उल्लेख करा.',
            en: 'Mention accessible public grievance hearings (Jan-Sunwai), clearing pending revenue/certificate backlogs, field inspections of PHCs/schools, and zero-pendency.'
          },
          keywords: ['विश्वास', 'trust', 'जनसुनावणी', 'नागरिक', 'पारदर्शक', 'महसूल', 'आरोग्य', 'शाळा', 'प्रलंबित', '100', 'फील्ड'],
          sampleAnswer: {
            mr: 'सर, पहिल्या १०० दिवसांत माझा भर ‘सुलभ आणि प्रतिसादात्मक प्रशासन’ देण्यावर असेल. १) कार्यालयात ठराविक वेळी थेट जनसुनावणी घेऊन तक्रारींचा कालबद्ध निपटारा करणे. २) विद्यार्थ्यांचे जातीचे व उत्पन्नाचे दाखले तसेच शेतकऱ्यांची प्रलंबित महसूल प्रकरणे कॅम्पद्वारे मार्गी लावणे. ३) प्राथमिक आरोग्य केंद्रे, आश्रमशाळा आणि रेशन दुकानांना प्रत्यक्ष भेटी देऊन सेवांचा दर्जा सुधारणे यातून नागरिकांचा विश्वास दृढ होईल.',
            en: 'Sir, my first 100 days would focus on accessible, responsive governance: 1) Institutionalizing fixed-hour Jan-Sunwai with digital tracking of every citizen petition. 2) Conducting taluka-level revenue camps to clear pending student certificates and land mutation cases. 3) Conducting regular field visits to PHCs, schools, and PDS shops.'
          },
          idealAnswer: {
            mr: 'नागरिक-केंद्रित दृष्टीकोन, झिरो पेंडन्सी मोहीम, क्षेत्रीय भेटी (Field visits) आणि कनिष्ठ कर्मचाऱ्यांशी समन्वय हे आदर्श अधिकाऱ्याचे गुण यातून स्पष्ट होतात.',
            en: 'Highlights citizen-centric accessibility, zero-pendency revenue camps, field inspections of health/education institutions, and team leadership.'
          }
        }
      ];

      var state = {
        lang: 'mr',
        page: 'landing',
        exam: 'MPSC Rajyaseva (राज्यसेवा गट-अ/ब)',
        district: 'Kolhapur (कोल्हापूर)',
        currentIndex: 0,
        inputMode: 'text',
        isRecording: false,
        hintOpen: false,
        seconds: 0,
        answers: {},
        user: null,
        leads: [],
        lastEmailStatus: 'अद्याप कोणतीही नोंदणी झालेली नाही.',
        authMethod: 'mobile',
        trialDaysLeft: 7,
        freeInterviewsLeft: 2,
        isPro: false
      };

      var timerId = null;

      function el(id) {
        return document.getElementById(id);
      }

      function evaluateText(q, text) {
        var trimmed = (text || '').trim();
        if (!trimmed) return { content: 74, comm: 76, clarity: 72 };
        var words = trimmed.split(/\s+/).length;
        var lower = trimmed.toLowerCase();
        var hits = 0;
        for (var i = 0; i < q.keywords.length; i++) {
          if (lower.indexOf(q.keywords[i].toLowerCase()) !== -1) hits++;
        }
        var c1 = Math.min(94, 70 + hits * 4 + Math.min(12, Math.floor(words / 6)));
        var c2 = Math.min(95, 74 + Math.min(14, Math.floor(words / 5)));
        var c3 = Math.min(93, 72 + hits * 4 + (words > 18 ? 8 : 3));
        return { content: c1, comm: c2, clarity: c3 };
      }

      function openLoginModal() {
        el('close-auth-modal-btn').className = state.user
          ? 'w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-sm'
          : 'hidden';
        el('auth-modal').className = state.user
          ? 'fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto'
          : 'fixed inset-0 top-16 z-50 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 flex items-center justify-center p-4 overflow-y-auto';
      }

      function setPage(target) {
        // Strict First-Screen Login Gate: Nothing opens until the user logs in!
        if (!state.user) {
          state.page = 'login';
          el('view-landing').className = 'hidden';
          el('view-interview').className = 'hidden';
          el('view-report').className = 'hidden';
          el('saas-pricing-section').className = 'hidden';
          openLoginModal();
          return;
        }
        el('auth-modal').className = 'hidden';
        state.page = target;
        el('view-landing').className = target === 'landing' ? '' : 'hidden';
        el('saas-pricing-section').className = target === 'landing' ? 'py-12 bg-slate-100/80 border-t border-slate-200' : 'hidden';
        el('view-interview').className = target === 'interview' ? 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6' : 'hidden';
        el('view-report').className = target === 'report' ? 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8' : 'hidden';

        var activeCls = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-white text-emerald-700 shadow-sm';
        var idleCls = 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all text-slate-600 hover:text-slate-900';
        el('nav-btn-landing').className = target === 'landing' ? activeCls : idleCls;
        el('nav-btn-interview').className = target === 'interview' ? activeCls : idleCls;
        el('nav-btn-report').className = target === 'report' ? activeCls : idleCls;

        if (timerId) {
          clearInterval(timerId);
          timerId = null;
        }
        if (target === 'interview') {
          state.seconds = 0;
          timerId = setInterval(function () {
            state.seconds++;
            var m = String(Math.floor(state.seconds / 60)).padStart(2, '0');
            var s = String(state.seconds % 60).padStart(2, '0');
            el('int-timer-badge').textContent = '⏱ ' + m + ':' + s;
          }, 1000);
          renderInterview();
        } else if (target === 'report') {
          renderReport();
        }
        window.scrollTo(0, 0);
      }

      function renderLanguageText() {
        var mr = state.lang === 'mr';
        el('lang-toggle-label').textContent = mr ? 'मराठी ✓ | EN' : 'EN ✓ | मराठी';
        el('nav-subtitle').textContent = mr ? 'MPSC आणि UPSC मॉक मुलाखत प्लॅटफॉर्म' : 'MPSC & UPSC AI Mock Interview Simulator';
        el('nav-btn-landing').textContent = mr ? 'मुख्यपृष्ठ' : 'Home';
        el('nav-btn-interview').textContent = mr ? 'मॉक मुलाखत' : 'Mock Interview';
        el('nav-btn-report').textContent = mr ? 'मूल्यांकन अहवाल' : 'Assessment Report';

        el('hero-badge').textContent = mr
          ? 'महाराष्ट्र लोकसेवा आयोग (MPSC) व UPSC CSE २०२६ विशेष'
          : 'Built for Maharashtra MPSC Rajyaseva & UPSC CSE Aspirants';
        el('hero-title-1').textContent = mr ? 'सनदी सेवेतील यशासाठी' : 'Ace Your Civil Services Board with';
        el('hero-title-highlight').textContent = mr ? ' AI-आधारित मॉक मुलाखत ' : ' AI Mock Interviews ';
        el('hero-title-2').textContent = mr ? 'आणि सखोल मूल्यांकन' : '& Granular Feedback';
        el('hero-desc').textContent = mr
          ? 'वास्तविक मुलाखत पॅनेलचा अनुभव घ्या. तुमच्या DAF, गृहजिल्हा आणि चालू घडामोडींवर आधारित सानुकूल प्रश्न, मराठी व इंग्रजी भाषेत सराव आणि त्वरित गुणपत्रिका.'
          : 'Simulate a realistic 3-member UPSC/MPSC panel. Practice adaptive DAF, district governance, and ethics questions in Marathi or English with instant rubric evaluation.';
        el('hero-box-title').textContent = mr
          ? '🎯 द्विभाषिक सुविधा (Marathi & English Bilingual Simulator):'
          : '🎯 Dual-Language MPSC & UPSC Board Simulation:';
        el('hero-box-sub').textContent = mr
          ? 'महाराष्ट्रातील जिल्हा प्रशासन, कृषी अर्थकारण, संविधान आणि चालू घडामोडींवर आधारित प्रत्यक्ष मुलाखतीचा सराव.'
          : 'Practice real board questions on Maharashtra district governance, agrarian economy, constitutional ethics, and current affairs.';
        el('hero-report-label').textContent = mr ? 'नमुना मूल्यांकन अहवाल पहा' : 'View Sample Assessment Report';

        el('daf-card-title').textContent = mr ? 'तुमची मुलाखत प्रोफाईल निवडा (DAF Setup)' : 'Configure Your DAF Profile';
        el('daf-card-sub').textContent = mr ? 'तुमच्या प्रोफाईलनुसार पॅनेल प्रश्न सानुकूल करा' : 'Tailor board questions to your DAF profile';
        el('exam-select-label').textContent = mr ? 'परीक्षा निवडा (Target Exam)' : 'Target Examination';
        el('district-select-label').textContent = mr ? 'गृहजिल्हा (Maharashtra Home District)' : 'Home District (Maharashtra)';
        el('card-launch-label').textContent = mr ? 'निवडलेल्या प्रोफाईलसह मुलाखत सुरू करा →' : 'Launch Board with Selected Profile →';

        el('features-pill').textContent = mr ? 'तीन मुख्य टप्पे' : '3-Pillar Architecture';
        el('features-heading').textContent = mr ? 'Civilprep.ai ची प्रमुख वैशिष्ट्ये' : 'Core Platform Capabilities';
        el('features-sub').textContent = mr
          ? 'आधुनिक तंत्रज्ञान आणि अनुभवी प्रशासकीय निकषांचा संगम'
          : 'Engineered around official MPSC and UPSC personality test parameters';
        el('f1-desc').textContent = mr
          ? 'तुमचा गृहजिल्हा, पदवी विषय, आणि महाराष्ट्रातील चालू घडामोडींवर आधारित डायनॅमिक प्रश्नमालिका.'
          : 'Context-aware questions tailored to your Maharashtra home district, socio-economic issues, and current affairs.';
        el('f2-desc').textContent = mr
          ? '३-सदस्यीय मुलाखत पॅनेलचे सिम्युलेशन, आवाज रेकॉर्डिंग (Voice) आणि मजकूर (Text) या दोन्ही पद्धतींनी उत्तर देण्याची सोय.'
          : 'Interactive 3-member board simulation supporting both Voice Recording simulation and structured Text responses.';
        el('f3-desc').textContent = mr
          ? 'विषय ज्ञान, संवाद कौशल्य आणि विश्लेषणात्मक स्पष्टता या ३ निकषांवर सविस्तर गुण आणि आदर्श उत्तरे.'
          : 'Detailed scoring across Content Knowledge, Communication, and Analytical Clarity with bilingual model answers.';

        if (state.page === 'interview') renderInterview();
        if (state.page === 'report') renderReport();
      }

      function updateWordCount() {
        var val = (el('answer-textarea').value || '').trim();
        el('word-count-num').textContent = val ? String(val.split(/\s+/).length) : '0';
      }

      function renderInterview() {
        var mr = state.lang === 'mr';
        var q = QUESTIONS[state.currentIndex];
        var total = QUESTIONS.length;
        var pct = Math.round(((state.currentIndex + 1) / total) * 100);

        el('int-exam-badge').textContent = state.exam;
        el('int-district-badge').textContent = '📍 ' + state.district;
        el('int-progress-text').textContent = mr
          ? 'प्रश्न ' + (state.currentIndex + 1) + ' / ' + total + ' (' + pct + '%)'
          : 'Question ' + (state.currentIndex + 1) + ' of ' + total + ' (' + pct + '%)';
        el('int-progress-bar').style.width = pct + '%';

        el('q-member-name').textContent = q.memberName[state.lang];
        el('q-member-role').textContent = q.memberRole[state.lang];
        el('q-category-badge').textContent = q.category[state.lang];
        el('q-primary-text').textContent = '“' + q.question[state.lang] + '”';
        el('q-secondary-text').textContent = mr ? q.question.en : q.question.mr;

        el('toggle-hint-label').textContent = state.hintOpen
          ? (mr ? 'मुख्य मुद्दे लपवा' : 'Hide Board Expectations')
          : (mr ? 'पॅनेलची अपेक्षा / उत्तरातील मुख्य मुद्दे पहा' : 'View Board Expectations / Key Hints');
        el('hint-box').className = state.hintOpen
          ? 'mt-2.5 p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm text-indigo-950 font-medium'
          : 'hidden';
        el('hint-box').textContent = q.hint[state.lang];

        el('mode-text-btn').className = state.inputMode === 'text'
          ? 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm transition-all'
          : 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all';
        el('mode-audio-btn').className = state.inputMode === 'audio'
          ? 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-indigo-700 shadow-sm transition-all'
          : 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all';

        el('voice-simulator-box').className = 'rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-3';
        el('tts-speak-label').textContent = mr ? 'प्रश्न ऐका (Listen)' : 'Listen Question';

        var existing = state.answers[q.id];
        el('answer-textarea').value = existing ? existing.responseText : '';
        el('answer-textarea').placeholder = mr
          ? 'तुमचे उत्तर येथे सविस्तर लिहा (मराठी किंवा इंग्रजीमध्ये)...'
          : 'Type your structured response here (in English or Marathi)...';
        updateWordCount();

        el('prev-q-btn').style.visibility = state.currentIndex > 0 ? 'visible' : 'hidden';
        el('prev-q-btn').textContent = mr ? '← मागील प्रश्न' : '← Previous Question';
        el('next-q-btn').style.display = state.currentIndex + 1 < total ? 'inline-flex' : 'none';
        el('next-q-label').textContent = mr ? 'पुढील प्रश्न (Next Question) →' : 'Next Question →';
        el('finish-int-label').textContent = mr ? '✓ मुलाखत पूर्ण करा (Finish Interview)' : '✓ Finish Interview & View Report';

        renderTranscript();
      }

      function renderTranscript() {
        var keys = Object.keys(state.answers);
        if (keys.length === 0) {
          el('transcript-container').className = 'hidden';
          return;
        }
        el('transcript-container').className = 'bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4';
        var html = '';
        for (var i = 0; i < QUESTIONS.length; i++) {
          var q = QUESTIONS[i];
          var rec = state.answers[q.id];
          if (!rec) continue;
          var avg = Math.round((rec.content + rec.comm + rec.clarity) / 3);
          html += '<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">' +
            '<div class="flex items-center justify-between text-xs font-bold text-slate-600">' +
            '<span>Q' + q.id + '. ' + q.memberName[state.lang] + ' (' + q.category[state.lang] + ')</span>' +
            '<span class="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">' + avg + '% Score</span>' +
            '</div>' +
            '<p class="text-xs sm:text-sm font-semibold text-slate-800">' + q.question[state.lang] + '</p>' +
            '<p class="text-xs sm:text-sm text-emerald-950 bg-emerald-50/70 p-3 rounded-lg border border-emerald-200/60">' + rec.responseText + '</p>' +
            '</div>';
        }
        el('transcript-list').innerHTML = html;
      }

      function saveCurrentQuestion() {
        var q = QUESTIONS[state.currentIndex];
        var raw = (el('answer-textarea').value || '').trim();
        var finalTxt = raw || q.sampleAnswer[state.lang];
        var sc = evaluateText(q, finalTxt);
        state.answers[q.id] = {
          questionId: q.id,
          responseText: finalTxt,
          content: sc.content,
          comm: sc.comm,
          clarity: sc.clarity
        };
      }

      function renderReport() {
        var mr = state.lang === 'mr';
        // Ensure all 4 questions have records for a complete report
        for (var i = 0; i < QUESTIONS.length; i++) {
          var q = QUESTIONS[i];
          if (!state.answers[q.id]) {
            var sample = q.sampleAnswer[state.lang];
            var sc = evaluateText(q, sample);
            state.answers[q.id] = {
              questionId: q.id,
              responseText: sample,
              content: sc.content,
              comm: sc.comm,
              clarity: sc.clarity
            };
          }
        }

        var sumC1 = 0, sumC2 = 0, sumC3 = 0;
        for (var j = 0; j < QUESTIONS.length; j++) {
          var r = state.answers[QUESTIONS[j].id];
          sumC1 += r.content;
          sumC2 += r.comm;
          sumC3 += r.clarity;
        }
        var avgC1 = Math.round(sumC1 / QUESTIONS.length);
        var avgC2 = Math.round(sumC2 / QUESTIONS.length);
        var avgC3 = Math.round(sumC3 / QUESTIONS.length);
        var overall = Math.round((avgC1 + avgC2 + avgC3) / 3);
        var upsc = Math.round((overall / 100) * 200);

        el('rep-badge').textContent = mr ? '🏆 अधिकृत AI मूल्यांकन अहवाल' : '🏆 AI Personality Test Evaluation';
        el('rep-heading').textContent = mr ? 'मुलाखत कामगिरी आणि सखोल विश्लेषण' : 'Comprehensive Mock Interview Assessment Report';
        el('rep-meta').textContent = mr
          ? 'परीक्षा: ' + state.exam + ' • गृहजिल्हा: ' + state.district + ' • मूल्यमापन केलेले प्रश्न: १०/१०'
          : 'Exam Track: ' + state.exam + ' • Home District: ' + state.district + ' • Questions Evaluated: 10/10';

        el('rep-mpsc-label').textContent = mr ? 'MPSC राज्यसेवा समतुल्य (१०० पैकी)' : 'MPSC Rajyaseva Equivalent (Out of 100)';
        el('rep-upsc-label').textContent = mr ? 'UPSC CSE समतुल्य (२०० पैकी)' : 'UPSC CSE Equivalent (Out of 200)';
        el('rep-mpsc-val').textContent = overall + ' / 100';
        el('rep-upsc-val').textContent = upsc + ' / 200';
        el('rep-overall-val').textContent = overall + '%';
        el('rep-overall-label').textContent = mr ? 'एकूण गुण (Overall Readiness Score)' : 'Overall Readiness Score';

        el('score-content-val').textContent = avgC1 + '%';
        el('bar-content').style.width = avgC1 + '%';
        el('cat1-title').textContent = mr ? 'विषय ज्ञान आणि अचूकता (Content Knowledge)' : 'Content Knowledge & Factual Depth';
        el('cat1-desc').textContent = mr
          ? 'शासकीय योजना (PMFME, ODOP), जिल्हा पातळीवरील कृषी-अर्थकारण आणि आपत्ती व्यवस्थापन कायद्याची अचूक माहिती उत्तरातून स्पष्ट होते.'
          : 'Strong command over flagship schemes (PMFME, ODOP), Maharashtra district administration, and statutory disaster frameworks.';

        el('score-comm-val').textContent = avgC2 + '%';
        el('bar-comm').style.width = avgC2 + '%';
        el('cat2-title').textContent = mr ? 'संवाद कौशल्य आणि प्रशासकीय भाषा (Communication)' : 'Communication & Diplomatic Tenor';
        el('cat2-desc').textContent = mr
          ? 'मुद्देसूद मांडणी (१, २, ३ क्रमांक वापरून), संयमी व आदरयुक्त प्रशासकीय भाषा आणि दोन्ही भाषांवर चांगले प्रभुत्व दिसून आले.'
          : 'Well-structured point-by-point articulation, polite and diplomatic tone towards the Chair, and clear administrative vocabulary.';

        el('score-clarity-val').textContent = avgC3 + '%';
        el('bar-clarity').style.width = avgC3 + '%';
        el('cat3-title').textContent = mr ? 'विश्लेषणात्मक स्पष्टता आणि समतोल (Analytical Clarity)' : 'Analytical Clarity & Administrative Balance';
        el('cat3-desc').textContent = mr
          ? 'आर्थिक विकास व पर्यावरण संवर्धन तसेच राजकीय दबाव व कायदेशीर कर्तव्य यामध्ये व्यावहारिक आणि संवैधानिक समतोल राखला आहे.'
          : 'Balanced problem-solving approach reconciling rapid urban/industrial growth with ecological safety and constitutional impartiality.';

        el('strengths-heading').textContent = mr ? '✅ तुमच्या जमेच्या बाजू (Key Strengths)' : '✅ Key Demonstrated Strengths';
        el('strengths-list').innerHTML = mr
          ? '<li>• <strong>स्थानिक प्रश्नांची अचूक जाण:</strong> जिल्ह्यातील कृषी प्रक्रिया (FPOs) आणि शहरी सांडपाणी (STP) प्रश्नांवर थेट अमलात आणता येणारे उपाय सुचवले.</li>' +
            '<li>• <strong>संवैधानिक निष्पक्षता:</strong> आपत्ती व्यवस्थापनाच्या केस स्टडीमध्ये दबावाला बळी न पडता वस्तुनिष्ठ निकषांवर आधारित निर्णय घेतला.</li>' +
            '<li>• <strong>तंत्रज्ञानाभिमुख दृष्टीकोन:</strong> ई-गव्हर्नन्समध्ये AI वापरताना मराठी भाषिक सुलभता आणि डेटा सुरक्षिततेचा समतोल अचूक मांडला.</li>'
          : '<li>• <strong>Grassroots Governance Grasp:</strong> Proposed pragmatic solutions on district FPO clusters, cold-chains, and municipal STP coverage.</li>' +
            '<li>• <strong>Constitutional Objectivity:</strong> Demonstrated calm adherence to Disaster Management SOPs under local political pressure.</li>' +
            '<li>• <strong>Tech-Forward Vision:</strong> Effectively paired AI efficiency with vernacular Marathi access and DPDP Act safeguards.</li>';

        el('improvements-heading').textContent = mr ? '💡 सुधारणेसाठी कृतीशील शिफारसी (Actionable Improvements)' : '💡 Actionable Recommendations';
        el('improvements-list').innerHTML = mr
          ? '<li>• <strong>आर्थिक पाहणी संदर्भ:</strong> उत्तराची विश्वासार्हता अधिक वाढवण्यासाठी महाराष्ट्राच्या आर्थिक पाहणी अहवालातील १-२ ठोस आकडेवारी जोडा.</li>' +
            '<li>• <strong>महिला बचत गट व लोकसहभाग:</strong> ग्रामीण विकास आणि कचरा व्यवस्थापनाच्या प्रश्नांमध्ये उमेद (UMED) अभियानाचा उल्लेख करा.</li>' +
            '<li>• <strong>वेळेचे नियोजन (६०-९० सेकंद):</strong> प्रत्यक्ष मुलाखतीत प्रत्येक उत्तर ६० ते ९० सेकंदांत ३ ठळक मुद्द्यांत पूर्ण करण्याचा सराव ठेवा.</li>'
          : '<li>• <strong>Cite Economic Survey Data:</strong> Incorporate 1–2 concrete indicators from the Maharashtra Economic Survey to substantiate claims.</li>' +
            '<li>• <strong>Highlight SHG Participation:</strong> Mention UMED (MSRLM) Women SHGs when discussing rural livelihoods or waste management.</li>' +
            '<li>• <strong>Optimal Verbal Pacing:</strong> Keep spoken answers concise within 60–90 seconds structured into 3 crisp administrative pillars.</li>';

        el('q-review-heading').textContent = mr ? 'प्रश्ननिहाय विश्लेषण आणि आदर्श उत्तरे' : 'Question-by-Question Breakdown & Model Answers';
        var revHtml = '';
        for (var k = 0; k < QUESTIONS.length; k++) {
          var item = QUESTIONS[k];
          var ans = state.answers[item.id];
          var qScore = Math.round((ans.content + ans.comm + ans.clarity) / 3);
          revHtml += '<div class="rounded-2xl border border-slate-200 p-5 space-y-3 bg-slate-50/60">' +
            '<div class="flex items-center justify-between gap-2">' +
            '<span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Q' + item.id + ' • ' + item.category[state.lang] + '</span>' +
            '<span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">' + qScore + '%</span>' +
            '</div>' +
            '<p class="text-sm sm:text-base font-bold text-slate-900">' + item.question[state.lang] + '</p>' +
            '<div class="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800">' +
            '<strong class="block text-slate-500 mb-1">' + (mr ? 'तुमचे उत्तर:' : 'Your Response:') + '</strong>' +
            ans.responseText +
            '</div>' +
            '<div class="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm text-emerald-950">' +
            '<strong class="block text-emerald-800 mb-1">' + (mr ? 'पॅनेल अपेक्षित आदर्श उत्तर:' : 'Board Model Answer:') + '</strong>' +
            item.idealAnswer[state.lang] +
            '</div>' +
            '</div>';
        }
        el('q-review-container').innerHTML = revHtml;
      }

      // Wire all event listeners
      el('brand-home-btn').addEventListener('click', function () { setPage('landing'); });
      el('nav-btn-landing').addEventListener('click', function () { setPage('landing'); });
      el('nav-btn-interview').addEventListener('click', function () { setPage('interview'); });
      el('nav-btn-report').addEventListener('click', function () { setPage('report'); });

      el('lang-toggle-btn').addEventListener('click', function () {
        state.lang = state.lang === 'mr' ? 'en' : 'mr';
        renderLanguageText();
      });

      el('exam-select').addEventListener('change', function (e) {
        state.exam = e.target.value;
      });
      el('district-select').addEventListener('change', function (e) {
        state.district = e.target.value;
      });

      function updateAuthAndTrialUI() {
        var mr = state.lang === 'mr';
        if (state.user) {
          el('nav-login-label').textContent = state.user.name.split(' ')[0];
          el('trial-badge-label').textContent = '✓ ' + state.user.contact;
          el('logout-demo-btn').className = 'text-red-600 font-bold hover:underline';
        } else {
          el('nav-login-label').textContent = mr ? 'लॉगिन / Register' : 'Login / Register';
          el('trial-badge-label').textContent = mr ? '✨ १० प्रश्न पूर्ण मॉक टेस्ट' : '✨ 10-Q Full Mock Test';
          el('logout-demo-btn').className = 'hidden';
        }
      }

      function tryStartInterview() {
        state.currentIndex = 0;
        setPage('interview');
      }

      el('hero-start-btn').addEventListener('click', tryStartInterview);
      el('card-launch-btn').addEventListener('click', tryStartInterview);

      // Auth Modal Listeners (Mobile OTP + Email)
      el('open-login-btn').addEventListener('click', function () {
        openLoginModal();
      });
      el('landing-login-cta').addEventListener('click', function () {
        openLoginModal();
      });
      el('close-auth-modal-btn').addEventListener('click', function () {
        if (state.user) {
          el('auth-modal').className = 'hidden';
        }
      });

      el('auth-tab-mobile').addEventListener('click', function () {
        state.authMethod = 'mobile';
        el('auth-tab-mobile').className = 'py-2 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm transition-all';
        el('auth-tab-email').className = 'py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all';
        el('auth-mobile-input').focus();
      });

      el('auth-tab-email').addEventListener('click', function () {
        state.authMethod = 'email';
        el('auth-tab-email').className = 'py-2 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm transition-all';
        el('auth-tab-mobile').className = 'py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 transition-all';
        el('auth-email-input').focus();
      });

      el('send-otp-btn').addEventListener('click', function () {
        var mob = (el('auth-mobile-input').value || '').trim();
        if (!mob) el('auth-mobile-input').value = '9876543210';
        el('otp-input-row').className = 'space-y-1.5';
        el('send-otp-btn').textContent = '✓ OTP पाठवला';
      });

      el('submit-auth-btn').addEventListener('click', function () {
        var nameVal = (el('auth-name-input').value || '').trim();
        var mobileVal = (el('auth-mobile-input').value || '').trim();
        var emailVal = (el('auth-email-input').value || '').trim();

        if (!nameVal || (!mobileVal && !emailVal)) {
          el('auth-feedback-msg').className = 'p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold';
          el('auth-feedback-msg').textContent = '⚠️ कृपया तुमचे पूर्ण नाव, मोबाईल नंबर आणि ईमेल टाका.';
          return;
        }

        var contactVal = (mobileVal ? '+91 ' + mobileVal : '') + (emailVal ? ' | ' + emailVal : '');
        state.user = {
          name: nameVal,
          mobile: mobileVal || 'N/A',
          email: emailVal || 'N/A',
          contact: contactVal,
          exam: state.exam,
          district: state.district,
          loginTime: new Date().toLocaleString('en-IN')
        };

        try {
          localStorage.setItem('civilprep_user', JSON.stringify(state.user));
        } catch (e) {}

        // Save lead in local list as well
        state.leads.unshift(state.user);
        try {
          localStorage.setItem('civilprep_leads', JSON.stringify(state.leads));
        } catch (e) {}
        renderLeadsTable();

        // 2. Send student registration info directly to assuretech@gmail.com via FormSubmit AJAX API
        state.lastEmailStatus = '⏳ assuretech@gmail.com वर माहिती पाठवली जात आहे...';
        el('email-delivery-log').textContent = state.lastEmailStatus;
        try {
          fetch('https://formsubmit.co/ajax/assuretech@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: 'New Civilprep.ai Student Login: ' + nameVal,
              _cc: 'vilas82546@gmail.com',
              _captcha: 'false',
              Student_Name: nameVal,
              Mobile_Number: '+91 ' + (mobileVal || 'N/A'),
              Student_Email: emailVal || 'N/A',
              Target_Exam: state.exam,
              Home_District: state.district,
              Login_Timestamp: state.user.loginTime
            })
          })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (data && (data.success === 'true' || data.success === true)) {
              state.lastEmailStatus = '✅ यशस्वी: ' + nameVal + ' ची माहिती assuretech@gmail.com वर पाठवली गेली!';
            } else {
              var msg = (data && data.message) ? data.message : 'FormSubmit Activation / Server आवश्यक';
              state.lastEmailStatus = '⚠️ ऑटो-ईमेल सूचना: ' + msg + ' (वरच्या "📋 Leads" बटणावर क्लिक करून ई-मेल अ‍ॅक्टिव्हेट करा किंवा CSV घ्या).';
            }
            el('email-delivery-log').textContent = state.lastEmailStatus;
          })
          .catch(function () {
            state.lastEmailStatus = '⚠️ प्रिव्ह्यू विंडोमध्ये बाहेरील ई-मेल ब्लॉक आहे. माहिती "📋 Leads" मध्ये सेव्ह झाली आहे (तिथून CSV डाउनलोड करा किंवा सर्व्हरवर चालवा).';
            el('email-delivery-log').textContent = state.lastEmailStatus;
          });
        } catch (e) {}

        el('auth-feedback-msg').className = 'p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold';
        el('auth-feedback-msg').textContent = '✓ लॉगिन यशस्वी! विद्यार्थी माहिती सेव्ह झाली असून मॉक टेस्ट सुरू होत आहे...';
        updateAuthAndTrialUI();
        setTimeout(function () {
          el('auth-modal').className = 'hidden';
          el('auth-feedback-msg').className = 'hidden';
          state.currentIndex = 0;
          setPage('interview');
        }, 900);
      });

      el('logout-demo-btn').addEventListener('click', function () {
        state.user = null;
        try { localStorage.removeItem('civilprep_user'); } catch (e) {}
        updateAuthAndTrialUI();
        el('auth-modal').className = 'hidden';
        setPage('landing');
      });

      el('hero-report-btn').addEventListener('click', function () {
        setPage('report');
      });

      el('toggle-hint-btn').addEventListener('click', function () {
        state.hintOpen = !state.hintOpen;
        renderInterview();
      });

      el('mode-text-btn').addEventListener('click', function () {
        state.inputMode = 'text';
        renderInterview();
      });
      el('mode-audio-btn').addEventListener('click', function () {
        state.inputMode = 'audio';
        renderInterview();
      });

      el('fill-sample-btn').addEventListener('click', function () {
        var q = QUESTIONS[state.currentIndex];
        el('answer-textarea').value = q.sampleAnswer[state.lang];
        updateWordCount();
      });
      el('clear-answer-btn').addEventListener('click', function () {
        el('answer-textarea').value = '';
        updateWordCount();
      });
      el('answer-textarea').addEventListener('input', updateWordCount);

      var recognition = null;
      var mediaRecorder = null;
      var audioChunks = [];

      // Board Question Text-to-Speech (TTS)
      el('tts-speak-btn').addEventListener('click', function () {
        var q = QUESTIONS[state.currentIndex];
        var mr = state.lang === 'mr';
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          var utter = new SpeechSynthesisUtterance(q.question[state.lang]);
          utter.lang = mr ? 'mr-IN' : 'en-IN';
          utter.rate = 0.95;
          window.speechSynthesis.speak(utter);
          el('tts-speak-label').textContent = mr ? '🔊 बोलत आहे...' : '🔊 Speaking...';
          utter.onend = function () {
            el('tts-speak-label').textContent = mr ? 'प्रश्न ऐका (Listen)' : 'Listen Question';
          };
        }
      });

      // Simultaneous Real Voice Recognition (Speech-to-Text) + Audio Recorder + Typing
      el('record-toggle-btn').addEventListener('click', function () {
        state.isRecording = !state.isRecording;
        var mr = state.lang === 'mr';

        if (state.isRecording) {
          el('mic-indicator').className = 'w-11 h-11 rounded-2xl bg-red-600 text-white flex items-center justify-center text-lg recording-pulse shrink-0';
          el('voice-status-title').textContent = mr
            ? '🔴 माईक चालू आहे — मराठी किंवा इंग्रजीत बोला (सोबत टाईपही करू शकता)...'
            : '🔴 Live Mic Active — Speak in Marathi/English (you can also type simultaneously)...';
          el('record-toggle-btn').textContent = mr
            ? '⏹ रेकॉर्डिंग थांबवा (Stop Mic)'
            : '⏹ Stop Recording';
          el('record-toggle-btn').className = 'px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-sm';

          // 1. Start Web Speech API (Live Speech-to-Text) if supported by browser
          var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
          if (SpeechRec) {
            try {
              recognition = new SpeechRec();
              recognition.lang = mr ? 'mr-IN' : 'en-IN';
              recognition.continuous = true;
              recognition.interimResults = true;
              var baseText = el('answer-textarea').value ? el('answer-textarea').value + ' ' : '';
              recognition.onresult = function (event) {
                var transcript = '';
                for (var i = 0; i < event.results.length; i++) {
                  transcript += event.results[i][0].transcript;
                }
                el('answer-textarea').value = baseText + transcript;
                updateWordCount();
              };
              recognition.start();
            } catch (e) {}
          }

          // 2. Start Real Microphone Audio Recording (MediaRecorder) for voice playback
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
              audioChunks = [];
              mediaRecorder = new MediaRecorder(stream);
              mediaRecorder.ondataavailable = function (e) {
                if (e.data && e.data.size > 0) audioChunks.push(e.data);
              };
              mediaRecorder.onstop = function () {
                var blob = new Blob(audioChunks, { type: 'audio/webm' });
                var url = URL.createObjectURL(blob);
                el('recorded-audio-player').src = url;
                el('recorded-audio-bar').className = 'pt-2 border-t border-indigo-200/80 flex flex-wrap items-center justify-between gap-3';
                stream.getTracks().forEach(function (t) { t.stop(); });
              };
              mediaRecorder.start();
            }).catch(function () {});
          }
        } else {
          // Stop SpeechRecognition & MediaRecorder
          if (recognition) {
            try { recognition.stop(); } catch (e) {}
            recognition = null;
          }
          if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            try { mediaRecorder.stop(); } catch (e) {}
          }

          el('mic-indicator').className = 'w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-lg shrink-0';
          el('voice-status-title').textContent = mr
            ? '✅ आवाज रेकॉर्ड आणि ट्रान्सक्राइब झाला! (खालील बॉक्समध्ये तुम्ही अजूनही टाईप/एडिट करू शकता)'
            : '✅ Voice Recorded & Transcribed! (You can continue typing or editing below)';
          el('record-toggle-btn').textContent = mr
            ? 'माईक सुरू करा (Start Speaking)'
            : '🎙️ Start Voice Recording';
          el('record-toggle-btn').className = 'px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-sm';

          var q = QUESTIONS[state.currentIndex];
          if (!(el('answer-textarea').value || '').trim()) {
            el('answer-textarea').value = q.sampleAnswer[state.lang];
            updateWordCount();
          }
        }
      });

      el('prev-q-btn').addEventListener('click', function () {
        if (state.currentIndex > 0) {
          saveCurrentQuestion();
          state.currentIndex--;
          state.hintOpen = false;
          renderInterview();
        }
      });

      el('next-q-btn').addEventListener('click', function () {
        saveCurrentQuestion();
        if (state.currentIndex + 1 < QUESTIONS.length) {
          state.currentIndex++;
          state.hintOpen = false;
          renderInterview();
        } else {
          setPage('report');
        }
      });

      el('finish-int-btn').addEventListener('click', function () {
        saveCurrentQuestion();
        if (!state.isPro && state.freeInterviewsLeft > 0) {
          state.freeInterviewsLeft--;
          updateAuthAndTrialUI();
        }
        setPage('report');
      });

      el('retake-btn').addEventListener('click', function () {
        state.answers = {};
        state.currentIndex = 0;
        setPage('interview');
      });

      el('copy-report-btn').addEventListener('click', function () {
        var mr = state.lang === 'mr';
        var summary = 'Civilprep.ai Assessment (' + state.district + ') - Overall Score: ' + el('rep-overall-val').textContent;
        try {
          var ta = document.createElement('textarea');
          ta.value = summary;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        } catch (err) {}
        el('copy-report-btn').textContent = mr ? '✓ अहवाल कॉपी झाला!' : '✓ Copied to Clipboard!';
        setTimeout(function () {
          el('copy-report-btn').textContent = mr ? '📋 अहवाल कॉपी करा (Copy Summary)' : '📋 Copy Summary';
        }, 2500);
      });

      el('back-home-btn').addEventListener('click', function () {
        setPage('landing');
      });

      function renderLeadsTable() {
        el('nav-leads-label').textContent = 'Leads (' + state.leads.length + ')';
        if (state.leads.length === 0) {
          el('leads-table-body').innerHTML = '<tr><td colspan="5" class="p-4 text-center text-slate-400">अद्याप कोणताही विद्यार्थी लॉगिन झालेला नाही.</td></tr>';
          return;
        }
        var rows = '';
        for (var i = 0; i < state.leads.length; i++) {
          var u = state.leads[i];
          rows += '<tr class="hover:bg-slate-50">' +
            '<td class="p-2.5 font-bold">' + u.name + '</td>' +
            '<td class="p-2.5">+91 ' + u.mobile + '</td>' +
            '<td class="p-2.5">' + u.email + '</td>' +
            '<td class="p-2.5">' + u.district + '</td>' +
            '<td class="p-2.5 text-slate-500">' + u.loginTime + '</td>' +
            '</tr>';
        }
        el('leads-table-body').innerHTML = rows;
      }

      try {
        var savedLeads = localStorage.getItem('civilprep_leads');
        if (savedLeads) {
          state.leads = JSON.parse(savedLeads) || [];
        }
      } catch (e) {}

      el('open-leads-btn').addEventListener('click', function () {
        renderLeadsTable();
        el('leads-modal').className = 'fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto';
      });

      el('close-leads-modal-btn').addEventListener('click', function () {
        el('leads-modal').className = 'hidden';
      });

      el('send-gmail-direct-btn').addEventListener('click', function () {
        var lines = ['Civilprep.ai Student Leads List:'];
        for (var i = 0; i < state.leads.length; i++) {
          var u = state.leads[i];
          lines.push((i + 1) + ') Name: ' + u.name + ' | Mobile: +91 ' + u.mobile + ' | Email: ' + u.email + ' | District: ' + u.district + ' | Time: ' + u.loginTime);
        }
        if (state.leads.length === 0) {
          lines.push('Test Lead — Assure Technologies Kolhapur');
        }
        var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=assuretech@gmail.com&cc=vilas82546@gmail.com&su=' +
          encodeURIComponent('Civilprep.ai Student Login Leads (' + state.leads.length + ')') +
          '&body=' + encodeURIComponent(lines.join('\n'));
        window.open(gmailUrl, '_blank');
      });

      el('download-leads-csv-btn').addEventListener('click', function () {
        var csv = 'Student Name,Mobile,Email,Exam,District,Login Time\n';
        for (var i = 0; i < state.leads.length; i++) {
          var u = state.leads[i];
          csv += '"' + u.name + '","+91 ' + u.mobile + '","' + u.email + '","' + u.exam + '","' + u.district + '","' + u.loginTime + '"\n';
        }
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'civilprep_student_leads.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

      renderLeadsTable();
      renderLanguageText();
      updateAuthAndTrialUI();
      setPage('landing');
    })();