// exercises/knees_to_chest.js
const kneesToChest = {
    id: 'knees_to_chest', name: 'Knees to Chest', type: 'cooldown', 
    currentLevelIndex: 1, 
    levels: [
        {
            levelName: 'Foundation: Single Knee Hug',
            description: 'Lie on your back, knees bent, feet flat. Gently hug one knee towards your chest, keeping the other foot on the mat. Focus on a gentle stretch in the lower back and hip. Release and alternate sides.',
            primaryROM: 'Spine: Neutral, gentle lumbar flexion. Hips: Flexion. Knees: Flexion. Shoulders: Relaxed.',
            pelvicPosition: 'Neutral to slight posterior tilt',
            spineAction: 'Cervical: Relaxed. Thoracic: Supported. Lumbar: Gentle stretch.',
            imagePlaceholder: 'Single Knee Hug'
        },
        {
            levelName: 'Main: Knees to Chest',
            description: 'Gently hug both knees to chest, rocking gently side to side if desired, to release lower back tension. Focus on gentle stretch and relaxation throughout the spine.',
            primaryROM: 'Spine: Gentle flexion/release. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Relaxed.',
            pelvicPosition: 'Neutral to slight posterior tilt',
            spineAction: 'Cervical: Relaxed. Thoracic: Supported. Lumbar: Gentle stretch.',
            imagePlaceholder: 'Knees to Chest Example'
        },
        {
            levelName: 'Progressive: Knees to Chest with Rock & Roll',
            description: 'From knees to chest, gently rock forward and back along the length of your spine, like a gentle massage. Maintain a rounded spine. Only go as far as comfortable for your neck and spine.',
            primaryROM: 'Spine: Full gentle flexion. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Relaxed.',
            pelvicPosition: 'Posterior tilt, maintaining contact',
            spineAction: 'Cervical: Rounded. Thoracic: Rounded. Lumbar: Rounded.',
            imagePlaceholder: 'Knees to Chest Rock & Roll'
        }
    ]
};

export default kneesToChest;
