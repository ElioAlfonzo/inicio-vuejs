// Creamos una instancia de Vue
var app = new Vue({
    el: '#app', //especifica que elemento del DOM va a controlar
    data: {
        lista: [

        ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function() {
            estadoA = false;
            if (this.promedio >= 12.5) {
                estadoA = true;
            }

            if (this.nombre != "" && this.promedio != "") {
                this.lista.push({ nombre: this.nombre, promedio: this.promedio, estado: estadoA })
                this.nombre = "";
                this.promedio = "";

            } else {
                alert("Debe ingresar un nombre y un Promedio");
            }

        }
    }
})