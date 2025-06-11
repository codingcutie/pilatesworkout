// exercises/supine_spine_twist.js
const supineSpineTwist = {
    id: 'supine_spine_twist', name: 'Spine Twist (Supine)', type: 'cooldown', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Gentle Knee Rolls',
            description: 'Lie on your back, knees bent, feet flat. Keep knees together and gently let them roll a few inches to one side, then back to center. Keep shoulders grounded. Focus on warming up lumbar rotation.',
            primaryROM: 'Spine: Gentle lumbar rotation. Hips: Rotation. Knees: Flexed. Shoulders: Stable.',
            pelvicPosition: 'Rotates with legs',
            spineAction: 'Cervical: Neutral. Thoracic: Stable. Lumbar: Gentle rotation.',
            imagePlaceholder: 'Gentle Knee Rolls'
        },
        {
            levelName: 'Main: Spine Twist (Supine)',
            description: 'Lying on back, arms out to sides at shoulder height. Bring knees to tabletop (or keep feet on floor). Let knees fall to one side, looking opposite direction, for a gentle spinal rotation. Keep shoulders grounded.',
            primaryROM: 'Spine: Rotation. Hips: Rotation. Knees: Flexed. Shoulders: Stable.',
            pelvicPosition: 'Rotates with legs',
            spineAction: 'Cervical: Rotates gently. Thoracic: Rotates. Lumbar: Gentle rotation.',
            imagePlaceholder: 'Supine Spine Twist Example'
        },
        {
            levelName: 'Progressive: Supine Twist with Extended Legs',
            description: 'From tabletop, extend legs straight towards the ceiling. Keep legs together and gently let them fall to one side, only as far as you can keep shoulders grounded. Increases spinal rotation and core challenge.',
            primaryROM: 'Spine: Deeper rotation. Hips: Rotation. Knees: Extended. Shoulders: Stable.',
            pelvicPosition: 'Rotates with legs, greater range',
            spineAction: 'Cervical: Rotates. Thoracic: Deeper rotation. Lumbar: Deeper rotation.',
            imagePlaceholder: 'Supine Twist Extended Legs'
        }
    ]
};

export default supineSpineTwist;
