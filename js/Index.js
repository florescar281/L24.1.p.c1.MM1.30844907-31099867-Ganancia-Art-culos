
/*
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 333 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10) 

*/
import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Bodega from "./Cl_Bodega.js";

const salida = document.getElementById("salida");

let bodega = new Cl_Bodega();

let articulos1 = new Cl_Articulo("888", 10, 15);
let articulos2 = new Cl_Articulo("777", 20, 25);
let articulos3 = new Cl_Articulo("999", 15, 25);
let articulos4 = new Cl_Articulo("333", 25, 35);
let articulos5 = new Cl_Articulo("111", 50, 70);
let articulos6 = new Cl_Articulo("333", 40, 50);
let articulos7 = new Cl_Articulo("444", 80, 100);
let articulos8 = new Cl_Articulo("222", 5, 10);

bodega.procesarArticulos(articulos1);
bodega.procesarArticulos(articulos2);
bodega.procesarArticulos(articulos3);
bodega.procesarArticulos(articulos4);
bodega.procesarArticulos(articulos5);
bodega.procesarArticulos(articulos6);
bodega.procesarArticulos(articulos7);
bodega.procesarArticulos(articulos8);

salida.innerHTML = `
    El articulo con mayor ganancia es ${bodega.devolverArticulo()}<br>
    La ganancia total es ${bodega.devolverGanancia()}$`