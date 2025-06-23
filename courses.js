
const courses = [
  {
    title: "Entrenamiento personalizado",
    duration: "1 hora",
    price: "$80.000",
    mode: "Virtual",
    description: "Sesión uno a uno para fortalecer tu conocimiento o introducir nuevos conceptos.",
    image: "images/IMG_3898.JPG"
  },
  {
    title: "La curva de tueste",
    duration: "2 horas",
    price: "$150.000",
    mode: "Virtual",
    description: "Aprende a leer y comprender los cambios en la materia orgánica del grano.",
    image: "images/MI CURVA.JPG"
  }
];

const container = document.getElementById("courses-container");
courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "course";
  div.innerHTML = `
    <img src="\${course.image}" alt="\${course.title}">
    <h2>\${course.title}</h2>
    <p>\${course.description}</p>
    <p><strong>Duración:</strong> \${course.duration}</p>
    <p><strong>Valor:</strong> \${course.price}</p>
    <p><strong>Modalidad:</strong> \${course.mode}</p>
    <a href="https://wa.me/573004705079" target="_blank">
      <button>Inscribirme</button>
    </a>
  `;
  container.appendChild(div);
});
