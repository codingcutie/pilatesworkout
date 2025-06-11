// exercises/side_plank.js
const sidePlank = {
    id: 'side_plank', name: 'Side Plank (Modified)', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Side Lying with Hip Lift',
            description: 'Lie on your side, bottom arm supporting your head, knees bent, feet stacked. Gently lift top hip a few inches towards the ceiling, engaging your side waist and glute. Lower with control.',
            primaryROM: 'Spine: Neutral. Hips: Minimal lift. Knees: Flexed. Shoulders: Stable (supporting).',
            pelvicPosition: 'Stacked, no tilting forward/back',
            spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Side Lying Hip Lift'
        },
        {
            levelName: 'Main: Side Plank (Modified)',
            description: 'On one forearm, lift hips to create a straight line from head to heels. Can modify with bottom knee bent and resting on the floor for support, keeping hips stacked. Focus on lifting from the side waist.',
            primaryROM: 'Spine: Neutral. Hips: Neutral. Knees: Extended (or flexed if modified). Shoulders: Stable, supporting body weight.',
            pelvicPosition: 'Neutral, stacked, no tilting forward/back',
            spineAction: 'Cervical: Long neck. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Side Plank (Modified)'
        },
        {
            levelName: 'Progressive: Side Plank with Hip Dips',
            description: 'From a stable side plank position (full or modified), gently lower your bottom hip a few inches towards the mat, then lift back up. Focus on controlled movement and engaging the obliques and glutes.',
            primaryROM: 'Spine: Neutral. Hips: Slight flexion/extension. Knees: Extended (or flexed). Shoulders: Stable.',
            pelvicPosition: 'Controlled dip and lift, maintains alignment',
            spineAction: 'Cervical: Long neck. Thoracic: Stable. Lumbar: Stable, controlled.',
            imagePlaceholder: 'Side Plank with Hip Dips'
        }
    ]
};

export default sidePlank;
