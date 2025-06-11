// exercises/childs_pose.js
const childsPose = {
    id: 'childs_pose', name: 'Child\'s Pose', type: 'cooldown', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Kneeling Hip Flexion',
            description: 'Kneel on your mat, sitting back on your heels as comfortable. Keep your torso upright. Focus on the stretch through your hips and gentle compression in your knees. If uncomfortable, place a cushion between heels and hips.',
            primaryROM: 'Spine: Neutral. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Neutral.',
            pelvicPosition: 'Neutral to posterior tilt',
            spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Kneeling Hip Flexion'
        },
        {
            levelName: 'Main: Child\'s Pose',
            description: 'Kneel, sit back on heels, fold torso forward over your thighs, arms extended forward or by your sides, allowing the spine and hips to release. Can place cushion under hips or between calves/thighs if uncomfortable.',
            primaryROM: 'Spine: Gentle flexion. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Flexion (arms forward) or neutral (arms back).',
            pelvicPosition: 'Posterior tilt',
            spineAction: 'Cervical: Relaxed. Thoracic: Flexes gently. Lumbar: Flexes gently.',
            imagePlaceholder: 'Childs Pose Example'
        },
        {
            levelName: 'Progressive: Child\'s Pose with Side Stretch',
            description: 'From Child\'s Pose with arms extended forward, walk your hands to one side, reaching through the outer arm for a side body stretch. Keep hips grounded. Alternate sides. Enhances spinal and lateral body flexibility.',
            primaryROM: 'Spine: Gentle flexion, lateral flexion. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Flexion, abduction.',
            pelvicPosition: 'Posterior tilt, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Flexes, lengthens laterally. Lumbar: Flexes, lengthens laterally.',
            imagePlaceholder: 'Childs Pose Side Stretch'
        }
    ]
};

export default childsPose;
