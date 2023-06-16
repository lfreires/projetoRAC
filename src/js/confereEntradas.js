const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {

    input.addEventListener('input', function() {
        
        this.value = this.value.replace(/[^0-9.-]/g, '');  //Troca valores que não sejam numero de 0 a 9 e caracteres . e -
        this.value = this.value.replace(/(\..*)\./g, '$1'); // Troca valores que estão entre pontos, deixando apenas o valor armazenado (o que está entre parenteses)
        this.value = this.value.replace(/(\-.*)\-/g, '$1'); // Troca valores que estão entre hifens, deixando apenas o valor armazenado (o que está entre parenteses)

        this.value = this.value[0] == '-' ? // Se o primeiro valor for '-'
            this.value[1] == '.' ? this.value[1] = this.value.slice(0, 1) : this.value // O segundo valor é um '.'? Se sim apague o ponto cortando do primeiro valor até o segundo (deixando o segundo de fora) e adicionando um caractere vazio. Se não, deixe o mesmo valor.
        : this.value = this.value[0] == '.' ? '': this.value // Se não a primeira letra é um ponto? Se sim troque por nada

        

    })

})
