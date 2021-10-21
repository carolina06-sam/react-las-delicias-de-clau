import yogurt from "../API/Imagenes/yogurt.lacteos.png";
import Carnicos from "../API/Imagenes/chorizofinal.png";
import galletas from "../API/Imagenes/galletas.png";
import yogurtlogo from "../API/Imagenes/yogurtfinal.png";
import kumis from "../API/Imagenes/kumis.jpg";
import queso from "../API/Imagenes/quesofinal.png";
import tocineta from "../API/Imagenes/tocineta_ahumada.jpeg";
import ahumando from "../API/Imagenes/jamon Ahumado.jpeg";
import coctel from "../API/Imagenes/chorizo_coctel.jpeg";
import parrillero from "../API/Imagenes/chorizoParrillero.jpeg";
import salchilla from "../API/Imagenes/Salchicha.jpeg";
import almohabana from "../API/Imagenes/almojabana.jpeg";
import galletasp from "../API/Imagenes/galletasp.jpeg";
import bocadillo from "../API/Imagenes/bocadillo.jpeg";

const PRODUCTS = {
    general: [
        {
            id: "gen1",
            name: "Lacteos",
            category: "Lacteos",
            styles: {
                backgroundImage: `url('${yogurt}')`,
            },
        },
        {
            id: "gen2",
            name: "Carnicos",
            category: "Carnicos",
            styles: {
                backgroundImage: `url('${Carnicos}')`,
            },
        },
        {
            id: "gen3",
            name: "Otros",
            category: "Otros",
            styles: {
                backgroundImage: `url('${galletas}')`,
            },
        },
    ],

    Lacteos: [
        {
            id: "lacteos1",
            name: "Yogurt",
            description: "Yogurth diferentes sabores 2 LItros",
            cost: 10500,
            img: yogurt,
            styles: {
                backgroundImage: `url('${yogurtlogo}')`,
            },
        },
        {
            id: "lacteos2",
            name: "Queso",
            description: "Queso semidescremado 1 libra",
            cost: 9000,
            styles: {
                backgroundImage: `url('${queso}')`,
            },
        },
        {
            id: "lacteos3",
            name: "kumis ",
            description: "2 litros Kumis ",
            cost: 12000,
            styles: {
                backgroundImage: `url('${kumis}')`,
            },
        },
    ],
    Carnicos: [
        {
            id: "carnicos1",
            name: "Tocineta ahumada.",
            description: "250 gramos",
            cost: 6000,
            styles: {
                backgroundImage: `url('${tocineta}')`,
            },
        },
        {
            id: "carnicos2",
            name: "Jamon ahumado",
            description: " 500 gramos",
            cost: 7000,
            styles: {
                backgroundImage: `url('${ahumando}')`,
            },
        },
        {
            id: "carnicos3",
            name: "Chorizo parrillero mixto",
            description: "10 Unidades",
            cost: 6000,
            styles: {
                backgroundImage: `url('${coctel}')`,
            },
        },
        {
            id: "carnicos4",
            name: "Chorizo parrillero de cóctel",
            description: " 1500 gramos",
            cost: 5500,
            styles: {
                backgroundImage: `url('${parrillero}')`,
            },
        },
        {
            id: "carnicos5",
            name: "Salchicha",
            description: " 500 gramos",
            cost: 6500,
            styles: {
                backgroundImage: `url('${salchilla}')`,
            },
        },
    ],

    Otros: [
        {
            id: "otros1",
            name: "Galletas polvorosas",
            description: "60 unidades",
            cost: 8000,
            styles: {
                backgroundImage: `url('${galletasp}')`,
            },
        },
        {
            id: "otros2",
            name: "Bocadillo de guayaba",
            description: "Una lonja",
            cost: 2000,
            styles: {
                backgroundImage: `url('${bocadillo}')`,
            },
        },
        {
            id: "otros3",
            name: "Almojabanas en paquete",
            description: "10 Unidades",
            cost: 9000,
            styles: {
                backgroundImage: `url('${almohabana}')`,
            },
        },
    ],
};

export { PRODUCTS };
