let map = document.getElementById("colombiaMap");
let svg; 

const areas = [
    { map: "amazonasMap", text: "amazonasMapText" },
    { map: "antioquiaMap", text: "antioquiaMapText" },
    { map: "araucaMap", text: "araucaMapText" },
    { map: "atlanticoMap", text: "atlanticoMapText" },
    { map: "bogotaMap", text: "bogotaMapText" },
    { map: "bolivarMap", text: "bolivarMapText" },
    { map: "boyacaMap", text: "boyacaMapText" },
    { map: "caquetaMap", text: "caquetaMapText" },
    { map: "caldasMap", text: "caldasMapText" },
    { map: "casanareMap", text: "casanareMapText" },
    { map: "caucaMap", text: "caucaMapText" },
    { map: "cesarMap", text: "cesarMapText" },
    { map: "chocoMap", text: "chocoMapText" },
    { map: "cordobaMap", text: "cordobaMapText" },
    { map: "cundinamarcaMap", text: "cundinamarcaMapText" },
    { map: "guainiaMap", text: "guainiaMapText" },
    { map: "guaviareMap", text: "guaviareMapText" },
    { map: "huilaMap", text: "huilaMapText" },
    { map: "laGuajiraMap", text: "laGuajiraMapText" },
    { map: "magdalenaMap", text: "magdalenaMapText" },
    { map: "metaMap", text: "metaMapText" },
    { map: "narinoMap", text: "narinoMapText" },
    { map: "norteDeSantanderMap", text: "norteDeSantanderMapText" },
    { map: "putumayoMap", text: "putumayoMapText" },
    { map: "quindioMap", text: "quindioMapText" },
    { map: "risaraldaMap", text: "risaraldaMapText" },
    { map: "sanAndresMap", text: "sanAndresMapText" },
    { map: "santanderMap", text: "santanderMapText" },
    { map: "sucreMap", text: "sucreMapText" },
    { map: "tolimaMap", text: "tolimaMapText" },
    { map: "valleDelCaucaMap", text: "valleDelCaucaMapText" },
    { map: "vaupesMap", text: "vaupesMapText" },
    { map: "vichadaMap", text: "vichadaMapText" }
];

const zone = {}

zone.over = (map, mapText) => {
    map.style.opacity = 0.7;
    mapText.style.visibility = "visible";
}

zone.out = (map, mapText) => {
    map.style.opacity = 1;
    mapText.style.visibility = "hidden";
}

map.addEventListener("load", () => {

    svg = map.contentDocument;
    for (let area of areas) {
        let map = svg.getElementById(area.map);
        let mapText = svg.getElementById(area.text);
        mapText.style.visibility = "hidden";
        map.addEventListener("mouseenter", () => { zone.over(map, mapText) });
        map.addEventListener("mouseout", () => { zone.out(map, mapText) });
        
    }

})