// 

// Import necessary modules
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define translations for all available languages
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      home: 'Home',
      contact: 'Contact'
    }
  },
  np: {
    translation: {
      welcome: 'स्वागत छ',
      "Go Back": "पछाडी जाउ",
      home: 'घर',
      contact: 'सम्पर्क गर्नुहोस्',
      book: 'किताब', // Book in Nepali
      "Product ID": 'उत्पादन आइडी',
      Title: 'शीर्षक',
      Author: 'लेखक',
      Category: 'श्रेणी',
      Description: 'विवरण',
      ISBN: 'आईएसबीएन',
      quantityOnStock: 'स्टकमा मात्रै',
      "Product Details": "उत्पादन विवरण",
      "Quantity on Stock": "स्टकमा मात्रै",
      Price: 'मूल्य',
      USD: 'अमेरिकी डलर',
      by: 'लेखक',
      "Add to Cart": 'कार्टमा राख्नुहोस्',
      "9.99": "९.९९",
      "8.99": "८.९९",
      "15.99": "१५.९९",
      "25.99": "२५.९९",
      "3.99": "३.९९",
      "12.99": "१२.९९",
      "22.99": "२२.९९",
      "8.99": "८.९९",
      '20.99':'२०.९९',
      'React in Actions':'React प्रतिक्रिया दिनुहोस्',
      'ISBN948656316':'ISBN ९४८६५६३१६',
      "Are you looking for a deeper understanding of the React programming language so that you can write code that is clearer, more correct, more robust, and more reusable? Look no further React, Second Edition, brings together seventy-eight indispensable programmer's rules of thumb: working, best-practice solutions for the programming challenges you encounter every day.": "के तपाइँ प्रतिक्रिया प्रोग्रामिङ भाषाको गहिरो बुझाइ खोज्दै हुनुहुन्छ ताकि तपाइँ कोड लेख्न सक्नुहुन्छ जुन स्पष्ट, थप सही, थप बलियो, र थप पुन: प्रयोगयोग्य छ? अर्को प्रतिक्रिया नहेर्नुहोस्, दोस्रो संस्करणले अठहत्तर अपरिहार्य प्रोग्रामरको थम्ब नियमहरू सँगै ल्याउँछ: तपाईंले हरेक दिन सामना गर्ने प्रोग्रामिङ चुनौतीहरूको लागि काम गर्ने, उत्तम-अभ्यास समाधानहरू।",
      "Bhote Bloch": 'भोटे ब्लोच',
      'Cloud Dummies':'क्लाउड डमीहरू',
      'Tengis Bhote': 'टेङ्गिस भोटे',
      'This book is cloud computing books':'यो किताब क्लाउड कम्प्युटिङ किताब हो',
       'ISBN5052345694': 'ISBN ५०५२३४५६९४',
       'Out of Stock':'स्टक बाहिर',
       'Saroj':"सरोज",
       'Tengis':'टेङ्गिस',
       'Test Book':'टेस्टबुक',


      'Pirati Ko Ful': 'पिरती को फूल',
      "Between Queens and the Cities": "बिट्विन क्विन्स एण्ड द किटिज",
      "Niranjan Kunwar": "निरंजन कुँवर",
      "Love Story": "प्रेम कथा",
      "Between Queens and the Cities is the riveting tale of a 19-year-old Nepali gay man and his long journey from Kathmandu to New York and back. Set against the backdrop of contemporary Nepal, the author reveals, with elan and ease, queer spaces where friendships are fostered outside the normalcy accorded to family and marriage.": "बिट्विन क्विन्स एण्ड द किटिज एक १९ वर्षीय नेपाली गे पुरुषको रोमांचकारी कथा हो, जसमा काठमाडौंबाट न्युयोर्क सम्मको लामो यात्रा छ। समकालीन नेपालको पृष्ठभूमिबारे लेखकले परिवार र विवाहमा प्राकृतिकतामा नर्म रुपमा फैलाइने गे स्थानहरू प्रकट गर्छ।",
      "ISBN: ISBN978658326": "आईएसबीएन: ISBN978658326",
      "35": "३५",
      "16.99": "१६.९९",
      "Ijoriya": "इजोरिया",
      "Subin Bhattarai": "सुबिन भट्टराई",
      "Story": "कथा",
      "There is a multifaceted story in the novel 'Ijoriya'. Writer Bhattarai has brought out the love, hate, and conflict between the family members in the story. Bhattarai, who has written stories focusing on Kathmandu in all his previous books, this time he has reached Madhes to capture the story. 'Ijoriya' is a Maithili word. It means Juneli.": "इजोरिया मा एक बहुपक्षीय कथा छ। लेखक भट्टराईले कथामा परिवारका बीचको प्रेम, घृणा, र संघर्षलाई प्रस्तुत गरेका छन्। भट्टराईले यस पटक 'इजोरिया' कथामा काठमाडौंमा भन्दा पहिले धेरै पुस्तकहरूमा ध्यासित गर्दै आएका छन्। यो पटक मधेसमा पुगेको छ। 'इजोरिया' मैथिली भाषाको एक शब्द हो। जुनेली भनेको अर्थ गर्छ।",
      "ISBN123456789": "ISBN123456789",
      "40": "४०",
      "19.99": "१९.९९",
      "The Talking Points": "द टोकिङ पोइन्ट्स",
      "Madhu Raman Acharya": "मधु रमान आचार्य",
      "Fantasy": "कल्पना",
      "A former career diplomat and civil servant of Nepal, Madhu Raman Acharya keeps speaking and writing on various topical issues in Nepal’s foreign policy and diplomacy spanning over subjects including neighbourhood relations, strategic affairs, regional cooperation, international development agenda of the least developed and landlocked countries and multilateral issues at the United Nations.": "नेपालका एकूण राजदूत र सिविल सेवक भएका मधु रमान आचार्य नेपालको विदेश नीति र कूटनीति सम्बन्धी विभिन्न विषयहरूमा बोल्दै र लेख्दै आएका छन्, जसमा पडाउनी अनुभूति, राजनीतिक साझेदारी, क्षेत्रीय सहयोग, विकास अङ्ग्रेजी तथा जलबस्तु गरेका अर्थतन्त्रहरूको विषयमा राष्ट्रसंघमा बहुपक्षीय मुद्दाहरूमा लेखावलोकन गरिएको छ।",
      "ISBN978654321": "ISBN९७८६५४३२१",
      "35": "३५",
      "16.99": "१६.९९",

      "Rich Dad, Poor Dad": "रिच ड्याड, पुर ड्याड",
      "Robert T. Kiyosaki": "रोबर्ट टी. कियोसाकी",
      "Personal finance": "व्यक्तिगत वित्त",
      " Robert Kiyosaki reveals how he developed his unique economic perspective from his two fathers: his real father, who was highly educated but fiscally poor; and the father of his best friend - an eighth-grade drop-out who became a self-made multi-millionaire.": "रोबर्ट कियोसाकीले भन्छन् कि उनी तपाईंको दुई बाबुहरूबाट उनको विशेष आर्थिक दृष्टिकोण कसरी विकास गर्नु भयो: उनको वास्तविक बाबु, जुन अत्यधिक शिक्षित थिए तर आर्थिक रूपमा गरिब थिए; र उनको सबैभन्दा राम्रो मित्रको बाबु - एक अष्टम श्रेणीका पढ्नछोड्ने व्यक्ति जुनले आफ्नो निजी बनाउने करोडपति भए।",
      '14.99': '१४.९९',

      'Javascript The Definitive Guide': 'जाभास्क्रिप्ट: निश्चित गाइड:',
      'Programming Book': 'प्रोग्रामिङ पुस्तक',
      'David Flanagan': 'डेभिड फ्लानागन',
      "javaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example...": "javaScript वेबको प्रोग्रामिङ भाषा हो र आज कुनै पनि अन्य प्रोग्रामिङ भाषा भन्दा धेरै सफ्टवेयर विकासकर्ताहरू द्वारा प्रयोग गरिन्छ। लगभग 25 वर्षको लागि यो सर्वश्रेष्ठ बिक्रेता जाभास्क्रिप्ट प्रोग्रामरहरूको लागि जाने-टु गाइड भएको छ। सातौं संस्करणलाई JavaScript को 2020 संस्करण कभर गर्न पूर्ण रूपमा अद्यावधिक गरिएको छ, र नयाँ अध्यायहरूले कक्षाहरू, मोड्युलहरू, पुनरावृत्तिहरू, जेनेरेटरहरू, वाचाहरू, async/await, र metaprogramming समावेश गर्दछ। तपाईंले उज्यालो र आकर्षक उदाहरण पाउनुहुनेछ ...",

      "The Practice of Programming": "प्रोग्रामिंग को अभ्यास",
      "Brian W. Kernighan": "ब्रायन डब्ल्यू केर्निघन",
      "This book is basically all the common sense stuff that you learn after programming for years and years.. most proffessional programmers already know this stuff--or should! This is a perfect book for a college graduate who is good, but needs some pointers in the real world, or for those who just want to freshen up their skills, etc.": "यो पुस्तक मूलतः सबै सामान्य ज्ञान सामग्री हो जुन तपाईंले वर्षौं र वर्षको लागि प्रोग्रामिङ पछि सिक्नु हुन्छ।. धेरैजसो प्रोफेसनल प्रोग्रामरहरूलाई पहिले नै यो सामान थाहा छ--वा गर्नुपर्छ! यो एक कलेज स्नातक को लागी एक उत्तम पुस्तक हो जो राम्रो छ, तर वास्तविक दुनिया मा केहि सूचकहरु को आवश्यकता छ, वा जो केवल आफ्नो कौशल ताजा गर्न चाहन्छ, आदि को लागी।",

      "Effective Java": "प्रभावकारी Java",
      "Joshua Bloch": "जोशुआ ब्लोच",
      "Are you looking for a deeper understanding of the Java(TM) programming language so that you can write code that is clearer, more correct, more robust, and more reusable? Look no further Effective Java(TM), Second Edition, brings together seventy-eight indispensable programmer's rules of thumb: working, best-practice solutions for the programming challenges you encounter every day.": 'के तपाइँ Java(TM) प्रोग्रामिङ भाषाको गहिरो बुझाइ खोज्दै हुनुहुन्छ ताकि तपाइँ कोड लेख्न सक्नुहुन्छ जुन स्पष्ट, थप सही, थप बलियो, र थप पुन: प्रयोगयोग्य छ? अर्को प्रभावकारी Java(TM), दोस्रो संस्करण नहेर्नुहोस्, 78 अपरिहार्य प्रोग्रामरको थम्ब नियमहरू सँगै ल्याउँछ: तपाईंले हरेक दिन सामना गर्ने प्रोग्रामिङ चुनौतीहरूको लागि काम गर्ने, उत्तम-अभ्यास समाधानहरू।'












    }
  },
  // Add more languages as needed

};

// Configure i18next
const availableLanguages = ['en', 'np', 'ko'];
const options = {
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],
  checkWhitelist: true
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    whitelist: availableLanguages,
    detection: options,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources, // Add the 'resources' object here
  });

export default i18n;
