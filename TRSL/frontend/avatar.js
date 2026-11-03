// avatar.js
// Kinyarwanda word -> animation clip name inside twumvane.glb.
// Add a new line here every time you animate a new sign in Blender
// and re-export avatar.glb (clip name must match exactly, case-sensitive).
const SIGN_ANIMATIONS = {
    'ishuri': 'ishuri',
    'deregiteri': 'deregiteri',
    'mwarimu': 'mwarimu.',
    'umunyeshuri': 'umunyeshuri',
    'animateur': 'animateur',
    'animatrice': 'animatrice',
    'contable': 'contable',
    'ikayi': 'ikayi',
    'igitabo': 'igitabo',
    'ikaramu': 'ikaramu',
    'kereyo': 'kereyo',
    'late': 'Late',
    'gome': 'gome',
    'buwate': 'buwate',
    'urupapuro': 'urupapuro',
    'imyenda': 'Imyenda',
    'imyenda yishuri': 'Imyenda yishuri',
    'igikapu': 'igikapu',
    'icyibaho': 'icyibaho',
    'ingwa': 'ingwa',
    'intebe yishuri': "intebe y'ishuri",
    'igitsina': 'igitsina',
    'umucuruzi': 'umucuruzi',
    'abagore': 'abagore',
    'igitambaro': 'igitambaro',
    'kwambara': 'kwambara',
    'umutwe': 'umutwe',
    'isutiye': 'isutiye',
    'inkweto': 'Inkweto',
    'kugira': 'kugira',
    'gushaka': 'gushaka',
    'kurya': 'kurya',
    'kunywa': 'kunywa',
    'inshinga': 'inshinga',
    'interuro': 'interuro',
    'njyewe': 'njyewe',
    'hehe': 'Hehe',
    'gute': 'gute',
    'inde': 'inde',
    'ryari': 'ryari',
    'wowe ugiye hehe': 'wowe ugiye hehe',
    'wowe': 'wowe',
    'umeze ute': 'umeze ute',
    'uzaza': 'uzaza',
    'uzagenda': 'uzagenda',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'babyara bacu': 'babyara bacu',
    'tutibagiwe': 'tutibagiwe',
    'ababyeyi bakuru': 'ababyeyi bakuru',
    'sogokuru': 'sogokuru',
    'nyogokuru': 'nyogokuru',
    'murakoze': 'murakoze',
    'cyane': 'cyane',
    'gukora': 'gukora',
    'ariko': 'ariko',
    'dushimira': 'dushimira',
    'barangije': 'barangije',
    'gukunda': 'gukunda',
    'mfite': 'mfite',
    'menshi': 'menshi',
    'amafaranga': 'amafaranga',
    'igihugu': 'igihugu',
    'abanyarwanda': 'abanyarwanda',
    'urwanda': 'urwanda',
    'm': 'M',
    'n': 'N',
    'p': 'p',
    'shufureri': 'Shufureri',
    'gutekesha': 'Gutekesha',
    'amateke': 'Amateke',
    'imiteja': 'Imiteja',
    'ibitenge': 'Ibitenge',
    'ijipo': 'ijipo',
    'inkweto za shinga': 'Inkweto za shinga',
    'ikariso': 'Ikariso',
    'ishakoshi': 'Isakoshi',
    'kureba': 'kureba',
    'kugenda': 'kugenda',
    'bitandukanye': 'bitandukanye',
    'igare': 'igare',
    'inyamaswa': 'inyamaswa',
    'umuntu': 'umuntu',
    'ibintu': 'ibintu',
    'guhagarika': 'guhagarika',
    'kwihangana': 'kwihangana',
    'abantu': 'abantu',
    'impuhwe': 'impuhwe',
    'indabo': 'indabo',
    'ibikorwa': 'ibikorwa',
    'atandukanye': 'atandukanye',
    'isomo': 'isomo',
    "ry'amarenga": "ry'amarenga",
    'burundi': 'BURUNDI',
    'congo': 'CONGO',
    'uganda': 'uganda',
    'congo-brazzaville': 'CONGO-Brazzaville',
    'kenya': 'kenya',
    'nigeria': 'nigeria',
    'tanzaniya': 'tanzania',
    'tanzania': 'tanzania',
    'libia': 'libia',
    'ethiopia': 'ethiopia',
    'zimbabwe': 'zimbabwe',
    "afurika y'epfo": "afurika y'epfo",
    'hanze': 'hanze',
    'amerika': 'amerika',
    'canada': 'canada',
    'brazil / burezili': 'brazil / burezili',
    'brazil': 'brazil / burezili',
    'burezili': 'brazil / burezili',
    'ubushinwa': 'ubushinwa',
    'inka': 'inka',
    'ihene': 'ihene',
    'ingurube': 'ingurube',
    'imbwa': 'imbwa',
    'ipusi / ihuku': 'ipusi',
    'ipusi': 'ipusi',
    'ihuku': 'ipusi',
    'inkoko': 'inkoko',
    'inkende': 'inkende',
    'isake': 'isake',
    'intama': 'intama',
    'urukwavu': 'urukwavu',
    'ifarasi': 'ifarasi',
    'amafi': 'amafi',
    'isambaza': 'isambaza',
    'inzoka': 'inzoka',
    'igikeri': 'igikeri',
    'akanyamasyo': 'akanyamasyo',
    'intare 2': 'intare',
    'intare': 'intare',
    'inzovu': 'inzovu',
    'ingagi': 'ingagi',
    'isatura': 'isatura',
    'impala': 'impala',
    'ingwe': 'ingwe',
    'agasumbashyamba': 'agasumbashyamba',
    'inyamanswa': 'inyamaswa',
    'warage': 'warage',
    'urwarwa': 'urwarwa',
    'ibiribwa': 'ibiribwa',
    'umuceri': 'umuceri',
    'inyama': 'inyama',
    'ibirayi': 'ibirayi',
    'ibijumba': 'ibijumba',
    'ifiriti': 'ifiriti',
    'imyumbati': 'imyumbati',
    'amashu': 'amashu',

    // Numbers & Time
    'gutangira': 'gutangira',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    'umunsi': 'umunsi',
    'icyumweru': 'icyumweru',
    'ku wa mbere': 'Ku wa mbere',
    'ku wa kabibi': 'Ku wa kabibi',
    'ku wa gatatu': 'Ku wa gatatu',
    'ku wa kane': 'Ku wa kane',
    'ku wa gatanu': 'Ku wa gatanu',
    'ku wa gatandatu': 'Ku wa gatandatu',
    'ku cyumweru': 'Ku cyumweru',
    'nijoro': 'nijoro',
    'ku manywa': 'Ku manywa',
    'imvura': 'imvura',
    'izuba': 'izuba',

    // Drinks & Food
    'fanta': 'fanta',
    'amazi': 'amazi',
    'icyayi': 'icyayi',
    'igikoma': 'igikoma',
    'amata': 'amata',
    'pirumusi': 'pirumusi',
    'mitsingi': 'mitsingi',
    'shampanye': 'shampanye',

    // Household & Objects
    'ibikoresho': 'ibikoresho',
    'byo mu rugo': 'byo mu rugo',
    'ibikoresho byo mu rugo': 'ibikoresho byo mu rugo',
    'intebe': 'intebe',
    'ameza': 'ameza',
    'igikombe': 'igikombe',
    'icyuma': 'icyuma',
    'urufunguzo': 'urufunguzo',
    "uburoso bw'amenyo": "uburoso bw'amenyo",
    'uburoso bw’amenyo': "uburoso bw'amenyo",
    'uburoso bwamenyo': "uburoso bw'amenyo",
    'uburoso': 'uburoso',
    'isaha': 'isaha',
    'iradiyo / radiyo': 'iradiyo',
    'iradiyo': 'iradiyo',
    'radiyo': 'radiyo',
    'tereviziyo': 'tereviziyo',
    'ijage': 'ijage',
    'idirishya': 'idirishya',
    'umusarani': 'umusarani',
    'igitanda': 'igitanda',
    'ikanya': 'ikanya',
    'ikiyiko': 'ikiyiko',
    'ibase': 'ibase',
    'isahani': 'isahani',
    'telefone': 'telefone',

    // Countries & Locations
    'ubufaransa': 'ubufaransa',
    'australia': 'Australia',
    'korea': 'korea',
    'shiri': 'shiri',
    'pakstani': 'pakstani',
    'pakistan': 'pakstani',

    // Administration & Community
    'visi meya': 'Visi meya',
    'umuyobozi': 'umuyobozi',
    'umudugudu': 'umudugudu',
    'akagari': 'akagari',
    'umupira': 'umupira',
    'umurenge': 'umurenge',
    'perezida': 'perezida',
    'visi perezida': 'Visi perezida',
    'minisitiri wintebe': 'Minisitiri wintebe',
    'minisitiri': 'minisitiri',
    'depite': 'depite',
    'meya': 'meya',

    // Family & People
    'umuryango': 'umuryango',
    'harimo': 'harimo',
    'mu muryango': 'mu muryango',
    'dufite': 'dufite',
    'benshi': 'benshi',
    'urugero': 'urugero',
    'mu bundi buryo': 'mu bundi buryo',
    'tugira': 'tugira',
    'abo twita': 'abo twita',
    'masenge / aunt': 'masenge',
    'masenge': 'masenge',
    'aunt': 'masenge',
    'marume / uncle': 'marume',
    'marume': 'marume',
    'uncle': 'marume',
    'abana': 'Abana',
    'umwana': 'umwana',
    'hamwe': 'hamwe',
    'abakobwa': 'abakobwa',
    'tubikora': 'Tubikora ',
    'ufata': 'ufata',
    'umuhungu': 'umuhungu',
    'tukajyira': 'Tukajyira',
    'umukobwa': 'umukobwa',
    'igitsina gabo': 'Igitsina gabo',
    'igitsina gore': 'Igitsina gore',

    // Clothing & Accessories
    'ingofero': 'ingofero',
    'ingofero yabasaza': 'Ingofero yabasaza',
    'amarineti': 'amarineti',
    'amarinete': 'Amarinete',
    'agapfuka munwa': 'Agapfuka munwa',
    'ishati': 'ishati',
    'isengeri': 'isengeri',
    'ikoti': 'ikoti',
    'umukandara': 'umukandara ',
    'ipantaro': 'ipantaro',
    'inkweto za congo': 'Inkweto za congo',
    'inkweto zo kogeramo': 'Inkweto zo kogeramo',
    'karavati': 'karavati',
    'imyambaro': 'Imyambaro',

    // Conversational & Greetings
    'karibu': 'karibu',
    'ushobora': 'ushobora',
    'neza': 'neza',
    'wambaye': 'wambaye',
    'muraho': 'Muraho neza',
    'muraho neza': 'Muraho neza',
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'o': 'O',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z'
};

const AvatarPlayer = (function () {
    let scene, camera, renderer, mixer, canvas, clock;
    let currentAction = null;
    let onFinishedCallback = null;
    let ready = false;
    let pendingWord = null;
    let gltfAnimations = [];
    let playbackSpeed = 1;
    let avatarRoot = null;
    const armRests = [];
    const DOWN = new THREE.Vector3(0, -1, 0);

    function captureRestPose() {
        armRests.length = 0;
        if (!avatarRoot) return;
        ['LeftArm', 'RightArm'].forEach((name) => {
            const bone = avatarRoot.getObjectByName(name);
            if (!bone) return;
            const child = bone.children.find(c => /ForeArm/i.test(c.name || '')) || bone.children[0];
            if (!child) return;
            armRests.push({
                bone,
                offset: child.position.clone(),
                local: bone.quaternion.clone()
            });
        });
    }

    function applyRestPose() {
        if (!avatarRoot || !armRests.length) return;
        avatarRoot.updateMatrixWorld(true);
        const parentWorld = new THREE.Quaternion();
        const boneWorld = new THREE.Quaternion();
        const dir = new THREE.Vector3();
        const delta = new THREE.Quaternion();
        armRests.forEach((arm) => {
            arm.bone.quaternion.copy(arm.local);
            arm.bone.updateMatrixWorld(true);
            arm.bone.getWorldQuaternion(boneWorld);
            dir.copy(arm.offset).applyQuaternion(boneWorld).normalize();
            delta.setFromUnitVectors(dir, DOWN);
            arm.bone.parent.getWorldQuaternion(parentWorld);
            const newLocal = parentWorld.clone().invert()
                .multiply(delta)
                .multiply(parentWorld)
                .multiply(arm.local);
            arm.bone.quaternion.copy(newLocal);
            arm.bone.updateMatrixWorld(true);
        });
    }

    function normalize(word) {
        return (word || '').trim().toLowerCase().replace(/[’‘`]/g, "'");
    }

    function getClipName(word) {
        const norm = normalize(word);
        if (SIGN_ANIMATIONS[norm]) return SIGN_ANIMATIONS[norm];
        const clean = norm.replace(/[.']/g, '');
        if (SIGN_ANIMATIONS[clean]) return SIGN_ANIMATIONS[clean];
        return null;
    }

    function has(word) {
        return !!getClipName(word);
    }

    function init(canvasEl, modelUrl, callbacks = {}) {
        canvas = canvasEl;
        clock = new THREE.Clock();

        scene = new THREE.Scene();

        const initialWidth = canvas.clientWidth || canvas.parentElement?.clientWidth || 300;
        const initialHeight = canvas.clientHeight || canvas.parentElement?.clientHeight || 200;

        camera = new THREE.PerspectiveCamera(
            35,
            initialWidth / (initialHeight || 1),
            0.1,
            100
        );
        camera.position.set(0, 1.4, 1.8);
        camera.lookAt(0, 1.28, 0);

        try {
            renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
                powerPreference: 'default',
                failIfMajorPerformanceCaveat: false
            });
        } catch (e1) {
            console.warn('Primary WebGLRenderer creation failed, retrying basic fallback:', e1);
            try {
                renderer = new THREE.WebGLRenderer({
                    canvas,
                    alpha: true,
                    antialias: false,
                    failIfMajorPerformanceCaveat: false
                });
            } catch (e2) {
                console.error('WebGLRenderer initialization failed:', e2);
                if (callbacks.onError) {
                    callbacks.onError(new Error('WebGL is not enabled. In Edge/browser settings, enable "Use graphics acceleration when available" (edge://settings/system).'));
                }
                return;
            }
        }

        if (THREE.sRGBEncoding) {
            renderer.outputEncoding = THREE.sRGBEncoding;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(initialWidth, initialHeight, false);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.3));
        const dir = new THREE.DirectionalLight(0xffffff, 0.9);
        dir.position.set(1, 2, 2);
        scene.add(dir);

        const loader = new THREE.GLTFLoader();
        if (typeof MeshoptDecoder !== 'undefined') {
            loader.setMeshoptDecoder(MeshoptDecoder);
        }

        const loadWithFallback = (url, isRetry = false) => {
            loader.load(
                url,
                (gltf) => {
                    avatarRoot = gltf.scene;
                    scene.add(gltf.scene);
                    gltfAnimations = gltf.animations || [];
                    mixer = new THREE.AnimationMixer(gltf.scene);
                    mixer.addEventListener('finished', () => {
                        const finishedAction = currentAction;
                        if (onFinishedCallback) onFinishedCallback();
                        if (currentAction === finishedAction && finishedAction) {
                            finishedAction.stop();
                            currentAction = null;
                            applyRestPose();
                        }
                    });
                    ready = true;

                    captureRestPose();
                    applyRestPose();

                    // Adjust sizing once model is mounted
                    onResize();

                    if (callbacks.onLoad) callbacks.onLoad(gltf);

                    if (pendingWord) {
                        const w = pendingWord;
                        pendingWord = null;
                        playWord(w, onFinishedCallback);
                    }
                },
                (xhr) => {
                    if (callbacks.onProgress) {
                        const percent = xhr.total > 0 ? Math.round((xhr.loaded / xhr.total) * 100) : 0;
                        callbacks.onProgress(percent, xhr.loaded, xhr.total);
                    }
                },
                (err) => {
                    console.warn(`Failed loading model from ${url}:`, err);
                    if (!isRetry && url !== '/trsl/models/twumvane.glb') {
                        console.log('Retrying model load with /trsl/models/twumvane.glb...');
                        loadWithFallback('/trsl/models/twumvane.glb', true);
                    } else {
                        console.error('Avatar failed to load completely:', err);
                        if (callbacks.onError) callbacks.onError(new Error('Could not download 3D avatar model (network error or blocked).'));
                    }
                }
            );
        };

        loadWithFallback(modelUrl);

        window.addEventListener('resize', onResize);
        window.addEventListener('load', onResize);

        if (window.ResizeObserver) {
            const ro = new ResizeObserver(() => onResize());
            ro.observe(canvas);
            if (canvas.parentElement) ro.observe(canvas.parentElement);
        }

        // Trigger onResize at frame intervals to ensure parent CSS flexbox/grid layout is rendered
        requestAnimationFrame(onResize);
        setTimeout(onResize, 100);
        setTimeout(onResize, 500);

        animate();
    }

    function onResize() {
        if (!renderer || !canvas || !camera) return;
        const width = canvas.clientWidth || canvas.parentElement?.clientWidth || 0;
        const height = canvas.clientHeight || canvas.parentElement?.clientHeight || 0;
        if (width === 0 || height === 0) return;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock ? clock.getDelta() : 0.016;
        if (mixer) mixer.update(delta);
        if (renderer && scene && camera) renderer.render(scene, camera);
    }

    // Returns true if this word has an avatar animation and playback started.
    function playWord(word, onFinished) {
        const clipName = getClipName(word);
        if (!clipName) return false;

        onFinishedCallback = onFinished || null;

        if (!ready) {
            pendingWord = word;
            return true; // will play as soon as the model finishes loading
        }

        let clip = THREE.AnimationClip.findByName(gltfAnimations, clipName);
        if (!clip) {
            const target = (clipName || '').trim().toLowerCase();
            const cleanTarget = target.replace(/[.']/g, '');
            clip = gltfAnimations.find(a => {
                const aName = (a.name || '').trim().toLowerCase();
                return aName === target || aName.replace(/[.']/g, '') === cleanTarget;
            });
        }
        if (!clip) {
            console.warn('Animation clip not found in GLB:', clipName);
            return false;
        }

        if (currentAction) currentAction.stop();
        currentAction = mixer.clipAction(clip);
        currentAction.reset();
        currentAction.setLoop(THREE.LoopOnce);
        currentAction.clampWhenFinished = true;
        currentAction.timeScale = playbackSpeed;
        currentAction.play();
        return true;
    }

    // Change how fast the avatar animates (1 = normal speed).
    function setSpeed(speed) {
        playbackSpeed = Math.max(0.1, speed || 1);
        if (currentAction) currentAction.timeScale = playbackSpeed;
    }

    function stop() {
        pendingWord = null;
        if (currentAction) currentAction.stop();
    }

    return { init, has, playWord, stop, setSpeed };
})();
