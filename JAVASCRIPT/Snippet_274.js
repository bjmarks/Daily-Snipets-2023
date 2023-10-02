let db = {
    id: 0,
    title: document?.querySelectorAll(".wp-manga-chapter a")[0].href.split("/")[document.querySelectorAll(".wp-manga-chapter a")[0].href.split("/").length - 3],
    baseURL: window.location.href,
    site: `${window.location.protocol}//${window.location.host}`,
    chapter: document.querySelectorAll(".wp-manga-chapter a")[0].href.split("/")[document.querySelectorAll(".wp-manga-chapter a")[0].href.split("/").length - 2].split("-")[1],
    status: "ongoing",
    alternative: ["updating"],
    authors: "updating",
    description: "updating"
}