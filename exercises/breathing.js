// exercises/breathing.js
const breathing = {
    id: 'breathing', name: 'Breathing Practice', type: 'warmup', 
    currentLevelIndex: 1, // Default to Main Exercise
    levels: [
        {
            levelName: 'Foundation: Gentle Breathing',
            description: 'Lie comfortably on your back, knees bent, feet flat. Focus on gentle, natural breaths, observing the subtle rise and fall of your abdomen without force.',
            primaryROM: 'Spine: Neutral. Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Neutral pelvis, relaxed',
            spineAction: 'Cervical: Relaxed. Thoracic: Gentle expansion. Lumbar: Supported by mat, neutral.',
            imagePlaceholder: 'Gentle Breathing Example'
        },
        {
            levelName: 'Main: Diaphragmic Breathing',
            description: 'Lie on your back, knees bent, feet flat. Focus on deep, expansive breaths into the back and sides of the rib cage, allowing the abdomen to rise gently with inhale and fall with exhale.',
            primaryROM: 'Spine: Neutral, gentle mobility. Hips: Flexed. Knees: Flexed. Shoulders: Stable.',
            pelvicPosition: 'Neutral pelvis, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Expansive. Lumbar: Supported, neutral.',
            imagePlaceholder: 'Breathing Practice Example'
        },
        {
            levelName: 'Progressive: Staccato Breath',
            description: 'As you inhale, slowly arc your arms overhead towards the floor behind you, maintaining rib cage expansion. Exhale, return arms to sides. Focus on keeping the rib cage connected and avoiding arching the lower back.',
            primaryROM: 'Spine: Neutral, gentle mobility. Hips: Flexed. Knees: Flexed. Shoulders: Flexion/Extension.',
            pelvicPosition: 'Neutral pelvis, stable',
            spineAction: 'Cervical: Relaxed. Thoracic: Expansive, no lift. Lumbar: Supported, neutral.',
            imagePlaceholder: 'Breathing with Arm Arc'
        }
    ]
};

export default breathing;
