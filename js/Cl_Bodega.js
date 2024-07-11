export default class Cl_Bodega {
    constructor() {
        this.acumGanancia = 0;
        this.mayor = 0;
        this.auxNombre = " ";
    }
    
    procesarArticulos(a) {
        this.acumGanancia += a.ganancia();
        if (a._precioVenta > this.mayor) {
            this.mayor = a.ganancia();
            this.auxNombre = a.codigo;
        }
    }

    devolverGanancia() {
        return this.acumGanancia;
    }

    devolverArticulo() {
        return this.auxNombre;
    }
}