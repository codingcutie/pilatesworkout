// exercises/single_leg_stretch.js
const singleLegStretch = {
    id: 'single_leg_stretch', name: 'Single Leg Stretch (Modified)', type: 'core', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Single Knee Fold',
            description: 'Lie on your back, knees bent, feet flat. Gently float one knee up towards your chest, keeping the other foot on the mat. Lower with control. Focus on core stability, not tilting the pelvis.',
            primaryROM: 'Spine: Stable. Hips: Flexion. Knees: Flexion. Shoulders: Stable.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Single Knee Fold'
        },
        {
            levelName: 'Main: Single Leg Stretch (Modified)',
            description: 'Lying on back, bring one knee to chest, extend other leg to a high diagonal (about 45-60 degrees from floor). Alternate legs with controlled movements, keeping extended leg higher to reduce strain and maintain lower back stability. Keep head down if neck strain.',
            primaryROM: 'Spine: Imprinted/stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Stable.',
            pelvicPosition: 'Imprinted (posterior tilt)',
            spineAction: 'Cervical: Relaxed (head down). Thoracic: Stable. Lumbar: Imprinted against mat.',
            imagePlaceholder: 'Single Leg Stretch (Modified)'
        },
        {
            levelName: 'Progressive: Single Leg Stretch with Chest Lift',
            description: 'Perform Single Leg Stretch with head and shoulders lifted into a chest lift. Focus on maintaining a strong imprint of the lower back as legs extend. Increases abdominal challenge.',
            primaryROM: 'Spine: Upper thoracic flexion (chest lift) & stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Stable.',
            pelvicPosition: 'Strongly imprinted (posterior tilt)',
            spineAction: 'Cervical: Relaxed neck. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
            imagePlaceholder: 'Single Leg Stretch Chest Lift'
        }
    ]
};

export default singleLegStretch;
