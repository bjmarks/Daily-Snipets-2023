let theme = () => {
    const themeSelect = document.getElementById("themeSelect");
    const themesStyles = document.getElementById("themesStylesheets");
    function activateTheme(theme) { themesStyles.setAttribute("href", `/themes/${theme}.css`) }
    themeSelect.addEventListener("change", () => { activateTheme(themeSelect.value) });
}