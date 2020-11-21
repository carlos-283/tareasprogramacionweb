const app = Vue.createApp(
    {
        data() {
            return {
                titulo: 'Titulo de mi pagina de jv',
                frutas: ['manzana', 'uva', 'pera'],
                nuevaFruta: '',
                frutas2: [
                    { nombre: 'manzana', cantidad: 10 },
                    { nombre: 'uva', cantidad: 5 },
                    { nombre: 'pera', cantidad: 3 }
                ]
                , total: 0,
            }
        }
        ,
        methods: {
            agregarFruta() {
                this.frutas.push(this.nuevaFruta);
                this.frutas2.push({ nombre: this.nuevaFruta, cantidad: 0 })
                this.nuevaFruta = '';
            }
        }
        ,
        computed: {
            sumarFrutas() {
                this.total = 0;
                for (fruta of this.frutas2) {
                    this.total = this.total + fruta.cantidad
                }
                return this.total;
            }
            ,
            colorTotal() {
                return this.total > 10 ? 'text-success' : 'text-danger'
            }
        }

    }
);