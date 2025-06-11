// exercises/glute_bridge.js
const gluteBridge = {
    id: 'glute_bridge', name: 'Glute Bridge', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Pelvic Tilts (Revisit)',
            description: 'Lie on your back, knees bent, feet flat. Focus on the gentle rocking of your pelvis, imprinting and releasing your lower back. This movement helps warm up the spinal articulation and glute connection needed for bridging.',
            primaryROM: 'Spine: Lumbar flexion/extension. Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Gentle anterior to posterior tilt',
            spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Gentle articulation.',
            imagePlaceholder: 'Pelvic Tilts'
        },
        {
            levelName: 'Main: Glute Bridge',
            description: 'Lie on back, knees bent, feet hip-width apart. Press through heels to lift hips towards the ceiling, squeezing glutes at the top. Articulate down with control, one vertebra at a time. Great for glute strength and knee support.',
            primaryROM: 'Spine: Lumbar/thoracic articulation (extension). Hips: Extension. Knees: Flexion (stable). Shoulders: Grounded.',
            pelvicPosition: 'Neutral to posterior tilt as hips lift, neutral at top.',
            spineAction: 'Cervical: Relaxed. Thoracic: Grounded. Lumbar: Articulating from mat to lift, and back down.',
            imagePlaceholder: 'Glute Bridge Example'
        },
        {
            levelName: 'Progressive: Single Leg Glute Bridge',
            description: 'Perform a Glute Bridge. At the top, lift one foot off the mat, extending the leg if comfortable, maintaining hip level. Lower foot, then lower bridge. Alternate legs each time. Significantly increases glute and hamstring challenge, and hip stability.',
            primaryROM: 'Spine: Stable extension (bridge). Hips: Extension (single leg). Knees: Flexion (stable). Shoulders: Grounded.',
            pelvicPosition: 'Neutral at top, resists rotation',
            spineAction: 'Cervical: Relaxed. Thoracic: Grounded. Lumbar: Stable at top, articulates down.',
            imagePlaceholder: 'Single Leg Glute Bridge'
        }
    ]
};

export default gluteBridge;
