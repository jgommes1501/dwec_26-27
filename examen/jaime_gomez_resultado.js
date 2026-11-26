// Clase NotaAlumno con los atributos privados #
class NotaAlumno {
    #dniAlumno;
    #nota;
    #modulo;

    // Recibimos el DNI y el Módulo de cada Alumno
    constructor(dniAlumno, modulo = "entornoCliente") {
        this.#dniAlumno = dniAlumno;
        this.#nota = 0;

        if (modulo === "entornoCliente" ||
            modulo === "entornoServidor" ||
            modulo === "programacion") {
            this.#modulo = modulo;
        } else {
            this.#modulo = "entornoCliente";
        }
    }

    // Métodos Públicos
    get dniAlumno() {
        return this.#dniAlumno;
    }

    get nota() {
        return this.#nota;
    }

    get modulo() {
        return this.#modulo;
    }

    /*
       Aquí modificamos la nota con el valor introducido, si el valor es positivo,
       la nueva nota no deberá ser superior a 10 y si es negativo,
       no deberá ser inferior a 0.
    */
    modificarNota(valor) {
        this.#nota += valor;

        if (this.#nota > 10) {
            this.#nota = 10;
        }

        if (this.#nota < 0) {
            this.#nota = 0;
        }
    }
}

// Clase Notas con los atributos privados
class Notas {
    #listaNotas;

    constructor() {
        this.#listaNotas = [];
    }

    /* Añadimos la nota del alumno a la lista de notas mediante
       la estructura de control adecuada para comprobar que no exista
       una nota para este alumno y módulo.
       Retorna true si se añadió o false si ya existía.
    */
    agregarNota(notaAlumno) {
        for (const nota of this.#listaNotas) {
            if (nota.dniAlumno === notaAlumno.dniAlumno &&
                nota.modulo === notaAlumno.modulo) {
                return false;
            }
        }

        this.#listaNotas.push(notaAlumno);
        return true;
    }

    // Recorre las notas y retorna un objeto con el recuento total de NotaAlumno
    obtenerResumenPorTipo() {
        let resumen = {entornoCliente: 0, entornoServidor: 0, programacion: 0};
        for (const v of this.#listaNotas) {
            switch (v.modulo) {
                case "entornoCliente":
                    resumen.entornoCliente++;
                    break;
                case "entornoServidor":
                    resumen.entornoServidor++;
                    break;
                case "programacion":
                    resumen.programacion++;
                    break;
            }
        }
        return resumen;
    }

    // Retornamos un array cuya nota sea inferior al valor recibido
    obtenerNotasPorDebajo(notaReferencia) {
        return this.#listaNotas.filter(nota => nota.nota < notaReferencia);
    }
}