const gallery = Vue.createApp({
    data() {
        return {
            items: [
                {
                    id: 0,
                    img: './gallery/organic disco ball.png',
                    subtitle: 'Organic disco ball',
                    description:
                        "Un test fait avec Blender qui était sensé donner quelque chose d'organique au début mais bon au final ca ressemble plus à une boule de disco",
                },
                {
                    id: 1,
                    img: './gallery/P.png',
                    subtitle: 'P',
                    description:
                        "Un truc pour la bannière de la chaine YouTube d'un ami",
                },
                {
                    id: 2,
                    img: './gallery/reverse world.png',
                    subtitle: "Le monde à l'envers",
                    description: "Un projet que j'ai fait pour l'école",
                },
                {
                    id: 3,
                    img: './gallery/sofia.png',
                    subtitle: 'Sofia',
                    description:
                        "Un rendu 3d que j'ai fait comme cadeau de noel à une amie",
                },
                {
                    id: 3.5,
                    img: './gallery/troll.png',
                    subtitle: 'Troll',
                    description:
                        "Un magnifique troll que j'ai fait pour un évènement de secret santa dans un serveur discord blender",
                },
                {
                    id: 4,
                    type: 'video',
                    img: './gallery/sine pc.mp4',
                    subtitle: 'PC abandonné',
                    description:
                        "Alors ca j'ai aucune idée de pourquoi j'ai fait ca, et en plus le rendu final est pas ouffissime. La musique c'est moi qui l'ai faite.",
                },
                {
                    id: 5,
                    type: 'image',
                    img: './gallery/Glass spheres.png',
                    subtitle: 'Sphères de verre',
                    description:
                        "Un truc abstrait parce que j'avais envie de poster sur insta et parce que j'avais vu un tutoriel de ducky3d qui faisait qqch dans le genre et j'ai trouvé ca stylé",
                },
                {
                    id: 6,
                    type: 'video',
                    img: './gallery/stickbug.mp4',
                    subtitle: 'Truc moderne',
                    description:
                        "Alors donc oui mais mon humour est nul <br> Et ce truc m'a pris beacoup trop de temps à faire",
                },
                {
                    id: 7,
                    type: 'image',
                    img: './gallery/pumpkin.png',
                    subtitle: 'Citrouille',
                    description:
                        "Une citrouille pour halloween pour laquelle j'ai galéré come pas possible avec des simulations de feu etc",
                },
                {
                    id: 8,
                    type: 'image',
                    img: './gallery/minecraft.png',
                    subtitle: 'Minecraft',
                    description:
                        'Une base minecraft à moi et un pote sur un realm, sauf avec RTX on',
                },
                {
                    id: 9,
                    type: 'image',
                    img: './gallery/steampunk.png',
                    subtitle: 'Machine steampunk',
                    description:
                        "J'ai passé 7h dessus, c'était une illustration pour un projet à l'école (fallait inventer une machine steampunk)",
                },
                {
                    id: 10,
                    type: 'image',
                    img: './gallery/luxcore.png',
                    subtitle: 'Test avec Luxcore',
                    description:
                        'Un test pour voir comment le moteur de rendu réagit avec des objets chelous (Et aussi une occasion pour tester luxcore)',
                },
                {
                    id: 11,
                    type: 'image',
                    img: './gallery/bubble.png',
                    subtitle: 'Bulle',
                    description:
                        "Un test avec un node group que j'ai fait qui s'appelle \"principled glass BSDF\" et qui permet d'avoir des effets stylés comme ca",
                },
                {
                    id: 12,
                    type: 'image',
                    img: './gallery/principled glass bsdf.png',
                    subtitle: 'Principled glass BSDF',
                    description:
                        "Une demo d'un node group que j'ai fait qui s'appelle \"principled glass BSDF\" et qui permet d'avoir des effets stylés comme ca",
                },
                {
                    id: 13,
                    type: 'image',
                    img: './gallery/Yelo.png',
                    subtitle: 'Yelo',
                    description:
                        "Ca date du temps où je faisais des test pour essayer de faire des bulles dans de l'huile",
                },
                {
                    id: 14,
                    type: 'image',
                    img: './gallery/dino.png',
                    subtitle: 'Dinosaure',
                    description:
                        "Un dinosaure que j'ai fait suite à une requête de qqn sur insta",
                },
                {
                    id: 15,
                    type: 'video',
                    img: './gallery/kouglof.mp4',
                    subtitle: 'Kouglof',
                    description:
                        "Un kouglof (un genre de gateau) que j'ai fait suite à une requête de qqn sur insta",
                },
                {
                    id: 16,
                    type: 'image',
                    img: './gallery/sunset.png',
                    subtitle: 'Coucher de soleil',
                    description:
                        "Un coucher de soleil. Y'a pas grand chose d'autre à dire dessus",
                },
                {
                    id: 17,
                    type: 'video',
                    img: './gallery/cool animation.mp4',
                    subtitle: '"Cool animation"',
                    description:
                        "Une animation quej'ai faite avec un pote pour lui montrer à quel point blender est génial",
                },
                {
                    id: 18,
                    type: 'image',
                    img: './gallery/island/0.png',
                    subtitle: 'Île',
                    description: 'Une modélisation 3d pour un projet de techno',
                },
                {
                    id: 18,
                    type: 'image',
                    img: './gallery/image stylée2.png',
                    subtitle: 'Image stylée',
                    description: 'Haha cubes go brr',
                },
                {
                    id: 19,
                    type: 'video',
                    img:
                        './gallery/cubes go brr, now with volumetrics0001-0085.mp4',
                    subtitle: 'Cubes go brr',
                    description:
                        'Haha cubes go brr<br>Un test avec le particle system de blender',
                },
                {
                    id: 20,
                    type: 'video',
                    img: './gallery/pavril.mp4',
                    subtitle: "Poisson d'avril 2020",
                    description:
                        'Un de mes premiers projets blender, inspiré par le tutoriel de CGMatter',
                },
            ],
        };
    },
    methods: {
        showImage(img) {
            var bigImg = document.getElementById('big-img');

            bigImg.innerHTML = '';

            var imgEl = document.createElement(
                img.type === 'video' ? 'video' : 'img'
            );
            imgEl.src = img.img;
            imgEl.alt = img.subtitle;
            imgEl.controls = true;
            imgEl.autoplay = true;

            var sub = document.createElement('div');
            sub.id = 'big-img-sub';
            sub.innerText = img.subtitle;

            var desc = document.createElement('div');
            desc.id = 'big-img-desc';
            desc.innerHTML = img.description;

            bigImg.append(imgEl);
            bigImg.append(sub);
            bigImg.append(desc);

            document.getElementById('bg').classList.toggle('hidden');
        },
    },
});
gallery.mount('#gallery');

function closeImg(event) {
    if (event.target.id === 'bg') {
        document.getElementById('bg').classList.toggle('hidden');

        document.getElementById('big-img').innerHTML = '';
    }
}
