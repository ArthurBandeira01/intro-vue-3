const exampleForm = {
    template: `
        <form action="#" method="post" @submit.prevent="saveData">
            <label>
                Nome:
                <input v-model="name" type="text" name="name" placeholder="Nome" :value="name">
                <div v-if="errors.name">{{ errors.name }}</div>
            </label>
            <label>
                Sexo:
                <select v-model="sexo" name="sexo">
                    <option value="">Escolha</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </label>
            <label>
                Descrição:
                <textarea v-model="description" name="description" placeholder="Descrição"></textarea>
            </label>
            <label>
                <input v-model="agree" type="checkbox" name="agree">
                Concordo
            </label>
            <button type="submit">Enviar</button>
        </form>
    `,

    data() {
        return {
            name: 'Arthur Bandeira',
            sexo: '',
            description: '',
            agree: true,

            errors: {
                name: ''
            }
        }
    },

    methods: {
        saveData () {
            this.reset()
            if (this.name === '') {
                this.errors.name = 'Informe um valor'

                return
            }

            console.log(this.name)
            console.log(this.sexo)
            console.log(this.description)
            console.log(this.agree)
        },

        reset () {
            this.errors = {
                name: ''
            }
        }
    },
}

app.component('example-form', exampleForm)