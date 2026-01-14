const projects = [
  {
    title: "Baymax – Design & 3D Printing",
    subtitle: "Team project • CAD, drawings, assembly, and physical prototype (my role: lower arms, elbow joint, DWGs)",
    file: "projects/baymax-design-process.pdf",
    image: "assets/baymax.png",
    tags: ["SolidWorks", "Assemblies", "3D Printing", "Team Project"]
  },
  {
    title: "Octagon House – Architectural Drawing Set",
    subtitle: "Floor plans, foundation, roof, HVAC, electrical, elevations",
    file: "projects/octagon-house-drawings.pdf",
    image: "assets/octagon.png",
    tags: ["AutoCAD", "Architecture", "HVAC", "Electrical"]
  },
  {
    title: "Golf Club – Mechanical Parts & Assembly",
    subtitle: "Dimensioned parts, tolerances, taper geometry, and full assembly",
    file: "golf.html",
    image: "assets/golf.png",
    tags: ["AutoCAD", "Mechanical Drafting", "Manufacturing", "Assemblies"]
  },
  {
    title: "NERF Blaster – Product Design & X-Ray Render",
    subtitle: "Adobe Illustrator • conceptual design • exploded cutaway • technical rendering",
    file: "projects/nerf-xray-cutaway.pdf",
    image: "assets/nerf.png",
    tags: ["Product Design", "Illustrator", "Visualization", "Engineering Graphics"]
  }
];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  children.forEach(c => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}

function render() {
  document.getElementById("year").textContent = new Date().getFullYear();
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  projects.forEach(p => {
    const img = el("img", { src: p.image, class: "thumb" });

    const tagWrap = el("div", { class: "proj-tags" },
      p.tags.map(t => el("span", { class: "tag" }, [t]))
    );

    const card = el("a", {
      class: "project",
      href: p.file,
      target: "_blank",
      rel: "noopener"
    }, [
      img,
      el("div", { class: "proj-title" }, [p.title]),
      el("div", { class: "proj-meta" }, [p.subtitle]),
      tagWrap,
      el("div", { class: "proj-meta" }, ["Open →"])
    ]);

    grid.appendChild(card);
  });
}

render();
