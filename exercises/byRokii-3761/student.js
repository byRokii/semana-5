// * Ejercicios

// * Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject.
// * Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
// * Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
// * Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template

const studentsInfo = [
    { firstName: "Jhon", lastName: "Flores", puntuaction: [3, 5, 4, 4.5] },
    { firstName: "Luis", lastName: "Pérez", puntuaction: [4.5, 4, 4, 5] },
    { firstName: "Jose", lastName: "Hernandez", puntuaction: [2.5, 3.5, 4, 4] },
];

class Student {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get nameComplete() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    static fromObject(obj) {
        const { firstName, lastName } = obj;
        return new Student(firstName, lastName);
    }
}

async function calculateAverage(students) {
    studentsInfo.forEach((student) => {
        const squaredScores = student.puntuaction.map((puntuaction) =>
            Math.pow(puntuaction, 2)
        );
        const sumSquaredScores = squaredScores.reduce(
            (accum, score) => accum + score,
            0
        );
        const average = sumSquaredScores / student.puntuaction.length;
        console.log(
            `El promedio de ${student.firstName} ${student.lastName} es: ${average}`
        );
    });
}
calculateAverage(studentsInfo);
