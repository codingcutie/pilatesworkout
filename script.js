// --- EXERCISE DATA TEMPLATE ---
// You can easily edit, add, or remove exercises here.
// Each exercise object represents a single Pilates movement.
// The 'levels' array within each exercise defines its Foundation, Main, and Progressive variations.
//
// To add a new exercise:
// 1. Create a new object within the 'exercises' array.
// 2. Assign a unique 'id', a 'name', and a 'type' ('warmup', 'core', 'full-body', 'cooldown').
// 3. Define the 'levels' array with at least one level (Foundation, Main, or Progressive).
//    - 'levelName': A descriptive name for the variation (e.g., 'Foundation: Gentle breathing').
//    - 'description': Detailed instructions for this specific variation.
//    - 'primaryROM': Key ranges of motion for Spine, Hips, Knees, Shoulders.
//    - 'pelvicPosition': Ideal pelvic alignment.
//    - 'spineAction': What each part of the spine (Cervical, Thoracic, Lumbar) should be doing.
//    - 'imagePlaceholder': A short description for the image area.
// 4. Set 'currentLevelIndex' to 0 (Foundation), 1 (Main), or 2 (Progressive) to define the default view.
//
// To edit an existing exercise:
// Locate the exercise by its 'id' and modify any of its properties or level details.
//
// To remove an exercise:
// Simply delete its entire object from the 'exercises' array.
// -----------------------------
const exercises = [
    { 
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
                levelName: 'Main: Full Breathing Practice',
                description: 'Lie on your back, knees bent, feet flat. Focus on deep, expansive breaths into the back and sides of the rib cage, allowing the abdomen to rise gently with inhale and fall with exhale.',
                primaryROM: 'Spine: Neutral, gentle mobility. Hips: Flexed. Knees: Flexed. Shoulders: Stable.',
                pelvicPosition: 'Neutral pelvis, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Expansive. Lumbar: Supported, neutral.',
                imagePlaceholder: 'Breathing Practice Example'
            },
            {
                levelName: 'Progressive: Breathing with Arm Arc',
                description: 'As you inhale, slowly arc your arms overhead towards the floor behind you, maintaining rib cage expansion. Exhale, return arms to sides. Focus on keeping the rib cage connected and avoiding arching the lower back.',
                primaryROM: 'Spine: Neutral, gentle mobility. Hips: Flexed. Knees: Flexed. Shoulders: Flexion/Extension.',
                pelvicPosition: 'Neutral pelvis, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Expansive, no lift. Lumbar: Supported, neutral.',
                imagePlaceholder: 'Breathing with Arm Arc'
            }
        ]
    },
    { 
        id: 'pelvic_tilts', name: 'Pelvic Tilts', type: 'warmup', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Subtle Pelvic Engagement',
                description: 'Lie on your back, knees bent, feet flat. Simply bring awareness to your pelvis. As you exhale, imagine gently flattening your lower back into the mat; inhale, release to neutral. Smallest movement possible.',
                primaryROM: 'Spine: Minimal lumbar movement. Hips: Stable. Knees: Stable. Shoulders: Stable.',
                pelvicPosition: 'Subtle anterior to posterior tilt',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Gentle imprint/release.',
                imagePlaceholder: 'Subtle Pelvic Engagement'
            },
            {
                levelName: 'Main: Pelvic Tilts',
                description: 'Gentle rocking of the pelvis back and forth, engaging core to imprint and release the lower back. Think of rolling a marble from your pubic bone to your belly button.',
                primaryROM: 'Spine: Lumbar flexion/extension. Hips: Stable. Knees: Stable. Shoulders: Stable.',
                pelvicPosition: 'Gentle anterior to posterior tilt',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Gentle articulation.',
                imagePlaceholder: 'Pelvic Tilts Example'
            },
            {
                levelName: 'Progressive: Pelvic Tilts with Leg Slide',
                description: 'Perform pelvic tilts. As you imprint, gently slide one heel away from you, keeping it on the mat. As you release to neutral, slide the heel back. Alternate legs. This adds a subtle core challenge.',
                primaryROM: 'Spine: Lumbar flexion/extension. Hips: Gentle extension/flexion. Knees: Gentle extension/flexion. Shoulders: Stable.',
                pelvicPosition: 'Gentle anterior to posterior tilt, maintaining stability',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Gentle articulation with added challenge.',
                imagePlaceholder: 'Pelvic Tilt with Leg Slide'
            }
        ]
    },
    { 
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
    },
    { 
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
    },
    { 
        id: 'arm_circles', name: 'Arm Circles', type: 'warmup', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Shoulder Slides',
                description: 'Lie on your back, knees bent, feet flat, arms by your sides. Gently slide your shoulders up towards your ears and then down towards your hips, keeping arms straight. Focus on scapular movement.',
                primaryROM: 'Spine: Stable. Hips: Stable. Knees: Stable. Shoulders: Scapular elevation/depression.',
                pelvicPosition: 'Neutral',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Shoulder Slides Example'
            },
            {
                levelName: 'Main: Arm Circles',
                description: 'Small circles with arms extended or bent, in both directions, promoting shoulder mobility while keeping the core stable. Can be done lying down or seated comfortably.',
                primaryROM: 'Spine: Stable. Hips: Stable. Knees: Stable (if seated/lying). Shoulders: Circumduction.',
                pelvicPosition: 'Neutral',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Arm Circles Example'
            },
            {
                levelName: 'Progressive: Arm Circles with Light Weights',
                description: 'Perform arm circles while holding small hand weights (0.5-1 lb) or a resistance band. Maintain control and smooth movement. Increases shoulder and arm endurance.',
                primaryROM: 'Spine: Stable. Hips: Stable. Knees: Stable. Shoulders: Circumduction with resistance.',
                pelvicPosition: 'Neutral',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Arm Circles with Weights'
            }
        ]
    },

    { 
        id: 'the_hundred', name: 'The Hundred (Modified)', type: 'core', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Chest Lift with Feet Down',
                description: 'Lie on back, knees bent, feet flat. Gently lift head and shoulders off the mat, engaging abdominal muscles, keeping lower back stable. Arms reach long by sides, pulsing softly. Keep neck relaxed.',
                primaryROM: 'Spine: Upper thoracic flexion (chest lift). Hips: Stable (flexed). Knees: Stable (flexed). Shoulders: Stable, gentle flexion/extension of arms.',
                pelvicPosition: 'Imprinted (posterior tilt) for lower back support',
                spineAction: 'Cervical: Relaxed neck, supported by head lift. Thoracic: Flexed. Lumbar: Imprinted against mat.',
                imagePlaceholder: 'Chest Lift Feet Down'
            },
            {
                levelName: 'Main: The Hundred (Modified)',
                description: 'Lie on back, lift head and shoulders, legs in tabletop position (knees over hips, shins parallel to floor). Pump arms down rhythmically, inhale for 5 counts, exhale for 5 counts. Keep legs higher if any knee discomfort.',
                primaryROM: 'Spine: Upper thoracic flexion (chest lift). Hips: Stable (tabletop). Knees: Stable (tabletop). Shoulders: Stable (arm pumping).',
                pelvicPosition: 'Imprinted (posterior tilt) for lower back support',
                spineAction: 'Cervical: Relaxed neck, supported by head lift. Thoracic: Flexed. Lumbar: Imprinted against mat.',
                imagePlaceholder: 'The Hundred (Modified)'
            },
            {
                levelName: 'Progressive: The Hundred with Legs Extended',
                description: 'Perform The Hundred with legs extended towards the ceiling. Adjust leg height to maintain stable lower back; lower legs only as far as you can without arching your spine. Increases core challenge.',
                primaryROM: 'Spine: Upper thoracic flexion. Hips: Extended (flexed). Knees: Extended. Shoulders: Stable.',
                pelvicPosition: 'Strongly imprinted (posterior tilt)',
                spineAction: 'Cervical: Relaxed. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
                imagePlaceholder: 'The Hundred Legs Extended'
            }
        ]
    },
    { 
        id: 'roll_up', name: 'Roll Up (Modified)', type: 'core', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Half Roll Back',
                description: 'Sit tall with knees bent, feet flat. Arms reach forward. As you exhale, gently scoop your abs and roll halfway back, articulating your lower spine into a "C" curve. Inhale, return to seated tall. Focus on control.',
                primaryROM: 'Spine: Lumbar flexion/extension. Hips: Flexed. Knees: Flexed. Shoulders: Stable (flexed).',
                pelvicPosition: 'Posterior tilt during roll back',
                spineAction: 'Cervical: Neutral. Thoracic: Slight flexion. Lumbar: Flexes, articulating.',
                imagePlaceholder: 'Half Roll Back'
            },
            {
                levelName: 'Main: Roll Up (Modified)',
                description: 'Lie on back, arms overhead. As you exhale, nod head, curl chest, and articulate spine off the mat one vertebra at a time, reaching for toes. Bend knees if needed to protect lower back and focus on smooth articulation.',
                primaryROM: 'Spine: Full articulation/flexion. Hips: Flexion. Knees: Can be flexed or extended. Shoulders: Flexion.',
                pelvicPosition: 'Posterior tilt throughout roll up, then neutral seated',
                spineAction: 'Cervical: Leads movement gently. Thoracic: Flexes. Lumbar: Flexes, avoids flattening too quickly.',
                imagePlaceholder: 'Roll Up (Modified)'
            },
            {
                levelName: 'Progressive: Roll Up with Straight Legs',
                description: 'Perform the Roll Up with legs extended long on the mat. Maintain controlled articulation through the spine both up and down. Use a resistance band around feet for assistance if needed to support the movement.',
                primaryROM: 'Spine: Full articulation/flexion. Hips: Stable flexion. Knees: Extended. Shoulders: Flexion.',
                pelvicPosition: 'Posterior tilt throughout roll up, then neutral seated',
                spineAction: 'Cervical: Leads movement. Thoracic: Flexes. Lumbar: Flexes, smooth articulation.',
                imagePlaceholder: 'Roll Up Straight Legs'
            }
        ]
    },
    { 
        id: 'single_leg_stretch', name: 'Single Leg Stretch (Modified)', type: 'core', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Single Knee Fold',
                description: 'Lie on your back, knees bent, feet flat. Gently float one knee up towards your chest, keeping the other foot on the mat. Lower with control. Focus on core stability, not tilting the pelvis.',
                primaryROM: 'Spine: Stable. Hips: Flexion. Knees: Flexion. Shoulders: Stable.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Single Knee Fold'
            },
            {
                levelName: 'Main: Single Leg Stretch (Modified)',
                description: 'Lying on back, bring one knee to chest, extend other leg to a high diagonal (about 45-60 degrees from floor). Alternate legs with controlled movements, keeping extended leg higher to reduce strain and maintain lower back stability. Keep head down if neck strain.',
                primaryROM: 'Spine: Imprinted/stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Stable.',
                pelvicPosition: 'Imprinted (posterior tilt)',
                spineAction: 'Cervical: Relaxed (head down). Thoracic: Stable. Lumbar: Imprinted against mat.',
                imagePlaceholder: 'Single Leg Stretch (Modified)'
            },
            {
                levelName: 'Progressive: Single Leg Stretch with Chest Lift',
                description: 'Perform Single Leg Stretch with head and shoulders lifted into a chest lift. Focus on maintaining a strong imprint of the lower back as legs extend. Increases abdominal challenge.',
                primaryROM: 'Spine: Upper thoracic flexion (chest lift) & stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Stable.',
                pelvicPosition: 'Strongly imprinted (posterior tilt)',
                spineAction: 'Cervical: Relaxed neck. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
                imagePlaceholder: 'Single Leg Stretch Chest Lift'
            }
        ]
    },
    { 
        id: 'double_leg_stretch', name: 'Double Leg Stretch (Modified)', type: 'core', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Double Knee Fold',
                description: 'Lie on your back, knees bent, feet flat. Gently float one knee to tabletop, then the other. Return one foot down at a time. Focus on maintaining a stable pelvis and lower back as knees lift.',
                primaryROM: 'Spine: Stable. Hips: Flexion. Knees: Flexion. Shoulders: Stable.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Double Knee Fold'
            },
            {
                levelName: 'Main: Double Leg Stretch (Modified)',
                description: 'Lying on back, knees to chest. Extend arms and legs away (legs to a high diagonal, arms overhead), then circle arms to bring knees back to chest. Keep legs higher and range smaller to avoid stressing the lower back or knees. Keep head down if neck strain.',
                primaryROM: 'Spine: Imprinted/stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/adduction.',
                pelvicPosition: 'Imprinted (posterior tilt)',
                spineAction: 'Cervical: Relaxed (head down). Thoracic: Stable. Lumbar: Imprinted against mat.',
                imagePlaceholder: 'Double Leg Stretch (Modified)'
            },
            {
                levelName: 'Progressive: Double Leg Stretch with Chest Lift & Lower Legs',
                description: 'Perform Double Leg Stretch with head and shoulders lifted. Extend legs to a lower angle, only as low as you can maintain lower back imprint. Increases core challenge.',
                primaryROM: 'Spine: Upper thoracic flexion (chest lift) & stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/adduction.',
                pelvicPosition: 'Strongly imprinted (posterior tilt)',
                spineAction: 'Cervical: Relaxed. Thoracic: Flexed. Lumbar: Firmly imprinted against mat.',
                imagePlaceholder: 'Double Leg Stretch Lower Legs'
            }
        ]
    },
    { 
        id: 'dead_bug', name: 'Dead Bug', type: 'core', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: One Limb Reach',
                description: 'Lie on back, knees bent 90 degrees, arms extended upwards. Slowly reach one arm overhead towards the floor, or tap one heel to the floor, keeping core engaged and lower back stable. Return to start. Alternate sides.',
                primaryROM: 'Spine: Stable. Hips: Minimal flexion/extension. Knees: Minimal flexion/extension. Shoulders: Flexion/extension.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, no arching.',
                imagePlaceholder: 'Dead Bug One Limb'
            },
            {
                levelName: 'Main: Dead Bug',
                description: 'Lie on back, knees bent 90 degrees, arms extended upwards. Slowly lower opposite arm and leg towards the floor, keeping core engaged and lower back stable against the mat. Excellent for core stability without joint strain.',
                primaryROM: 'Spine: Stable. Hips: Flexion/extension. Knees: Flexion/extension. Shoulders: Flexion/extension.',
                pelvicPosition: 'Neutral (maintaining stable lower back)',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, no arching.',
                imagePlaceholder: 'Dead Bug Example'
            },
            {
                levelName: 'Progressive: Dead Bug with Resistance Band',
                description: 'Perform Dead Bug with a resistance band looped around your feet and held in your hands, adding tension as limbs extend. Or, use light ankle/wrist weights. Increases challenge to core stability.',
                primaryROM: 'Spine: Stable (under resistance). Hips: Flexion/extension (under resistance). Knees: Flexion/extension (under resistance). Shoulders: Flexion/extension (under resistance).',
                pelvicPosition: 'Neutral (maintaining stable lower back under load)',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable, resists arching under load.',
                imagePlaceholder: 'Dead Bug with Band'
            }
        ]
    },
    { 
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
    },

    { 
        id: 'plank', name: 'Plank (Modified)', type: 'full-body', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Kneeling Forearm Plank',
                description: 'Start on hands and knees, then lower to forearms. Extend legs back, keeping knees on the mat. Form a straight line from head to knees, engaging core and glutes. Keep elbows under shoulders.',
                primaryROM: 'Spine: Neutral. Hips: Neutral. Knees: Flexed (supported). Shoulders: Stable.',
                pelvicPosition: 'Neutral, tucked slightly',
                spineAction: 'Cervical: Long neck. Thoracic: Neutral. Lumbar: Neutral, no arching.',
                imagePlaceholder: 'Kneeling Forearm Plank'
            },
            {
                levelName: 'Main: Plank (Modified)',
                description: 'On forearms or hands, hold a straight line from head to heels, engaging core and glutes. Focus on keeping joints soft, not locked. Can modify by dropping to knees for support, maintaining a straight line from shoulders to knees.',
                primaryROM: 'Spine: Neutral. Hips: Neutral. Knees: Extended (or flexed if on knees). Shoulders: Stable, slight protraction.',
                pelvicPosition: 'Neutral, tucked slightly to engage glutes and abs',
                spineAction: 'Cervical: Long neck. Thoracic: Neutral. Lumbar: Neutral, no arching or rounding.',
                imagePlaceholder: 'Plank (Modified)'
            },
            {
                levelName: 'Progressive: Plank with Alternating Leg Tap',
                description: 'Hold a full plank (on hands or forearms). Gently tap one foot out to the side a few inches, then return. Alternate legs. Focus on maintaining core stability and hip stillness throughout the movement.',
                primaryROM: 'Spine: Stable. Hips: Abduction/Adduction. Knees: Extended. Shoulders: Stable.',
                pelvicPosition: 'Neutral, resists rotation',
                spineAction: 'Cervical: Long neck. Thoracic: Stable. Lumbar: Stable, resists rotation.',
                imagePlaceholder: 'Plank with Leg Tap'
            }
        ]
    },
    { 
        id: 'side_plank', name: 'Side Plank (Modified)', type: 'full-body', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Side Lying with Hip Lift',
                description: 'Lie on your side, knees bent, bottom arm supporting your head. Keep feet stacked. Gently lift top hip a few inches towards the ceiling, engaging your side waist and glute. Lower with control.',
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
    },
    { 
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
    },
    { 
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
    },
    { 
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
    },
    { 
        id: 'quadruped_leg_lifts', name: 'Quadruped Leg Lifts (Donkey Kick & Fire Hydrant)', type: 'full-body', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Quadruped Hip Extension',
                description: 'On hands and knees, keep core stable. Gently extend one leg straight back, hovering the foot just off the floor, without lifting it high. Focus on lengthening the leg and engaging the glute.',
                primaryROM: 'Spine: Neutral. Hips: Extension. Knees: Extended. Shoulders: Stable.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable, no arching.',
                imagePlaceholder: 'Quadruped Hip Extension'
            },
            {
                levelName: 'Main: Quadruped Leg Lifts (Donkey Kick & Fire Hydrant)',
                description: 'On hands and knees, keep core stable. For Donkey Kick, lift one bent leg straight back, heel to ceiling. For Fire Hydrant, lift bent leg out to the side. Both target glutes and hips with low knee impact. Keep hips stable.',
                primaryROM: 'Spine: Neutral. Hips: Extension (Donkey Kick), Abduction (Fire Hydrant). Knees: Stable (flexed). Shoulders: Stable.',
                pelvicPosition: 'Neutral, no rocking or tilting',
                spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Quadruped Leg Lifts'
            },
            {
                levelName: 'Progressive: Quadruped with Resistance Band',
                description: 'Place a resistance band around your thighs (just above knees) or ankles. Perform Donkey Kicks or Fire Hydrants, resisting the band\'s tension. Increases glute and hip strength.',
                primaryROM: 'Spine: Neutral. Hips: Extension/Abduction with resistance. Knees: Stable (flexed). Shoulders: Stable.',
                pelvicPosition: 'Neutral, resists rocking under resistance',
                spineAction: 'Cervical: Long, neutral. Thoracic: Stable. Lumbar: Stable, resists movement.',
                imagePlaceholder: 'Quadruped with Band'
            }
        ]
    },

    { 
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
    },
    { 
        id: 'supine_spine_twist', name: 'Spine Twist (Supine)', type: 'cooldown', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Gentle Knee Rolls',
                description: 'Lie on your back, knees bent, feet flat. Keep knees together and gently let them roll a few inches to one side, then back to center. Keep shoulders grounded. Focus on warming up lumbar rotation.',
                primaryROM: 'Spine: Gentle lumbar rotation. Hips: Rotation. Knees: Flexed. Shoulders: Stable.',
                pelvicPosition: 'Rotates with legs',
                spineAction: 'Cervical: Neutral. Thoracic: Stable. Lumbar: Gentle rotation.',
                imagePlaceholder: 'Gentle Knee Rolls'
            },
            {
                levelName: 'Main: Spine Twist (Supine)',
                description: 'Lying on back, arms out to sides at shoulder height. Bring knees to tabletop (or keep feet on floor). Let knees fall to one side, looking opposite direction, for a gentle spinal rotation. Keep shoulders grounded.',
                primaryROM: 'Spine: Rotation. Hips: Rotation. Knees: Flexed. Shoulders: Stable.',
                pelvicPosition: 'Rotates with legs',
                spineAction: 'Cervical: Rotates gently. Thoracic: Rotates. Lumbar: Gentle rotation.',
                imagePlaceholder: 'Supine Spine Twist Example'
            },
            {
                levelName: 'Progressive: Supine Twist with Extended Legs',
                description: 'From tabletop, extend legs straight towards the ceiling. Keep legs together and gently let them fall to one side, only as far as you can keep shoulders grounded. Increases spinal rotation and core challenge.',
                primaryROM: 'Spine: Deeper rotation. Hips: Rotation. Knees: Extended. Shoulders: Stable.',
                pelvicPosition: 'Rotates with legs, greater range',
                spineAction: 'Cervical: Rotates. Thoracic: Deeper rotation. Lumbar: Deeper rotation.',
                imagePlaceholder: 'Supine Twist Extended Legs'
            }
        ]
    },
    { 
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
    },
    { 
        id: 'figure_four_stretch', name: 'Figure Four Stretch', type: 'cooldown', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Cross Ankle Over Knee',
                description: 'Lie on your back, knees bent, feet flat. Cross one ankle over the opposite knee. Gently allow the top knee to open outwards, feeling a mild stretch in the outer hip. No pulling involved yet.',
                primaryROM: 'Spine: Neutral. Hips: External rotation. Knees: One flexed, one stable. Shoulders: Relaxed.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Cross Ankle Over Knee'
            },
            {
                levelName: 'Main: Figure Four Stretch',
                description: 'Lie on back, cross one ankle over the opposite knee. Gently pull the thigh of the standing leg towards you, to deepen the stretch in the outer hip and glute. Keep lower back stable and shoulders relaxed.',
                primaryROM: 'Spine: Neutral. Hips: External rotation/flexion. Knees: One flexed, one stable. Shoulders: Relaxed.',
                pelvicPosition: 'Neutral, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Figure Four Stretch Example'
            },
            {
                levelName: 'Progressive: Figure Four with Side Rock',
                description: 'While holding the Figure Four stretch, gently rock your pelvis side to side a few inches. This subtle movement can help target different fibers in the outer hip and glute, deepening the release.',
                primaryROM: 'Spine: Neutral. Hips: External rotation/flexion with subtle movement. Knees: One flexed, one stable. Shoulders: Relaxed.',
                pelvicPosition: 'Gentle lateral rock, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Stable. Lumbar: Stable.',
                imagePlaceholder: 'Figure Four with Side Rock'
            }
        ]
    },
    { 
        id: 'childs_pose', name: 'Child\'s Pose', type: 'cooldown', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Kneeling Hip Flexion',
                description: 'Kneel on your mat, sitting back on your heels as comfortable. Keep your torso upright. Focus on the stretch through your hips and gentle compression in your knees. If uncomfortable, place a cushion between heels and hips.',
                primaryROM: 'Spine: Neutral. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Neutral.',
                pelvicPosition: 'Neutral to posterior tilt',
                spineAction: 'Cervical: Neutral. Thoracic: Neutral. Lumbar: Neutral.',
                imagePlaceholder: 'Kneeling Hip Flexion'
            },
            {
                levelName: 'Main: Child\'s Pose',
                description: 'Kneel, sit back on heels, fold torso forward over your thighs, arms extended forward or by your sides, allowing the spine and hips to release. Can place cushion under hips or between calves/thighs if uncomfortable.',
                primaryROM: 'Spine: Gentle flexion. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Flexion (arms forward) or neutral (arms back).',
                pelvicPosition: 'Posterior tilt',
                spineAction: 'Cervical: Relaxed. Thoracic: Flexes gently. Lumbar: Flexes gently.',
                imagePlaceholder: 'Childs Pose Example'
            },
            {
                levelName: 'Progressive: Child\'s Pose with Side Stretch',
                description: 'From Child\'s Pose with arms extended forward, walk your hands to one side, reaching through the outer arm for a side body stretch. Keep hips grounded. Alternate sides. Enhances spinal and lateral body flexibility.',
                primaryROM: 'Spine: Gentle flexion, lateral flexion. Hips: Deep flexion. Knees: Deep flexion. Shoulders: Flexion, abduction.',
                pelvicPosition: 'Posterior tilt, stable',
                spineAction: 'Cervical: Relaxed. Thoracic: Flexes, lengthens laterally. Lumbar: Flexes, lengthens laterally.',
                imagePlaceholder: 'Childs Pose Side Stretch'
            }
        ]
    },
    { 
        id: 'deep_breathing_cooldown', name: 'Deep Breathing', type: 'cooldown', 
        currentLevelIndex: 1, 
        levels: [
            {
                levelName: 'Foundation: Simple Exhalation Focus',
                description: 'Lie comfortably on your back or in a relaxed seated position. Close your eyes. Focus only on your exhalation, making it long and soft. Allow inhalation to happen naturally without effort.',
                primaryROM: 'Spine: Neutral/stable. Hips: Relaxed. Knees: Relaxed. Shoulders: Relaxed.',
                pelvicPosition: 'Neutral, relaxed',
                spineAction: 'Cervical: Relaxed. Thoracic: Gentle expansion. Lumbar: Stable.',
                imagePlaceholder: 'Simple Exhalation Focus'
            },
            {
                levelName: 'Main: Deep Breathing Cooldown',
                description: 'Conclude with a few slow, deep breaths, focusing on relaxation and a body scan, to calm the nervous system. Can be done lying down or seated comfortably. Feel your body release tension with each exhale.',
                primaryROM: 'Spine: Neutral/stable. Hips: Relaxed. Knees: Relaxed. Shoulders: Relaxed.',
                pelvicPosition: 'Neutral, relaxed',
                spineAction: 'Cervical: Relaxed. Thoracic: Gentle expansion. Lumbar: Stable.',
                imagePlaceholder: 'Deep Breathing Example'
            },
            {
                levelName: 'Progressive: Mindful Breath & Body Scan',
                description: 'Continue deep breathing, but now bring awareness to different parts of your body. Systematically scan from head to toe, noticing any sensations and consciously releasing tension with each breath. Enhances mind-body connection.',
                primaryROM: 'Spine: Neutral/stable. Hips: Relaxed. Knees: Relaxed. Shoulders: Relaxed.',
                pelvicPosition: 'Neutral, relaxed',
                spineAction: 'Cervical: Relaxed. Thoracic: Gentle expansion. Lumbar: Stable.',
                imagePlaceholder: 'Mindful Breath & Body Scan'
            }
        ]
    }
];

function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = 'card p-4 flex flex-col relative';
    card.setAttribute('data-exercise-id', exercise.id);

    const renderLevel = (levelData) => {
        return `
            <div class="exercise-placeholder h-32 w-full mb-4 rounded-lg">Image Example: ${levelData.imagePlaceholder}</div>
            <h4 class="font-semibold text-lg text-gray-800 mb-2">${exercise.name} <span class="text-gray-500 text-sm">(${levelData.levelName})</span></h4>
            <p class="text-sm text-gray-600 mb-2 flex-grow">${levelData.description}</p>
            
            <div class="text-xs text-gray-500 mb-4 space-y-1">
                <p><span class="detail-heading">Primary ROM:</span> ${levelData.primaryROM}</p>
                <p><span class="detail-heading">Pelvic Position:</span> ${levelData.pelvicPosition}</p>
                <p><span class="detail-heading">Spine Action (C/T/L):</span> ${levelData.spineAction}</p>
            </div>
        `;
    };

    const updateCardContent = (cardElement, exerciseData) => {
        const currentLevel = exerciseData.levels[exerciseData.currentLevelIndex];
        const contentDiv = cardElement.querySelector('.card-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = renderLevel(currentLevel);
        }

        const prevBtn = cardElement.querySelector('.carousel-prev-btn');
        const nextBtn = cardElement.querySelector('.carousel-next-btn');

        if (prevBtn) prevBtn.disabled = exerciseData.currentLevelIndex === 0;
        if (nextBtn) nextBtn.disabled = exerciseData.currentLevelIndex === exerciseData.levels.length - 1;
    };

    card.innerHTML = `
        <div class="card-content-area"></div>
        <div class="flex justify-between items-center mt-auto mb-4">
            <button class="carousel-button carousel-prev-btn">&lt; Previous</button>
            <button class="carousel-button carousel-next-btn">Next &gt;</button>
        </div>
        <label class="flex items-center mb-4">
            <input type="checkbox" class="checkbox-custom">
            <span class="ml-2 text-sm">Completed</span>
        </label>
        <textarea class="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" rows="3" placeholder="Your notes for this exercise..."></textarea>
    `;

    updateCardContent(card, exercise); // Initial render

    const prevBtn = card.querySelector('.carousel-prev-btn');
    const nextBtn = card.querySelector('.carousel-next-btn');

    prevBtn.addEventListener('click', () => {
        if (exercise.currentLevelIndex > 0) {
            exercise.currentLevelIndex--;
            updateCardContent(card, exercise);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (exercise.currentLevelIndex < exercise.levels.length - 1) {
            exercise.currentLevelIndex++;
            updateCardContent(card, exercise);
        }
    });

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const warmUpList = document.getElementById('warm-up-list');
    const coreWorkoutList = document.getElementById('core-workout-list');
    const fullBodyWorkoutList = document.getElementById('full-body-workout-list');
    const coolDownList = document.getElementById('cool-down-list');

    exercises.forEach(exercise => {
        const card = createExerciseCard(exercise);
        if (exercise.type === 'warmup') {
            warmUpList.appendChild(card);
        } else if (exercise.type === 'core') {
            coreWorkoutList.appendChild(card);
        } else if (exercise.type === 'full-body') {
            fullBodyWorkoutList.appendChild(card);
        } else if (exercise.type === 'cooldown') {
            coolDownList.appendChild(card);
        }
    });

    const exportPdfBtn = document.getElementById('exportPdfBtn');
    const exportPdfModal = document.getElementById('exportPdfModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelPdfExportBtn = document.getElementById('cancelPdfExportBtn');
    const generatePdfBtn = document.getElementById('generatePdfBtn');
    const pdfExportOptions = document.getElementById('pdf-export-options');
    const overallNotes = document.getElementById('overallNotes');

    // Function to populate the modal with exercise selection options
    const populateExportOptions = () => {
        pdfExportOptions.innerHTML = ''; // Clear previous options
        exercises.forEach(exercise => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'mb-4 p-3 border border-gray-200 rounded-lg bg-gray-50';
            // Determine the default selected option for the dropdown
            // It should be the currentLevelIndex of the exercise displayed on the main page
            const defaultSelectedLevel = exercise.currentLevelIndex;

            exerciseDiv.innerHTML = `
                <h4 class="font-medium text-gray-700 mb-2">${exercise.name}</h4>
                <select id="select-${exercise.id}" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm">
                    <option value="0" ${defaultSelectedLevel === 0 ? 'selected' : ''}>Foundation</option>
                    <option value="1" ${defaultSelectedLevel === 1 ? 'selected' : ''}>Main</option>
                    <option value="2" ${defaultSelectedLevel === 2 ? 'selected' : ''}>Progressive</option>
                </select>
            `;
            pdfExportOptions.appendChild(exerciseDiv);
        });
    };

    exportPdfBtn.addEventListener('click', () => {
        populateExportOptions();
        exportPdfModal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
    });

    cancelPdfExportBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
    });

    generatePdfBtn.addEventListener('click', () => {
        exportPdfModal.classList.add('hidden');
        
        const pdfContentDiv = document.getElementById('pdfContent');
        pdfContentDiv.innerHTML = `
            <h1>RA-Safe Pilates Workout Template</h1>
            <p style="text-align: center; margin-bottom: 20px;">Customized Workout Plan - Generated on ${new Date().toLocaleDateString()}</p>
            
            <h2>Equipment Needed</h2>
            <ul>
                <li>Yoga Mat (Required)</li>
                <li>Small hand weights (optional)</li>
                <li>Resistance band (optional)</li>
                <li>Pilates ring (optional)</li>
                <li>Small ball (optional)</li>
            </ul>

            <h2>Your Workout Routine</h2>
            <p style="margin-bottom: 15px;">This routine is designed for joint-friendly core strength, knee stability, and hip/glute strengthening.</p>
        `;

        const sections = [
            { id: 'warmup', title: 'Warm-up (5-10 minutes)', exercises: exercises.filter(e => e.type === 'warmup') },
            { id: 'core', title: 'Main Workout - Core & Abs', exercises: exercises.filter(e => e.type === 'core') },
            { id: 'full-body', title: 'Main Workout - Full Body & Strengthening (Hips, Glutes, Knees)', exercises: exercises.filter(e => e.type === 'full-body') },
            { id: 'cooldown', title: 'Cool-down (5-10 minutes)', exercises: exercises.filter(e => e.type === 'cooldown') }
        ];

        sections.forEach(section => {
            let sectionHtml = `<h3>${section.title}</h3>`;
            section.exercises.forEach(exercise => {
                const selectedLevelIndex = parseInt(document.getElementById(`select-${exercise.id}`).value);
                const levelData = exercise.levels[selectedLevelIndex];

                sectionHtml += `
                    <div class="pdf-exercise-card">
                        <h4>${exercise.name} (${levelData.levelName})</h4>
                        <p style="margin-bottom: 5px;">${levelData.description}</p>
                        <p class="detail-line"><span class="detail-heading">Primary ROM:</span> ${levelData.primaryROM}</p>
                        <p class="detail-line"><span class="detail-heading">Pelvic Position:</span> ${levelData.pelvicPosition}</p>
                        <p class="detail-line"><span class="detail-heading">Spine Action (C/T/L):</span> ${levelData.spineAction}</p>
                        <p style="margin-top: 10px; font-style: italic; color: #888;">Image Example: ${levelData.imagePlaceholder}</p>
                    </div>
                `;
            });
            pdfContentDiv.innerHTML += sectionHtml;
        });

        pdfContentDiv.innerHTML += `
            <div class="pdf-notes">
                <h2>Notes & Reflections</h2>
                <textarea>${overallNotes.value}</textarea>
            </div>
        `;

        html2pdf(pdfContentDiv, {
            margin: 0.5,
            filename: 'Pilates_Workout_Plan.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).then(() => {
            // Optional: Clear the hidden content div after PDF generation
            pdfContentDiv.innerHTML = '';
        });
    });
});
