/**
 * North Point Academy - Date & Time Logic (date.js)
 * Handles Dynamic BS Date Calculation & Real-time Clock
 */

const nepaliCalendarMap = {
    2083: [31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 30],
    2084: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2085: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 30],
    2086: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 29, 30],
    2087: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30]
};

const nepaliMonths = [
    "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", 
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

// १. आजको BS मिति हिसाब गर्ने मुख्य फङ्गसन
function getCalculatedBS() {
    const adNow = new Date();
    const adAnchor = new Date("2026-04-14"); // Baisakh 1, 2083
    
    const d1 = Date.UTC(adNow.getFullYear(), adNow.getMonth(), adNow.getDate());
    const d2 = Date.UTC(adAnchor.getFullYear(), adAnchor.getMonth(), adAnchor.getDate());
    
    let diffInDays = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));

    let currentYear = 2083;
    let currentMonthIndex = 0; 
    let currentDay = 1;

    if (diffInDays >= 0) {
        while (diffInDays > 0) {
            let daysInThisMonth = nepaliCalendarMap[currentYear][currentMonthIndex];
            if (diffInDays >= daysInThisMonth) {
                diffInDays -= daysInThisMonth;
                currentMonthIndex++;
                if (currentMonthIndex > 11) {
                    currentMonthIndex = 0;
                    currentYear++;
                }
            } else {
                currentDay += diffInDays;
                diffInDays = 0;
            }
        }
    }

    return {
        year: currentYear,
        month: currentMonthIndex + 1, // १ देखि १२ सम्म
        monthName: nepaliMonths[currentMonthIndex],
        day: currentDay,
        // Birthday चेक गर्न सजिलो हुने गरी "MM-DD" फर्म्याट
        mmdd: `${String(currentMonthIndex + 1).padStart(2, '0')}-${String(currentDay).padStart(2, '0')}`,
        fullString: `${currentYear}, ${nepaliMonths[currentMonthIndex]}, ${currentDay}`
    };
}

// २. UI मा मिति अपडेट गर्ने
function updateBSDate() {
    const bs = getCalculatedBS();
    const dateElement = document.getElementById('todayBS');
    if (dateElement) {
        dateElement.innerText = bs.fullString;
    }
    
    // यदि Birthday Section छ भने अपडेट गर्ने
    if (typeof checkBirthdays === 'function') {
        checkBirthdays(bs.mmdd);
    }
}

// ३. लाइभ समय देखाउने (12-Hour Format)
function updateLiveTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const timeElement = document.getElementById('timeBS');
    if (timeElement) {
        timeElement.innerText = timeString;
    }
}

// ४. विन्डो लोड हुँदा सबै सुरु गर्ने
window.addEventListener('load', () => {
    updateBSDate();
    updateLiveTime();
    
    // हरेक सेकेन्ड समय अपडेट गर्ने
    setInterval(updateLiveTime, 1000); 
    
    // हरेक मिनेट मिति चेक गर्ने (मध्यरातमा आफैं परिवर्तन हुन्छ)
    setInterval(updateBSDate, 60000); 
});