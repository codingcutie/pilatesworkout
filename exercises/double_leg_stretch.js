// exercises/double_leg_stretch.js
const doubleLegStretch = {
    id: 'double_leg_stretch', name: 'Double Leg Stretch (Modified)', type: 'core', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Double Knee Fold',
            description: 'Lie on your back, knees bent, feet flat. Gently float one knee to tabletop, then the other. Return one foot down at a time. Focus on maintaining a stable pelvis and lower back as knees lift.',
            primaryROM: 'Spine: Stable. Hips: Flexion. Knees: Flexion. Shoulders: Stable.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Double Knee Fold'
        },
        {
            levelName: 'Main: Double Leg Stretch (Modified)',
            description: 'Lying on back, knees to chest. Extend arms and legs away (legs to a high diagonal, arms overhead), then circle arms to bring knees back to chest. Keep legs higher and range smaller to avoid stressing the lower back or knees. Keep head down if neck strain.',
            primaryROM: 'Spine: Imprinted/stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/adduction.',
            pelvicPosition: 'Imprinted (posterior tilt)',
            spineAction: 'Cervical: Relaxed (head down). Thoracic: Stable. Lumbar: Imprinted against mat.',
            imagePlaceholder: 'Double Leg Stretch (Modified)'
        },
        {
            levelName: 'Progressive: Double Leg Stretch with Chest Lift & Lower Legs',
            description: 'Perform Double Leg Stretch with head and shoulders lifted. Extend legs to a lower angle, only as low as you can maintain lower back imprint. Increases core challenge.',
            primaryROM: 'Spine: Upper thoracic flexion (chest lift) & stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/adduction.',
            pelvicPosition: 'Strongly imprinted (posterior tilt)',
            spineAction: 'Cervical: Relaxed. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
            imagePlaceholder: 'Double Leg Stretch Lower Legs'
        }
    ]
};

export default doubleLegStretch;
