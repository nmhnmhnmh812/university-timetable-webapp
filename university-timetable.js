// Data structure for faculties, courses, and groups
const universityData = {
    faculties: [
        { id: 'KH', name: 'КХ', fullInfo: 'Історичний факультет' },
        { id: 'KIV', name: 'КІВ', fullInfo: 'Факультет інформатики' },
        { id: 'ITM', name: 'ІТМ', fullInfo: 'Інженерно-технічний факультет' },
        { id: 'KNT', name: 'КНТ', fullInfo: 'Факультет комп\'ютерних наук' },
        { id: 'PZP', name: 'ПЗП', fullInfo: 'Факультет програмної інженерії' },
        { id: 'ITY', name: 'ITY', fullInfo: 'Факультет інформаційних технологій' },
        { id: 'ITSh', name: 'ІТШІ', fullInfo: 'Факультет інформаційної безпеки' },
        { id: 'VPVPS', name: 'ВПВПС', fullInfo: 'Факультет військової підготовки' }
    ],
    courses: {
        1: [
            { faculty: 'KH', groups: ['КХ-24-1', 'КХ-24-2', 'КХ-24-3'] },
            { faculty: 'KIV', groups: ['КІВ-24-1', 'КІВ-24-2', 'КІВ-24-3'] },
            { faculty: 'ITM', groups: ['ІТМ-24-1', 'ІТМ-24-2'] },
            { faculty: 'KNT', groups: ['КНТ-24-1', 'КНТ-24-2', 'КНТ-24-3', 'КНТ-24-4'] },
            { faculty: 'PZP', groups: ['ПЗП-24-1', 'ПЗП-24-2'] },
            { faculty: 'ITY', groups: ['ITY-24-1', 'ITY-24-2', 'ITY-24-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-24-1', 'ІТШІ-24-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-24-1', 'ВПВПСу-24-2'] }
        ],
        2: [
            { faculty: 'KH', groups: ['КХ-23-1', 'КХ-23-2', 'КХ-23-3'] },
            { faculty: 'KIV', groups: ['КІВ-23-1', 'КІВ-23-2', 'КІВ-23-3'] },
            { faculty: 'ITM', groups: ['ІТМ-23-1', 'ІТМ-23-2'] },
            { faculty: 'KNT', groups: ['КНТ-23-1', 'КНТ-23-2', 'КНТ-23-3', 'КНТ-23-4'] },
            { faculty: 'PZP', groups: ['ПЗП-23-1', 'ПЗП-23-2'] },
            { faculty: 'ITY', groups: ['ITY-23-1', 'ITY-23-2', 'ITY-23-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-23-1', 'ІТШІ-23-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-23-1', 'ВПВПСу-23-2'] }
        ],
        3: [
            { faculty: 'KH', groups: ['КХ-22-1', 'КХ-22-2', 'КХ-22-3'] },
            { faculty: 'KIV', groups: ['КІВ-22-1', 'КІВ-22-2', 'КІВ-22-3'] },
            { faculty: 'ITM', groups: ['ІТМ-22-1', 'ІТМ-22-2'] },
            { faculty: 'KNT', groups: ['КНТ-22-1', 'КНТ-22-2', 'КНТ-22-3', 'КНТ-22-4'] },
            { faculty: 'PZP', groups: ['ПЗП-22-1', 'ПЗП-22-2'] },
            { faculty: 'ITY', groups: ['ITY-22-1', 'ITY-22-2', 'ITY-22-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-22-1', 'ІТШІ-22-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-22-1', 'ВПВПСу-22-2'] }
        ],
        4: [
            { faculty: 'KH', groups: ['КХ-21-1', 'КХ-21-2', 'КХ-21-3'] },
            { faculty: 'KIV', groups: ['КІВ-21-1', 'КІВ-21-2', 'КІВ-21-3'] },
            { faculty: 'ITM', groups: ['ІТМ-21-1', 'ІТМ-21-2'] },
            { faculty: 'KNT', groups: ['КНТ-21-1', 'КНТ-21-2', 'КНТ-21-3', 'КНТ-21-4'] },
            { faculty: 'PZP', groups: ['ПЗП-21-1', 'ПЗП-21-2'] },
            { faculty: 'ITY', groups: ['ITY-21-1', 'ITY-21-2', 'ITY-21-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-21-1', 'ІТШІ-21-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-21-1', 'ВПВПСу-21-2'] }
        ],
        5: [
            { faculty: 'KH', groups: ['КХ-20-1', 'КХ-20-2', 'КХ-20-3'] },
            { faculty: 'KIV', groups: ['КІВ-20-1', 'КІВ-20-2', 'КІВ-20-3'] },
            { faculty: 'ITM', groups: ['ІТМ-20-1', 'ІТМ-20-2'] },
            { faculty: 'KNT', groups: ['КНТ-20-1', 'КНТ-20-2', 'КНТ-20-3', 'КНТ-20-4'] },
            { faculty: 'PZP', groups: ['ПЗП-20-1', 'ПЗП-20-2'] },
            { faculty: 'ITY', groups: ['ITY-20-1', 'ITY-20-2', 'ITY-20-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-20-1', 'ІТШІ-20-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-20-1', 'ВПВПСу-20-2'] }
        ],
        6: [
            { faculty: 'KH', groups: ['КХ-19-1', 'КХ-19-2', 'КХ-19-3'] },
            { faculty: 'KIV', groups: ['КІВ-19-1', 'КІВ-19-2', 'КІВ-19-3'] },
            { faculty: 'ITM', groups: ['ІТМ-19-1', 'ІТМ-19-2'] },
            { faculty: 'KNT', groups: ['КНТ-19-1', 'КНТ-19-2', 'КНТ-19-3', 'КНТ-19-4'] },
            { faculty: 'PZP', groups: ['ПЗП-19-1', 'ПЗП-19-2'] },
            { faculty: 'ITY', groups: ['ITY-19-1', 'ITY-19-2', 'ITY-19-3'] },
            { faculty: 'ITSh', groups: ['ІТШІ-19-1', 'ІТШІ-19-2'] },
            { faculty: 'VPVPS', groups: ['ВПВПСу-19-1', 'ВПВПСу-19-2'] }
        ]
    }
};

// State management
let state = {
    selectedCourse: 1,
    selectedFaculty: null,
    selectedGroups: [],
    searchQuery: ''
};

// DOM elements
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const facultyList = document.getElementById('facultyList');
const courseTabs = document.getElementById('courseTabs');
const groupsGrid = document.getElementById('groupsGrid');
const selectedGroupsContainer = document.getElementById('selectedGroups');
const doneBtn = document.getElementById('doneBtn');
const timetableContainer = document.getElementById('timetableContainer');

// Initialize the application
function init() {
    renderFacultyList();
    renderGroups();
    setupEventListeners();
}

// Render faculty list
function renderFacultyList() {
    facultyList.innerHTML = '';

    universityData.faculties.forEach(faculty => {
        const facultyItem = document.createElement('div');
        facultyItem.className = 'faculty-item';
        facultyItem.textContent = faculty.name;
        facultyItem.dataset.facultyId = faculty.id;
        facultyItem.title = faculty.fullInfo;

        facultyItem.addEventListener('click', () => {
            document.querySelectorAll('.faculty-item').forEach(item => {
                item.classList.remove('active');
            });

            if (state.selectedFaculty === faculty.id) {
                state.selectedFaculty = null;
            } else {
                facultyItem.classList.add('active');
                state.selectedFaculty = faculty.id;
            }

            renderGroups();
        });

        facultyList.appendChild(facultyItem);
    });
}

// Render groups based on selected course and faculty
function renderGroups() {
    const courseData = universityData.courses[state.selectedCourse];
    let filteredData = courseData;

    // Filter by faculty if selected
    if (state.selectedFaculty) {
        filteredData = courseData.filter(item => item.faculty === state.selectedFaculty);
    }

    // Filter by search query
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filteredData = filteredData.filter(item => {
            const faculty = universityData.faculties.find(f => f.id === item.faculty);
            return faculty.name.toLowerCase().includes(query) ||
                   item.groups.some(group => group.toLowerCase().includes(query));
        });
    }

    groupsGrid.innerHTML = '';

    filteredData.forEach(facultyData => {
        const faculty = universityData.faculties.find(f => f.id === facultyData.faculty);
        const card = document.createElement('div');
        card.className = 'group-card';

        const title = document.createElement('div');
        title.className = 'group-card-title';
        title.textContent = faculty.name;
        card.appendChild(title);

        facultyData.groups.forEach(group => {
            const groupItem = document.createElement('div');
            groupItem.className = 'group-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `group-${group}`;
            checkbox.value = group;
            checkbox.checked = state.selectedGroups.includes(group);

            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    addGroupToSelected(group, faculty.name);
                } else {
                    removeGroupFromSelected(group);
                }
            });

            const label = document.createElement('label');
            label.htmlFor = `group-${group}`;
            label.textContent = group;

            groupItem.appendChild(checkbox);
            groupItem.appendChild(label);
            card.appendChild(groupItem);
        });

        groupsGrid.appendChild(card);
    });
}

// Add group to selected groups
function addGroupToSelected(group, facultyName) {
    if (!state.selectedGroups.includes(group)) {
        state.selectedGroups.push(group);
        renderSelectedGroups();
    }
}

// Remove group from selected groups
function removeGroupFromSelected(group) {
    state.selectedGroups = state.selectedGroups.filter(g => g !== group);

    // Uncheck the checkbox
    const checkbox = document.getElementById(`group-${group}`);
    if (checkbox) {
        checkbox.checked = false;
    }

    renderSelectedGroups();
}

// Render selected groups
function renderSelectedGroups() {
    selectedGroupsContainer.innerHTML = '';

    const tagClasses = ['tag-red', 'tag-blue', 'tag-green', 'tag-teal', 'tag-orange', 'tag-purple'];

    state.selectedGroups.forEach((group, index) => {
        const tag = document.createElement('div');
        const tagClass = tagClasses[index % tagClasses.length];
        tag.className = `selected-group-tag ${tagClass}`;

        const groupText = document.createElement('span');
        groupText.textContent = group;
        tag.appendChild(groupText);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'tag-remove';
        removeBtn.innerHTML = '✕';
        removeBtn.addEventListener('click', () => {
            removeGroupFromSelected(group);
        });

        tag.appendChild(removeBtn);
        selectedGroupsContainer.appendChild(tag);
    });

    // Enable/disable done button
    doneBtn.disabled = state.selectedGroups.length === 0;
}

// Setup event listeners
function setupEventListeners() {
    // Open modal
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Close modal on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Course tabs
    courseTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
            state.selectedCourse = parseInt(e.target.dataset.course);
            renderGroups();
        }
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        searchClear.classList.toggle('visible', state.searchQuery.length > 0);
        renderGroups();
    });

    // Clear search
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClear.classList.remove('visible');
        renderGroups();
    });

    // Done button
    doneBtn.addEventListener('click', () => {
        generateTimetable();
        modalOverlay.classList.remove('active');
    });

    // Initial state
    doneBtn.disabled = true;
}

// Generate timetable for selected groups
function generateTimetable() {
    if (state.selectedGroups.length === 0) {
        timetableContainer.innerHTML = `
            <div class="empty-state">
                <p>Будь ласка, оберіть групи для перегляду розкладу</p>
            </div>
        `;
        return;
    }

    // Timetable structure
    const times = ['8:30', '10:25', '12:20', '14:15', '16:10', '18:05'];
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];

    // Sample timetable data (in real app, this would come from API)
    const subjects = [
        { name: 'Математика', room: '101', teacher: 'проф. Петров', class: 'subject-math' },
        { name: 'Фізика', room: '205', teacher: 'доц. Іванов', class: 'subject-phys' },
        { name: 'Хімія', room: '301', teacher: 'проф. Сидоров', class: 'subject-chem' },
        { name: 'Англійська', room: '102', teacher: 'ст. викл. Смірнов', class: 'subject-eng' },
        { name: 'Програмування', room: '401', teacher: 'доц. Коваль', class: 'subject-it' }
    ];

    let html = '<div class="timetable-info">';
    html += '<h2>📅 Розклад для обраних груп:</h2>';
    html += '<div class="selected-groups-list">';
    state.selectedGroups.forEach(group => {
        html += `<span class="group-badge">${group}</span>`;
    });
    html += '</div></div>';

    state.selectedGroups.forEach(group => {
        html += `<div class="group-timetable">`;
        html += `<h3>📚 ${group}</h3>`;
        html += '<div class="timetable-grid">';

        // Header row
        html += '<div class="timetable-header"></div>';
        days.forEach(day => {
            html += `<div class="timetable-header">${day}</div>`;
        });

        // Time rows
        times.forEach((time, timeIndex) => {
            html += `<div class="timetable-time">${time}</div>`;

            days.forEach((day, dayIndex) => {
                const hasClass = Math.random() > 0.5;
                if (hasClass) {
                    const subject = subjects[Math.floor(Math.random() * subjects.length)];
                    html += `
                        <div class="timetable-cell">
                            <div class="timetable-class ${subject.class}">
                                <div class="class-name">${subject.name}</div>
                                <div class="class-room">📍 ${subject.room}</div>
                                <div class="class-teacher">👤 ${subject.teacher}</div>
                            </div>
                        </div>
                    `;
                } else {
                    html += '<div class="timetable-cell"></div>';
                }
            });
        });

        html += '</div></div>';
    });

    timetableContainer.innerHTML = html;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);