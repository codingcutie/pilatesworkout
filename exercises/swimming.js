// exercises/swimming.js
const swimming = {
    id: 'swimming', name: 'Swimming', type: 'full-body', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Arm & Leg Slides',
            description: 'Lie on your stomach, arms extended overhead, legs long. Gently slide one arm forward a few inches on the mat, then return. Then gently slide one leg back a few inches. Focus on length and stability.',
            primaryROM: 'Spine: Neutral. Hips: Minimal extension. Knees: Stable. Shoulders: Flexion/extension. ',
            pelvicPosition: 'Neutral, stable',
            spineAction: 'Cervical: Neutral. Thoracic: Stable. Lumbar: Stable.',
            imagePlaceholder: 'Arm and Leg Slides'
        },
        {
            levelName: 'Main: Swimming',
            description: 'Lying on stomach, arms and legs extended. Lift opposite arm and leg simultaneously, lengthening through the spine. Focus on controlled movement and engaging the back and glutes, keeping neck long. Avoid lifting too high.',
            primaryROM: 'Spine: Neutral, gentle extension. Hips: Extension. Knees: Extension. Shoulders: Flexion/extension.',
            pelvicPosition: 'Neutral to slight posterior tilt (engaged)',
            spineAction: 'Cervical: Long, neutral. Thoracic: Gentle extension. Lumbar: Stable, no arching.',
            imagePlaceholder: 'Swimming Example'
        },
        {
            levelName: 'Progressive: Swimming with Increased Speed',
            description: 'Perform Swimming with a faster, continuous movement, similar to actual swimming strokes. Maintain controlled core engagement and avoid bouncing or momentum. Increases cardiovascular demand and endurance.',
            primaryROM: 'Spine: Neutral, dynamic extension. Hips: Dynamic extension. Knees: Dynamic extension. Shoulders: Dynamic flexion/extension.',
            pelvicPosition: 'Neutral, engaged, resists rocking',
            spineAction: 'Cervical: Long, neutral. Thoracic: Dynamic extension. Lumbar: Stable, resists arching.',
            imagePlaceholder: 'Dynamic Swimming'
        }
    ]
};

export default swimming;
