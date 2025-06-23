const courses = [
  {
    title: "Entrenamiento personalizado",
    description: "Una hora virtual con Andrés Vasquez para trabajar un tema libre.",
    duration: "1 hora",
    value: "$80.000",
    mode: "Virtual",
    image: "images/IMG_3898.JPG"
  },
  {
    title: "La curva de tueste",
    description: "Aprende a leer la curva de tueste y comprender la transformación.",
    duration: "2 horas",
    value: "$150.000",
    mode: "Virtual",
    image: "images/MI CURVA.JPG"
  }
];

const container = document.getElementById("courses-container");
courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}" />
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <p><strong>Duración:</strong> ${course.duration}</p>
    <p><strong>Valor:</strong> ${course.value}</p>
    <p><strong>Modalidad:</strong> ${course.mode}</p>
    <button onclick="window.open('https://wa.me/573004705079', '_blank')">Inscríbete</button>
  `;
  container.appendChild(card);
});