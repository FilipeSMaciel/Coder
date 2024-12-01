import { useState, useEffect } from 'react';

export default function MonthCourses() {
const [courses, setCourses] = useState([]);
const [hoveredCourseId, setHoveredCourseId] = useState(null);

useEffect(() => {
    fetch('http://localhost:3002/courses')
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching data:', error));
}, []);

const titulo = "text-verde_principal font-jetbrains sm:p-6 text-[1.5rem] sm:text-[2.3vw] font-light";
const cursosItem = "w-[18rem] sm:w-[32vw] sm:h-[20vh] text-wrap capitalize p-2 text-verde_principal border-[0.2rem] border-background font-jetbrains text-center text-[1rem] sm:text-[1.1vw] hover:sm:text-[1vw] font-extralight hover:border-texto_header hover:bg-neutral-600/20 hover:scale-x-105";

function limitarCarac(string, maxCaracteres) {
    return string.length > maxCaracteres ? string.substring(0, maxCaracteres) + "..." : string;
}

return (
    <section className="w-[90vw] sm:w-[34vw] h-full sm:h-full flex flex-col justify-around items-center gap-3 bg-bg_botao-login p-8 drop-shadow-3xl mb-20px">
        <h2 className={titulo}>&lt; Cursos do Mês /&gt;</h2>

        {courses.map(course => (
            <div
                key={course.id}
                className={cursosItem}
                onMouseEnter={() => setHoveredCourseId(course.id)}
                onMouseLeave={() => setHoveredCourseId(null)}
            >
                <p>
                    {hoveredCourseId === course.id ? course.name : limitarCarac(course.name, 16)}
                </p>
            </div>
        ))}
    </section>
);
}