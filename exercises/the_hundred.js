// exercises/the_hundred.js
const theHundred = {
    id: 'the_hundred', name: 'The Hundred (Modified)', type: 'core', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Chest Lift with Feet Down',
            description: 'Lie on back, knees bent, feet flat. Gently lift head and shoulders off the mat, engaging abdominal muscles, keeping lower back stable. Arms reach long by sides, pulsing softly. Keep neck relaxed.',
            primaryROM: 'Spine: Upper thoracic flexion (chest lift). Hips: Stable (flexed). Knees: Stable (flexed). Shoulders: Stable, gentle flexion/extension of arms.',
            pelvicPosition: 'Imprinted (posterior tilt) for lower back support',
            spineAction: 'Cervical: Relaxed neck, supported by head lift. Thoracic: Flexed. Lumbar: Imprinted against mat.',
            imagePlaceholder: 'Chest Lift Feet Down'
        },
        {
            levelName: 'Main: The Hundred (Modified)',
            description: 'Lie on back, lift head and shoulders, legs in tabletop position (knees over hips, shins parallel to floor). Pump arms down rhythmically, inhale for 5 counts, exhale for 5 counts. Keep legs higher if any knee discomfort.',
            primaryROM: 'Spine: Upper thoracic flexion (chest lift). Hips: Stable (tabletop). Knees: Stable (tabletop). Shoulders: Stable (arm pumping).',
            pelvicPosition: 'Imprinted (posterior tilt) for lower back support',
            spineAction: 'Cervical: Relaxed neck, supported by head lift. Thoracic: Flexed. Lumbar: Imprinted against mat.',
            imagePlaceholder: 'The Hundred (Modified)'
        },
        {
            levelName: 'Progressive: The Hundred with Legs Extended',
            description: 'Perform The Hundred with legs extended towards the ceiling. Adjust leg height to maintain stable lower back; lower legs only as far as you can without arching your spine. Increases core challenge.',
            primaryROM: 'Spine: Upper thoracic flexion. Hips: Extended (flexed). Knees: Extended. Shoulders: Stable.',
            pelvicPosition: 'Strongly imprinted (posterior tilt)',
            spineAction: 'Cervical: Relaxed. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
            imagePlaceholder: 'The Hundred Legs Extended'
        }
    ]
};

export default theHundred;
