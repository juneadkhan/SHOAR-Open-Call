var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    try{
        themeToggleLightIcon.classList.remove('hidden');
    } catch{
        console.log("ERR")
    }
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            document.getElementById('mainLogo').src = "SHOAR_dark.png"
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById('mainLogo').src = "SHOAR_light.png"
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('light')) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('color-theme', 'dark');
            document.getElementById('mainLogo').src = "SHOAR_dark.png"
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('color-theme', 'light');
            document.getElementById('mainLogo').src = "SHOAR_light.png"
        }
    }
    
});

// Speech Synthesis

var synthesis = window.speechSynthesis;

if ('speechSynthesis' in window) {
    var synthesis = window.speechSynthesis;
  } else {
    console.log('Text-to-speech not supported.');
  }

function speak(num){

    gtag('event', 'speech_button', {
        'event_category': 'Speech',
        'event_label': 'Speech',
        'value': 1
    });

    const measurement_id = `G-R9ZDECLYJ1`;
    const api_secret = `WeF6TMEjRWqHj06QrX-QUw`;

    fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
    method: "POST",
    body: JSON.stringify({
        client_id: 'XXXXXXXXXX.YYYYYYYYYY',
        events: [{
        name: 'tutorial_begin',
        params: {},
        }]
    })
    });


    text = {
        0: "YOUR OPINION MATTERS TO us!",
        1: "We are seeking ideas about how sexual health services for adults over the age of 45 can be improved in the UK.",
        2: "We have ladies in their 90s who don’t know where their bits are. At the same time, there are 70-year-old gay men who are taking stimulants while they have anal sex. There is no one size fits all for sexual health among older adults.",
        3: "What is Sexual Health?. sexual health is an integral part of our overall health and well-being        ",
        4: "Sexual Health is the ability for us to enjoy, and express our sexuality, free from physical, psychological, and social pressures.",
        5: "Why Sexual Health for over 45s?",
        6: "People have needs and desires for intimacy and sex, regardless of their age. Issues such as sexual difficulties, distress about sex, or an elevated risk for sexually transmitted infections are common throughout every point in life. These are further complicated by disabilities and chronic conditions that are common among people as people approach the age of 45 and above. Despite this, sexual health services in the UK often focus on younger populations.",
        7: "Despite sexual health being an integral part of our overall health and wellbeing, sexual health services in the UK often focus on younger populations. The UK population is ageing, and the current NHS services are not up to the standard needed to support our ageing society.",
        8: "Improving access to and utilization of essential sexual health services is something that we can change with your help!",
        9: "What do we need from you?",
        10: "If you have ideas on ways to improve the sexual health services offered in the UK for over 45’s, we want to hear from you!",
        11: "We are interested to hear from people from all backgrounds so that submissions represent society at large - your voice matters to us.",
        12: "Breaking Barriers. Ideas for reducing existing barriers that prevent older adults from accessing services",
        13: "Accessing Services. Ideas on how to improve the means through which sexual health services are delivered.",
        15: "Inclusive Practices. Ideas on how to encourage inclusive practices in the provision of sexual health services",
        16: "Tailoring to Needs. Ideas on how to tailor sexual health services to the needs of older adults",
        17: "Messaging with Purpose. Ideas on messages/campaigns to enhance perception and uptake of sexual health services in older adults",
        18: "Guideline for Contributions",
        19: "Eligibility (Participant). Resident in the United Kingdom continuously in the last 6 months. All ages are welcome (participation of those aged 45 years and above is encouraged)",
        20: "Eligibility (Submission). Related to sexual health services in the UK. Relevant to adults age 45 plus",
        21: "Langauge for Entries. English and British Sign Language with supporting English Transcript",
        22: "What are we looking for?",
        24: "Submissions will be judged on a 1 to 10 scale according to the following criteria.",
        25: "Clarity. Clear and concise description of your innovation or solution",
        26: "Feasibility. Feasibility and suitability in the UK setting",
        27: "Originality. Does the proposed solution promote new ideas towards addressing the issues described?",
        28: "Implementability. Potential for adaptation and implementation",




    }
    if ('speechSynthesis' in window) {
        var synthesis = window.speechSynthesis;
      
        // Create an utterance object
        var utterance = new SpeechSynthesisUtterance(text[num]);
      
        // Speak the utterance
        synthesis.speak(utterance);
      } else {
        console.log('Text-to-speech not supported.');
      }
}