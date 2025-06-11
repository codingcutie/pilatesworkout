// exercises/dead_bug.js
const deadBug = {
    id: 'dead_bug', name: 'Dead Bug', type: 'core', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: One Limb Reach',
            description: 'Lie on back, knees bent 90 degrees, arms extended upwards. Slowly reach one arm overhead towards the floor, or tap one heel to the floor, keeping core engaged and lower back stable. Return to start. Alternate sides.',
            primaryROM: 'Spine: Stable. Hips: Minimal flexion/extension. Knees: Minimal flexion/extension. Shoulders: Flexion/extension.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, no arching.',
            imagePlaceholder: 'Dead Bug One Limb'
        },
        {
            levelName: 'Main: Dead Bug',
            description: 'Lie on back, knees bent 90 degrees, arms extended upwards. Slowly lower opposite arm and leg towards the floor, keeping core engaged and lower back stable against the mat. Excellent for core stability without joint strain.',
            primaryROM: 'Spine: Stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/extension.',
            pelvicPosition: 'Neutral (maintaining stable lower back)',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, no arching.',
            imagePlaceholder: 'Dead Bug Example'
        },
        {
            levelName: 'Progressive: Dead Bug with Resistance Band',
            description: 'Perform Dead Bug with a resistance band looped around your feet and held in your hands, adding tension as limbs extend. Or, use light ankle/wrist weights. Increases challenge to core stability.',
            primaryROM: 'Spine: Stable (under resistance). Hips: Flexion/extension (under resistance). Knees: Flexion/extension (under resistance). Shoulders: Flexion/extension (under resistance).',
            pelvicPosition: 'Neutral (maintaining stable lower back under load)',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, resists arching under load.',
            imagePlaceholder: 'Dead Bug with Band'
        }
    ]
};

export default deadBug;
