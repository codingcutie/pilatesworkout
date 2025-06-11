// exercises/spine_curls.js
const spineCurls = {
    id: 'spine_curls', name: 'Spine Curls/Bridging', type: 'warmup', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Hip Lifts',
            description: 'Lie on your back, knees bent, feet flat. Press through your feet and gently lift your hips just a few inches off the mat, keeping your spine relatively flat. Focus on glute activation.',
            primaryROM: 'Spine: Minimal extension. Hips: Partial extension. Knees: Stable flexion. Shoulders: Stable.',
            pelvicPosition: 'Slight posterior tilt',
            spineAction: 'Cervical: Relaxed. Thoracic: Grounded. Lumbar: Minimal lift, maintains alignment.',
            imagePlaceholder: 'Hip Lift Example'
        },
        {
            levelName: 'Main: Spine Curls/Bridging',
            description: 'Lift hips off the mat one vertebra at a time, articulating through your spine until you reach a straight line from shoulders to knees. Then articulate down gently, placing each vertebra back on the mat.',
            primaryROM: 'Spine: Articulation/flexion/extension. Hips: Extension. Knees: Flexion (stable). Shoulders: Stable.',
            pelvicPosition: 'Neutral to posterior tilt as hips lift',
            spineAction: 'Cervical: Relaxed. Thoracic: Grounded, supported. Lumbar: Articulating off/onto mat.',
            imagePlaceholder: 'Spine Curls/Bridging Example'
        },
        {
            levelName: 'Progressive: Bridging with Arm Lift',
            description: 'Perform a spine curl/bridge. At the top of the bridge, slowly lift one arm straight up towards the ceiling, maintaining hip stability. Lower arm, then lower bridge. Alternate arms each bridge. Focus on stability.',
            primaryROM: 'Spine: Articulation/extension (bridge), stable (arm lift). Hips: Extension. Knees: Stable flexion. Shoulders: Flexion/extension.',
            pelvicPosition: 'Neutral at top of bridge, stable during arm lift',
            spineAction: 'Cervical: Relaxed. Thoracic: Grounded, stable. Lumbar: Stable at top, articulates down.',
            imagePlaceholder: 'Bridge with Arm Lift'
        }
    ]
};

export default spineCurls;
