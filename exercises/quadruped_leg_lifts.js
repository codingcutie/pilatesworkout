// exercises/quadruped_leg_lifts.js
const quadrupedLegLifts = {
    id: 'quadruped_leg_lifts', name: 'Quadruped Leg Lifts (Donkey Kick & Fire Hydrant)', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Quadruped Hip Extension',
            description: 'On hands and knees, keep core stable. Gently extend one leg straight back, hovering the foot just off the floor, without lifting it high. Focus on lengthening the leg and engaging the glute.',
            primaryROM: 'Spine: Neutral. Hips: Extension. Knees: Extended. Shoulders: Stable.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable, no arching.',
            imagePlaceholder: 'Quadruped Hip Extension'
        },
        {
            levelName: 'Main: Quadruped Leg Lifts (Donkey Kick & Fire Hydrant)',
            description: 'On hands and knees, keep core stable. For Donkey Kick, lift one bent leg straight back, heel to ceiling. For Fire Hydrant, lift bent leg out to the side. Both target glutes and hips with low knee impact. Keep hips stable.',
            primaryROM: 'Spine: Neutral. Hips: Extension (Donkey Kick), Abduction (Fire Hydrant). Knees: Stable (flexed). Shoulders: Stable.',
            pelvicPosition: 'Neutral, no rocking or tilting',
            spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Quadruped Leg Lifts'
        },
        {
            levelName: 'Progressive: Quadruped with Resistance Band',
            description: 'Place a resistance band around your thighs (just above knees) or ankles. Perform Donkey Kicks or Fire Hydrants, resisting the band\'s tension. Increases glute and hip strength.',
            primaryROM: 'Spine: Neutral. Hips: Extension/Abduction with resistance. Knees: Stable (flexed). Shoulders: Stable.',
            pelvicPosition: 'Neutral, resists rocking under resistance',
            spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable, resists movement.',
            imagePlaceholder: 'Quadruped with Band'
        }
    ]
};

export default quadrupedLegLifts;
