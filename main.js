var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
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
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            document.getElementById('mainLogo').src = "SHOAR_light.png"
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            document.getElementById('mainLogo').src = "SHOAR_dark.png"
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
    text = {
        0: "Dissapointed with SEXUAL HEALTH SERVICES in the UK and want to inspire change?",
        1: "We are seeking ideas about how sexual health services for adults over the age of 45 can be improved in the UK.",
        2: "What is Sexual Health?",
        3: "sexual health is an integral part of our overall health and well-being",
        4: "Sexual Health is the ability for us to enjoy, and express our sexuality, free from physical, psychological, and social pressures.",
        5: "Why Sexual Health for over 45s?",
        6: "People have needs and desires for intimacy and sex, regardless of their age. Issues such as low sexual function, distress about sex, or an elevated risk for sexually transmitted infections are common throughout every point in life. These are further complicated by disabilities and chronic conditions that are common among people over 45 years old. Why Sexual Health for over 45s?",
        7: "Despite sexual health being an integral part of our overall health and wellbeing, sexual health services in the UK often focus on younger populations. The UK population is ageing, and the current NHS services are not up to the standard needed to support our ageing society.",
        8: "Improving access to and utilization of essential sexual health services is something that we can change with your help!",
        9: "What do we ask from you?",
        10: "If you have ideas on ways to improve the sexual health services offered in the UK for over 45’s, we want to hear from you!",
        11: "We are interested to hear from people from all backgrounds so that submissions represent society at large - your voice matters to us.",
        12: "Breaking Barriers. Ideas for reducing existing barriers that prevent older adults from accessing services",
        13: "Accessing Services. Ideas on how to improve the means through which sexual health services are delivered.",
        14: "",



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