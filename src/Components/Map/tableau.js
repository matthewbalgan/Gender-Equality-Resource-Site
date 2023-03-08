const {tableau} = window;

export function InitViz() {
    var containerDiv = document.getElementById("map"),
    url = "https://public.tableau.com/shared/KRYDPX5HJ?:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
    return viz
}