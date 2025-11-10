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
  output = output.replace(/{%GITHUBLINK%}/g, project.githubLink);
  output = output.replace(/{%DEMOLINK%}/g, project.demoLink);
  output = output.replace(/{%DESCRIPTION%}/g, project.description);
  output = output.replace(/{%ID%}/g, project.id);

  return output;
};
