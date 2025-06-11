// exercises/abdominal_curl.js
const abdominalCurl = {
    id: 'abdominal_curl', name: 'Abdominal Curl (Pilates Crunch)', type: 'core', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Head Nods',
            description: 'Lie on back, knees bent, feet flat. Gently nod your head, bringing your chin slightly towards your chest, then release. Focus on neck relaxation and initiating from the cervical spine.',
            primaryROM: 'Spine: Gentle cervical flexion. Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Neutral',
            spineAction: 'Cervical: Gentle flexion. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Head Nod'
        },
        {
            levelName: 'Main: Abdominal Curl (Pilates Crunch)',
            description: 'Lie on back, knees bent, feet flat. Place hands behind head (lightly supporting) or across chest. Gently lift head and shoulders off the mat, focusing on abdominal engagement and keeping the neck relaxed. Lower with control.',
            primaryROM: 'Spine: Upper thoracic flexion. Hips: Stable. Knees: Stable. Shoulders: Stable (hands behind head or across chest).',
            pelvicPosition: 'Neutral or slightly imprinted',
            spineAction: 'Cervical: Gentle flexion (chin to chest). Thoracic: Flexes. Lumbar: Stable, not pressing into mat.',
            imagePlaceholder: 'Abdominal Curl'
        },
        {
            levelName: 'Progressive: Abdominal Curl with Small Ball',
            description: 'Place a small ball under your sacrum (lower back/pelvis). Perform abdominal curls, using the unstable surface to further challenge core stability and activation. Maintain spinal length.',
            primaryROM: 'Spine: Upper thoracic flexion (on unstable surface). Hips: Stable. Knees: Stable. Shoulders: Stable.',
            pelvicPosition: 'Neutral to slightly imprinted on unstable surface',
            spineAction: 'Cervical: Gentle flexion. Thoracic: Flexes. Lumbar: Stable, balancing on ball.',
            imagePlaceholder: 'Abdominal Curl with Ball'
        }
    ]
};

export default abdominalCurl;

