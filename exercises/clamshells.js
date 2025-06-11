// exercises/clamshells.js
const clamshells = {
    id: 'clamshells', name: 'Clamshells', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Side-Lying Hip Abduction',
            description: 'Lie on your side, bottom arm supporting your head, knees bent, feet stacked. Keep feet together and top knee bent. Simply lift your top knee a few inches, engaging your outer hip, without opening your feet. Lower with control.',
            primaryROM: 'Spine: Neutral. Hips: Abduction. Knees: Flexed, stable. Shoulders: Stable.',
            pelvicPosition: 'Stacked, neutral',
            spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Side-Lying Hip Abduction'
        },
        {
            levelName: 'Main: Clamshells',
            description: 'Lie on side, knees bent, hips stacked. Keep feet together and open top knee like a clamshell, engaging outer hip and glute. Lower with control. Crucial for hip stability and proper knee tracking. Avoid rocking the torso.',
            primaryROM: 'Spine: Neutral. Hips: External rotation. Knees: Stable (flexed). Shoulders: Stable.',
            pelvicPosition: 'Stacked, neutral, no rolling forward/back',
            spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Clamshells Example'
        },
        {
            levelName: 'Progressive: Clamshells with Resistance Band',
            description: 'Place a resistance band around your knees. Perform Clamshells, resisting the band as you open and close the knee. Increases the challenge to your outer hip and glute muscles for greater strength and stability.',
            primaryROM: 'Spine: Neutral. Hips: External rotation with resistance. Knees: Stable (flexed). Shoulders: Stable.',
            pelvicPosition: 'Stacked, neutral, resists rolling',
            spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
            imagePlaceholder: 'Clamshells with Band'
        }
    ]
};

export default clamshells;
