/**
 * North Point Academy - Unified System Logic (FINAL COMPLETE VERSION)
 * Handles Dynamic BS Dates, Birthdays, Filtering, UI, and Staff/Student Directories
 */

// --- 1. CORE INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    // समय र घडी सुचारु गर्ने
    setInterval(updateClock, 1000);
    updateClock();

    // डाटा लोड भएको छ कि छैन चेक गरेर सुरु गर्ने
    if (typeof schoolData !== 'undefined' && typeof staffData !== 'undefined') {
        initDropdowns();
        
        // date.js बाट अटोमेटिक मिति लिएर बर्थडे चेक गर्ने
        const initialBS = typeof getCalculatedBS === 'function' ? getCalculatedBS() : getTodayBS();
        checkBirthdays(initialBS.mmdd); 
    } else {
        console.error("Data Error: Ensure schoolData and staffData are loaded correctly.");
    }

    if (typeof staffData !== 'undefined') {
        renderStaff();
    }

    showNotice();
});

// --- 2. BIKRAM SAMBAT (BS) DATE HELPER (AUTO-SWITCH) ---
/**
 * date.js सँग कनेक्ट हुन्छ। यदि date.js छैन भने मात्र 'Fallback' मिति प्रयोग गर्छ।
 */
function getTodayBS() {
    if (typeof getCalculatedBS === 'function') {
        const bs = getCalculatedBS();
        return {
            year: bs.year,
            month: bs.month,
            day: bs.day,
            full: `${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.day).padStart(2, '0')}`,
            mmdd: bs.mmdd
        };
    }
    // Fallback: यदि date.js लोड भएन भने मात्र यो चल्छ
    return { year: 2083, month: 1, day: 22, full: "2083-01-22", mmdd: "01-22" };
}

// --- 3. CLOCK & CALENDAR UI ---
function updateClock() {
    const clockEl = document.getElementById('clock');
    if (!clockEl) return;

    const now = new Date();
    const bs = getTodayBS();
    
    const timeStr = now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    });

    clockEl.innerHTML = `
        <div class="flex items-center gap-2 text-lg font-semibold tracking-wide">
            <i class="fa-regular fa-calendar-check text-yellow-400"></i>
            <span>BS ${bs.full}</span>
            <span class="opacity-50 mx-1">|</span>
            <span class="text-blue-100">${timeStr}</span>
        </div>
    `;
    
    // हरेक मिनेटमा (सेकेन्ड ० हुँदा) बर्थडे लिस्ट रिफ्रेस गर्ने
    if (now.getSeconds() === 0) checkBirthdays(bs.mmdd);
}

// --- 4. UNIFIED AVATAR HELPER (IMAGE OR INITIALS) ---
function getAvatarHTML(name, imagePath, type, sizeClass = 'w-10 h-10 rounded-full') {
    if (imagePath && imagePath.trim() !== '') {
        return `<img src="${imagePath}" alt="${name}" class="${sizeClass} object-cover shadow-sm" onerror="this.onerror=null; this.outerHTML = getAvatarHTML('${name}', '', '${type}', '${sizeClass}');">`;
    }

    const initials = name.split(' ').map(n => n[0]).join('');
    let colorClass = 'bg-slate-400 text-white'; 

    if (type === 'student') colorClass = 'bg-blue-600 text-white';
    else if (type === 'staff') colorClass = 'bg-emerald-600 text-white';
    else if (type === 'birthday') colorClass = 'bg-rose-500 text-white border-2 border-white/50';

    return `
        <div class="${sizeClass} ${colorClass} flex items-center justify-center font-bold text-sm uppercase shadow-inner">
            ${initials}
        </div>`;
}

// --- 5. UNIFIED BIRTHDAY CHECKER (STUDENTS & STAFF) ---
function checkBirthdays(forcedMMDD = null) {
    const birthdaySection = document.getElementById('birthdaySection');
    const birthdayList = document.getElementById('birthdayList');
    const navCountBadge = document.getElementById('navBirthdayCount');
    
    if (!birthdayList) return;
    
    const todayMatch = forcedMMDD || getTodayBS().mmdd;
    let totalBirthdays = 0;
    birthdayList.innerHTML = "";

    const createCard = (name, subtext, dob, personData) => {
        const avatar = getAvatarHTML(name, personData.image, 'birthday', 'w-16 h-16 rounded-full shrink-0');
        return `
            <div class="bg-white/10 backdrop-blur-xl border border-white/30 p-5 rounded-3xl flex items-center gap-5 transition-all hover:scale-105 hover:bg-white/20 shadow-xl min-w-[320px]">
                ${avatar}
                <div class="overflow-hidden text-white">
                    <h4 class="font-extrabold text-2xl leading-tight truncate">${name}</h4>
                    <p class="text-base text-blue-100 font-medium opacity-90">${subtext}</p>
                    <div class="flex items-center gap-2 mt-2 text-xs font-bold bg-black/20 w-fit px-3 py-1.5 rounded-full border border-white/10">
                        <i class="fa-solid fa-cake-candles text-yellow-300"></i> BS ${dob}
                    </div>
                </div>
            </div>`;
    };

    // Students Check
    for (const key in schoolData) {
        const [className, sectionName] = key.split('-');
        const data = schoolData[key];
        const students = Array.isArray(data) ? data : (data.students || []);
        students.forEach(student => {
            if (student.dob && student.dob.substring(5) === todayMatch) {
                totalBirthdays++;
                birthdayList.innerHTML += createCard(student.name, `Class ${className} (${sectionName})`, student.dob, student);
            }
        });
    }

    // Staff Check
    staffData.forEach(staff => {
        if (staff.dob && staff.dob.substring(5) === todayMatch) {
            totalBirthdays++;
            birthdayList.innerHTML += createCard(staff.name, staff.role, staff.dob, staff);
        }
    });

    if (navCountBadge) {
        if (totalBirthdays > 0) {
            navCountBadge.classList.replace('hidden', 'flex');
            navCountBadge.innerHTML = `<i class="fa-solid fa-cake-candles mr-2 animate-bounce"></i> ${totalBirthdays} Birthday${totalBirthdays > 1 ? 's' : ''}`;
        } else {
            navCountBadge.classList.add('hidden');
        }
    }

    if (birthdaySection) {
        totalBirthdays > 0 ? birthdaySection.classList.remove('hidden') : birthdaySection.classList.add('hidden');
    }
}

// --- 6. STUDENT DIRECTORY (DROPDOWNS & FILTER) ---
function initDropdowns() {
    const classSelect = document.getElementById('classSelect');
    if (!classSelect) return;

    const keys = Object.keys(schoolData);
    const uniqueClasses = [...new Set(keys.map(k => k.split('-')[0]))].sort((a, b) => a - b);
    
    classSelect.innerHTML = uniqueClasses.map(c => `<option value="${c}">Class ${c}</option>`).join('');
    classSelect.addEventListener('change', updateSections);
    document.getElementById('sectionSelect')?.addEventListener('change', filterStudents);
    
    updateSections();
}

function updateSections() {
    const classSelect = document.getElementById('classSelect');
    const sectionSelect = document.getElementById('sectionSelect');
    if (!classSelect || !sectionSelect) return;

    const selectedClass = classSelect.value;
    const sections = Object.keys(schoolData)
        .filter(k => k.startsWith(selectedClass + '-'))
        .map(k => k.split('-')[1]);

    sectionSelect.innerHTML = sections.map(s => 
        `<option value="${s}">${s === 'None' ? 'General Section' :  s}</option>`
    ).join('');
    
    filterStudents();
}

function filterStudents() {
    const tableBody = document.getElementById('studentBody');
    const teacherDisplay = document.getElementById('classTeacherName');
    const classVal = document.getElementById('classSelect').value;
    const secVal = document.getElementById('sectionSelect').value;
    const countBadge = document.getElementById('countBadge');

    const key = `${classVal}-${secVal}`;
    const data = schoolData[key] || [];
    const students = !Array.isArray(data) ? (data.students || []) : data;

    const teacherObj = staffData.find(s => s.assignedClass === key);

    if (teacherDisplay) {
        if (teacherObj) {
            const teacherAvatar = getAvatarHTML(teacherObj.name, teacherObj.image, 'staff', 'w-10 h-10 rounded-full');
            teacherDisplay.innerHTML = `
                <div class="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm w-fit">
                    <div class="flex flex-col">
                        <span class="text-blue-600 text-xs font-bold uppercase tracking-widest">Class Teacher</span>
                        <div class="flex items-center gap-3 mt-1">
                            ${teacherAvatar}
                            <div>
                                <h3 class="text-slate-800 font-extrabold text-lg leading-none">${teacherObj.name}</h3>
                                <p class="text-slate-500 text-sm font-medium mt-1">
                                    <i class="fa-solid fa-phone text-xs mr-1"></i> ${teacherObj.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else {
            teacherDisplay.innerHTML = `<div class="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 w-fit text-slate-400 font-bold text-xs uppercase">Class Teacher: Not Assigned</div>`;
        }
    }

    if (countBadge) countBadge.innerText = `${students.length} Students Found`;
    
    tableBody.innerHTML = students.length ? students.map(s => {
        const avatar = getAvatarHTML(s.name, s.image, 'student', 'w-11 h-11 rounded-full');
        return `
            <tr class="hover:bg-blue-50/50 transition-colors border-b border-slate-100">
                <td class="px-6 py-5">
                    <div class="flex items-center gap-4">
                        ${avatar}
                        <span class="font-extrabold text-slate-800 text-lg">${s.name}</span>
                    </div>
                </td>
                <td class="px-6 py-5 text-center text-lg font-semibold text-slate-600">${classVal}</td>
                <td class="px-6 py-5 text-center text-lg font-medium text-slate-600">${secVal}</td>
                <td class="px-6 py-5 text-lg text-slate-500 font-mono text-center font-bold">${s.dob}</td>
                <td class="px-6 py-5 text-lg text-slate-500 text-center font-medium">${s.location || 'N/A'}</td>
            </tr>`;
    }).join('') : `<tr><td colspan="5" class="px-6 py-20 text-center text-slate-400 text-xl italic">No records found.</td></tr>`;
}

// --- 7. STAFF DIRECTORY ---
function renderStaff() {
    const tableBody = document.getElementById('staffBody');
    if (!tableBody) return;

    tableBody.innerHTML = staffData.map(staff => {
        const avatar = getAvatarHTML(staff.name, staff.image, 'staff', 'w-12 h-12 rounded-xl');
        return `
            <tr class="hover:bg-emerald-50/50 transition-colors border-b border-slate-100">
                <td class="px-6 py-5">
                    <div class="flex items-center gap-4">
                        ${avatar}
                        <span class="font-extrabold text-slate-800 text-lg">${staff.name}</span>
                    </div>
                </td>
                <td class="px-4 py-5 text-lg font-bold text-emerald-700">${staff.role}</td>
                <td class="px-6 py-5 text-lg font-mono text-slate-600 font-bold">${staff.phone}</td>
                <td class="px-6 py-5 text-center">
                    <a href="tel:${staff.phone.replace(/\s/g, '')}" class="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-emerald-700 transition-all active:scale-95">
                        <i class="fa-solid fa-phone"></i> CALL
                    </a>
                </td>
            </tr>`;
    }).join('');
}

// --- 8. UI: HERO SLIDER & MODAL ---
const slides = [
    { title: "Welcome to", desc: "North Point Academy" },
    { title: "Nurturing Excellence", desc: "Buddhabhumi-1, Pattharkot, Kapilvastu" },
    { title: "Quality Education Is Our Motto", desc: "Estd.: 2054" }
];
let currentSlide = 0;

setInterval(() => {
    const titleEl = document.getElementById('slider-title');
    const descEl = document.getElementById('slider-desc');
    if (!titleEl) return;

    titleEl.style.opacity = 0;
    descEl.style.opacity = 0;
    
    setTimeout(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        titleEl.innerText = slides[currentSlide].title;
        descEl.innerText = slides[currentSlide].desc;
        titleEl.style.opacity = 1;
        descEl.style.opacity = 1;
    }, 600);
}, 6000);

function showNotice() {
    const modal = document.getElementById('noticeModal');
    const content = document.getElementById('noticeContent');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        content?.classList.remove('scale-95', 'opacity-0');
        content?.classList.add('scale-100', 'opacity-100');
    }, 100);
}

function closeNotice() {
    const modal = document.getElementById('noticeModal');
    const content = document.getElementById('noticeContent');
    if (!modal) return;
    content?.classList.replace('scale-100', 'scale-95');
    content?.classList.replace('opacity-100', 'opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}