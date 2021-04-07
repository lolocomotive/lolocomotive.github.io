const gallery = Vue.createApp({
    data() {
        return {
            items: [
                {
                    id: 0,
                    img: "http://unsplash.it/192/108",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
                {
                    id: 0,
                    img: "http://unsplash.it/1920/1080",
                    subtitle: "Unsplash it",
                    description: "A random image that is pretty nice",
                },
            ],
        };
    },
    methods: {
        showImage(img) {
            document.getElementById("big-img").children[0].src = img.img;
            document.getElementById("big-img").children[0].alt = img.subtitle;
            document.getElementById("big-img").children[1].innerHTML =
                img.subtitle;
            document.getElementById("big-img").children[2].innerHTML =
                img.description;
            document.getElementById("bg").classList.toggle("hidden");
        },
    },
});
gallery.mount("#gallery");

function closeImg(event) {
    if (event.target.id === "bg") {
        document.getElementById("bg").classList.toggle("hidden");
    }
}
