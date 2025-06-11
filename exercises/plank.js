// exercises/plank.js
const plank = {
    id: 'plank', name: 'Plank (Modified)', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Kneeling Forearm Plank',
            description: 'Start on hands and knees, then lower to forearms. Extend legs back, keeping knees on the mat. Form a straight line from head to knees, engaging core and glutes. Keep elbows under shoulders.',
            primaryROM: 'Spine: Neutral. Hips: Neutral. Knees: Flexed (supported). Shoulders: Stable.',
            pelvicPosition: 'Neutral, tucked slightly',
            spineAction: 'Cervical: Long neck. Thoracic: Neutral. Lumbar: Neutral, no arching.',
            imagePlaceholder: 'Kneeling Forearm Plank'
        },
        {
            levelName: 'Main: Plank (Modified)',
            description: 'On forearms or hands, hold a straight line from head to heels, engaging core and glutes. Focus on keeping joints soft, not locked. Can modify by dropping to knees for support, maintaining a straight line from shoulders to knees.',
            primaryROM: 'Spine: Neutral. Hips: Neutral. Knees: Extended (or flexed if on knees). Shoulders: Stable, slight protraction.',
            pelvicPosition: 'Neutral, tucked slightly to engage glutes and abs',
            spineAction: 'Cervical: Long neck. Thoracic: Neutral. Lumbar: Neutral, no arching or rounding.',
            imagePlaceholder: 'Plank (Modified)'
        },
        {
            levelName: 'Progressive: Plank with Alternating Leg Tap',
            description: 'Hold a full plank (on hands or forearms). Gently tap one foot out to the side a few inches, then return. Alternate legs. Focus on maintaining core stability and hip stillness throughout the movement.',
            primaryROM: 'Spine: Stable. Hips: Abduction/Adduction. Knees: Extended. Shoulders: Stable.',
            pelvicPosition: 'Neutral, resists rotation',
            spineAction: 'Cervical: Long neck. Thoracic: Stable. Lumbar: Stable, resists rotation.',
            imagePlaceholder: 'Plank with Leg Tap'
        }
    ]
};

export default plank;
