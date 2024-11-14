class Usuario {


    constructor(usuario,contraseña,nombre,apellido,){

        this.usuario = usuario;
        this.contraseña = contraseña;
        this.nombre  = nombre;
        this.apellido  = apellido;

    }

    getDatos(){


        return this.nombre + " " + this.contraseña + " " + this.apellido + " " ;
    
    }

}