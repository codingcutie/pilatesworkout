// --- Core App Logic with Local Data Files ---
// This script loads exercise data directly from local .js files,
// handles exercise rendering, and PDF export functionality.
// Now includes a mechanism to add pre-defined exercises from the /exercises folder.

// Import individual exercise modules
import abdominalCurl from './exercises/abdominal_curl.js';
import armCircles from './exercises/arm_circles.js';
import breathing from './exercises/breathing.js';
import catCow from './exercises/cat_cow.js';
import childsPose from './exercises/childs_pose.js';
import clamshells from './exercises/clamshells.js';
import deadBug from './exercises/dead_bug.js';
import deepBreathingCooldown from './exercises/deep_breathing_cooldown.js';
import doubleLegStretch from './exercises/double_leg_stretch.js';
import figureFourStretch from './exercises/figure_four_stretch.js';
import gluteBridge from './exercises/glute_bridge.js';
import hamstringStretch from './exercises/hamstring_stretch.js';
import kneesToChest from './exercises/knees_to_chest.js';
import pelvicTilts from './exercises/pelvic_tilts.js';
import plank from './exercises/plank.js';
import quadrupedLegLifts from './exercises/quadruped_leg_lifts.js';
import rollUp from './exercises/roll_up.js';
import sidePlank from './exercises/side_plank.js';
import singleLegStretch from './exercises/single_leg_stretch.js';
import spineCurls from './exercises/spine_curls.js';
import supineSpineTwist from './exercises/supine_spine_twist.js';
import theHundred from './exercises/the_hundred.js';
import swimming from './exercises/swimming.js'; // Ensure swimming.js is also imported if it exists

// Aggregate all imported exercises into a single array.
// This array will hold the "master" definitions. We will clone them when adding to 'currentWorkoutExercises'.
const allMasterExercises = [
    abdominalCurl, armCircles, breathing, catCow, childsPose, clamshells, deadBug, 
    deepBreathingCooldown, doubleLegStretch, figureFourStretch, gluteBridge, 
    hamstringStretch, kneesToChest, pelvicTilts, plank, quadrupedLegLifts, 
    rollUp, sidePlank, singleLegStretch, spineCurls, supineSpineTwist, theHundred, swimming
];

// This array will hold the exercises currently in the user's workout,
// including their current level index and any notes.
let currentWorkoutExercises = [];

// Initialize currentWorkoutExercises with a deep clone of master exercises
// This ensures we start with a clean copy for each session and can modify properties
// like currentLevelIndex and notes without affecting the original master data.
function initializeWorkoutExercises() {
    currentWorkoutExercises = allMasterExercises.map(exercise => ({
        ...exercise,
        // Deep copy the levels array to ensure independent modification if needed later
        levels: exercise.levels.map(level => ({ ...level })),
        currentLevelIndex: exercise.currentLevelIndex || 0, // Ensure currentLevelIndex is set
        notes: '' // Initialize notes for each exercise
    })).sort((a, b) => a.id.localeCompare(b.id)); // Sort by ID for consistent display
}


// Function to create an exercise card DOM element
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'card p-4 flex flex-col relative';
    card.setAttribute('data-exercise-id', exercise.id);

    const renderLevel = (levelData) => {
        return `
            <div class="exercise-placeholder h-32 w-full mb-4 rounded-lg">Image Example: ${levelData.imagePlaceholder}</div>
            <h4 class="font-semibold text-lg text-gray-800 mb-2">${exercise.name} <span class="text-gray-500 text-sm">(${levelData.levelName})</span></h4>
            <p class="text-sm text-gray-600 mb-2 flex-grow">${levelData.description}</p>
            
            <div class="text-xs text-gray-500 mb-4 space-y-1">
                <p><span class="detail-heading">Primary ROM:</span> ${levelData.primaryROM}</p>
                <p><span class="detail-heading">Pelvic Position:</span> ${levelData.pelvicPosition}</p>
                <p><span class="detail-heading">Spine Action (C/T/L):</span> ${levelData.spineAction}</p>
            </div>
        `;
    };

    const updateCardContent = (cardElement, exerciseData) => {
        const currentLevel = exerciseData.levels[exerciseData.currentLevelIndex];
        const contentDiv = cardElement.querySelector('.card-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = renderLevel(currentLevel);
        }

        const prevBtn = cardElement.querySelector('.carousel-prev-btn');
        const nextBtn = cardElement.querySelector('.carousel-next-btn');

        // Disable carousel buttons if there's only one level
        if (prevBtn) prevBtn.disabled = exerciseData.currentLevelIndex === 0 || exerciseData.levels.length === 1;
        if (nextBtn) nextBtn.disabled = exerciseData.currentLevelIndex === exerciseData.levels.length - 1 || exerciseData.levels.length === 1;
    };

    card.innerHTML = `
        <div class="card-content-area"></div>
        <div class="flex justify-between items-center mt-auto mb-4">
            <button class="carousel-button carousel-prev-btn">&lt; Previous</button>
            <button class="carousel-button carousel-next-btn">Next &gt;</button>
        </div>
        <label class="flex items-center mb-4">
            <input type="checkbox" class="checkbox-custom">
            <span class="ml-2 text-sm">Completed</span>
        </label>
        <textarea class="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" rows="3" placeholder="Your notes for this exercise..."></textarea>
    `;

    updateCardContent(card, exercise); // Initial render

    const prevBtn = card.querySelector('.carousel-prev-btn');
    const nextBtn = card.querySelector('.carousel-next-btn');

    prevBtn.addEventListener('click', () => {
        if (exercise.currentLevelIndex > 0) {
            exercise.currentLevelIndex--;
            updateCardContent(card, exercise);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (exercise.currentLevelIndex < exercise.levels.length - 1) {
            exercise.currentLevelIndex++;
            updateCardContent(card, exercise);
        }
    });

    const notesTextarea = card.querySelector('textarea');
    notesTextarea.value = exercise.notes || ''; 

    notesTextarea.addEventListener('input', (event) => {
        const targetExercise = currentWorkoutExercises.find(ex => ex.id === exercise.id);
        if (targetExercise) {
            targetExercise.notes = event.target.value; 
        }
    });

    return card;
}

// Function to render all exercises based on the 'currentWorkoutExercises' array
function renderExercises() {
    const warmUpList = document.getElementById('warm-up-list');
    const coreWorkoutList = document.getElementById('core-workout-list');
    const fullBodyWorkoutList = document.getElementById('full-body-workout-list');
    const coolDownList = document.getElementById('cool-down-list');

    // Clear existing content before rendering
    warmUpList.innerHTML = '';
    coreWorkoutList.innerHTML = '';
    fullBodyWorkoutList.innerHTML = '';
    coolDownList.innerHTML = '';

    // Sort currentWorkoutExercises by type first, then by name for consistent rendering
    const sortedExercises = [...currentWorkoutExercises].sort((a, b) => {
        const typeOrder = ['warmup', 'core', 'full-body', 'cooldown'];
        const typeA = typeOrder.indexOf(a.type);
        const typeB = typeOrder.indexOf(b.type);

        if (typeA !== typeB) {
            return typeA - typeB;
        }
        return a.name.localeCompare(b.name);
    });


    sortedExercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        if (exercise.type === 'warmup') {
            warmUpList.appendChild(card);
        } else if (exercise.type === 'core') {
            coreWorkoutList.appendChild(card);
        } else if (exercise.type === 'full-body') {
            fullBodyWorkoutList.appendChild(card);
        } else if (exercise.type === 'cooldown') {
            coolDownList.appendChild(card);
        }
    });
}

// Function to populate the modal with exercise selection options for PDF export
const populateExportOptions = () => {
    const pdfExportOptions = document.getElementById('pdf-export-options');
    pdfExportOptions.innerHTML = ''; // Clear previous options
    currentWorkoutExercises.forEach(exercise => { // Use currentWorkoutExercises here
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'mb-4 p-3 border border-gray-200 rounded-lg bg-gray-50';
        // Determine the default selected option for the dropdown based on current display level
        const defaultSelectedLevel = exercise.currentLevelIndex;

        // Display dropdown only if there are multiple levels
        let levelSelectHtml = '';
        if (exercise.levels.length > 1) {
            levelSelectHtml = `
                <select id="select-${exercise.id}" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm">
                    <option value="0" ${defaultSelectedLevel === 0 ? 'selected' : ''}>Foundation</option>
                    <option value="1" ${defaultSelectedLevel === 1 ? 'selected' : ''}>Main</option>
                    <option value="2" ${defaultSelectedLevel === 2 ? 'selected' : ''}>Progressive</option>
                </select>
            `;
        } else {
            // If only one level, show it as plain text and hide the select
            levelSelectHtml = `<p class="text-sm text-gray-500">Level: ${exercise.levels[0].levelName}</p>`;
        }


        exerciseDiv.innerHTML = `
            <h4 class="font-medium text-gray-700 mb-2">${exercise.name}</h4>
            ${levelSelectHtml}
        `;
        pdfExportOptions.appendChild(exerciseDiv);
    });
};

// Function to populate the Add Existing Exercise Modal
const populateAddExistingExerciseModal = (sectionType) => {
    const availableExercisesSelect = document.getElementById('availableExercisesSelect');
    availableExercisesSelect.innerHTML = '<option value="">-- Select an exercise --</option>'; // Default option

    // Filter master exercises by section type and exclude those already in current workout
    const exercisesInCurrentSection = currentWorkoutExercises.filter(ex => ex.type === sectionType).map(ex => ex.id);
    const availableExercises = allMasterExercises.filter(masterEx => 
        masterEx.type === sectionType && !exercisesInCurrentSection.includes(masterEx.id)
    );

    if (availableExercises.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No more exercises available for this section.';
        option.disabled = true;
        availableExercisesSelect.appendChild(option);
        document.getElementById('confirmAddExistingExerciseBtn').disabled = true;
    } else {
        availableExercises.forEach(exercise => {
            const option = document.createElement('option');
            option.value = exercise.id;
            option.textContent = exercise.name;
            availableExercisesSelect.appendChild(option);
        });
        document.getElementById('confirmAddExistingExerciseBtn').disabled = false;
    }
};


// Main DOM Content Loaded Logic
document.addEventListener('DOMContentLoaded', async () => {
    initializeWorkoutExercises(); // Initialize exercises on page load
    renderExercises(); // Initial render of exercises

    // --- PDF Export Modal Event Listeners ---
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const exportPdfModal = document.getElementById('exportPdfModal');
    // Corrected: Use 'closeModalBtn' as defined in index.html
    const closeModalBtn = document.getElementById('closeModalBtn'); 
    const cancelPdfExportBtn = document.getElementById('cancelPdfExportBtn');
    const generatePdfBtn = document.getElementById('generatePdfBtn');
    const overallNotes = document.getElementById('overallNotes');

    exportPdfBtn.addEventListener('click', () => {
        populateExportOptions();
        exportPdfModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
    });

    cancelPdfExportBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
    });

    generatePdfBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
        
        const pdfContentDiv = document.getElementById('pdfContent');
        pdfContentDiv.innerHTML = `
            <h1>Pilates Workout Template</h1>
            <p style="text-align: center; margin-bottom: 20px;">Customized Workout Plan - Generated on ${new Date().toLocaleDateString()}</p>
            
            <h2>Equipment Needed</h2>
            <ul>
                <li>Yoga Mat (Required)</li>
                <li>Small hand weights (optional)</li>
                <li>Resistance band (optional)</li>
                <li>Pilates ring (optional)</li>
                <li>Small ball (optional)</li>
            </ul>

            <h2>Your Workout Routine</h2>
            <p style="margin-bottom: 15px;">This routine is designed for joint-friendly core strength, knee stability, and hip/glute strengthening.</p>
        `;

        const sections = [
            { id: 'warmup', title: 'Warm-up (5-10 minutes)', type: 'warmup' },
            { id: 'core', title: 'Main Workout - Core & Abs', type: 'core' },
            { id: 'full-body', title: 'Main Workout - Full Body & Strengthening (Hips, Glutes, Knees)', type: 'full-body' },
            { id: 'cooldown', title: 'Cool-down (5-10 minutes)', type: 'cooldown' }
        ];

        sections.forEach(section => {
            let sectionHtml = `<h3>${section.title}</h3>`;
            const sectionExercises = currentWorkoutExercises.filter(e => e.type === section.type); // Use currentWorkoutExercises

            sectionExercises.forEach(exercise => {
                const selectElement = document.getElementById(`select-${exercise.id}`);
                // If there's a select element, use its value; otherwise, default to the exercise's currentLevelIndex (e.g., for single-level exercises)
                const selectedLevelIndex = selectElement ? parseInt(selectElement.value) : (exercise.currentLevelIndex || 0); 
                const levelData = exercise.levels[selectedLevelIndex];
                
                const individualExerciseNotes = exercise.notes ? 
                    `<p style="margin-top: 5px; font-style: italic;">Notes: ${exercise.notes}</p>` : '';

                sectionHtml += `
                    <div class="pdf-exercise-card">
                        <h4>${exercise.name} (${levelData.levelName})</h4>
                        <p style="margin-bottom: 5px;">${levelData.description}</p>
                        <p class="detail-line"><span class="detail-heading">Primary ROM:</span> ${levelData.primaryROM}</p>
                        <p class="detail-line"><span class="detail-heading">Pelvic Position:</span> ${levelData.pelvicPosition}</p>
                        <p class="detail-line"><span class="detail-heading">Spine Action (C/T/L):</span> ${levelData.spineAction}</p>
                        <p style="margin-top: 10px; font-style: italic; color: #888;">Image Example: ${levelData.imagePlaceholder}</p>
                        ${individualExerciseNotes}
                    </div>
                `;
            });
            pdfContentDiv.innerHTML += sectionHtml;
        });

        pdfContentDiv.innerHTML += `
            <div class="pdf-notes">
                <h2>Notes & Reflections</h2>
                <textarea>${overallNotes.value}</textarea>
            </div>
        `;

        html2pdf(pdfContentDiv, {
            margin: 0.5,
            filename: 'Pilates_Workout_Plan.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).then(() => {
            pdfContentDiv.innerHTML = ''; // Clear the hidden content div after PDF generation
        });
    });

    // --- Add Existing Exercise Modal Event Listeners and Logic ---
    const addExistingExerciseModal = document.getElementById('addExistingExerciseModal');
    const closeExistingExerciseModalBtn = document.getElementById('closeExistingExerciseModalBtn');
    const cancelAddExistingExerciseBtn = document.getElementById('cancelAddExistingExerciseBtn');
    const confirmAddExistingExerciseBtn = document.getElementById('confirmAddExistingExerciseBtn');
    const addExistingExerciseModalTitleType = document.getElementById('addExistingExerciseModalTitleType');
    const selectedSectionTypeInput = document.getElementById('selectedSectionType'); // Hidden input for type
    const availableExercisesSelect = document.getElementById('availableExercisesSelect');

    document.querySelectorAll('.btn-add-existing-exercise').forEach(button => {
        button.addEventListener('click', (event) => {
            const sectionType = event.target.dataset.sectionType;
            addExistingExerciseModalTitleType.textContent = sectionType.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            selectedSectionTypeInput.value = sectionType; // Set the hidden input with the section type
            populateAddExistingExerciseModal(sectionType); // Populate the dropdown with available exercises
            addExistingExerciseModal.classList.remove('hidden');
        });
    });

    closeExistingExerciseModalBtn.addEventListener('click', () => {
        addExistingExerciseModal.classList.add('hidden');
    });

    cancelAddExistingExerciseBtn.addEventListener('click', () => {
        addExistingExerciseModal.classList.add('hidden');
    });

    confirmAddExistingExerciseBtn.addEventListener('click', () => {
        const selectedExerciseId = availableExercisesSelect.value;
        const sectionType = selectedSectionTypeInput.value;

        if (selectedExerciseId) {
            const exerciseToAdd = allMasterExercises.find(ex => ex.id === selectedExerciseId);
            if (exerciseToAdd) {
                // Deep clone the exercise before adding to currentWorkoutExercises
                const newExerciseInstance = {
                    ...exerciseToAdd,
                    levels: exerciseToAdd.levels.map(level => ({ ...level })),
                    currentLevelIndex: exerciseToAdd.currentLevelIndex || 0,
                    notes: '' // Ensure new exercises have an empty notes property
                };
                currentWorkoutExercises.push(newExerciseInstance);
                renderExercises(); // Re-render the workout routine
            }
        }
        addExistingExerciseModal.classList.add('hidden'); // Close the modal
    });
});
