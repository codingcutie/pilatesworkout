// exercises/hamstring_stretch.js
const hamstringStretch = {
    id: 'hamstring_stretch', name: 'Hamstring Stretch', type: 'cooldown', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Bent Knee Hamstring Stretch',
            description: 'Lie on your back, knees bent, feet flat. Extend one leg towards the ceiling, but keep the knee slightly bent. Gently hold behind the thigh or calf (avoiding knee joint) and feel a stretch. Focus on breath.',
            primaryROM: 'Spine: Neutral. Hips: Flexion. Knees: Gentle flexion. Shoulders: Relaxed.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Bent Knee Hamstring Stretch'
        },
        {
            levelName: 'Main: Hamstring Stretch',
            description: 'Extend one leg towards the ceiling, gently pull leg towards you using a strap or hands behind the thigh (avoiding knee joint), to stretch the hamstrings. Keep opposite leg grounded and knee bent or extended.',
            primaryROM: 'Spine: Neutral. Hips: Flexion. Knees: Extended. Shoulders: Relaxed.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Hamstring Stretch Example'
        },
        {
            levelName: 'Progressive: Hamstring Stretch with Foot Flex/Point',
            description: 'While holding the hamstring stretch, actively flex and point your foot. This adds dynamic stretching to the calf and further engages the hamstring, improving circulation and flexibility.',
            primaryROM: 'Spine: Neutral. Hips: Flexion. Knees: Extended. Shoulders: Relaxed. Ankle: Dorsi/Plantarflexion.',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Hamstring Stretch Foot Flex'
        }
    ]
};

export default hamstringStretch;
