export default class Cl_Articulo {
    constructor(c, cC, pV) {
        this.codigo = c;
        this.costo = cC;
        this.precioVenta = pV;
    }
    
    set codigo(c) { 
        this._codigo = c; 
    }

    set costo(cC) { 
        this._costo = cC; 
    }

    set precioVenta(pV) { 
        this._precioVenta = pV; 
    }
    
    get codigo() { 
        return this._codigo; 
    }

    get costo() { 
        return this._costo; 
    }

    get precioVenta() { 
        return this._precioVenta; 
    }

    ganancia() {
        return this.precioVenta - this.costo;
    }
}