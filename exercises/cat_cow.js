// exercises/cat_cow.js
const catCow = {
    id: 'cat_cow', name: 'Cat-Cow Stretch', type: 'warmup', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Gentle Spinal Movement',
            description: 'Start on hands and knees (tabletop). Gently let your lower back slightly arch (Cow) and then gently round (Cat), focusing on only the lumbar spine. Keep upper back relatively still.',
            primaryROM: 'Spine: Gentle lumbar flexion/extension. Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Subtle anterior to posterior tilt in lumbar region',
            spineAction: 'Cervical: Neutral. Thoracic: Relatively stable. Lumbar: Gentle movement.',
            imagePlaceholder: 'Gentle Spinal Movement'
        },
        {
            levelName: 'Main: Full Cat-Cow Stretch',
            description: 'On hands and knees, gently arch (Cow) and round (Cat) the entire spine, coordinating with breath. Inhale to arch, exhale to round. Allow your head to follow the natural curve of your spine.',
            primaryROM: 'Spine: Full flexion/extension. Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Anterior tilt in Cow, posterior tilt in Cat',
            spineAction: 'Cervical: Follows spine. Thoracic: Articulates. Lumbar: Articulates, no hyperextension.',
            imagePlaceholder: 'Cat-Cow Stretch Example'
        },
        {
            levelName: 'Progressive: Cat-Cow with Weight Shift',
            description: 'Perform Cat-Cow. In Cat, gently shift your weight back towards your heels for a deeper stretch. In Cow, gently shift weight slightly forward. Maintain spinal articulation.',
            primaryROM: 'Spine: Full flexion/extension with added weight shift. Hips: Stable, slight flexion/extension. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Exaggerated anterior/posterior tilt with movement',
            spineAction: 'Cervical: Follows spine. Thoracic: Articulates with increased range. Lumbar: Articulates with increased range.',
            imagePlaceholder: 'Cat-Cow with Weight Shift'
        }
    ]
};

export default catCow;
