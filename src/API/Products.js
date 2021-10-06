import Carne from "../API/Imagenes/carne asada.png";
import yogurt from "../API/Imagenes/yogurt.lacteos.png";
import Carnicos from "../API/Imagenes/chorizofinal.png";
import Almuerzo from "../API/Imagenes/galletas.png";
import bebidas from "../API/Imagenes/Bebidas.png";
import Carne1 from "../API/Imagenes/carne a la plancha.jpeg";
import Calentado from "../API/Imagenes/calentado.png";

const PRODUCTS = {
    general: [
        /* {
            id: "gen5",
            name: "Lacteos",
            category: "all",
            img: "./Imagenes/yogurt.lacteos.png",
            styles: {
                backgroundImage: `url('${yogurt}')`,
            },
        }, */
        {
            id: "gen1",
            name: "lacteos",
            category: "lacteos",
            styles: {
                backgroundImage: `url('${yogurt}')`,
            },
        },
        {
            id: "gen2",
            name: "Carnicos",
            category: "desayunos",
            styles: {
                backgroundImage: `url('${Carnicos}')`,
            },
        },
        {
            id: "gen3",
            name: "otros",
            category: "almuerzos",
            styles: {
                backgroundImage: `url('${Almuerzo}')`,
            },
        },
        /*  {
            id: "gen4",
            name: "bebidas",
            category: "bebidas",
            styles: {
                backgroundImage: `url('${bebidas}')`,
            },
        }, */
    ],
    /* all: [
        {
            id: "carne1",
            name: "carne a la plancha",
            description:
                "Posta de carne de cerdo o res con patacon o con papitas",
            cost: 12000,
            styles: {
                backgroundImage: `url('${Carne}')`,
            },
        },
        {
            id: "Carne asada1",
            name: "carne asada",
            description: "Pizza con jamon, queso y piña",
            cost: 12000,
            styles: {
                backgroundImage: `url('${Carne}')`,
            },
        },
        {
            id: "calentado1",
            name: "calentado",
            description: "calentado con huevo",
            cost: 7000,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "calentado21",
            name: "desayuno",
            description: "calentado con huevo",
            cost: 7000,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "menu del dia1",
            name: "menu del dia",
            description: "(divercidad de alimentos)",
            cost: 12000,
            styles: {
                backgroundImage: `url('${Almuerzo}')`,
            },
        },
    ],
 */
    lacteos: [
        {
            id: "lacteos1",
            name: "yogurt",
            description: "Yogurth diferentes sabores 2 LItros",
            cost: 10500,
            styles: {
                backgroundImage: `url('${Carne}')`,
            },
        },
        {
            id: "lacteos2",
            name: "Queso",
            description: "Queso semidescremado 1 libra",
            cost: 9000,
            styles: {
                backgroundImage: `url('${Carne}')`,
            },
        },
        {
            id: "lacteos3",
            name: "kumis ",
            description: "2 litros Kumis ",
            cost: 12000,
            styles: {
                backgroundImage: `url('${Carne1}')`,
            },
        },
    ],

    desayunos: [
        {
            id: "carnicos1",
            name: "Tocineta ahumada.",
            description: "250 gramos",
            cost: 6000,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "carnicos2",
            name: "Jamon ahumado",
            description: " 500 gramos",
            cost: 7000,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "carnicos3",
            name: "Chorizo parrillero mixto",
            description: "10 Unidades",
            cost: 6000,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "carnicos4",
            name: "Chorizo parrillero de cóctel",
            description: "1500 gramos",
            cost: 5500,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
        {
            id: "carnicos5",
            name: "Salchicha",
            description: " 500 gramos",
            cost: 6500,
            styles: {
                backgroundImage: `url('${Calentado}')`,
            },
        },
    ],

    almuerzos: [
        {
            id: "menu del dia",
            name: "menu del dia",
            description: "(divercidad de alimentos)",
            cost: 12000,
            styles: {
                backgroundImage: `url('${Almuerzo}')`,
            },
        },
    ],

    bebidas: [
        {
            id: "jugo naturales",
            name: "jugos",
            description: "jugo naturales con leches o agua",
            cost: 4000,
            styles: {
                backgroundImage: `url('${bebidas}')`,
            },
        },
    ],
};

export { PRODUCTS };
