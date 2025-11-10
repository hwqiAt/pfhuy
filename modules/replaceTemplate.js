module.exports = (temp, project) => {
  const techList =
    project.technologies.length > 8
      ? project.technologies
          .slice(0, 8)
          .map((t) => `<li>${t}</li>`)
          .join("") + "<li>...</li>"
      : project.technologies.map((t) => `<li>${t}</li>`).join("");

  let output = temp.replace(/{%PROJECTNAME%}/g, project.projectName);

  output = output.replace(/{%TECHNOLOGIES%}/g, `${techList}`);

  output = output.replace(/{%DESCRIPTION%}/g, project.description);

  project.done
    ? (output = output.replace(
        /{%STATUS%}/g,
        `  <a
    class="card__link"
    href="${project.demoLink}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>DEMO<i class="emoji-right">🤟</i></span></a>`
      ))
    : (output = output.replace(
        /{%STATUS%}/g,
        `  <a
    class="card__link"
    href="#"
    pointer-events: none; >
    <span>In Progress<i class="emoji-right">👨‍💻</i></span></a>`
      ));
  return output;
};
